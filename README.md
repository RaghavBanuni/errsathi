# errsathi
VS Code extension that intercepts Python runtime errors and explains them inline in Tamil, Hindi, and Telugu. Built as a provisional patent prototype — ErrSathi bridges the language barrier for Indian students learning to code. #vscode #python #india
# ErrSathi — Multilingual IDE Error Translator

> "Error Friend" — A VS Code extension that explains Python errors inline in Tamil, Hindi, and Telugu.

## What it does

When a Python error occurs, instead of showing raw English error text, ErrSathi:

- Intercepts the error from the terminal output
- Classifies it into a known category (IndexError, TypeError, NameError, etc.)
- Translates the explanation into your preferred Indian regional language
- Displays the cause and fix suggestion inline, right next to the broken line in VS Code

## Demo

![ErrSathi Demo](demo.png)

## Supported Languages

| Language | ISO Code |
|----------|----------|
| Tamil    | ta       |
| Hindi    | hi       |
| Telugu   | te       |

## Supported Error Types

| Error Type | Example |
|------------|---------|
| SyntaxError | Missing colon or bracket |
| IndentationError | Wrong spacing in code block |
| NameError | Variable used before definition |
| TypeError | Wrong data type operation |
| IndexError | List index out of range |
| KeyError | Dictionary key not found |
| ImportError | Module not found |
| ModuleNotFoundError | Package not installed |
| AttributeError | Method does not exist on object |
| ValueError | Wrong value passed to function |
| ZeroDivisionError | Division by zero |
| FileNotFoundError | File path does not exist |
| RecursionError | Infinite recursive function call |

## How to Run

1. Clone this repository
```
git clone https://github.com/RaghavBanuni/errsathi.git
```
2. Open the folder in VS Code
3. Run `npm install` in the terminal
4. Press **F5** to launch the Extension Development Host
5. Open any `.py` file with a bug in it
6. Press **Ctrl+Shift+P** → select **ErrSathi: Run File & Explain Errors**
7. Wait 5 seconds — the error will be highlighted in red with a Tamil/Hindi/Telugu explanation inline

## How to Change Language

Go to **File → Preferences → Settings** → search `errsathi` → select Tamil, Hindi, or Telugu from the dropdown.

## Project Structure
```
errsathi/
├── extension.js      # Main extension logic — error interception and inline rendering
├── classifier.js     # Error classification engine — 13 Python error categories
├── translator.js     # Multilingual translation module — Tamil, Hindi, Telugu
├── package.json      # Extension manifest — commands and language settings
└── .vscode/
    └── launch.json   # Extension development launcher
```

## Patent Status

Provisional patent filing in progress through VIT Vellore IPR & TT Cell
under the Indian Patents Act, 1970.

**Title:** System and Method for Inline Multilingual Explanation of Runtime
Errors in Integrated Development Environments with Support for Indian
Regional Languages (Tamil, Hindi, and Telugu)

**TRL:** 4 — Technology validated in a lab environment

## Built By

**Raghav Banuni**
B.Tech Computer Science and Engineering
Vellore Institute of Technology, Vellore (2023–2027)

---

*Built with guidance from Claude (Anthropic)*
