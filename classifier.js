const errorTemplates = {
    SyntaxError: {
        cause: "There is a mistake in how your code is written — Python cannot understand it.",
        fix: "Check the line mentioned for missing colons, brackets, or incorrect indentation."
    },
    IndentationError: {
        cause: "Your code is not indented correctly. Python uses spacing to understand code blocks.",
        fix: "Make sure lines inside if/for/def blocks are indented with 4 spaces."
    },
    NameError: {
        cause: "You are using a variable or function name that has not been defined yet.",
        fix: "Check the spelling of the variable name, or make sure you defined it before using it."
    },
    TypeError: {
        cause: "You are performing an operation on the wrong type of data.",
        fix: "Check that you are not mixing strings and numbers, or calling something that is not a function."
    },
    IndexError: {
        cause: "You are trying to access a position in a list that does not exist.",
        fix: "Check that your index number is within the length of the list."
    },
    KeyError: {
        cause: "You are trying to access a key in a dictionary that does not exist.",
        fix: "Check that the key is spelled correctly and exists in the dictionary."
    },
    ImportError: {
        cause: "Python could not find or load the module you are trying to import.",
        fix: "Check the module name spelling, or install it using: pip install <module-name>"
    },
    ModuleNotFoundError: {
        cause: "The module you are trying to import is not installed.",
        fix: "Run this in the terminal: pip install <module-name>"
    },
    AttributeError: {
        cause: "You are trying to use a method or property that does not exist on this object.",
        fix: "Check the spelling of the attribute, or verify the object type supports it."
    },
    ValueError: {
        cause: "A function received the right type of data but an inappropriate value.",
        fix: "Check the value you are passing — it may be empty, out of range, or in the wrong format."
    },
    ZeroDivisionError: {
        cause: "Your code is trying to divide a number by zero, which is not allowed.",
        fix: "Add a check to make sure the denominator is not zero before dividing."
    },
    FileNotFoundError: {
        cause: "Python cannot find the file you are trying to open.",
        fix: "Check the file path and make sure the file exists in the correct location."
    },
    RecursionError: {
        cause: "Your function is calling itself too many times without stopping.",
        fix: "Make sure your recursive function has a base case that stops the recursion."
    }
};

function classifyError(errorText) {
    // Try exact match first
    for (const errorType in errorTemplates) {
        if (errorText.includes(errorType)) {
            return {
                type: errorType,
                ...errorTemplates[errorType]
            };
        }
    }

    // Try lowercase match
    const lowerText = errorText.toLowerCase();
    for (const errorType in errorTemplates) {
        if (lowerText.includes(errorType.toLowerCase())) {
            return {
                type: errorType,
                ...errorTemplates[errorType]
            };
        }
    }

    return {
        type: "UnknownError",
        cause: "An unexpected error occurred in your code.",
        fix: "Read the error message carefully and check the line number mentioned."
    };
}

module.exports = { classifyError };