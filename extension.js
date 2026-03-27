const vscode = require('vscode');
const { classifyError } = require('./classifier');
const { translate } = require('./translator');
const fs = require('fs');
const os = require('os');
const path = require('path');

let diagnosticDecorations = [];

function activate(context) {
    console.log('ErrSathi is active');

    const disposable = vscode.commands.registerCommand('errsathi.runFile', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('ErrSathi: Please open a Python file first.');
            return;
        }

        const filePath = editor.document.fileName;
        if (!filePath.endsWith('.py')) {
            vscode.window.showErrorMessage('ErrSathi: Only Python files are supported.');
            return;
        }

        await editor.document.save();
        clearDecorations(editor);

        const config = vscode.workspace.getConfiguration('errsathi');
        const language = config.get('language') || 'Tamil';

        const outputFile = path.join(os.tmpdir(), 'errsathi_output.txt');

        // Delete old output file if exists
        try { fs.unlinkSync(outputFile); } catch (e) { }

        const terminal = vscode.window.createTerminal('ErrSathi Runner');
        terminal.show();

        // PowerShell compatible — two separate commands
        terminal.sendText(`python "${filePath}" 2> "${outputFile}"`);

        setTimeout(() => {
            try {
                if (!fs.existsSync(outputFile)) {
                    vscode.window.showInformationMessage('ErrSathi: No errors found!');
                    return;
                }

                const output = fs.readFileSync(outputFile, 'utf8').trim();

                if (output.length === 0) {
                    vscode.window.showInformationMessage('ErrSathi: No errors found!');
                    return;
                }

                const lines = output.split('\n');
                let errorLine = -1;

                for (const line of lines) {
                    const match = line.match(/line (\d+)/i);
                    if (match) {
                        errorLine = parseInt(match[1]) - 1;
                    }
                }

                const classified = classifyError(output);
                const translated = translate(classified, language);

                if (errorLine >= 0 && errorLine < editor.document.lineCount) {
                    showInlineExplanation(editor, errorLine, translated);
                } else {
                    showInlineExplanation(editor, editor.document.lineCount - 1, translated);
                }

                vscode.window.showErrorMessage(
                    `ErrSathi [${translated.type}]: ${translated.cause}`
                );

            } catch (err) {
                console.error('ErrSathi error:', err);
            }
        }, 7000);
    });

    context.subscriptions.push(disposable);
}

function showInlineExplanation(editor, lineNumber, translated) {
    const lineDecoration = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 80, 80, 0.15)',
        isWholeLine: true,
        borderWidth: '0 0 0 3px',
        borderStyle: 'solid',
        borderColor: '#ff5050',
    });

    const explanationDecoration = vscode.window.createTextEditorDecorationType({
        after: {
            contentText: `  ← ${translated.errorLabel}: ${translated.type}  |  ${translated.causeLabel}: ${translated.cause}  |  ${translated.fixLabel}: ${translated.fix}`,
            color: '#ffcc00',
            fontStyle: 'italic',
            margin: '0 0 0 10px',
        },
        isWholeLine: false,
    });

    const line = editor.document.lineAt(lineNumber);
    const range = new vscode.Range(lineNumber, 0, lineNumber, line.text.length);

    editor.setDecorations(lineDecoration, [range]);
    editor.setDecorations(explanationDecoration, [range]);

    diagnosticDecorations.push(lineDecoration, explanationDecoration);
    editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
}

function clearDecorations(editor) {
    diagnosticDecorations.forEach(d => {
        editor.setDecorations(d, []);
        d.dispose();
    });
    diagnosticDecorations = [];
}

function deactivate() {
    diagnosticDecorations.forEach(d => d.dispose());
}

module.exports = { activate, deactivate };