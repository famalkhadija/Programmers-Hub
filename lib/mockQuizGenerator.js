const mockQuestions = {
  javascript: {
    easy: [
      {
         question: "Which operator is used to assign a value?", 
         options: ["=", "==", "===", "!="],
          correctAnswer: "=" },
       {
      question: "What does `typeof null` return in JavaScript?",
      options: ["'null'", "'object'", "'undefined'", "'number'"],
      correctAnswer: "'object'",
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
      correctAnswer: "JSON.parse()",
    },
    {
      question: "What will `console.log(2 + '2')` output?",
      options: ["22", "4", "'4'", "NaN"],
      correctAnswer: "22",
    },
    {
      question: "Which of the following is not a primitive data type in JavaScript?",
      options: ["String", "Boolean", "Object", "Number"],
      correctAnswer: "Object",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["int a;", "var a;", "a := 10;", "let = a;"],
      correctAnswer: "var a;",
    },
    {
      question: "What keyword is used to define a constant in JavaScript?",
      options: ["constant", "let", "const", "define"],
      correctAnswer: "const",
    },
    {
      question: "What is the output of `typeof NaN`?",
      options: ["'NaN'", "'number'", "'undefined'", "'object'"],
      correctAnswer: "'number'",
    },
    {
      question: "What does the `===` operator do?",
      options: ["Checks equality and type", "Checks only type", "Checks only value", "Assigns a value"],
      correctAnswer: "Checks equality and type",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Google", "Netscape", "Microsoft", "Apple"],
      correctAnswer: "Netscape",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "/* */", "Both // and /* */"],
      correctAnswer: "Both // and /* */",
    },
{
  question: "Which method adds one or more elements to the end of an array?",
  options: ["push()", "pop()", "shift()", "unshift()"],
  correctAnswer: "push()",
},
{
  question: "What will `Boolean('false')` return?",
  options: ["false", "true", "'false'", "undefined"],
  correctAnswer: "true",
},
{
  question: "Which loop guarantees at least one execution?",
  options: ["for", "while", "do...while", "forEach"],
  correctAnswer: "do...while",
},
{
  question: "Which of these is a JavaScript data type?",
  options: ["float", "character", "symbol", "byte"],
  correctAnswer: "symbol",
},
{
  question: "How do you convert a number to a string in JavaScript?",
  options: ["toString()", "Stringify()", "Convert()", "toStr()"],
  correctAnswer: "toString()",
},
{
  question: "Which function is used to delay execution in JavaScript?",
  options: ["wait()", "timeout()", "setTimeout()", "delay()"],
  correctAnswer: "setTimeout()",
},
{
  question: "How do you write a comment spanning multiple lines?",
  options: ["// this is a comment", "<!-- -->", "/* comment */", "# comment"],
  correctAnswer: "/* comment */",
},
{
  question: "What is the result of `null == undefined`?",
  options: ["true", "false", "TypeError", "NaN"],
  correctAnswer: "true",
},
{
  question: "Which keyword is used to exit a loop early?",
  options: ["continue", "stop", "exit", "break"],
  correctAnswer: "break",
},
{
  question: "Which built-in method reverses the order of elements in an array?",
  options: ["sort()", "reverse()", "order()", "flip()"],
  correctAnswer: "reverse()",
},
{
  question: "Which symbol is used to access properties of an object?",
  options: [".", ":", "#", "@"],
  correctAnswer: ".",
},
{
  question: "Which array method adds an element to the end of an array?",
  options: ["push()", "pop()", "shift()", "unshift()"],
  correctAnswer: "push()",
},
{
  question: "Which array method removes the last element?",
  options: ["shift()", "pop()", "splice()", "slice()"],
  correctAnswer: "pop()",
},
{
  question: "How do you write a single-line comment?",
  options: ["<!-- comment -->", "# comment", "// comment", "/* comment */"],
  correctAnswer: "// comment",
},
{
  question: "What does `isNaN('hello')` return?",
  options: ["true", "false", "NaN", "undefined"],
  correctAnswer: "true",
},
{
  question: "What is the result of `Boolean(0)`?",
  options: ["true", "false", "0", "undefined"],
  correctAnswer: "false",
},
{
  question: "Which loop is guaranteed to run at least once?",
  options: ["for loop", "while loop", "do...while loop", "foreach loop"],
  correctAnswer: "do...while loop",
},
{
  question: "How do you round 4.7 to the nearest integer?",
  options: ["Math.ceil(4.7)", "Math.floor(4.7)", "Math.round(4.7)", "parseInt(4.7)"],
  correctAnswer: "Math.round(4.7)",
},
{
  question: "How can you get the length of a string?",
  options: ["length()", "getLength()", "strLength()", "length"],
  correctAnswer: "length",
},
{
  question: "Which value is falsy in JavaScript?",
  options: ["[]", "{}", "0", "'false'"],
  correctAnswer: "0",
},
{
  question: "What is the correct syntax for referring to an external script called 'app.js'?",
  options: [
    "<script src='app.js'>",
    "<script href='app.js'>",
    "<script link='app.js'>",
    "<link script='app.js'>"
  ],
  correctAnswer: "<script src='app.js'>"
},
{
  question: "What is the output of `typeof null`?",
  options: ["object", "null", "undefined", "boolean"],
  correctAnswer: "object"
},
{
  question: "What is the correct way to write a JavaScript array?",
  options: [
    "var colors = ['red', 'green', 'blue']",
    "var colors = 'red', 'green', 'blue'",
    "var colors = (1:'red', 2:'green', 3:'blue')",
    "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
  ],
  correctAnswer: "var colors = ['red', 'green', 'blue']"
},
{
  question: "What keyword is used to define a variable in modern JavaScript (ES6)?",
  options: ["var", "dim", "int", "let"],
  correctAnswer: "let"
},
{
  question: "Which method converts a JSON string into a JavaScript object?",
  options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.toObject()"],
  correctAnswer: "JSON.parse()"
},
{
  question: "Which JavaScript method can be used to select an element by ID?",
  options: ["getElementById()", "getElement(id)", "querySelectorId()", "selectById()"],
  correctAnswer: "getElementById()"
},
{
  question: "Which method can be used to convert a number to a string?",
  options: ["toString()", "stringify()", "parseInt()", "Number()"],
  correctAnswer: "toString()"
},
{
  question: "Which symbol is used for strict equality in JavaScript?",
  options: ["==", "===", "!=", "="],
  correctAnswer: "==="
},
{
  question: "What is the output of `2 + '2'`?",
  options: ["22", "4", "NaN", "undefined"],
  correctAnswer: "22"
},
{
  question: "Which of the following is a correct variable declaration in JavaScript?",
  options: ["let x = 5;", "int x = 5;", "x := 5;", "declare x = 5;"],
  correctAnswer: "let x = 5;"
},
{
  question: "Which symbol is used for single-line comments in JavaScript?",
  options: ["//", "/*", "#", "<!--"],
  correctAnswer: "//"
},
{
  question: "What is the purpose of the `return` statement in a function?",
  options: [
    "To output a value from a function",
    "To stop a loop",
    "To print a message",
    "To pause execution"
  ],
  correctAnswer: "To output a value from a function"
},
{
  question: "What will `console.log(typeof [])` print?",
  options: ["object", "array", "list", "undefined"],
  correctAnswer: "object"
},
{
  question: "How do you define a constant variable in JavaScript?",
  options: ["const PI = 3.14;", "define PI = 3.14;", "let PI = 3.14;", "var PI = 3.14;"],
  correctAnswer: "const PI = 3.14;"
},
{
  question: "Which keyword is used to define a class in ES6?",
  options: ["class", "struct", "prototype", "object"],
  correctAnswer: "class"
},
{
  question: "What is the output of `'5' - 2` in JavaScript?",
  options: ["3", "52", "NaN", "undefined"],
  correctAnswer: "3"
},
{
  question: "Which array method adds an element to the end of an array?",
  options: ["push()", "pop()", "shift()", "unshift()"],
  correctAnswer: "push()"
},
{
  question: "What does `isNaN('abc')` return?",
  options: ["true", "false", "undefined", "null"],
  correctAnswer: "true"
},
{
  question: "What is the result of `true && false`?",
  options: ["false", "true", "null", "undefined"],
  correctAnswer: "false"
}


    ], 
    advance: [
        {
  question: "What does event delegation help with in JavaScript?",
  options: [
    "Handling events on dynamically created elements efficiently",
    "Preventing memory leaks",
    "Encrypting user input",
    "Making synchronous calls asynchronous"
  ],
  correctAnswer: "Handling events on dynamically created elements efficiently"
},
{
  question: "What is the difference between `null` and `undefined`?",
  options: [
    "`null` is an assigned value meaning 'no value', `undefined` means a variable has been declared but not assigned",
    "`undefined` is an object, `null` is not",
    "They are exactly the same",
    "`null` is returned by default from functions"
  ],
  correctAnswer: "`null` is an assigned value meaning 'no value', `undefined` means a variable has been declared but not assigned"
},
{
  question: "How do closures work in JavaScript?",
  options: [
    "They allow inner functions to remember variables from their outer scope even after the outer function has finished executing",
    "They restrict variable access",
    "They close the execution context",
    "They are used only in async code"
  ],
  correctAnswer: "They allow inner functions to remember variables from their outer scope even after the outer function has finished executing"
},
{
  question: "What is the purpose of `call()`, `apply()`, and `bind()` in JavaScript?",
  options: [
    "To control the value of `this` in function execution",
    "To execute promises",
    "To clone objects",
    "To make functions private"
  ],
  correctAnswer: "To control the value of `this` in function execution"
},
{
  question: "What is the result of `typeof NaN`?",
  options: ["number", "NaN", "undefined", "object"],
  correctAnswer: "number"
},

        {
  question: "What is the use of `Object.freeze()` in JavaScript?",
  options: [
    "It makes an object immutable",
    "It clones an object",
    "It hides object properties",
    "It serializes an object"
  ],
  correctAnswer: "It makes an object immutable"
},
{
  question: "What is the difference between `map()` and `forEach()`?",
  options: [
    "`map()` returns a new array, `forEach()` does not",
    "`forEach()` is faster than `map()`",
    "`map()` is used only on objects",
    "They are identical"
  ],
  correctAnswer: "`map()` returns a new array, `forEach()` does not"
},
{
  question: "Why is `==` discouraged in favor of `===`?",
  options: [
    "`==` performs type coercion which can lead to unexpected results",
    "`===` is deprecated",
    "`==` is faster",
    "`==` only works on numbers"
  ],
  correctAnswer: "`==` performs type coercion which can lead to unexpected results"
},
{
  question: "What does `this` keyword refer to in a regular function (non-arrow)?",
  options: [
    "The object that calls the function",
    "Always the global object",
    "The parent object",
    "The function itself"
  ],
  correctAnswer: "The object that calls the function"
},
{
  question: "What is a memory leak in JavaScript?",
  options: [
    "Unused memory not being released",
    "Too many functions being called",
    "Using large arrays",
    "Stack overflow"
  ],
  correctAnswer: "Unused memory not being released"
},
{
  question: "What are Promises used for in JavaScript?",
  options: [
    "Handling asynchronous operations",
    "Creating loops",
    "Storing values permanently",
    "Executing sync functions faster"
  ],
  correctAnswer: "Handling asynchronous operations"
},
{
  question: "How does destructuring help in JavaScript?",
  options: [
    "It extracts values from arrays or objects into variables",
    "It compresses arrays",
    "It splits strings",
    "It clones objects"
  ],
  correctAnswer: "It extracts values from arrays or objects into variables"
},
{
  question: "What is the purpose of `await` keyword?",
  options: [
    "To pause async function execution until a Promise resolves",
    "To define an async function",
    "To retry a failed promise",
    "To block all execution"
  ],
  correctAnswer: "To pause async function execution until a Promise resolves"
},
{
  question: "What is the Temporal Dead Zone?",
  options: [
    "The time between variable hoisting and its declaration with let/const",
    "A deprecated zone in ES5",
    "A browser feature for memory",
    "A function that returns undefined"
  ],
  correctAnswer: "The time between variable hoisting and its declaration with let/const"
},
{
  question: "How is garbage collection handled in JavaScript?",
  options: [
    "Automatically via reference counting and reachability",
    "Manually using delete keyword",
    "By calling garbageCollector()",
    "With memory hooks"
  ],
  correctAnswer: "Automatically via reference counting and reachability"
},
        {
  question: "How does JavaScript handle closures?",
  options: [
    "By allowing a function to access variables from an outer function even after it returns",
    "By storing global variables in memory",
    "By using ES6 modules",
    "By converting functions into classes"
  ],
  correctAnswer: "By allowing a function to access variables from an outer function even after it returns"
},
{
  question: "What are higher-order functions?",
  options: [
    "Functions that call other functions or return them",
    "Functions that execute last",
    "Functions used in loops",
    "Functions used for classes"
  ],
  correctAnswer: "Functions that call other functions or return them"
},
{
  question: "What is the event loop in JavaScript?",
  options: [
    "A mechanism that handles asynchronous operations by putting them in a queue",
    "A loop that runs infinitely",
    "A JavaScript function",
    "A type of array"
  ],
  correctAnswer: "A mechanism that handles asynchronous operations by putting them in a queue"
},
{
  question: "What are arrow functions?",
  options: [
    "A concise way to write functions using `=>`",
    "A way to declare arrays",
    "Used only in objects",
    "A feature of CSS"
  ],
  correctAnswer: "A concise way to write functions using `=>`"
},
{
  question: "How does `debounce` help in performance optimization?",
  options: [
    "Delays execution of a function until after a pause",
    "Executes function immediately",
    "Removes unnecessary functions",
    "Only works in async code"
  ],
  correctAnswer: "Delays execution of a function until after a pause"
},
{
  question: "What is a pure function?",
  options: [
    "A function that returns the same output for the same input and has no side effects",
    "A function with only one line",
    "A function declared with `const`",
    "A function that uses only primitive types"
  ],
  correctAnswer: "A function that returns the same output for the same input and has no side effects"
},
{
  question: "How does `setTimeout` differ from `setInterval`?",
  options: [
    "`setTimeout` runs once after delay, `setInterval` repeats",
    "`setInterval` runs immediately, `setTimeout` does not",
    "`setTimeout` is synchronous",
    "They behave identically"
  ],
  correctAnswer: "`setTimeout` runs once after delay, `setInterval` repeats"
},
{
  question: "What is tail call optimization?",
  options: [
    "A way to optimize recursive functions by reusing stack frames",
    "A new ES2020 feature for async code",
    "A method to call the last element",
    "Used to sort arrays"
  ],
  correctAnswer: "A way to optimize recursive functions by reusing stack frames"
},
{
  question: "How do `async` functions return values?",
  options: [
    "As a resolved Promise",
    "As a normal value",
    "As undefined",
    "As a callback"
  ],
  correctAnswer: "As a resolved Promise"
},
{
  question: "Why is mutation in JavaScript state management discouraged?",
  options: [
    "It causes unexpected bugs and makes debugging hard",
    "It takes more memory",
    "It's faster but unreliable",
    "Only allowed in Node.js"
  ],
  correctAnswer: "It causes unexpected bugs and makes debugging hard"
},
        {
  question: "What is the 'this' keyword in JavaScript?",
  options: [
    "A reference to the current object in a method",
    "A keyword that defines a variable",
    "Used to create closures",
    "None of the above"
  ],
  correctAnswer: "A reference to the current object in a method",
},
{
  question: "What is hoisting in JavaScript?",
  options: [
    "A way to rearrange elements in DOM",
    "JavaScript's default behavior of moving declarations to the top",
    "A method for loading modules",
    "A new ES6 feature"
  ],
  correctAnswer: "JavaScript's default behavior of moving declarations to the top",
},
{
  question: "What is the use of the `Promise` object?",
  options: [
    "To loop through an array",
    "To handle asynchronous operations",
    "To bind context",
    "To store constants"
  ],
  correctAnswer: "To handle asynchronous operations",
},
{
  question: "Difference between `call()`, `apply()`, and `bind()`?",
  options: [
    "`call` and `apply` invoke immediately; `bind` returns a new function",
    "All three are the same",
    "`call` is for classes only",
    "`bind` executes the function directly"
  ],
  correctAnswer: "`call` and `apply` invoke immediately; `bind` returns a new function",
},
{
  question: "What is the Temporal Dead Zone?",
  options: [
    "The area between hoisting and execution where `let` and `const` are uninitialized",
    "A JavaScript timeout error",
    "A reserved keyword zone",
    "A deprecated feature"
  ],
  correctAnswer: "The area between hoisting and execution where `let` and `const` are uninitialized",
},
{
  question: "How does the `async/await` syntax work?",
  options: [
    "It blocks execution",
    "It simplifies working with promises",
    "It only works in classes",
    "It makes synchronous code run faster"
  ],
  correctAnswer: "It simplifies working with promises",
},
{
  question: "What does `Object.freeze()` do?",
  options: [
    "Makes an object immutable",
    "Deletes an object",
    "Creates a shallow copy",
    "None of the above"
  ],
  correctAnswer: "Makes an object immutable",
},
{
  question: "What is the difference between deep and shallow copy?",
  options: [
    "Deep copy duplicates all nested objects; shallow copy does not",
    "They are identical",
    "Shallow copy copies all objects",
    "Deep copy works only on arrays"
  ],
  correctAnswer: "Deep copy duplicates all nested objects; shallow copy does not",
},
{
  question: "How do you handle errors in async/await?",
  options: [
    "Using try/catch blocks",
    "Using error objects",
    "Using event listeners",
    "Using finally only"
  ],
  correctAnswer: "Using try/catch blocks",
},
{
  question: "What are generator functions?",
  options: [
    "Functions that return a Promise",
    "Functions that generate random numbers",
    "Functions that can be paused and resumed",
    "Functions used in classes only"
  ],
  correctAnswer: "Functions that can be paused and resumed",
},
       {
      question: "Explain event delegation in JavaScript.",
      options: [
        "Passing events between windows",
        "Binding multiple events to each child node individually",
        "A technique where a single event listener is added to a parent instead of multiple children",
        "Delegating events to the browser for performance"
      ],
      correctAnswer: "A technique where a single event listener is added to a parent instead of multiple children",
    },
    {
      question: "What is the difference between `let`, `const`, and `var`?",
      options: [
        "They are interchangeable",
        "`var` is block scoped, `let` is global, `const` is local",
        "`var` is function scoped, `let` and `const` are block scoped",
        "All three are block scoped"
      ],
      correctAnswer: "`var` is function scoped, `let` and `const` are block scoped",
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to the parent scope, even after the parent function has closed",
        "A way to close browser windows",
        "An object with properties",
        "A method to bind event listeners"
      ],
      correctAnswer: "A function having access to the parent scope, even after the parent function has closed",
    },
    {
      question: "How does the JavaScript event loop work?",
      options: [
        "It runs functions in parallel",
        "It queues all functions until the call stack is empty, then runs queued callbacks",
        "It runs async functions first",
        "It blocks until all DOM is rendered"
      ],
      correctAnswer: "It queues all functions until the call stack is empty, then runs queued callbacks",
    },
    {
      question: "What is the purpose of `bind()` in JavaScript?",
      options: [
        "To execute a function immediately",
        "To bind HTML to JavaScript",
        "To permanently set the `this` context of a function",
        "To create closures"
      ],
      correctAnswer: "To permanently set the `this` context of a function",
    },
    {
  question: "What is the difference between synchronous and asynchronous code in JavaScript?",
  options: [
    "Synchronous waits for each task to finish; asynchronous does not block the next task",
    "They both execute immediately",
    "Asynchronous is always faster",
    "Synchronous code can only be written with async/await"
  ],
  correctAnswer: "Synchronous waits for each task to finish; asynchronous does not block the next task",
},
{
  question: "What are Promises in JavaScript?",
  options: [
    "Functions that always resolve",
    "Objects representing eventual completion or failure of an async operation",
    "A new kind of loop",
    "Functions only for error handling"
  ],
  correctAnswer: "Objects representing eventual completion or failure of an async operation",
},
{
  question: "How is memory managed in JavaScript?",
  options: [
    "Through manual memory allocation",
    "Using a garbage collector that reclaims memory occupied by unreferenced objects",
    "Via static memory allocation",
    "It doesn’t use memory management"
  ],
  correctAnswer: "Using a garbage collector that reclaims memory occupied by unreferenced objects",
},
{
  question: "What is the difference between `.call()` and `.apply()`?",
  options: [
    "`call()` takes arguments as an array, `apply()` takes them individually",
    "`apply()` executes asynchronously",
    "`call()` and `apply()` are the same",
    "`call()` takes arguments individually, `apply()` takes them as an array"
  ],
  correctAnswer: "`call()` takes arguments individually, `apply()` takes them as an array",
},
{
  question: "Explain the concept of 'hoisting' in JavaScript.",
  options: [
    "Reordering of function calls",
    "JavaScript moves declarations to the top before execution",
    "It lowers variable scope",
    "Moving DOM elements"
  ],
  correctAnswer: "JavaScript moves declarations to the top before execution",
},
{
  question: "What is the Temporal Dead Zone?",
  options: [
    "A JavaScript bug",
    "The period between variable hoisting and initialization where access causes a ReferenceError",
    "Time taken to fetch async data",
    "A delay between function execution"
  ],
  correctAnswer: "The period between variable hoisting and initialization where access causes a ReferenceError",
},
{
  question: "What does the `async` keyword do?",
  options: [
    "Defines a function that returns a promise",
    "Makes code run faster",
    "Blocks execution until resolved",
    "Only works with `setTimeout()`"
  ],
  correctAnswer: "Defines a function that returns a promise",
},
{
  question: "What is the purpose of `Promise.all()`?",
  options: [
    "Executes promises one by one",
    "Executes multiple promises concurrently and resolves when all are done",
    "Returns first resolved promise",
    "Rejects all promises if one fails"
  ],
  correctAnswer: "Executes multiple promises concurrently and resolves when all are done",
},
{
  question: "How does JavaScript handle single-threaded concurrency?",
  options: [
    "With multi-threading",
    "With the event loop and callback queue",
    "Through blocking I/O",
    "It doesn’t support concurrency"
  ],
  correctAnswer: "With the event loop and callback queue",
},
{
  question: "What is the use of `Object.freeze()`?",
  options: [
    "To delete object properties",
    "To prevent an object from being modified",
    "To deep clone objects",
    "To make an object immutable and expandable"
  ],
  correctAnswer: "To prevent an object from being modified",
},

    ],
  },
  python: {
    easy: [
    {
      question: "What is the output of `print(type([]))` in Python?",
      options: ["<class 'list'>", "<type 'list'>", "list", "[]"],
      correctAnswer: "<class 'list'>",
    },
    {
      question: "Which symbol is used for comments in Python?",
      options: ["//", "#", "/* */", "<!-- -->"],
      correctAnswer: "#",
    },
    {
      question: "How do you insert comments in Python?",
      options: ["/* comment */", "# comment", "// comment", "<!-- comment -->"],
      correctAnswer: "# comment",
    },
    {
      question: "What will `print(2 ** 3)` output?",
      options: ["6", "9", "8", "5"],
      correctAnswer: "8",
    },
    {
      question: "Which data type is immutable in Python?",
      options: ["List", "Set", "Dictionary", "Tuple"],
      correctAnswer: "Tuple",
    },
    {
      question: "What does `len()` function do?",
      options: ["Returns number of arguments", "Returns length", "Adds values", "Checks data type"],
      correctAnswer: "Returns length",
    },
    {
      question: "Which keyword is used for function in Python?",
      options: ["func", "define", "def", "function"],
      correctAnswer: "def",
    },
    {
      question: "What is the output of `bool('False')`?",
      options: ["False", "True", "None", "Error"],
      correctAnswer: "True",
    },
    {
      question: "How do you create a variable in Python?",
      options: ["int x = 5", "let x = 5", "x := 5", "x = 5"],
      correctAnswer: "x = 5",
    },
    {
      question: "Which function converts a string to an integer?",
      options: ["int()", "str()", "float()", "bool()"],
      correctAnswer: "int()",
    },
    {
      question: "Which of the following is a valid Python list?",
      options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "1, 2, 3"],
      correctAnswer: "[1, 2, 3]",
    },
    {
      question: "What will `print(5 // 2)` return?",
      options: ["2.5", "2", "3", "Error"],
      correctAnswer: "2",
    },
    {
      question: "Which is not a valid Python data type?",
      options: ["set", "array", "tuple", "dict"],
      correctAnswer: "array",
    },
    {
      question: "What is the output of `print('a' + 'b')`?",
      options: ["ab", "a b", "a+b", "Error"],
      correctAnswer: "ab",
    },
    {
      question: "What is the keyword to define a class in Python?",
      options: ["function", "def", "class", "struct"],
      correctAnswer: "class",
    },
    {
      question: "Which of these is a boolean value?",
      options: ["0", "Yes", "True", "None"],
      correctAnswer: "True",
    },
    {
      question: "How do you start a for loop in Python?",
      options: ["for(i = 0; i < 10; i++)", "foreach x in list", "for x in list:", "loop x in list"],
      correctAnswer: "for x in list:",
    },
    {
      question: "What is used to handle exceptions in Python?",
      options: ["try-catch", "try-throw", "try-except", "handle-error"],
      correctAnswer: "try-except",
    },
    {
      question: "How do you declare a dictionary?",
      options: ["[]", "()", "{}", "set()"],
      correctAnswer: "{}",
    },
    {
      question: "What is `None` in Python?",
      options: ["A boolean", "An error", "Null value", "Zero"],
      correctAnswer: "Null value",
    },
    {
      question: "How do you install a Python package?",
      options: ["python install", "pip install", "py get", "get package"],
      correctAnswer: "pip install",
    },
    {
      question: "Which function is used to display output?",
      options: ["echo()", "print()", "console()", "show()"],
      correctAnswer: "print()",
    },
    {
      question: "Which operator is used to check equality?",
      options: ["=", "==", "!=", "<>"],
      correctAnswer: "==",
    },
    {
      question: "What is the output of `type(5.0)`?",
      options: ["int", "float", "double", "decimal"],
      correctAnswer: "float",
    },
    {
      question: "Which of these is a mutable type?",
      options: ["tuple", "list", "str", "int"],
      correctAnswer: "list",
    },
    {
      question: "How do you define an empty set?",
      options: ["{}", "[]", "()", "set()"],
      correctAnswer: "set()",
    },
    {
      question: "How to convert a list to a set?",
      options: ["set(list)", "list.toSet()", "convert(set, list)", "make_set(list)"],
      correctAnswer: "set(list)",
    },
    {
      question: "Which method adds an item to a list?",
      options: ["add()", "append()", "push()", "insert()"],
      correctAnswer: "append()",
    },
    {
      question: "How to remove duplicates from a list?",
      options: ["list.remove()", "set(list)", "list.clear()", "list.dropDuplicates()"],
      correctAnswer: "set(list)",
    },
    {
      question: "What does `is` compare?",
      options: ["Equality", "Value", "Memory address", "Length"],
      correctAnswer: "Memory address",
    },
    {
      question: "How to check if a key exists in a dictionary?",
      options: ["key in dict", "dict.has(key)", "dict.exists(key)", "check dict"],
      correctAnswer: "key in dict",
    },
    {
      question: "Which keyword is used to import modules?",
      options: ["include", "require", "import", "load"],
      correctAnswer: "import",
    },
    {
      question: "How do you open a file for reading?",
      options: ["open('file.txt', 'read')", "open('file.txt')", "open('file.txt', 'r')", "read('file.txt')"],
      correctAnswer: "open('file.txt', 'r')",
    },
    {
      question: "What does `range(5)` return?",
      options: ["0 to 5", "1 to 5", "0 to 4", "1 to 4"],
      correctAnswer: "0 to 4",
    },
    {
      question: "What does `break` do in a loop?",
      options: ["Skips iteration", "Ends loop", "Pauses loop", "Repeats loop"],
      correctAnswer: "Ends loop",
    },
    {
      question: "How do you define a tuple?",
      options: ["{}", "[]", "()", "<>"],
      correctAnswer: "()",
    },
    {
      question: "Which is a valid string literal?",
      options: ["'abc'", '"abc"', "`abc`", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "Which function returns the largest value?",
      options: ["high()", "max()", "top()", "greater()"],
      correctAnswer: "max()",
    },
    {
      question: "Which built-in function returns the absolute value?",
      options: ["abs()", "fabs()", "math.abs()", "value()"],
      correctAnswer: "abs()",
    },
    {
      question: "Which keyword creates a loop?",
      options: ["repeat", "do", "loop", "while"],
      correctAnswer: "while",
    },
    {
      question: "What is slicing?",
      options: ["Cutting strings", "Copying data", "Extracting parts from sequences", "Dividing arrays"],
      correctAnswer: "Extracting parts from sequences",
    },
    {
      question: "Which function returns ASCII of character?",
      options: ["charCode()", "ascii()", "ord()", "char()"],
      correctAnswer: "ord()",
    },
    {
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "//", "%%"],
      correctAnswer: "**",
    },
    {
      question: "Which statement is used to skip iteration?",
      options: ["exit", "break", "pass", "continue"],
      correctAnswer: "continue",
    },
    {
      question: "How to create a list comprehension?",
      options: ["[x*x for x in range(5)]", "list(map())", "{x*x for x}", "array.map(x)"],
      correctAnswer: "[x*x for x in range(5)]",
    },
    {
      question: "How do you define a lambda function?",
      options: ["lambda x: x+1", "def x => x+1", "func(x) = x+1", "=> x+1"],
      correctAnswer: "lambda x: x+1",
    },
    {
      question: "What does `pass` keyword do?",
      options: ["Skip block", "Ends loop", "Raises error", "Nothing"],
      correctAnswer: "Nothing",
    },
    {
      question: "Which function converts list to string?",
      options: ["join()", "str()", "convert()", "serialize()"],
      correctAnswer: "join()",
    },
    {
      question: "Which operator is used for modulo?",
      options: ["%", "//", "^", "&"],
      correctAnswer: "%",
    },
    {
      question: "Which of the following can be used as keys in dict?",
      options: ["Lists", "Dictionaries", "Tuples", "Sets"],
      correctAnswer: "Tuples",
    }
  ],
  advance: [
    {
      question: "What is a metaclass in Python?",
      options: [
        "A class of a class that defines how a class behaves",
        "A class that contains only static methods",
        "A parent class with no methods",
        "A decorator for class inheritance"
      ],
      correctAnswer: "A class of a class that defines how a class behaves",
    },
    {
      question: "What is the Global Interpreter Lock (GIL)?",
      options: [
        "A tool for locking files globally",
        "A mechanism that prevents multiple native threads from executing Python bytecodes at once",
        "A global lock on operating system",
        "A library for distributed computing"
      ],
      correctAnswer: "A mechanism that prevents multiple native threads from executing Python bytecodes at once",
    },
    {
      question: "What does the `@staticmethod` decorator do?",
      options: [
        "Creates a private method",
        "Allows a method to access the instance",
        "Defines a method not bound to class or instance",
        "Defines a method bound to the class but not to instances"
      ],
      correctAnswer: "Defines a method not bound to class or instance",
    },
    {
      question: "What is the difference between `is` and `==` in Python?",
      options: [
        "`is` compares values, `==` compares memory addresses",
        "`==` compares values, `is` compares memory addresses",
        "They are equivalent",
        "None of the above"
      ],
      correctAnswer: "`==` compares values, `is` compares memory addresses",
    },
    {
      question: "Which data structure does the `collections.deque` implement?",
      options: ["Stack", "Queue", "Doubly ended queue", "Hash table"],
      correctAnswer: "Doubly ended queue",
    },
    {
      question: "What does the `yield` keyword do in Python?",
      options: [
        "Pauses a function saving its state",
        "Returns and ends the function",
        "Defines a coroutine",
        "Declares a generator function without return"
      ],
      correctAnswer: "Pauses a function saving its state",
    },
    {
      question: "Which built-in function can be used to dynamically import a module?",
      options: ["__import__", "require", "load", "importlib"],
      correctAnswer: "__import__",
    },
    {
      question: "What is monkey patching in Python?",
      options: [
        "Replacing or extending code at runtime",
        "Modifying built-in Python files",
        "Updating Python to latest version",
        "Fixing memory leaks"
      ],
      correctAnswer: "Replacing or extending code at runtime",
    },
    {
      question: "What will `bool([])` evaluate to?",
      options: ["True", "False", "None", "Error"],
      correctAnswer: "False",
    },
    {
      question: "What is the result of `set([1,2,2,3,3])`?",
      options: ["[1,2,3]", "{1,2,2,3}", "{1,2,3}", "(1,2,3)"],
      correctAnswer: "{1,2,3}",
    },

    {
      question: "Which Python module supports multithreading?",
      options: ["multiprocessing", "threading", "asyncio", "subprocess"],
      correctAnswer: "threading",
    },
    {
      question: "What does `property()` do in a class?",
      options: [
        "Creates a private variable",
        "Makes a variable global",
        "Defines a getter/setter/deleter interface",
        "Binds method to class"
      ],
      correctAnswer: "Defines a getter/setter/deleter interface",
    },
    {
      question: "Which statement is true about Python's memory management?",
      options: [
        "It uses reference counting only",
        "It uses garbage collection and reference counting",
        "It has no garbage collection",
        "It manages memory manually"
      ],
      correctAnswer: "It uses garbage collection and reference counting",
    },
    {
      question: "What is a lambda function?",
      options: [
        "A named function with decorators",
        "An anonymous, inline function",
        "A generator function",
        "A recursive function"
      ],
      correctAnswer: "An anonymous, inline function",
    },
    {
      question: "What is the purpose of `with` in Python?",
      options: [
        "It creates a loop",
        "It handles exceptions",
        "It simplifies try/finally blocks",
        "It defines generators"
      ],
      correctAnswer: "It simplifies try/finally blocks",
    },
    {
      question: "Which of the following is not a valid Python data type?",
      options: ["list", "dict", "set", "stack"],
      correctAnswer: "stack",
    },
    {
      question: "What will `print(0.1 + 0.2 == 0.3)` output?",
      options: ["True", "False", "0.3", "Error"],
      correctAnswer: "False",
    },
    {
      question: "What is the output of `list(map(lambda x: x*2, [1, 2, 3]))`?",
      options: ["[2, 4, 6]", "[1, 4, 9]", "[2, 3, 4]", "[1, 2, 3]"],
      correctAnswer: "[2, 4, 6]",
    },
    {
      question: "How do you create a virtual environment in Python 3?",
      options: [
        "`python3 -m venv myenv`",
        "`pip create venv myenv`",
        "`python3 create-env`",
        "`python3 install virtualenv`"
      ],
      correctAnswer: "`python3 -m venv myenv`",
    },
    {
      question: "What is the difference between `deepcopy` and `copy`?",
      options: [
        "There is no difference",
        "`copy` copies references, `deepcopy` copies objects recursively",
        "`copy` is recursive, `deepcopy` is not",
        "`copy` only works for dicts"
      ],
      correctAnswer: "`copy` copies references, `deepcopy` copies objects recursively",
    },

    {
      question: "What is a generator in Python?",
      options: [
        "A function that returns another function",
        "A function that returns an iterable with `yield`",
        "A decorator",
        "An iterator class"
      ],
      correctAnswer: "A function that returns an iterable with `yield`",
    },
    {
      question: "Which module helps in serializing Python objects?",
      options: ["pickle", "os", "json", "re"],
      correctAnswer: "pickle",
    },
    {
      question: "What is duck typing in Python?",
      options: [
        "A type of polymorphism based on method presence",
        "A strict type enforcement method",
        "A type conversion error",
        "A built-in syntax checker"
      ],
      correctAnswer: "A type of polymorphism based on method presence",
    },
    {
      question: "What is the result of `None == 0`?",
      options: ["True", "False", "None", "Error"],
      correctAnswer: "False",
    },
    {
      question: "What is the result of `bool('False')`?",
      options: ["True", "False", "None", "Error"],
      correctAnswer: "True",
    },
    {
      question: "What is the default encoding in Python 3?",
      options: ["ascii", "utf-8", "latin-1", "unicode"],
      correctAnswer: "utf-8",
    },
    {
      question: "Which function is used to get the length of an object?",
      options: ["length()", "size()", "len()", "count()"],
      correctAnswer: "len()",
    },
    {
      question: "What is the use of `__slots__` in a class?",
      options: [
        "To restrict dynamic attribute creation",
        "To define all class variables",
        "To improve readability",
        "To define static methods"
      ],
      correctAnswer: "To restrict dynamic attribute creation",
    },
    {
      question: "What is the difference between `@classmethod` and `@staticmethod`?",
      options: [
        "`@classmethod` takes `cls` as first argument; `@staticmethod` takes none",
        "`@staticmethod` is faster",
        "No difference",
        "Only one can access instance attributes"
      ],
      correctAnswer: "`@classmethod` takes `cls` as first argument; `@staticmethod` takes none",
    },
    {
      question: "How do you handle exceptions in Python?",
      options: ["try-catch", "if-else", "try-except", "switch-case"],
      correctAnswer: "try-except",
    },
    {
      question: "What will `1 < 2 < 3` return?",
      options: ["True", "False", "Error", "None"],
      correctAnswer: "True",
    },
    {
      question: "Which symbol is used to unpack arguments in Python?",
      options: ["*", "#", "&", "@"],
      correctAnswer: "*",
    },
    {
      question: "How can you prevent a Python script from executing when imported?",
      options: [
        "Use `if __name__ == '__main__':`",
        "Use `if __file__ == '__main__':`",
        "Put it in a try block",
        "Name the file `_main_.py`"
      ],
      correctAnswer: "Use `if __name__ == '__main__':`",
    },
    {
      question: "Which keyword is used to define an asynchronous function?",
      options: ["async", "await", "yield", "def async"],
      correctAnswer: "async",
    },
    {
      question: "What is a coroutine in Python?",
      options: [
        "A thread",
        "A special function that can pause and resume",
        "A module",
        "A process"
      ],
      correctAnswer: "A special function that can pause and resume",
    },
    {
      question: "What is the time complexity of `list.append()`?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: "O(1)",
    },
    {
      question: "Which function is used to open a file in binary mode?",
      options: ["open(file, 'rb')", "open(file, 'r')", "readb(file)", "openb(file)"],
      correctAnswer: "open(file, 'rb')",
    },
    {
      question: "What is the output of `type(lambda x: x)`?",
      options: ["<class 'function'>", "<class 'lambda'>", "<lambda>", "function"],
      correctAnswer: "<class 'function'>",
    },
    {
      question: "What is the purpose of the `zip()` function?",
      options: [
        "Combine multiple iterables element-wise",
        "Compress strings",
        "Encrypt data",
        "None of the above"
      ],
      correctAnswer: "Combine multiple iterables element-wise",
    },
    {
      question: "How do you check if a key exists in a dictionary?",
      options: [
        "`key in dict`",
        "`dict.has_key(key)`",
        "`dict.contains(key)`",
        "`key in dict.keys()`"
      ],
      correctAnswer: "`key in dict`",
    },
    {
      question: "What does `enumerate()` do?",
      options: [
        "Returns an iterable with index and value",
        "Sorts a list",
        "Filters values",
        "Generates random numbers"
      ],
      correctAnswer: "Returns an iterable with index and value",
    },
    {
      question: "Which of these is immutable?",
      options: ["list", "set", "dict", "tuple"],
      correctAnswer: "tuple",
    },
    {
      question: "What is the output of `print('abc'[::-1])`?",
      options: ["abc", "cba", "None", "Error"],
      correctAnswer: "cba",
    },
    {
      question: "Which of the following creates a shallow copy?",
      options: ["copy.copy()", "copy.deepcopy()", "list.copy()", "All except deepcopy"],
      correctAnswer: "All except deepcopy",
    },
    {
      question: "How is memory managed in Python?",
      options: [
        "Through private heap and garbage collector",
        "Manual allocation",
        "Using malloc and free",
        "Using RAM disk"
      ],
      correctAnswer: "Through private heap and garbage collector",
    },
    {
      question: "What does `any([])` return?",
      options: ["True", "False", "None", "Error"],
      correctAnswer: "False",
    },
    {
      question: "What is an abstract base class in Python?",
      options: [
        "A class with no methods",
        "A class that defines interface for subclasses",
        "A class that can’t be inherited",
        "A final class"
      ],
      correctAnswer: "A class that defines interface for subclasses",
    },
    {
  question: "What is the output of the following Python code?\n\n```python\nx = [1, 2, 3]\ny = x\nx += [4, 5]\nprint(y)\n```",
  options: [
    "[1, 2, 3]",
    "[1, 2, 3, 4, 5]",
    "[4, 5]",
    "Error"
  ],
  correctAnswer: "[1, 2, 3, 4, 5]",
},
{
  question: "How does Python's Global Interpreter Lock (GIL) affect multithreading?",
  options: [
    "It allows true parallel execution of threads",
    "It restricts a Python process to a single thread at a time",
    "It blocks all I/O operations",
    "It increases the performance of CPU-bound tasks"
  ],
  correctAnswer: "It restricts a Python process to a single thread at a time",
},
{
  question: "What is the purpose of Python's `__slots__` declaration in a class?",
  options: [
    "To enable multiple inheritance",
    "To allocate memory manually",
    "To limit the attributes that an instance of a class can have",
    "To override built-in methods"
  ],
  correctAnswer: "To limit the attributes that an instance of a class can have",
}

  ]
  },
  typescript:{
    easy:[
{
    question: "What is TypeScript?",
    options: ["A framework", "A superset of JavaScript", "A CSS library", "A backend language"],
    correctAnswer: "A superset of JavaScript"
  },
  {
    question: "Which file extension is used for TypeScript?",
    options: [".js", ".ts", ".tsx", ".json"],
    correctAnswer: ".ts"
  },
  {
    question: "Which keyword is used to define a variable in TypeScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you define a string variable in TypeScript?",
    options: ["let name: string = 'John';", "let name = 'John': string;", "string name = 'John';", "let string name = 'John';"],
    correctAnswer: "let name: string = 'John';"
  },
  {
    question: "Which of the following is a primitive type in TypeScript?",
    options: ["number", "object", "array", "function"],
    correctAnswer: "number"
  },
  {
    question: "Which tool converts TypeScript to JavaScript?",
    options: ["Babel", "tsc", "webpack", "node"],
    correctAnswer: "tsc"
  },
  {
    question: "Which of the following is a valid array declaration in TypeScript?",
    options: ["let arr: number[] = [1,2,3];", "let arr = [1,2,3]: number[];", "number arr[] = [1,2,3];", "let arr = [1,2,3];"],
    correctAnswer: "let arr: number[] = [1,2,3];"
  },
  {
    question: "What is the output type of `typeof 'hello'`?",
    options: ["string", "text", "word", "char"],
    correctAnswer: "string"
  },
  {
    question: "What does the `any` type mean in TypeScript?",
    options: ["Any type of value", "Only number", "Only string", "Undefined"],
    correctAnswer: "Any type of value"
  },
  {
    question: "What is the default access modifier in TypeScript classes?",
    options: ["private", "protected", "public", "readonly"],
    correctAnswer: "public"
  },
  {
    question: "Which keyword is used to define a class in TypeScript?",
    options: ["function", "object", "class", "interface"],
    correctAnswer: "class"
  },
  {
    question: "Which keyword is used to define an interface in TypeScript?",
    options: ["interface", "type", "struct", "object"],
    correctAnswer: "interface"
  },
  {
    question: "Which type allows multiple types in TypeScript?",
    options: ["intersection", "union", "tuple", "array"],
    correctAnswer: "union"
  },
  {
    question: "How do you define a union type?",
    options: ["string|number", "string||number", "string&number", "string+number"],
    correctAnswer: "string|number"
  },
  {
    question: "Which symbol is used for optional properties in TypeScript?",
    options: ["?", "!", "&", "*"],
    correctAnswer: "?"
  },
  {
    question: "What is `never` type used for?",
    options: ["Functions that never return", "Empty string", "Undefined variable", "Zero values"],
    correctAnswer: "Functions that never return"
  },
  {
    question: "Which of the following is a valid tuple?",
    options: ["let pair: [string, number] = ['a', 1];", "let pair: (string, number) = ['a', 1];", "let pair: string[] = ['a', 1];", "let pair = ['a', 1]: tuple;"],
    correctAnswer: "let pair: [string, number] = ['a', 1];"
  },
  {
    question: "What does `readonly` do in TypeScript?",
    options: ["Makes a property constant", "Prevents file editing", "Hides variable", "Deletes data"],
    correctAnswer: "Makes a property constant"
  },
  {
    question: "How do you define a function's return type?",
    options: ["function test(): string {}", "function test string {}", "function test => string {}", "function test: string() {}"],
    correctAnswer: "function test(): string {}"
  },
  {
    question: "What is the purpose of `enum`?",
    options: ["Group named constants", "Create functions", "Store arrays", "Define loops"],
    correctAnswer: "Group named constants"
  },
  {
    question: "Which of the following will not cause a compilation error?",
    options: ["let x: number = 'hello';", "let x: any = 'hello';", "let x: boolean = 1;", "let x: string = true;"],
    correctAnswer: "let x: any = 'hello';"
  },
  {
    question: "How do you annotate an object in TypeScript?",
    options: ["let obj: {name: string, age: number};", "let obj = {string name, number age};", "let obj: object = name, age;", "let obj = string, number;"],
    correctAnswer: "let obj: {name: string, age: number};"
  },
  {
    question: "Which of the following is a benefit of using TypeScript?",
    options: ["Type safety", "Slower performance", "Increased runtime errors", "Reduced readability"],
    correctAnswer: "Type safety"
  },
  {
    question: "What is type inference?",
    options: ["Compiler automatically detects types", "Manual type writing", "Runtime type checking", "Default class creation"],
    correctAnswer: "Compiler automatically detects types"
  },
  {
    question: "Which TypeScript feature allows defining types for parameters?",
    options: ["Static typing", "Dynamic typing", "Loose typing", "Implicit typing"],
    correctAnswer: "Static typing"
  },
  {
    question: "Can you use TypeScript with React?",
    options: ["Yes", "No", "Only with Redux", "Only in class components"],
    correctAnswer: "Yes"
  },
  {
    question: "How to define a function with no return value?",
    options: ["void", "null", "undefined", "empty"],
    correctAnswer: "void"
  },
  {
    question: "What is `type alias` used for?",
    options: ["Create custom type names", "Hide functions", "Debug code", "Rename variables"],
    correctAnswer: "Create custom type names"
  },
  {
    question: "How do you define a type alias?",
    options: ["type User = { name: string }", "alias User = { name: string }", "type = User { name: string }", "let User = type { name: string }"],
    correctAnswer: "type User = { name: string }"
  },
  {
    question: "What is the output type of `typeof true`?",
    options: ["boolean", "true", "string", "value"],
    correctAnswer: "boolean"
  },
  {
    question: "Which TypeScript utility makes all properties optional?",
    options: ["Partial<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
    correctAnswer: "Partial<T>"
  },
  {
    question: "How do you define a generic function?",
    options: ["function identity<T>(arg: T): T {}", "function identity(arg<T>): T {}", "function<T> identity(arg): T {}", "function identity(arg): <T> T"],
    correctAnswer: "function identity<T>(arg: T): T {}"
  },
  {
    question: "Which of the following is true about TypeScript?",
    options: ["It supports interfaces", "It doesn’t support classes", "It has no support for modules", "It cannot be compiled"],
    correctAnswer: "It supports interfaces"
  },
  {
    question: "Which type represents `null` or `undefined`?",
    options: ["null | undefined", "never", "empty", "zero"],
    correctAnswer: "null | undefined"
  },
  {
    question: "Can interfaces extend other interfaces in TypeScript?",
    options: ["Yes", "No", "Only in ES6", "Only in React"],
    correctAnswer: "Yes"
  },
  {
    question: "What is the `as` keyword used for?",
    options: ["Type assertions", "Aliases", "Type casting", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "What is the default value of uninitialized variables in TypeScript?",
    options: ["undefined", "null", "0", "empty"],
    correctAnswer: "undefined"
  },
  {
    question: "How to define a class property as optional?",
    options: ["propertyName?: type", "propertyName: type?", "optional propertyName: type", "propertyName = type | undefined"],
    correctAnswer: "propertyName?: type"
  },
  {
    question: "What does the `keyof` keyword do?",
    options: ["Gets property names of a type", "Defines new types", "Deletes keys", "Loops through keys"],
    correctAnswer: "Gets property names of a type"
  },
  {
    question: "Which statement is used for exception handling?",
    options: ["try/catch", "throw", "catch/try", "error/catch"],
    correctAnswer: "try/catch"
  },
  {
    question: "Which types are falsy in TypeScript?",
    options: ["0, '', null, undefined, false", "true, {}, []", "NaN, '', true", "All values are truthy"],
    correctAnswer: "0, '', null, undefined, false"
  },
  {
    question: "Which operator is used for nullish coalescing?",
    options: ["??", "||", "&&", "=="],
    correctAnswer: "??"
  },
  {
    question: "How do you install TypeScript globally?",
    options: ["npm install -g typescript", "npm i typescript -g", "tsc install", "npm setup typescript"],
    correctAnswer: "npm install -g typescript"
  },
  {
    question: "What does `tsconfig.json` do?",
    options: ["Configures TypeScript compiler", "Stores environment variables", "Tracks changes", "Creates packages"],
    correctAnswer: "Configures TypeScript compiler"
  },
  {
    question: "What is a discriminated union?",
    options: ["Union with shared property", "Type checking error", "Loop through union", "Optional value"],
    correctAnswer: "Union with shared property"
  },
  {
    question: "Can you use decorators in TypeScript?",
    options: ["Yes", "No", "Only in Node.js", "Only with Redux"],
    correctAnswer: "Yes"
  },
  {
    question: "What does `infer` keyword do in conditional types?",
    options: ["Infers a type", "Defines function", "Returns class", "Defines array"],
    correctAnswer: "Infers a type"
  },
  {
    question: "What is the type of `NaN` in TypeScript?",
    options: ["number", "NaN", "string", "undefined"],
    correctAnswer: "number"
  },
  {
  question: "What is the output of `typeof undefined` in TypeScript?",
  options: ["'undefined'", "'object'", "'null'", "'string'"],
  correctAnswer: "'undefined'"
},
{
  question: "Which keyword ensures a variable’s value cannot be changed in TypeScript?",
  options: ["let", "var", "const", "static"],
  correctAnswer: "const"
},
    ],
    advance:[
{
    question: "What is the purpose of the 'keyof' operator in TypeScript?",
    options: [
      "Returns the type of a property",
      "Gets the union of all keys of a type",
      "Maps properties to their values",
      "Creates a new type with optional keys"
    ],
    correctAnswer: "Gets the union of all keys of a type"
  },
  {
    question: "Which utility type makes all properties in a type optional?",
    options: ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T, K>"],
    correctAnswer: "Partial<T>"
  },
  {
    question: "What does 'Record<K, T>' do?",
    options: [
      "Records function logs",
      "Creates an object type with keys of type K and values of type T",
      "Creates a tuple of values",
      "Iterates over keys of a union"
    ],
    correctAnswer: "Creates an object type with keys of type K and values of type T"
  },
  {
    question: "Which type guards narrow the type in a conditional block?",
    options: ["typeof", "instanceof", "in", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the result of 'unknown' type assignment?",
    options: [
      "Can be assigned to any type",
      "Cannot be assigned to any type without type assertion",
      "Throws compile-time error",
      "Acts like 'any'"
    ],
    correctAnswer: "Cannot be assigned to any type without type assertion"
  },
  {
    question: "Which of these types is safer: 'any' or 'unknown'?",
    options: ["any", "unknown", "both", "none"],
    correctAnswer: "unknown"
  },
  {
    question: "What is a discriminated union in TypeScript?",
    options: [
      "A type guard that narrows values",
      "A union type with a common literal property",
      "A utility function",
      "None of the above"
    ],
    correctAnswer: "A union type with a common literal property"
  },
  {
    question: "What is the default type of an enum in TypeScript?",
    options: ["string", "boolean", "number", "undefined"],
    correctAnswer: "number"
  },
  {
    question: "How can you ensure a function never returns?",
    options: ["Use type 'never'", "Use type 'void'", "Use type 'null'", "Use type 'undefined'"],
    correctAnswer: "Use type 'never'"
  },
  {
    question: "What is the purpose of the 'infer' keyword?",
    options: [
      "Infer literal types",
      "Create custom conditional types",
      "Extract a type within a conditional type",
      "Infer constructor parameters"
    ],
    correctAnswer: "Extract a type within a conditional type"
  },
  {
    question: "Which statement about mapped types is true?",
    options: [
      "They create copies of objects",
      "They transform each property in a type",
      "They modify runtime values",
      "They work only on arrays"
    ],
    correctAnswer: "They transform each property in a type"
  },
  {
    question: "What is a tuple in TypeScript?",
    options: [
      "A function",
      "A fixed-length array with specific types per index",
      "An interface",
      "A mapped type"
    ],
    correctAnswer: "A fixed-length array with specific types per index"
  },
  {
    question: "What does 'as const' do?",
    options: [
      "Makes all properties optional",
      "Narrows the type to literal values",
      "Creates a constant array",
      "Disables reassignment"
    ],
    correctAnswer: "Narrows the type to literal values"
  },
  {
    question: "How do you define a function that returns a promise of a string?",
    options: [
      "function test(): string",
      "function test(): Promise<string>",
      "function test(): string[]",
      "function test(): any"
    ],
    correctAnswer: "function test(): Promise<string>"
  },
  {
    question: "What does the 'never' type represent?",
    options: [
      "A value that is never returned",
      "A nullable value",
      "A void return",
      "A default type"
    ],
    correctAnswer: "A value that is never returned"
  },
  {
    question: "Which of these is not a valid utility type?",
    options: ["Omit<T, K>", "Extract<T, U>", "Include<T, U>", "NonNullable<T>"],
    correctAnswer: "Include<T, U>"
  },
  {
    question: "Which of the following ensures immutability?",
    options: ["readonly", "const", "freeze()", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the result of typeof NaN in TypeScript?",
    options: ["NaN", "undefined", "number", "object"],
    correctAnswer: "number"
  },
  {
    question: "What does the 'extends' keyword do in a conditional type?",
    options: [
      "Tests whether one type is assignable to another",
      "Inherits a class",
      "Creates a new array",
      "Builds recursive types"
    ],
    correctAnswer: "Tests whether one type is assignable to another"
  },
  {
    question: "What happens if you try to assign a number to a string variable?",
    options: [
      "It gets coerced",
      "Throws a compile error",
      "Compiles silently",
      "It gets converted to boolean"
    ],
    correctAnswer: "Throws a compile error"
  },
  {
    question: "How can you extract types from functions?",
    options: [
      "ReturnType<typeof fn>",
      "ExtractType<fn>",
      "FunctionType<fn>",
      "fn.ReturnType"
    ],
    correctAnswer: "ReturnType<typeof fn>"
  },
  {
    question: "Which utility type can pick specific properties from a type?",
    options: ["Pick<T, K>", "Omit<T, K>", "Extract<T, K>", "Keys<T>"],
    correctAnswer: "Pick<T, K>"
  },
  {
    question: "What does 'unknown extends T ? A : B' mean?",
    options: [
      "Checks if unknown extends T and returns A or B",
      "Throws error",
      "It’s invalid",
      "Always returns B"
    ],
    correctAnswer: "Checks if unknown extends T and returns A or B"
  },
  {
    question: "How do you make a property readonly?",
    options: ["readonly name: string", "const name", "fix name: string", "immutable name"],
    correctAnswer: "readonly name: string"
  },
  {
    question: "What is an index signature?",
    options: [
      "Used to define dynamic property keys",
      "Defines enums",
      "Marks interfaces",
      "Specifies module keys"
    ],
    correctAnswer: "Used to define dynamic property keys"
  },
  {
    question: "Which statement best defines declaration merging?",
    options: [
      "Merges values at runtime",
      "Combines types/interfaces with same name",
      "Combines classes",
      "Merges enums"
    ],
    correctAnswer: "Combines types/interfaces with same name"
  },
  {
    question: "Can interfaces extend multiple interfaces?",
    options: ["Yes", "No", "Only classes", "Only types"],
    correctAnswer: "Yes"
  },
  {
    question: "Which of the following can not be used with 'extends'?",
    options: ["type", "interface", "class", "enum"],
    correctAnswer: "enum"
  },
  {
    question: "Which feature allows code execution to be skipped during type-checking?",
    options: ["Type assertions", "Type guards", "Type erasure", "Structural typing"],
    correctAnswer: "Type erasure"
  },
  {
    question: "How can you ensure a property is present but may be null?",
    options: [
      "name: string | null",
      "optional name?",
      "name: null",
      "name?: string"
    ],
    correctAnswer: "name: string | null"
  },
  {
    question: "What does 'Exclude<T, U>' do?",
    options: [
      "Excludes types from T that are assignable to U",
      "Filters arrays",
      "Removes keys",
      "Returns common values"
    ],
    correctAnswer: "Excludes types from T that are assignable to U"
  },
  {
    question: "Which TypeScript mode prevents implicit 'any' types?",
    options: [
      "strictNullChecks",
      "strictBindCallApply",
      "noImplicitAny",
      "noImplicitReturns"
    ],
    correctAnswer: "noImplicitAny"
  },
  {
    question: "How to annotate a function that returns void?",
    options: ["(): void", "(): undefined", "(): null", "(): never"],
    correctAnswer: "(): void"
  },
  {
    question: "How to use generic constraints?",
    options: [
      "<T extends U>",
      "<T as U>",
      "<T implements U>",
      "<T extends keyof U>"
    ],
    correctAnswer: "<T extends U>"
  },
  {
    question: "Which symbol is used for type intersection?",
    options: ["&", "|", "^", ":"],
    correctAnswer: "&"
  },
  {
    question: "How to assert a variable is of type A?",
    options: ["value as A", "value => A", "type value: A", "A = value"],
    correctAnswer: "value as A"
  },
  {
    question: "What happens if a generic type isn’t provided?",
    options: [
      "It becomes 'any'",
      "It becomes 'unknown'",
      "It fails",
      "It uses default type (if given)"
    ],
    correctAnswer: "It uses default type (if given)"
  },
  {
    question: "Which utility type extracts function parameters?",
    options: ["Parameters<T>", "Args<T>", "ExtractArgs<T>", "Inputs<T>"],
    correctAnswer: "Parameters<T>"
  },
  {
    question: "Which concept is TypeScript based on?",
    options: ["Nominal typing", "Structural typing", "Duck typing", "OOP"],
    correctAnswer: "Structural typing"
  },
  {
    question: "What does 'as' do in 'value as string'?",
    options: [
      "Performs type assertion",
      "Casts the value",
      "Changes runtime type",
      "Returns new object"
    ],
    correctAnswer: "Performs type assertion"
  },
  {
    question: "How do you define optional parameters in a function?",
    options: ["name?: string", "name: string?", "name: ?string", "optional name"],
    correctAnswer: "name?: string"
  },
  {

  question: "What is the difference between 'interface' and 'type' in TypeScript?",
    options: [
      "Interfaces can extend classes; types cannot",
      "Types can be merged; interfaces cannot",
      "Both are exactly the same",
      "Interfaces cannot have functions"
    ],
    correctAnswer: "Interfaces can extend classes; types cannot"
  },
  {
    question: "Which keyword in TypeScript allows you to create a type from another by selecting specific keys?",
    options: ["Pick", "Omit", "Partial", "Record"],
    correctAnswer: "Pick"
  },
  {
    question: "What is a discriminated union in TypeScript?",
    options: [
      "A way to randomly select a type",
      "A pattern using a common property to differentiate types",
      "A runtime switch statement",
      "A type that can only be used once"
    ],
    correctAnswer: "A pattern using a common property to differentiate types"
  },
  {
    question: "What does the `infer` keyword do inside a conditional type?",
    options: [
      "Defines a type alias",
      "Infers a type from the condition",
      "Narrows a type",
      "Prevents inference"
    ],
    correctAnswer: "Infers a type from the condition"
  },
  {
    question: "What are mapped types in TypeScript used for?",
    options: [
      "To transform each property in a type",
      "To create maps like in JS",
      "To iterate arrays",
      "To map a function to a class"
    ],
    correctAnswer: "To transform each property in a type"
  },
    ]
  },
    java:{
    easy:[
{
    question: "Which of the following is not a Java keyword?",
    options: ["class", "interface", "extends", "implement"],
    correctAnswer: "implement",
  },
  {
    question: "What is the extension of Java bytecode files?",
    options: [".java", ".class", ".jar", ".exe"],
    correctAnswer: ".class",
  },
  {
    question: "Who is known as the father of Java programming language?",
    options: ["James Gosling", "Bjarne Stroustrup", "Dennis Ritchie", "Guido van Rossum"],
    correctAnswer: "James Gosling",
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    correctAnswer: "main()",
  },
  {
    question: "Which keyword is used to create an object in Java?",
    options: ["new", "create", "object", "class"],
    correctAnswer: "new",
  },
  {
    question: "Which of the following is not a primitive data type in Java?",
    options: ["int", "float", "String", "char"],
    correctAnswer: "String",
  },
  {
    question: "What does JVM stand for?",
    options: ["Java Variable Method", "Java Virtual Machine", "Java Verified Mode", "Joint Variable Model"],
    correctAnswer: "Java Virtual Machine",
  },
  {
    question: "Which of the following is used to define a constant in Java?",
    options: ["const", "constant", "final", "static"],
    correctAnswer: "final",
  },
  {
    question: "What is the size of int in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
    correctAnswer: "4 bytes",
  },
  {
    question: "Which symbol is used to access methods or fields of a class?",
    options: [".", ":", "::", "#"],
    correctAnswer: ".",
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["inherits", "extends", "implements", "super"],
    correctAnswer: "extends",
  },
  {
    question: "What is the default value of a boolean in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: "false",
  },
  {
    question: "Which of the following is not an access modifier?",
    options: ["public", "private", "protected", "friendly"],
    correctAnswer: "friendly",
  },
  {
    question: "Which operator is used for comparison in Java?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "==",
  },
  {
    question: "What will `5 + 2 * 3` evaluate to in Java?",
    options: ["21", "11", "15", "16"],
    correctAnswer: "11",
  },
  {
    question: "What is the keyword to define a class?",
    options: ["define", "class", "struct", "new"],
    correctAnswer: "class",
  },
  {
    question: "Which data type is used to store characters?",
    options: ["char", "string", "Character", "int"],
    correctAnswer: "char",
  },
  {
    question: "Which of the following is a loop structure in Java?",
    options: ["for", "repeat", "loop", "next"],
    correctAnswer: "for",
  },
  {
    question: "Which operator is used to find the remainder?",
    options: ["%", "/", "*", "&"],
    correctAnswer: "%",
  },
  {
    question: "What does `public static void main` mean?",
    options: ["Main class", "Main method entry point", "Private function", "Object declaration"],
    correctAnswer: "Main method entry point",
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    options: ["abstract", "final", "static", "private"],
    correctAnswer: "final",
  },
  {
    question: "Which data type is used to store decimal numbers?",
    options: ["int", "char", "float", "boolean"],
    correctAnswer: "float",
  },
  {
    question: "What is used to terminate a statement in Java?",
    options: ["period", "colon", "semicolon", "comma"],
    correctAnswer: "semicolon",
  },
  {
    question: "Which of the following is a valid array declaration?",
    options: ["int arr[] = new int[5];", "array arr = int[5];", "int arr[5];", "int arr = [5];"],
    correctAnswer: "int arr[] = new int[5];",
  },
  {
    question: "What is the default value of an object reference?",
    options: ["0", "null", "undefined", "empty"],
    correctAnswer: "null",
  },
  {
    question: "Which class is the parent of all classes in Java?",
    options: ["Object", "Parent", "Main", "Super"],
    correctAnswer: "Object",
  },
  {
    question: "Which statement is used to return a value from a method?",
    options: ["break", "return", "exit", "continue"],
    correctAnswer: "return",
  },
  {
    question: "What is used to handle exceptions in Java?",
    options: ["if-else", "try-catch", "switch", "goto"],
    correctAnswer: "try-catch",
  },
  {
    question: "Which method is called when an object is created?",
    options: ["main", "finalize", "constructor", "init"],
    correctAnswer: "constructor",
  },
  {
    question: "Which of these is a valid Java identifier?",
    options: ["1value", "$value", "value!", "void"],
    correctAnswer: "$value",
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "and", "&&&"],
    correctAnswer: "&&",
  },
  {
    question: "What is the output of: `System.out.println(3 > 2);`?",
    options: ["true", "false", "error", "null"],
    correctAnswer: "true",
  },
  {
    question: "Which keyword is used to create an interface?",
    options: ["interface", "implements", "abstract", "extends"],
    correctAnswer: "interface",
  },
  {
    question: "What is the result of `10 / 4` in Java?",
    options: ["2.5", "2", "3", "4"],
    correctAnswer: "2",
  },
  {
    question: "Which is not a feature of Java?",
    options: ["Platform independent", "Object-oriented", "Supports multiple inheritance using classes", "Secure"],
    correctAnswer: "Supports multiple inheritance using classes",
  },
  {
    question: "Which statement is used to skip an iteration?",
    options: ["return", "continue", "break", "exit"],
    correctAnswer: "continue",
  },
  {
    question: "Which one is not a loop in Java?",
    options: ["while", "for", "repeat", "do-while"],
    correctAnswer: "repeat",
  },
  {
    question: "How do you start a comment in Java?",
    options: ["//", "#", "<!--", "--"],
    correctAnswer: "//",
  },
  {
    question: "Which of these is a wrapper class?",
    options: ["Integer", "int", "float", "char"],
    correctAnswer: "Integer",
  },
  {
    question: "What is the output of: `System.out.println(\"Hello\" + 5);`?",
    options: ["Hello5", "Hello", "5", "Error"],
    correctAnswer: "Hello5",
  },
  {
    question: "Which access modifier allows visibility everywhere?",
    options: ["private", "protected", "public", "default"],
    correctAnswer: "public",
  },
  {
    question: "What is method overloading?",
    options: ["Same name, different parameters", "Same name, same parameters", "Same class", "Different return type"],
    correctAnswer: "Same name, different parameters",
  },
  {
    question: "Which loop is best when the number of iterations is known?",
    options: ["for", "while", "do-while", "switch"],
    correctAnswer: "for",
  },
  {
    question: "Which of the following is true about Java?",
    options: ["Java is compiled only", "Java is interpreted only", "Java is both compiled and interpreted", "None"],
    correctAnswer: "Java is both compiled and interpreted",
  },
  {
    question: "Which of the following is used for inheritance?",
    options: ["extends", "implements", "inherits", "super"],
    correctAnswer: "extends",
  },
  {
    question: "Which keyword refers to the parent class?",
    options: ["super", "this", "parent", "base"],
    correctAnswer: "super",
  },
  {
    question: "What is the use of `this` keyword?",
    options: ["Refer to current object", "Refer to parent class", "Return value", "Declare method"],
    correctAnswer: "Refer to current object",
  },
  {
    question: "Which function is used to print output?",
    options: ["console.log", "System.out.print", "System.print", "System.out.println"],
    correctAnswer: "System.out.println",
  },
  {
  question: "Which keyword is used to define a class in Java?",
  options: ["define", "class", "object", "structure"],
  correctAnswer: "class"
},

    ],
    advance:[
       {
    question: "Which keyword is used to prevent inheritance in Java?",
    options: ["static", "final", "private", "abstract"],
    correctAnswer: "final"
  },
  {
    question: "Which of the following is true about Java memory management?",
    options: [
      "Java uses manual memory management",
      "Java has no garbage collection",
      "Java uses automatic garbage collection",
      "Java objects are deleted using delete keyword"
    ],
    correctAnswer: "Java uses automatic garbage collection"
  },
  {
    question: "What will happen if the `main` method is declared as private?",
    options: [
      "It will execute normally",
      "It will throw a runtime exception",
      "It will compile but not run",
      "It will cause a compile-time error"
    ],
    correctAnswer: "It will compile but not run"
  },
  {
    question: "Which design pattern provides a way to access elements of a collection without exposing its structure?",
    options: ["Factory", "Observer", "Iterator", "Builder"],
    correctAnswer: "Iterator"
  },
  {
    question: "What does the `transient` keyword do?",
    options: [
      "Marks variable as volatile",
      "Excludes variable from serialization",
      "Makes variable constant",
      "None of the above"
    ],
    correctAnswer: "Excludes variable from serialization"
  },
  {
    question: "Which exception is thrown when a thread is waiting, sleeping, or occupied, and the thread is interrupted?",
    options: ["InterruptedException", "IOException", "RuntimeException", "ExecutionException"],
    correctAnswer: "InterruptedException"
  },
  {
    question: "What is the output of `System.out.println(0.0/0.0);`?",
    options: ["NaN", "Infinity", "0", "ArithmeticException"],
    correctAnswer: "NaN"
  },
  {
    question: "What is the default value of a local variable in Java?",
    options: ["0", "null", "Depends on type", "Compilation error"],
    correctAnswer: "Compilation error"
  },
  {
    question: "Which of the following classes is immutable?",
    options: ["StringBuilder", "StringBuffer", "String", "All of the above"],
    correctAnswer: "String"
  },
  {
    question: "Which Java keyword is used to implement multiple inheritance?",
    options: ["extends", "implements", "inherits", "interface"],
    correctAnswer: "implements"
  },
  {
    question: "Which method is used to start a thread execution?",
    options: ["run()", "execute()", "start()", "launch()"],
    correctAnswer: "start"
  },
  {
    question: "Which collection class allows you to access elements by a unique key?",
    options: ["List", "Set", "Map", "Queue"],
    correctAnswer: "Map"
  },
  {
    question: "What is the purpose of the `volatile` keyword in Java?",
    options: [
      "Make variable constant",
      "Prevent instruction reordering",
      "Allow static access",
      "Prevent method overriding"
    ],
    correctAnswer: "Prevent instruction reordering"
  },
  {
    question: "Which statement about Java enums is true?",
    options: [
      "They cannot implement interfaces",
      "They can extend other classes",
      "They are classes",
      "They cannot have constructors"
    ],
    correctAnswer: "They are classes"
  },
  {
    question: "Which is a checked exception?",
    options: ["NullPointerException", "IOException", "ArithmeticException", "IllegalArgumentException"],
    correctAnswer: "IOException"
  },
  {
    question: "What is the default value of a boolean field in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: "false"
  },
  {
    question: "Which access modifier is most restrictive?",
    options: ["public", "protected", "default", "private"],
    correctAnswer: "private"
  },
  {
    question: "Which of the following supports thread-safe operations?",
    options: ["StringBuilder", "HashMap", "Vector", "ArrayList"],
    correctAnswer: "Vector"
  },
  {
    question: "What happens when you try to override a final method?",
    options: ["It overrides successfully", "It gives runtime error", "It gives compile error", "It is ignored"],
    correctAnswer: "It gives compile error"
  },
  {
    question: "Which feature of Java allows platform independence?",
    options: ["JVM", "JRE", "Compiler", "Bytecode"],
    correctAnswer: "Bytecode"
  },
  {
    question: "Which stream is used to read characters in Java?",
    options: ["InputStream", "Reader", "Writer", "BufferedOutputStream"],
    correctAnswer: "Reader"
  },
  {
    question: "Which method is called when an object is garbage collected?",
    options: ["finalize()", "destroy()", "dispose()", "close()"],
    correctAnswer: "finalize()"
  },
  {
    question: "What is the size of `int` in Java?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correctAnswer: "32 bits"
  },
  {
    question: "What is the superclass of all Java classes?",
    options: ["Object", "Class", "Main", "Base"],
    correctAnswer: "Object"
  },
  {
    question: "Which keyword is used to refer to the current object?",
    options: ["super", "this", "current", "self"],
    correctAnswer: "this"
  },
  {
    question: "Which operator is used to allocate memory dynamically?",
    options: ["alloc", "malloc", "new", "create"],
    correctAnswer: "new"
  },
  {
    question: "Which of the following is a marker interface?",
    options: ["Serializable", "Cloneable", "Both", "None"],
    correctAnswer: "Both"
  },
  {
    question: "Which type of inheritance is not supported in Java?",
    options: ["Single", "Multilevel", "Multiple", "Hierarchical"],
    correctAnswer: "Multiple"
  },
  {
    question: "Which of the following can be static in Java?",
    options: ["Methods", "Variables", "Blocks", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which of these is not a Java keyword?",
    options: ["strictfp", "const", "unsigned", "goto"],
    correctAnswer: "unsigned"
  },
  {
    question: "Which of the following creates an immutable list?",
    options: ["Arrays.asList()", "List.of()", "new ArrayList<>()", "Collections.sort()"],
    correctAnswer: "List.of()"
  },
  {
    question: "Which method must be implemented when implementing `Runnable`?",
    options: ["start()", "run()", "execute()", "init()"],
    correctAnswer: "run()"
  },
  {
    question: "Which is the preferred way to handle exceptions in Java?",
    options: ["throws", "try-catch", "final", "assert"],
    correctAnswer: "try-catch"
  },
  {
    question: "Which of the following is not a functional interface?",
    options: ["Runnable", "Comparator", "Serializable", "Callable"],
    correctAnswer: "Serializable"
  },
  {
    question: "Which annotation is used to override a method from the superclass?",
    options: ["@Override", "@Overload", "@Extend", "@Implement"],
    correctAnswer: "@Override"
  },
  {
    question: "Which of these allows duplicate elements?",
    options: ["Set", "Map", "List", "Enum"],
    correctAnswer: "List"
  },
  {
    question: "Which of these is not thread-safe?",
    options: ["Vector", "Hashtable", "HashMap", "ConcurrentHashMap"],
    correctAnswer: "HashMap"
  },
  {
    question: "Which stream class is used for object serialization?",
    options: ["FileWriter", "ObjectOutputStream", "DataOutputStream", "PrintWriter"],
    correctAnswer: "ObjectOutputStream"
  },
  {
    question: "Which method is called before an applet is terminated?",
    options: ["init()", "destroy()", "stop()", "start()"],
    correctAnswer: "destroy()"
  },
  {
    question: "Which concept allows polymorphism in Java?",
    options: ["Overloading", "Overriding", "Inheritance", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which Java feature ensures code reuse?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
    correctAnswer: "Inheritance"
  },
  {
    question: "What is the purpose of `super()`?",
    options: ["Access parent constructor", "Access child method", "Access static method", "None"],
    correctAnswer: "Access parent constructor"
  },
  {
    question: "Which collection is best for FIFO ordering?",
    options: ["List", "Queue", "Set", "Map"],
    correctAnswer: "Queue"
  },
  {
    question: "Which Java keyword is used for creating an interface?",
    options: ["interface", "implements", "extends", "abstract"],
    correctAnswer: "interface"
  },
  {
    question: "Which keyword can stop a loop immediately?",
    options: ["stop", "exit", "break", "continue"],
    correctAnswer: "break"
  },
  {
  question: 'What is the main difference between `interface` and `type` in TypeScript?',
  options: [
    'Interfaces can be used to define primitives, types cannot',
    'Types can be extended, interfaces cannot',
    'Interfaces can be merged, types cannot',
    'Types support declaration merging, interfaces do not',
  ],
  correctAnswer: 'Interfaces can be merged, types cannot'
},
{
  question: 'How does TypeScript handle JSX in React projects?',
  options: [
    'It ignores JSX completely',
    'It parses JSX and converts it to HTML',
    'It transpiles JSX into `React.createElement()` calls',
    'It uses Babel to convert JSX',
  ],
  correctAnswer: 'It transpiles JSX into `React.createElement()` calls'
},
{
  question: 'What is the correct way to make all properties of a type optional?',
  options: [
    'Use the `?` operator after the type',
    'Wrap the type in a `Maybe` type',
    'Use `Partial<T>` utility type',
    'Declare them using `let` instead of `const`',
  ],
  correctAnswer: 'Use `Partial<T>` utility type'
},
{
  question: 'Which utility type creates a type by picking a set of properties from another type?',
  options: [
    '`Partial<T>`',
    '`Pick<T, K>`',
    '`Omit<T, K>`',
    '`Record<K, T>`',
  ],
  correctAnswer: '`Pick<T, K>`'
},
{
  question: 'What does the `satisfies` operator do in TypeScript 4.9+?',
  options: [
    'It checks for value equality',
    'It narrows types using type guards',
    'It ensures a value satisfies a specific type without widening',
    'It validates values at runtime',
  ],
  correctAnswer: 'It ensures a value satisfies a specific type without widening'
},
{
  question: 'What is the purpose of `as const` in TypeScript?',
  options: [
    'To prevent reassignment of variables',
    'To narrow literal types and make properties readonly',
    'To define global constants',
    'To assign constant values to enums',
  ],
  correctAnswer: 'To narrow literal types and make properties readonly'
},
    ]
  },
     php:{
    easy:[
{
  question: "Which symbol is used to declare a variable in PHP?",
  options: ["#", "$", "@", "&"],
  correctAnswer: "$"
},
{
    question: "What does PHP stand for?",
    options: ["Personal Home Page", "Preprocessed Hypertext Page", "PHP: Hypertext Preprocessor", "Private Home Page"],
    correctAnswer: "PHP: Hypertext Preprocessor"
  },
  {
    question: "Which of the following is the correct way to start a PHP block?",
    options: ["<script>", "<?php", "<php>", "<?="],
    correctAnswer: "<?php"
  },
  {
    question: "How do you write a comment in PHP?",
    options: ["# comment", "// comment", "/* comment */", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which symbol is used to declare a variable in PHP?",
    options: ["@", "#", "$", "&"],
    correctAnswer: "$"
  },
  {
    question: "Which of the following is a correct variable name in PHP?",
    options: ["$1name", "$_name", "1$name", "$-name"],
    correctAnswer: "$_name"
  },
  {
    question: "How do you output text in PHP?",
    options: ["echo", "print", "printf", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the correct way to end a PHP statement?",
    options: [".", ",", ";", ":"],
    correctAnswer: ";"
  },
  {
    question: "What is the result of `echo 2 + '2';` in PHP?",
    options: ["22", "4", "Error", "undefined"],
    correctAnswer: "4"
  },
  {
    question: "Which function is used to include a file in PHP?",
    options: ["require()", "include()", "import()", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which function checks if a file exists?",
    options: ["is_file()", "file_exists()", "exists()", "check_file()"],
    correctAnswer: "file_exists()"
  },
  {
    question: "Which PHP superglobal is used to collect form data sent with POST method?",
    options: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"],
    correctAnswer: "$_POST"
  },
  {
    question: "Which operator is used for string concatenation in PHP?",
    options: [".", "+", "&", "concat"],
    correctAnswer: "."
  },
  {
    question: "What will `strlen('Hello')` return?",
    options: ["4", "5", "6", "Error"],
    correctAnswer: "5"
  },
  {
    question: "How do you define a constant in PHP?",
    options: ["define()", "const", "constant", "All of the above"],
    correctAnswer: "define()"
  },
  {
    question: "Which one is a loop in PHP?",
    options: ["for", "while", "foreach", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which function is used to get the type of a variable?",
    options: ["gettype()", "typeof()", "varType()", "typeOfVar()"],
    correctAnswer: "gettype()"
  },
  {
    question: "How do you create a function in PHP?",
    options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "create myFunc() {}"],
    correctAnswer: "function myFunc() {}"
  },
  {
    question: "What does `isset()` function do?",
    options: ["Checks if variable is empty", "Checks if variable is set and not null", "Creates a variable", "None of the above"],
    correctAnswer: "Checks if variable is set and not null"
  },
  {
    question: "Which array starts from 0 by default?",
    options: ["Indexed array", "Associative array", "Multidimensional array", "Global array"],
    correctAnswer: "Indexed array"
  },
  {
    question: "What is the output of `echo true == 1;`?",
    options: ["1", "true", "false", "Error"],
    correctAnswer: "1"
  },
  {
    question: "Which function is used to sort arrays in PHP?",
    options: ["sort()", "array_sort()", "asort()", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    question: "What does `empty()` function return for null?",
    options: ["true", "false", "0", "Error"],
    correctAnswer: "true"
  },
  {
    question: "How do you start a session in PHP?",
    options: ["start_session()", "session_start()", "begin_session()", "init_session()"],
    correctAnswer: "session_start()"
  },
  {
    question: "Which function is used to redirect in PHP?",
    options: ["header()", "redirect()", "goto()", "location()"],
    correctAnswer: "header()"
  },
  {
    question: "Which function is used to get current timestamp in PHP?",
    options: ["time()", "date()", "now()", "currentTime()"],
    correctAnswer: "time()"
  },
  {
    question: "How do you access cookie values in PHP?",
    options: ["$_COOKIE", "$_SESSION", "$_COOKIES", "$cookie"],
    correctAnswer: "$_COOKIE"
  },
  {
    question: "Which function removes whitespace from beginning and end of a string?",
    options: ["trim()", "strip()", "removeSpace()", "cut()"],
    correctAnswer: "trim()"
  },
  {
    question: "Which function is used to convert string to lowercase?",
    options: ["strtolower()", "strlower()", "toLower()", "lc()"],
    correctAnswer: "strtolower()"
  },
  {
    question: "What is the output of `echo 5 % 2;`?",
    options: ["2", "1", "0", "3"],
    correctAnswer: "1"
  },
  {
    question: "Which function is used to count elements in an array?",
    options: ["size()", "count()", "length()", "num()"],
    correctAnswer: "count()"
  },
  {
    question: "What is the result of `10 == '10'` in PHP?",
    options: ["true", "false", "Error", "null"],
    correctAnswer: "true"
  },
  {
    question: "What will `var_dump(null)` output?",
    options: ["string(0) \"\"", "NULL", "0", "undefined"],
    correctAnswer: "NULL"
  },
  {
    question: "What is the file extension of PHP files?",
    options: [".html", ".js", ".php", ".xml"],
    correctAnswer: ".php"
  },
  {
    question: "Which of the following is NOT a valid PHP data type?",
    options: ["Integer", "Boolean", "Character", "Array"],
    correctAnswer: "Character"
  },
  {
    question: "What will `true && false` return?",
    options: ["true", "false", "1", "0"],
    correctAnswer: "false"
  },
  {
    question: "How do you declare an associative array in PHP?",
    options: ["$arr = ['a'=>1, 'b'=>2];", "$arr = array('a'=>1, 'b'=>2);", "Both A and B", "None"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which method can be used to read a file line-by-line?",
    options: ["fgets()", "readline()", "getLine()", "get_file_line()"],
    correctAnswer: "fgets()"
  },
  {
    question: "What does `===` mean in PHP?",
    options: ["Equality", "Equality with type", "Assign value", "Check if set"],
    correctAnswer: "Equality with type"
  },
  {
    question: "Which keyword is used to define a class in PHP?",
    options: ["class", "Class", "object", "define"],
    correctAnswer: "class"
  },
  {
    question: "What is the use of `exit()` function?",
    options: ["To exit a loop", "To end script execution", "To logout user", "None"],
    correctAnswer: "To end script execution"
  },
  {
    question: "Which function is used to check data type and value?",
    options: ["==", "===", "is()", "check()"],
    correctAnswer: "==="
  },
  {
    question: "How do you get the length of a string in PHP?",
    options: ["length()", "strlen()", "size()", "count()"],
    correctAnswer: "strlen()"
  },
  {
    question: "Which is a correct way to include HTML in PHP?",
    options: ["echo '<h1>Hello</h1>';", "print '<h1>Hello</h1>';", "Both A and B", "None"],
    correctAnswer: "Both A and B"
  },
  {
    question: "What does `$_SERVER['PHP_SELF']` return?",
    options: ["Path of the script", "File name", "URL of script", "Script itself"],
    correctAnswer: "Path of the script"
  },
  {
    question: "How do you end a class definition?",
    options: ["endclass", "}", "end()", "class_end"],
    correctAnswer: "}"
  },
  {
    question: "Which operator is used to suppress errors?",
    options: ["@", "#", "$", "&"],
    correctAnswer: "@"
  },
  {
    question: "What will `5 === '5'` return?",
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "false"
  },
  {
    question: "Which function is used to delete a file?",
    options: ["unlink()", "remove()", "delete()", "del()"],
    correctAnswer: "unlink()"
  },
  {
    question: "What does `require_once` do?",
    options: ["Includes file every time", "Includes file only once", "Deletes file", "None"],
    correctAnswer: "Includes file only once"
  },
    ],
    advance:[
      {
    question: "What is the difference between `include` and `require` in PHP?",
    options: [
      "`require` stops script on error; `include` does not",
      "`include` is faster than `require`",
      "`require` only works with functions",
      "`include` is only for remote files"
    ],
    correctAnswer: "`require` stops script on error; `include` does not"
  },
  {
    question: "Which of the following PHP functions can prevent SQL Injection?",
    options: [
      "mysqli_real_escape_string()",
      "addslashes()",
      "htmlspecialchars()",
      "strip_tags()"
    ],
    correctAnswer: "mysqli_real_escape_string()"
  },
  {
    question: "What does the `__construct()` method do in PHP?",
    options: [
      "Initializes class objects",
      "Destroys class objects",
      "Creates static methods",
      "Creates global variables"
    ],
    correctAnswer: "Initializes class objects"
  },
  {
    question: "What is the purpose of `final` keyword in PHP?",
    options: [
      "Prevents method overriding",
      "Declares constants",
      "Ends a loop",
      "Declares final variables"
    ],
    correctAnswer: "Prevents method overriding"
  },
  {
    question: "Which of the following functions is used to get a list of declared classes?",
    options: [
      "get_declared_classes()",
      "get_classes()",
      "class_list()",
      "declared_classes()"
    ],
    correctAnswer: "get_declared_classes()"
  },
  {
    question: "What is returned by `array_filter()`?",
    options: [
      "Array with elements passing the callback",
      "String of array values",
      "JSON of array",
      "Associative array only"
    ],
    correctAnswer: "Array with elements passing the callback"
  },
  {
    question: "Which interface must a class implement to be used in `foreach` loop with custom iteration?",
    options: [
      "Iterator",
      "ArrayAccess",
      "Traversable",
      "SeekableIterator"
    ],
    correctAnswer: "Iterator"
  },
  {
    question: "How do you define a trait in PHP?",
    options: [
      "Using `trait` keyword",
      "Using `interface`",
      "Using `abstract` keyword",
      "Using `module`"
    ],
    correctAnswer: "Using `trait` keyword"
  },
  {
    question: "Which of the following is used to serialize PHP values?",
    options: [
      "serialize()",
      "encode()",
      "pack()",
      "toString()"
    ],
    correctAnswer: "serialize()"
  },
  {
    question: "How do you declare a constant inside a class?",
    options: [
      "const NAME = 'value';",
      "define('NAME', 'value');",
      "var NAME = 'value';",
      "$NAME = 'value';"
    ],
    correctAnswer: "const NAME = 'value';"
  },
  {
  question: "What is the primary purpose of PHP's `spl_autoload_register()` function?",
  options: [
    "To register a custom error handler",
    "To load configuration files",
    "To automatically load classes on demand",
    "To define session variables"
  ],
  correctAnswer: "To automatically load classes on demand"
},
{
  question: "What will `get_class($this)` return in a class method?",
  options: [
    "The name of the parent class",
    "The name of the current class",
    "The object itself",
    "An error"
  ],
  correctAnswer: "The name of the current class"
},
{
  question: "Which PHP function is used to compare two strings using natural order algorithm?",
  options: [
    "strcmp()",
    "strnatcmp()",
    "strcasecmp()",
    "strncmp()"
  ],
  correctAnswer: "strnatcmp()"
},
{
  question: "Which magic method is called when invoking inaccessible methods in PHP?",
  options: [
    "__call()",
    "__invoke()",
    "__get()",
    "__set()"
  ],
  correctAnswer: "__call()"
},
{
  question: "How can you prevent a class from being inherited in PHP?",
  options: [
    "Use `abstract` keyword",
    "Use `final` keyword",
    "Use `private` keyword",
    "Use `protected` keyword"
  ],
  correctAnswer: "Use `final` keyword"
},
{
  question: "Which function is used to get all the declared interfaces in PHP?",
  options: [
    "get_all_interfaces()",
    "get_interfaces()",
    "class_implements()",
    "get_declared_interfaces()"
  ],
  correctAnswer: "get_declared_interfaces()"
},
{
  question: "What is the purpose of `namespace` in PHP?",
  options: [
    "To create global variables",
    "To define constant values",
    "To group logically related classes and functions",
    "To import external libraries"
  ],
  correctAnswer: "To group logically related classes and functions"
},
{
  question: "Which function serializes a PHP value into a storable string?",
  options: [
    "serialize()",
    "json_encode()",
    "pack()",
    "encode()"
  ],
  correctAnswer: "serialize()"
},
{
  question: "What is the result of `true + true` in PHP?",
  options: [
    "1",
    "true",
    "2",
    "false"
  ],
  correctAnswer: "2"
},
{
  question: "Which of the following will NOT produce an error?",
  options: [
    "`$a = (int)\"123abc\";`",
    "`$b = (string)123;`",
    "`$c = (bool)0;`",
    "`$d = (array)\"text\";`"
  ],
  correctAnswer: "`$d = (array)\"text\";`"
},
{
  question: "What is the output of `count([null, false, 0, '', []])`?",
  options: [
    "0",
    "1",
    "5",
    "undefined"
  ],
  correctAnswer: "5"
},
{
  question: "What does the `instanceof` operator do in PHP?",
  options: [
    "Checks if a variable is an object",
    "Checks object type against a class",
    "Returns the type of object",
    "Compares class definitions"
  ],
  correctAnswer: "Checks object type against a class"
},
{
  question: "Which one of these is used to fetch a single row as an object using PDO?",
  options: [
    "fetch_array()",
    "fetch_assoc()",
    "fetchObject()",
    "fetch_row()"
  ],
  correctAnswer: "fetchObject()"
},
{
  question: "What is the visibility of class members accessible only within the class?",
  options: [
    "private",
    "public",
    "protected",
    "final"
  ],
  correctAnswer: "private"
},
{
  question: "How do you create a constant in PHP 7+?",
  options: [
    "`define('PI', 3.14);`",
    "`const PI = 3.14;`",
    "Both of the above",
    "None of the above"
  ],
  correctAnswer: "Both of the above"
},
{
  question: "What does `===` operator do in PHP?",
  options: [
    "Compares value only",
    "Compares data type only",
    "Compares value and data type",
    "Performs bitwise comparison"
  ],
  correctAnswer: "Compares value and data type"
},
{
  question: "What will `array_merge(['a'=>1], ['a'=>2])` return?",
  options: [
    "{a: 1}",
    "{a: 2}",
    "{a: [1, 2]}",
    "Error"
  ],
  correctAnswer: "{a: 2}"
},
{
  question: "Which interface is used to allow a class to be used in a `foreach` loop?",
  options: [
    "ArrayAccess",
    "Countable",
    "Iterator",
    "Traversable"
  ],
  correctAnswer: "Iterator"
},
{
  question: "Which function removes duplicate values from an array?",
  options: [
    "array_filter()",
    "array_unique()",
    "array_diff()",
    "array_values()"
  ],
  correctAnswer: "array_unique()"
},
{
  question: "Which error type cannot be caught with `try...catch` in PHP?",
  options: [
    "Parse error",
    "Exception",
    "Error",
    "Throwable"
  ],
  correctAnswer: "Parse error"
},
{
  question: "Which PHP function checks if a variable is set and is not null?",
  options: [
    "isset()",
    "empty()",
    "is_null()",
    "defined()"
  ],
  correctAnswer: "isset()"
},
{
  question: "What is the purpose of `use` keyword in PHP?",
  options: [
    "To include a class file",
    "To import namespaces",
    "To define a variable",
    "To create a trait"
  ],
  correctAnswer: "To import namespaces"
},
{
  question: "Which feature is used to share methods across multiple classes?",
  options: [
    "Interfaces",
    "Traits",
    "Abstract Classes",
    "Inheritance"
  ],
  correctAnswer: "Traits"
},
{
  question: "What will `implode('-', [1, 2, 3])` return?",
  options: [
    "123",
    "1-2-3",
    "[1,2,3]",
    "Error"
  ],
  correctAnswer: "1-2-3"
},
{
  question: "Which of the following is a valid way to handle exceptions in PHP?",
  options: [
    "throw new Error()",
    "catch(Error $e)",
    "try { } catch (Exception $e) { }",
    "All of the above"
  ],
  correctAnswer: "All of the above"
},
{
  question: "Which version of PHP introduced scalar type declarations?",
  options: [
    "5.6",
    "7.0",
    "7.1",
    "8.0"
  ],
  correctAnswer: "7.0"
},
{
  question: "What is the output of `var_dump((bool)[]);`?",
  options: [
    "true",
    "false",
    "0",
    "1"
  ],
  correctAnswer: "false"
},
{
  question: "What is a closure in PHP?",
  options: [
    "A method inside a class",
    "A file that contains PHP code",
    "An anonymous function",
    "A class constant"
  ],
  correctAnswer: "An anonymous function"
},
{
  question: "How do you declare a nullable type in PHP 7.1+?",
  options: [
    "`function foo(?string $name)`",
    "`function foo(string $name = null)`",
    "Both",
    "None"
  ],
  correctAnswer: "Both"
},
{
  question: "What is the purpose of `yield` in PHP?",
  options: [
    "To return a value and exit function",
    "To define asynchronous code",
    "To create a generator",
    "To define a constant"
  ],
  correctAnswer: "To create a generator"
},
{
  question: "Which function will return the current script’s filename?",
  options: [
    "`$_SERVER['PHP_SELF']`",
    "`__FILE__`",
    "`basename(__FILE__)`",
    "All of the above"
  ],
  correctAnswer: "All of the above"
},
{
  question: "What does `static` keyword mean in class method?",
  options: [
    "Can be called without an instance",
    "Can only be used once",
    "Cannot be inherited",
    "Private method"
  ],
  correctAnswer: "Can be called without an instance"
},
{
  question: "What will happen if you access an undefined constant?",
  options: [
    "Returns null",
    "Throws error",
    "Interpreted as string",
    "Returns undefined"
  ],
  correctAnswer: "Interpreted as string"
},
{
  question: "What is the default scope of a class member?",
  options: [
    "public",
    "private",
    "protected",
    "none"
  ],
  correctAnswer: "public"
},
{
  question: "What is the difference between `==` and `===`?",
  options: [
    "Both check equality",
    "`===` checks type too",
    "`==` is for strings only",
    "No difference"
  ],
  correctAnswer: "`===` checks type too"
},
{
  question: "What will `echo (int) 5.9;` output?",
  options: [
    "6",
    "5",
    "Error",
    "Undefined"
  ],
  correctAnswer: "5"
},
{
  question: "Which keyword is used to inherit a class?",
  options: [
    "extends",
    "inherits",
    "implements",
    "interface"
  ],
  correctAnswer: "extends"
},
{
  question: "Which function can be used to read a file into an array?",
  options: [
    "fread()",
    "file_get_contents()",
    "readfile()",
    "file()"
  ],
  correctAnswer: "file()"
},
{
  question: "What does the `clone` keyword do in PHP?",
  options: [
    "Copies an object",
    "Clones a class",
    "Duplicates a function",
    "Creates a new class"
  ],
  correctAnswer: "Copies an object"
},
    ]
  },
     c:{
    easy:[
{
    question: "Which of the following is a valid C variable name?",
    options: ["int", "float", "total_sum", "char*"],
    correctAnswer: "total_sum"
  },
  {
    question: "Which function is used to print output in C?",
    options: ["print()", "printf()", "cout", "System.out.print()"],
    correctAnswer: "printf()"
  },
  {
    question: "Which function is used to read input in C?",
    options: ["scanf()", "cin", "input()", "gets()"],
    correctAnswer: "scanf()"
  },
  {
    question: "Which header file is required for printf() function?",
    options: ["<conio.h>", "<stdlib.h>", "<stdio.h>", "<string.h>"],
    correctAnswer: "<stdio.h>"
  },
  {
    question: "What is the size of an `int` in C (typically)?",
    options: ["2 or 4 bytes", "8 bytes", "1 byte", "Depends on compiler"],
    correctAnswer: "2 or 4 bytes"
  },
  {
    question: "What is the starting index of arrays in C?",
    options: ["1", "0", "-1", "Depends on type"],
    correctAnswer: "0"
  },
  {
    question: "What is the correct syntax for a for loop?",
    options: [
      "for i = 0 to 10",
      "for (int i = 0; i < 10; i++)",
      "loop i from 0 to 10",
      "repeat(i=0; i<10; i++)"
    ],
    correctAnswer: "for (int i = 0; i < 10; i++)"
  },
  {
    question: "Which of the following is a keyword in C?",
    options: ["new", "define", "class", "return"],
    correctAnswer: "return"
  },
  {
    question: "What is the correct way to declare a pointer?",
    options: ["int p*", "int *p", "int &p", "pointer p"],
    correctAnswer: "int *p"
  },
  {
    question: "What will `sizeof(char)` return?",
    options: ["2", "1", "4", "Depends on OS"],
    correctAnswer: "1"
  },
  {
    question: "Which operator is used to get the address of a variable?",
    options: ["*", "&", "%", "#"],
    correctAnswer: "&"
  },
  {
    question: "Which symbol is used to end a statement in C?",
    options: [":", ".", ";", ","],
    correctAnswer: ";"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while"
  },
  {
    question: "How do you declare a constant in C?",
    options: ["const int x;", "#define x 10", "static const x;", "final int x;"],
    correctAnswer: "#define x 10"
  },
  {
    question: "What is the keyword to define a function in C?",
    options: ["def", "function", "void", "fun"],
    correctAnswer: "void"
  },
  {
    question: "Which of the following is not a data type in C?",
    options: ["float", "double", "real", "int"],
    correctAnswer: "real"
  },
  {
    question: "How do you comment a single line in C?",
    options: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
    correctAnswer: "// comment"
  },
  {
    question: "Which of the following is a logical operator in C?",
    options: ["&&", "==", "++", "%"],
    correctAnswer: "&&"
  },
  {
    question: "What will `5 / 2` return in C?",
    options: ["2.5", "2", "3", "Compilation error"],
    correctAnswer: "2"
  },
  {
    question: "What does `NULL` represent in C?",
    options: ["0", "Nothing", "Empty pointer", "Both 0 and empty pointer"],
    correctAnswer: "Both 0 and empty pointer"
  },
  {
    question: "Which header file is needed for malloc()?",
    options: ["<malloc.h>", "<stdlib.h>", "<stdio.h>", "<memory.h>"],
    correctAnswer: "<stdlib.h>"
  },
  {
    question: "What does `++i` do?",
    options: ["Post increment", "Pre increment", "Assign i to i", "None"],
    correctAnswer: "Pre increment"
  },
  {
    question: "What does `--i` mean?",
    options: ["Increment i", "Decrement i before use", "Decrement i after use", "None"],
    correctAnswer: "Decrement i before use"
  },
  {
    question: "Which of these is used to define macros?",
    options: ["#macro", "#define", "define", "macro"],
    correctAnswer: "#define"
  },
  {
    question: "Which keyword is used to return value from a function?",
    options: ["break", "return", "continue", "exit"],
    correctAnswer: "return"
  },
  {
    question: "Which of the following is not a loop structure in C?",
    options: ["for", "while", "do-while", "repeat-until"],
    correctAnswer: "repeat-until"
  },
  {
    question: "Which data type would you use to store a character?",
    options: ["char", "string", "character", "text"],
    correctAnswer: "char"
  },
  {
    question: "Which character is used for newline in C?",
    options: ["\\n", "\\r", "\\t", "\\b"],
    correctAnswer: "\\n"
  },
  {
    question: "Which format specifier is used to print integers?",
    options: ["%d", "%f", "%s", "%c"],
    correctAnswer: "%d"
  },
  {
    question: "Which of the following denotes a pointer to an integer?",
    options: ["int *p", "int p*", "*int p", "pointer int p"],
    correctAnswer: "int *p"
  },
  {
    question: "What is the default return type of a function if not specified?",
    options: ["int", "void", "float", "char"],
    correctAnswer: "int"
  },
  {
    question: "Which of these is the ternary operator?",
    options: ["?:", "&&", "::", "#@"],
    correctAnswer: "?:"
  },
  {
    question: "Which operator is used to compare two values?",
    options: ["==", "=", "<>", "equals"],
    correctAnswer: "=="
  },
  {
    question: "What does `%` operator do in C?",
    options: ["Division", "Modulo", "Bitwise AND", "Nothing"],
    correctAnswer: "Modulo"
  },
  {
    question: "Which operator has the highest precedence?",
    options: ["*", "()", "&&", "++"],
    correctAnswer: "()"
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: ["exit", "break", "continue", "stop"],
    correctAnswer: "break"
  },
  {
    question: "What is the result of `3 + 4 * 2`?",
    options: ["14", "11", "16", "7"],
    correctAnswer: "11"
  },
  {
    question: "What is used to store multiple values of same type?",
    options: ["Variable", "Array", "Structure", "Pointer"],
    correctAnswer: "Array"
  },
  {
    question: "Which is not a relational operator?",
    options: ["==", "<", ">=", "++"],
    correctAnswer: "++"
  },
  {
    question: "Which function terminates the program?",
    options: ["stop()", "exit()", "quit()", "terminate()"],
    correctAnswer: "exit()"
  },
  {
    question: "What is the output of `printf(\"%d\", 10 > 5);`?",
    options: ["true", "1", "0", "Error"],
    correctAnswer: "1"
  },
  {
    question: "How to take a character input in C?",
    options: ["scanf(\"%c\", &ch);", "input(ch);", "cin >> ch;", "read(ch);"],
    correctAnswer: "scanf(\"%c\", &ch);"
  },
  {
    question: "Which header file is needed for string functions?",
    options: ["<string.h>", "<stdlib.h>", "<stdio.h>", "<conio.h>"],
    correctAnswer: "<string.h>"
  },
  {
    question: "What is the value of `sizeof(int)`?",
    options: ["2 or 4", "8", "16", "Depends on RAM"],
    correctAnswer: "2 or 4"
  },
  {
    question: "Which format specifier is used for character?",
    options: ["%s", "%d", "%c", "%f"],
    correctAnswer: "%c"
  },
  {
    question: "Which of the following is used to allocate dynamic memory?",
    options: ["malloc()", "new", "alloc()", "calloc"],
    correctAnswer: "malloc()"
  },
  {
    question: "Which of the following stores address?",
    options: ["Variable", "Function", "Pointer", "Array"],
    correctAnswer: "Pointer"
  },
  {
    question: "Which data type is used to store decimals?",
    options: ["int", "char", "float", "long"],
    correctAnswer: "float"
  },
  {
    question: "Which keyword is used to define a structure?",
    options: ["class", "struct", "record", "define"],
    correctAnswer: "struct"
  },
  {
    question: "Which function is used to get the length of a string?",
    options: ["strlen()", "length()", "strlength()", "size()"],
    correctAnswer: "strlen()"
  },
    ],
    advance:[
      {
    question: "What is the output of the following code?\nint main() { int a = 10; printf(\"%d\", a++ + ++a); return 0; }",
    options: ["21", "22", "20", "Undefined behavior"],
    correctAnswer: "21"
  },
  {
    question: "Which of the following is not a valid storage class in C?",
    options: ["auto", "register", "volatile", "static"],
    correctAnswer: "volatile"
  },
  {
    question: "What is the size of an empty structure in C (on most compilers)?",
    options: ["0", "1", "2", "Depends on compiler"],
    correctAnswer: "1"
  },
  {
    question: "Which keyword is used to prevent a variable from being modified?",
    options: ["const", "static", "volatile", "register"],
    correctAnswer: "const"
  },
  {
    question: "What is the output of:\nint a = 5;\nprintf(\"%d\", a = a++);",
    options: ["5", "6", "Undefined", "Compiler error"],
    correctAnswer: "5"
  },
  {
    question: "Which function is used to dynamically allocate memory in C?",
    options: ["malloc()", "new", "alloc()", "calloc()"],
    correctAnswer: "malloc()"
  },
  {
    question: "What does the 'extern' keyword signify?",
    options: ["Local variable", "Global variable", "Variable defined elsewhere", "Constant"],
    correctAnswer: "Variable defined elsewhere"
  },
  {
    question: "Which of these is a correct format specifier for printing a pointer?",
    options: ["%p", "%d", "%u", "%x"],
    correctAnswer: "%p"
  },
  {
    question: "What is the precedence of logical AND (&&) operator?",
    options: ["Higher than == but lower than +", "Lower than ||", "Lower than ==", "Higher than !"],
    correctAnswer: "Lower than =="
  },
  {
    question: "Which of the following is not a valid C identifier?",
    options: ["_var", "2var", "var_2", "var"],
    correctAnswer: "2var"
  },
  {
    question: "Which of the following functions is used to release dynamically allocated memory?",
    options: ["delete()", "free()", "remove()", "dispose()"],
    correctAnswer: "free()"
  },
  {
    question: "What is the value of sizeof('A')?",
    options: ["1", "2", "4", "Depends on compiler"],
    correctAnswer: "4"
  },
  {
    question: "Which of these is a function pointer declaration?",
    options: ["int (*fp)(int)", "int *fp(int)", "int &fp(int)", "int fp*()"],
    correctAnswer: "int (*fp)(int)"
  },
  {
    question: "Which type modifier is used to give variables more precision?",
    options: ["long", "signed", "unsigned", "short"],
    correctAnswer: "long"
  },
  {
    question: "What is a segmentation fault?",
    options: ["File not found", "Array out of bounds", "Accessing invalid memory", "Syntax error"],
    correctAnswer: "Accessing invalid memory"
  },
  {
    question: "Which header file defines the size_t type?",
    options: ["<stdlib.h>", "<stddef.h>", "<stdio.h>", "<stdint.h>"],
    correctAnswer: "<stddef.h>"
  },
  {
    question: "Which is true about macros in C?",
    options: ["They are evaluated at compile time", "They are type-safe", "They allow recursion", "They have scope rules"],
    correctAnswer: "They are evaluated at compile time"
  },
  {
    question: "Which operator cannot be overloaded in C?",
    options: ["+", "-", "=", "->"],
    correctAnswer: "->"
  },
  {
    question: "Which function can be used to move the file pointer to a specific position?",
    options: ["fread()", "fseek()", "ftell()", "rewind()"],
    correctAnswer: "fseek()"
  },
  {
    question: "What is the value of EOF?",
    options: ["0", "1", "-1", "NULL"],
    correctAnswer: "-1"
  },
  {
    question: "Which of the following is not a valid format specifier in C?",
    options: ["%lf", "%lld", "%hd", "%k"],
    correctAnswer: "%k"
  },
  {
    question: "What is the result of the expression (5 & 3)?",
    options: ["1", "2", "3", "0"],
    correctAnswer: "1"
  },
  {
    question: "What is the default return type of main() in C?",
    options: ["void", "int", "char", "float"],
    correctAnswer: "int"
  },
  {
    question: "What will sizeof(void) return?",
    options: ["0", "1", "Depends on platform", "Compiler error"],
    correctAnswer: "1"
  },
  {
    question: "Which of the following can be used to create a delay?",
    options: ["sleep()", "wait()", "pause()", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the use of 'volatile' keyword?",
    options: ["Optimize performance", "Disable optimization", "Enable multithreading", "Restrict memory"],
    correctAnswer: "Disable optimization"
  },
  {
    question: "What does 'static' do inside a function?",
    options: ["Creates a global variable", "Keeps value between calls", "Makes variable read-only", "Allocates on heap"],
    correctAnswer: "Keeps value between calls"
  },
  {
    question: "Which library function is used to find the length of a string?",
    options: ["strlen()", "size()", "length()", "strsize()"],
    correctAnswer: "strlen()"
  },
  {
    question: "What is the output of 'printf(\"%c\", 65);'?",
    options: ["65", "A", "a", "Error"],
    correctAnswer: "A"
  },
  {
    question: "Which function is used to read formatted input in C?",
    options: ["scanf()", "gets()", "fgets()", "read()"],
    correctAnswer: "scanf()"
  },
  {
    question: "Which operator is used to access structure members via pointer?",
    options: [".", "*", "&", "->"],
    correctAnswer: "->"
  },
  {
    question: "What is NULL in C?",
    options: ["0", "Empty value", "Invalid pointer", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which of these is not a loop control structure?",
    options: ["for", "do-while", "switch", "while"],
    correctAnswer: "switch"
  },
  {
    question: "Which function is used to compare two strings?",
    options: ["strcpy()", "strcmp()", "strcat()", "strdup()"],
    correctAnswer: "strcmp()"
  },
  {
    question: "Which preprocessor directive is used to define constants?",
    options: ["#define", "#include", "#ifdef", "#pragma"],
    correctAnswer: "#define"
  },
  {
    question: "Which of the following is not a valid pointer declaration?",
    options: ["int *p;", "float* ptr;", "char *1ptr;", "int* p1, p2;"],
    correctAnswer: "char *1ptr;"
  },
  {
    question: "How many bytes does an 'int' typically occupy in C (on most platforms)?",
    options: ["2", "4", "8", "Depends on compiler"],
    correctAnswer: "4"
  },
  {
    question: "Which of the following functions can be used to write to a file?",
    options: ["fprintf()", "fwrite()", "putc()", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is the result of: 10 << 1 ?",
    options: ["5", "20", "0", "2"],
    correctAnswer: "20"
  },
  {
    question: "What is the purpose of the break statement?",
    options: ["Exit loop", "Pause program", "Skip iteration", "None"],
    correctAnswer: "Exit loop"
  },
  {
    question: "Which of these is not a valid character constant?",
    options: ["'A'", "'\\n'", "'12'", "'\\0'"],
    correctAnswer: "'12'"
  },
  {
    question: "Which is true about function declaration?",
    options: ["It must match the definition", "Can omit return type", "Can have different parameters", "Optional in C"],
    correctAnswer: "It must match the definition"
  },
  {
    question: "Which header file includes malloc()?",
    options: ["<stdlib.h>", "<malloc.h>", "<stdio.h>", "<string.h>"],
    correctAnswer: "<stdlib.h>"
  },
  {
    question: "What will be returned by main() by default if no return statement is written?",
    options: ["0", "1", "Compiler error", "Undefined"],
    correctAnswer: "0"
  },
  {
    question: "What does the expression *(*(arr+i)+j) refer to?",
    options: ["2D array element", "Pointer to pointer", "Invalid", "Address"],
    correctAnswer: "2D array element"
  },
  {
    question: "Which of the following is true about unions?",
    options: ["All members share the same memory", "Each has separate memory", "Used like classes", "Stores only integers"],
    correctAnswer: "All members share the same memory"
  },
  {
    question: "What is the default value of an uninitialized static variable?",
    options: ["0", "Garbage", "1", "Depends"],
    correctAnswer: "0"
  },
  {
    question: "Which operator has the highest precedence?",
    options: ["++", "*", "()", "="],
    correctAnswer: "()"
  },
  {
    question: "Which function converts string to integer?",
    options: ["atoi()", "itoa()", "strint()", "toint()"],
    correctAnswer: "atoi()"
  },
  {
    question: "Which keyword is used to exit from the loop prematurely?",
    options: ["exit", "break", "return", "continue"],
    correctAnswer: "break"
  }
    ]
  },
     dart:{
    easy:[
    {
      question: "Which company developed Dart?",
      options: ["Google", "Microsoft", "Apple", "Facebook"],
      correctAnswer: "Google",
    },
    {
      question: "What is the file extension for Dart files?",
      options: [".dart", ".drt", ".dt", ".dartlang"],
      correctAnswer: ".dart",
    },
    {
      question: "Which keyword is used to define a constant value in Dart?",
      options: ["const", "let", "final", "static"],
      correctAnswer: "const",
    },
    {
      question: "Which of the following is the correct way to define a list in Dart?",
      options: [
        "List<int> nums = [1, 2, 3];",
        "list<int> nums = (1, 2, 3);",
        "nums = List[1, 2, 3];",
        "nums = <1, 2, 3>",
      ],
      correctAnswer: "List<int> nums = [1, 2, 3];",
    },
    {
      question: "What does `null` represent in Dart?",
      options: ["An empty value", "A zero", "No value", "An error"],
      correctAnswer: "No value",
    },
    {
      question: "Which symbol is used for string interpolation in Dart?",
      options: ["$", "&", "%", "#"],
      correctAnswer: "$",
    },
    {
      question: "Which keyword is used to create an unchangeable variable after initialization?",
      options: ["final", "var", "let", "const"],
      correctAnswer: "final",
    },
    {
      question: "How do you write a single-line comment in Dart?",
      options: ["//", "/*", "#", "<!--"],
      correctAnswer: "//",
    },
    {
      question: "What data type is used to represent decimal numbers in Dart?",
      options: ["double", "float", "decimal", "int"],
      correctAnswer: "double",
    },
    {
      question: "Which function prints output in Dart?",
      options: ["print()", "echo()", "log()", "show()"],
      correctAnswer: "print()",
    },
    {
      question: "What keyword is used to define a function in Dart?",
      options: ["void", "function", "def", "fn"],
      correctAnswer: "void",
    },
    {
      question: "What is the default value of an uninitialized variable in Dart?",
      options: ["null", "0", "undefined", "empty"],
      correctAnswer: "null",
    },
    {
      question: "How do you create a multi-line comment in Dart?",
      options: ["/* comment */", "// comment", "# comment", "-- comment"],
      correctAnswer: "/* comment */",
    },
    {
      question: "What type of language is Dart?",
      options: ["Object-oriented", "Functional", "Procedural", "Scripting"],
      correctAnswer: "Object-oriented",
    },
    {
      question: "Which Dart keyword is used for inheritance?",
      options: ["extends", "implements", "inherits", "inheritsFrom"],
      correctAnswer: "extends",
    },
    {
      question: "What will this print: `print(3 == 3);`?",
      options: ["true", "false", "3", "null"],
      correctAnswer: "true",
    },
    {
      question: "Which operator is used to concatenate strings?",
      options: ["+", ".", "&", "*"],
      correctAnswer: "+",
    },
    {
      question: "Which Dart data type stores true/false?",
      options: ["bool", "boolean", "int", "bit"],
      correctAnswer: "bool",
    },
    {
      question: "What keyword is used to handle exceptions in Dart?",
      options: ["try", "catch", "finally", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "Which collection allows key-value pairs?",
      options: ["Map", "List", "Set", "Queue"],
      correctAnswer: "Map",
    },
    {
      question: "How do you define a constant list in Dart?",
      options: [
        "const list = [1, 2, 3];",
        "final list = const [1, 2, 3];",
        "Both A and B",
        "None",
      ],
      correctAnswer: "Both A and B",
    },
    {
      question: "Which syntax is used for declaring a nullable variable?",
      options: ["String? name;", "String name?", "?String name;", "String name = null;"],
      correctAnswer: "String? name;",
    },
    {
      question: "Which function is used to convert a string to an integer?",
      options: ["int.parse()", "parseInt()", "toInt()", "convert()"],
      correctAnswer: "int.parse()",
    },
    {
      question: "Which type of loop is supported by Dart?",
      options: ["for", "while", "do-while", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "What is the output of: `print('5' + '10');`?",
      options: ["510", "15", "Error", "undefined"],
      correctAnswer: "510",
    },
    {
      question: "How do you create a set in Dart?",
      options: ["var s = {1, 2, 3};", "Set s = [1, 2, 3];", "s = Set()", "new Set[1,2,3]"],
      correctAnswer: "var s = {1, 2, 3};",
    },
    {
      question: "Which keyword is used to return a value from a function?",
      options: ["return", "break", "exit", "continue"],
      correctAnswer: "return",
    },
    {
      question: "What keyword is used to define an abstract class?",
      options: ["abstract", "interface", "virtual", "base"],
      correctAnswer: "abstract",
    },
    {
      question: "Which keyword is used to implement an interface in Dart?",
      options: ["implements", "extends", "interface", "with"],
      correctAnswer: "implements",
    },
    {
      question: "Which symbol is used to define an arrow function in Dart?",
      options: ["=>", "->", "<-", "::"],
      correctAnswer: "=>",
    },
    {
      question: "Which operator is used for null-aware assignment?",
      options: ["??=", "?:", "=>", "!="],
      correctAnswer: "??=",
    },
    {
      question: "What will `print(5 ~/ 2);` output?",
      options: ["2", "2.5", "3", "Error"],
      correctAnswer: "2",
    },
    {
      question: "What type is the result of `5 / 2` in Dart?",
      options: ["double", "int", "float", "num"],
      correctAnswer: "double",
    },
    {
      question: "How do you check if a list is empty?",
      options: ["list.isEmpty", "list == []", "list.length == null", "list == 0"],
      correctAnswer: "list.isEmpty",
    },
    {
      question: "What is the parent class of all Dart classes?",
      options: ["Object", "Base", "Root", "Super"],
      correctAnswer: "Object",
    },
    {
      question: "Which method is called when an object is created?",
      options: ["constructor", "init", "create", "onInit"],
      correctAnswer: "constructor",
    },
    {
      question: "Which keyword prevents further extension of a class?",
      options: ["final", "const", "sealed", "base"],
      correctAnswer: "final",
    },
    {
      question: "Which method returns the length of a string?",
      options: ["length", "count", "size", "getLength"],
      correctAnswer: "length",
    },
    {
      question: "Which of these is a valid map in Dart?",
      options: [
        "var map = {'a': 1, 'b': 2};",
        "map = (a:1, b:2);",
        "var m = [a => 1]",
        "var m = {1, 2, 3};",
      ],
      correctAnswer: "var map = {'a': 1, 'b': 2};",
    },
    {
      question: "How do you add an element to a list in Dart?",
      options: ["list.add()", "list.push()", "list.append()", "list.insert()"],
      correctAnswer: "list.add()",
    },
    {
      question: "What type does the function `print()` return?",
      options: ["void", "null", "int", "String"],
      correctAnswer: "void",
    },
    {
      question: "Which keyword makes a class usable only in the same file?",
      options: ["private", "_", "internal", "none"],
      correctAnswer: "_",
    },
    {
      question: "Which operator checks if two variables refer to the same object?",
      options: ["identical()", "==", "equals()", "==="],
      correctAnswer: "identical()",
    },
    {
      question: "What does `late` keyword indicate?",
      options: ["Variable will be initialized later", "Optional", "Nullable", "Final"],
      correctAnswer: "Variable will be initialized later",
    },
    {
      question: "Which symbol is used for cascade notation?",
      options: ["..", "::", "=>", "&&"],
      correctAnswer: "..",
    },
    {
      question: "Which keyword is used to mix in functionality?",
      options: ["with", "mixin", "include", "extend"],
      correctAnswer: "with",
    },
    {
      question: "Which is a valid way to declare a Map?",
      options: [
        "Map<String, int> scores = {'Ali': 100};",
        "Map = {1,2,3};",
        "Scores = <'Ali', 100>;",
        "Map scores = (Ali, 100);",
      ],
      correctAnswer: "Map<String, int> scores = {'Ali': 100};",
    },
    {
      question: "What is the result of `null ?? 'Hello'`?",
      options: ["Hello", "null", "Error", "undefined"],
      correctAnswer: "Hello",
    },
    {
      question: "Which method converts a string to lowercase?",
      options: ["toLowerCase()", "lower()", "toLower()", "lowercase()"],
      correctAnswer: "toLowerCase()",
    },
    {
  question: "Which symbol is used to denote a single-line comment in Dart?",
  options: ["/* */", "//", "#", "<!-- -->"],
  correctAnswer: "//"
},
{
  question: "What keyword is used to define a constant variable in Dart?",
  options: ["let", "const", "static", "final"],
  correctAnswer: "const"
},
    ],
    advance:[
        {
    question: "What is the main difference between `final` and `const` in Dart?",
    options: [
      "Both can be reassigned",
      "`final` is compile-time constant, `const` is run-time constant",
      "`const` is compile-time constant, `final` is run-time constant",
      "There is no difference"
    ],
    correctAnswer: "`const` is compile-time constant, `final` is run-time constant"
  },
  {
    question: "Which library is used for asynchronous programming in Dart?",
    options: ["dart:math", "dart:io", "dart:async", "dart:core"],
    correctAnswer: "dart:async"
  },
  {
    question: "How does Dart handle null safety?",
    options: [
      "Through static analysis",
      "By default, all variables are non-nullable unless specified",
      "Null safety is not supported",
      "Only with runtime checks"
    ],
    correctAnswer: "By default, all variables are non-nullable unless specified"
  },
  {
    question: "Which operator is used in Dart to provide a default value if null?",
    options: ["??", "||", "&&", "?: "],
    correctAnswer: "??"
  },
  {
    question: "What does the `late` keyword do in Dart?",
    options: [
      "Initializes a variable lazily",
      "Marks a variable as final",
      "Makes a variable static",
      "Delays code execution"
    ],
    correctAnswer: "Initializes a variable lazily"
  },
  {
    question: "Which of the following is true about isolates in Dart?",
    options: [
      "They share memory between threads",
      "They are used for concurrent programming",
      "They are the same as threads",
      "They cannot pass data"
    ],
    correctAnswer: "They are used for concurrent programming"
  },
  {
    question: "What does the `factory` keyword indicate in Dart?",
    options: [
      "A function that creates widgets",
      "A function that must return a new instance",
      "A constructor that can return a cached instance",
      "A constructor that creates multiple objects"
    ],
    correctAnswer: "A constructor that can return a cached instance"
  },
  {
    question: "Which syntax is correct for implementing an interface in Dart?",
    options: [
      "class A implements B {}",
      "class A extends B {}",
      "class A with B {}",
      "class A interface B {}"
    ],
    correctAnswer: "class A implements B {}"
  },
  {
    question: "What is a mixin in Dart?",
    options: [
      "A class with abstract methods",
      "A class that cannot be instantiated",
      "A class used to add functionality to other classes",
      "A generic class"
    ],
    correctAnswer: "A class used to add functionality to other classes"
  },
  {
    question: "Which annotation is used to mark deprecated code in Dart?",
    options: ["@override", "@deprecated", "@obsolete", "@remove"],
    correctAnswer: "@deprecated"
  },
  {
    question: "Which method is used to listen to a stream?",
    options: [".listen()", ".await()", ".observe()", ".on()"],
    correctAnswer: ".listen()"
  },
  {
    question: "What is the return type of an asynchronous function?",
    options: ["void", "Stream", "Future", "async"],
    correctAnswer: "Future"
  },
  {
    question: "What does the `await` keyword do in Dart?",
    options: [
      "Pauses execution until a Future completes",
      "Declares a function as asynchronous",
      "Pauses the compiler",
      "Runs a function immediately"
    ],
    correctAnswer: "Pauses execution until a Future completes"
  },
  {
    question: "What happens if you call `await` inside a non-async function?",
    options: [
      "The code still runs fine",
      "It throws a runtime error",
      "It throws a compile-time error",
      "It will be ignored"
    ],
    correctAnswer: "It throws a compile-time error"
  },
  {
    question: "Which Dart keyword is used to prevent a class from being subclassed?",
    options: ["final", "const", "static", "sealed"],
    correctAnswer: "sealed"
  },
  {
    question: "Which of the following is true about `Future.wait()` in Dart?",
    options: [
      "It runs Futures sequentially",
      "It waits for all Futures to complete",
      "It cancels all other Futures after one completes",
      "It only runs one Future"
    ],
    correctAnswer: "It waits for all Futures to complete"
  },
  {
    question: "What is the role of `StreamController` in Dart?",
    options: [
      "To manipulate database connections",
      "To manage UI components",
      "To control and add events to a stream",
      "To parse JSON data"
    ],
    correctAnswer: "To control and add events to a stream"
  },
  {
    question: "What is the type of a function that returns a `Future<String>`?",
    options: [
      "Function",
      "FutureFunction",
      "Future<String> Function()",
      "String Function()"
    ],
    correctAnswer: "Future<String> Function()"
  },
  {
    question: "What is the purpose of the `covariant` keyword in Dart?",
    options: [
      "It allows overriding a parameter with a subtype",
      "It defines an abstract class",
      "It changes null safety",
      "It marks a function as async"
    ],
    correctAnswer: "It allows overriding a parameter with a subtype"
  },
  {
    question: "Which collection type in Dart maintains the insertion order?",
    options: ["Set", "List", "Map", "HashMap"],
    correctAnswer: "List"
  },
  {
    question: "What is the return type of `map()` on a list?",
    options: ["Map", "List", "Iterable", "Set"],
    correctAnswer: "Iterable"
  },
  {
    question: "What does the `??=` operator do in Dart?",
    options: [
      "Assigns a value if the variable is null",
      "Compares values",
      "Inverts a boolean",
      "Adds null to a value"
    ],
    correctAnswer: "Assigns a value if the variable is null"
  },
  {
    question: "What does `async*` mean in Dart?",
    options: [
      "It is invalid syntax",
      "It declares a generator function that returns a Stream",
      "It returns a Future",
      "It declares a factory function"
    ],
    correctAnswer: "It declares a generator function that returns a Stream"
  },
  {
    question: "What is the default value of an uninitialized variable in Dart?",
    options: ["0", "null", "false", "undefined"],
    correctAnswer: "null"
  },
  {
    question: "How do you create a constant list in Dart?",
    options: ["List()", "const []", "final []", "var []"],
    correctAnswer: "const []"
  },
  {
    question: "Which keyword defines an abstract method in Dart?",
    options: ["virtual", "override", "abstract", "none (no keyword)"],
    correctAnswer: "none (no keyword)"
  },
  {
    question: "What does the `is` operator check in Dart?",
    options: [
      "If a value is null",
      "If two variables are equal",
      "If an object is of a specific type",
      "If a function exists"
    ],
    correctAnswer: "If an object is of a specific type"
  },
  {
    question: "Which of the following methods removes the last item in a list?",
    options: [".pop()", ".remove()", ".removeLast()", ".deleteLast()"],
    correctAnswer: ".removeLast()"
  },
  {
    question: "What happens if you mutate a `const` list?",
    options: [
      "It allows it",
      "A warning is thrown",
      "A runtime error occurs",
      "A compile-time error occurs"
    ],
    correctAnswer: "A compile-time error occurs"
  },
  {
    question: "Which keyword allows method chaining in Dart?",
    options: [".", "..", "::", "=>"],
    correctAnswer: ".."
  },
  {
    question: "Which Dart type is a supertype of all types?",
    options: ["Object", "dynamic", "var", "Any"],
    correctAnswer: "dynamic"
  },
  {
    question: "How do you make a Dart list immutable?",
    options: ["final list", "const list", "readonly list", "immutable list"],
    correctAnswer: "const list"
  },
  {
    question: "What is the entry point for every Dart program?",
    options: ["run()", "start()", "main()", "init()"],
    correctAnswer: "main()"
  },
  {
    question: "What is the result of `List.generate(3, (i) => i * i)`?",
    options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 4]", "[1, 4, 9]"],
    correctAnswer: "[0, 1, 4]"
  },
  {
    question: "How do you define a named parameter in a Dart function?",
    options: [
      "Using brackets []",
      "Using angle brackets <>",
      "Using curly braces {}",
      "Using parentheses ()"
    ],
    correctAnswer: "Using curly braces {}"
  },
  {
    question: "What is the type of `null` in Dart?",
    options: ["Object", "Null", "None", "void"],
    correctAnswer: "Null"
  },
  {
    question: "Which operator is used to call a superclass constructor?",
    options: ["super()", "this()", "parent()", "base()"],
    correctAnswer: "super()"
  },
  {
    question: "What does the `call()` method do in Dart?",
    options: [
      "Makes a class callable like a function",
      "Calls an API",
      "Starts the program",
      "Creates a new object"
    ],
    correctAnswer: "Makes a class callable like a function"
  },
  {
    question: "What does `rethrow` do in Dart?",
    options: [
      "Catches an exception",
      "Throws a new exception",
      "Re-throws the current exception",
      "Terminates the app"
    ],
    correctAnswer: "Re-throws the current exception"
  },
  {
    question: "Which operator checks if two objects reference the same memory?",
    options: ["==", "equals", "is", "identical()"],
    correctAnswer: "identical()"
  },
  {
    question: "What is the purpose of `@override`?",
    options: [
      "Marks that a method overrides a superclass method",
      "Makes a class abstract",
      "Prevents method overriding",
      "Used for constants"
    ],
    correctAnswer: "Marks that a method overrides a superclass method"
  },
  {
    question: "How can you make a class implement multiple interfaces?",
    options: [
      "Using `implements` with comma-separated list",
      "Using `extends`",
      "Using `mixin`",
      "Using `with` keyword"
    ],
    correctAnswer: "Using `implements` with comma-separated list"
  },
  {
    question: "What is the effect of using `cascade notation (..)`?",
    options: [
      "Chains multiple method calls on the same object",
      "Performs async operations",
      "Creates deep copies",
      "Combines classes"
    ],
    correctAnswer: "Chains multiple method calls on the same object"
  },
  {
    question: "Which method is used to parse a string to int?",
    options: ["int.parse()", "parseInt()", "toInt()", "int.from()"],
    correctAnswer: "int.parse()"
  },
  {
    question: "What happens if you use `break` outside of a loop?",
    options: [
      "It skips to the next function",
      "It gives a runtime warning",
      "It causes a compile-time error",
      "It’s ignored"
    ],
    correctAnswer: "It causes a compile-time error"
  },
  {
    question: "Which keyword is used for mixins?",
    options: ["with", "mixin", "extends", "include"],
    correctAnswer: "with"
  },
  {
    question: "How do you create a private variable in Dart?",
    options: ["Start with _", "Use private keyword", "Use var", "Use const"],
    correctAnswer: "Start with _"
  },
  {
    question: "Which Dart keyword is used to indicate that a method returns no value?",
    options: ["void", "null", "unit", "empty"],
    correctAnswer: "void"
  },
    {
    question: "What is the main difference between `final` and `const` in Dart?",
    options: [
      "Both can be reassigned",
      "`final` is compile-time constant, `const` is run-time constant",
      "`const` is compile-time constant, `final` is run-time constant",
      "There is no difference"
    ],
    correctAnswer: "`const` is compile-time constant, `final` is run-time constant"
  },
  {
    question: "Which library is used for asynchronous programming in Dart?",
    options: ["dart:math", "dart:io", "dart:async", "dart:core"],
    correctAnswer: "dart:async"
  },
  {
    question: "How does Dart handle null safety?",
    options: [
      "Through static analysis",
      "By default, all variables are non-nullable unless specified",
      "Null safety is not supported",
      "Only with runtime checks"
    ],
    correctAnswer: "By default, all variables are non-nullable unless specified"
  },
  {
    question: "Which operator is used in Dart to provide a default value if null?",
    options: ["??", "||", "&&", "?: "],
    correctAnswer: "??"
  },
  {
    question: "What does the `late` keyword do in Dart?",
    options: [
      "Initializes a variable lazily",
      "Marks a variable as final",
      "Makes a variable static",
      "Delays code execution"
    ],
    correctAnswer: "Initializes a variable lazily"
  },
  {
    question: "Which of the following is true about isolates in Dart?",
    options: [
      "They share memory between threads",
      "They are used for concurrent programming",
      "They are the same as threads",
      "They cannot pass data"
    ],
    correctAnswer: "They are used for concurrent programming"
  },
  {
    question: "What does the `factory` keyword indicate in Dart?",
    options: [
      "A function that creates widgets",
      "A function that must return a new instance",
      "A constructor that can return a cached instance",
      "A constructor that creates multiple objects"
    ],
    correctAnswer: "A constructor that can return a cached instance"
  },
  {
    question: "Which syntax is correct for implementing an interface in Dart?",
    options: [
      "class A implements B {}",
      "class A extends B {}",
      "class A with B {}",
      "class A interface B {}"
    ],
    correctAnswer: "class A implements B {}"
  },
  {
    question: "What is a mixin in Dart?",
    options: [
      "A class with abstract methods",
      "A class that cannot be instantiated",
      "A class used to add functionality to other classes",
      "A generic class"
    ],
    correctAnswer: "A class used to add functionality to other classes"
  },
  {
    question: "Which annotation is used to mark deprecated code in Dart?",
    options: ["@override", "@deprecated", "@obsolete", "@remove"],
    correctAnswer: "@deprecated"
  },
  {
    question: "Which method is used to listen to a stream?",
    options: [".listen()", ".await()", ".observe()", ".on()"],
    correctAnswer: ".listen()"
  },
  {
    question: "What is the return type of an asynchronous function?",
    options: ["void", "Stream", "Future", "async"],
    correctAnswer: "Future"
  },
  {
    question: "What does the `await` keyword do in Dart?",
    options: [
      "Pauses execution until a Future completes",
      "Declares a function as asynchronous",
      "Pauses the compiler",
      "Runs a function immediately"
    ],
    correctAnswer: "Pauses execution until a Future completes"
  },
  {
    question: "What happens if you call `await` inside a non-async function?",
    options: [
      "The code still runs fine",
      "It throws a runtime error",
      "It throws a compile-time error",
      "It will be ignored"
    ],
    correctAnswer: "It throws a compile-time error"
  },
  {
    question: "Which Dart keyword is used to prevent a class from being subclassed?",
    options: ["final", "const", "static", "sealed"],
    correctAnswer: "sealed"
  },
  {
    question: "Which of the following is true about `Future.wait()` in Dart?",
    options: [
      "It runs Futures sequentially",
      "It waits for all Futures to complete",
      "It cancels all other Futures after one completes",
      "It only runs one Future"
    ],
    correctAnswer: "It waits for all Futures to complete"
  },
  {
    question: "What is the role of `StreamController` in Dart?",
    options: [
      "To manipulate database connections",
      "To manage UI components",
      "To control and add events to a stream",
      "To parse JSON data"
    ],
    correctAnswer: "To control and add events to a stream"
  },
  {
    question: "What is the type of a function that returns a `Future<String>`?",
    options: [
      "Function",
      "FutureFunction",
      "Future<String> Function()",
      "String Function()"
    ],
    correctAnswer: "Future<String> Function()"
  },
  {
    question: "What is the purpose of the `covariant` keyword in Dart?",
    options: [
      "It allows overriding a parameter with a subtype",
      "It defines an abstract class",
      "It changes null safety",
      "It marks a function as async"
    ],
    correctAnswer: "It allows overriding a parameter with a subtype"
  },
  {
    question: "Which collection type in Dart maintains the insertion order?",
    options: ["Set", "List", "Map", "HashMap"],
    correctAnswer: "List"
  },
  {
    question: "What is the return type of `map()` on a list?",
    options: ["Map", "List", "Iterable", "Set"],
    correctAnswer: "Iterable"
  },
  {
    question: "What does the `??=` operator do in Dart?",
    options: [
      "Assigns a value if the variable is null",
      "Compares values",
      "Inverts a boolean",
      "Adds null to a value"
    ],
    correctAnswer: "Assigns a value if the variable is null"
  },
  {
    question: "What does `async*` mean in Dart?",
    options: [
      "It is invalid syntax",
      "It declares a generator function that returns a Stream",
      "It returns a Future",
      "It declares a factory function"
    ],
    correctAnswer: "It declares a generator function that returns a Stream"
  },
  {
    question: "What is the default value of an uninitialized variable in Dart?",
    options: ["0", "null", "false", "undefined"],
    correctAnswer: "null"
  },
  {
    question: "How do you create a constant list in Dart?",
    options: ["List()", "const []", "final []", "var []"],
    correctAnswer: "const []"
  },
  {
    question: "Which keyword defines an abstract method in Dart?",
    options: ["virtual", "override", "abstract", "none (no keyword)"],
    correctAnswer: "none (no keyword)"
  },
  {
    question: "What does the `is` operator check in Dart?",
    options: [
      "If a value is null",
      "If two variables are equal",
      "If an object is of a specific type",
      "If a function exists"
    ],
    correctAnswer: "If an object is of a specific type"
  },
  {
    question: "Which of the following methods removes the last item in a list?",
    options: [".pop()", ".remove()", ".removeLast()", ".deleteLast()"],
    correctAnswer: ".removeLast()"
  },
  {
    question: "What happens if you mutate a `const` list?",
    options: [
      "It allows it",
      "A warning is thrown",
      "A runtime error occurs",
      "A compile-time error occurs"
    ],
    correctAnswer: "A compile-time error occurs"
  },
  {
    question: "Which keyword allows method chaining in Dart?",
    options: [".", "..", "::", "=>"],
    correctAnswer: ".."
  },
  {
    question: "Which Dart type is a supertype of all types?",
    options: ["Object", "dynamic", "var", "Any"],
    correctAnswer: "dynamic"
  },
  {
    question: "How do you make a Dart list immutable?",
    options: ["final list", "const list", "readonly list", "immutable list"],
    correctAnswer: "const list"
  },
  {
    question: "What is the entry point for every Dart program?",
    options: ["run()", "start()", "main()", "init()"],
    correctAnswer: "main()"
  },
  {
    question: "What is the result of `List.generate(3, (i) => i * i)`?",
    options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 4]", "[1, 4, 9]"],
    correctAnswer: "[0, 1, 4]"
  },
  {
    question: "How do you define a named parameter in a Dart function?",
    options: [
      "Using brackets []",
      "Using angle brackets <>",
      "Using curly braces {}",
      "Using parentheses ()"
    ],
    correctAnswer: "Using curly braces {}"
  },
  {
    question: "What is the type of `null` in Dart?",
    options: ["Object", "Null", "None", "void"],
    correctAnswer: "Null"
  },
  {
    question: "Which operator is used to call a superclass constructor?",
    options: ["super()", "this()", "parent()", "base()"],
    correctAnswer: "super()"
  },
  {
    question: "What does the `call()` method do in Dart?",
    options: [
      "Makes a class callable like a function",
      "Calls an API",
      "Starts the program",
      "Creates a new object"
    ],
    correctAnswer: "Makes a class callable like a function"
  },
  {
    question: "What does `rethrow` do in Dart?",
    options: [
      "Catches an exception",
      "Throws a new exception",
      "Re-throws the current exception",
      "Terminates the app"
    ],
    correctAnswer: "Re-throws the current exception"
  },
  {
    question: "Which operator checks if two objects reference the same memory?",
    options: ["==", "equals", "is", "identical()"],
    correctAnswer: "identical()"
  },
  {
    question: "What is the purpose of `@override`?",
    options: [
      "Marks that a method overrides a superclass method",
      "Makes a class abstract",
      "Prevents method overriding",
      "Used for constants"
    ],
    correctAnswer: "Marks that a method overrides a superclass method"
  },
  {
    question: "How can you make a class implement multiple interfaces?",
    options: [
      "Using `implements` with comma-separated list",
      "Using `extends`",
      "Using `mixin`",
      "Using `with` keyword"
    ],
    correctAnswer: "Using `implements` with comma-separated list"
  },
  {
    question: "What is the effect of using `cascade notation (..)`?",
    options: [
      "Chains multiple method calls on the same object",
      "Performs async operations",
      "Creates deep copies",
      "Combines classes"
    ],
    correctAnswer: "Chains multiple method calls on the same object"
  },
  {
    question: "Which method is used to parse a string to int?",
    options: ["int.parse()", "parseInt()", "toInt()", "int.from()"],
    correctAnswer: "int.parse()"
  },
  {
    question: "What happens if you use `break` outside of a loop?",
    options: [
      "It skips to the next function",
      "It gives a runtime warning",
      "It causes a compile-time error",
      "It’s ignored"
    ],
    correctAnswer: "It causes a compile-time error"
  },
  {
    question: "Which keyword is used for mixins?",
    options: ["with", "mixin", "extends", "include"],
    correctAnswer: "with"
  },
  {
    question: "How do you create a private variable in Dart?",
    options: ["Start with _", "Use private keyword", "Use var", "Use const"],
    correctAnswer: "Start with _"
  },
  {
    question: "Which Dart keyword is used to indicate that a method returns no value?",
    options: ["void", "null", "unit", "empty"],
    correctAnswer: "void"
  },
    ]
  },
     html:{
    easy:[
 {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<href>",
      "<a>",
      "<hyperlink>"
    ],
    correctAnswer: "<a>"
  },
  {
    question: "Which tag is used to insert a line break in HTML?",
    options: [
      "<break>",
      "<br>",
      "<lb>",
      "<line>"
    ],
    correctAnswer: "<br>"
  },
  {
    question: "Which tag is used to display an image in HTML?",
    options: [
      "<pic>",
      "<img>",
      "<image>",
      "<src>"
    ],
    correctAnswer: "<img>"
  },
  {
    question: "How do you write a comment in HTML?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->",
      "** This is a comment **"
    ],
    correctAnswer: "<!-- This is a comment -->"
  },
  {
    question: "Which tag is used to define the largest heading in HTML?",
    options: [
      "<heading>",
      "<h6>",
      "<h1>",
      "<head>"
    ],
    correctAnswer: "<h1>"
  },
  {
    question: "Which attribute is used to provide an alternative text for an image?",
    options: [
      "alt",
      "src",
      "title",
      "href"
    ],
    correctAnswer: "alt"
  },
  {
    question: "What does the <title> tag do?",
    options: [
      "Sets the title of the document in the browser tab",
      "Creates a main heading",
      "Adds a tooltip",
      "Sets the background title"
    ],
    correctAnswer: "Sets the title of the document in the browser tab"
  },
  {
    question: "Which tag is used for an unordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<list>"
    ],
    correctAnswer: "<ul>"
  },
  {
    question: "What is the correct HTML element for inserting a horizontal rule?",
    options: [
      "<line>",
      "<hr>",
      "<break>",
      "<rule>"
    ],
    correctAnswer: "<hr>"
  },
  {
    question: "Which element is used to define a paragraph?",
    options: [
      "<para>",
      "<p>",
      "<text>",
      "<paragraph>"
    ],
    correctAnswer: "<p>"
  },
  {
    question: "Which attribute specifies the destination of a link?",
    options: [
      "src",
      "href",
      "alt",
      "link"
    ],
    correctAnswer: "href"
  },
  {
    question: "Which tag is used to make text bold?",
    options: [
      "<strong>",
      "<b>",
      "<bold>",
      "<em>"
    ],
    correctAnswer: "<b>"
  },
  {
    question: "Which tag is used to make text italic?",
    options: [
      "<italic>",
      "<i>",
      "<it>",
      "<em>"
    ],
    correctAnswer: "<i>"
  },
  {
    question: "Which tag defines a table row?",
    options: [
      "<td>",
      "<tr>",
      "<table>",
      "<row>"
    ],
    correctAnswer: "<tr>"
  },
  {
    question: "What does the <th> tag define?",
    options: [
      "Table header",
      "Table footer",
      "Table column",
      "Table cell"
    ],
    correctAnswer: "Table header"
  },
  {
    question: "Which tag is used to define an input field?",
    options: [
      "<input>",
      "<textfield>",
      "<field>",
      "<form>"
    ],
    correctAnswer: "<input>"
  },
  {
    question: "Which tag is used to define a form?",
    options: [
      "<input>",
      "<form>",
      "<submit>",
      "<textarea>"
    ],
    correctAnswer: "<form>"
  },
  {
    question: "What is the correct tag to make a checkbox?",
    options: [
      "<check>",
      "<checkbox>",
      "<input type='checkbox'>",
      "<box>"
    ],
    correctAnswer: "<input type='checkbox'>"
  },
  {
    question: "Which tag defines a drop-down list?",
    options: [
      "<select>",
      "<dropdown>",
      "<option>",
      "<list>"
    ],
    correctAnswer: "<select>"
  },
  {
    question: "How do you specify background color in HTML?",
    options: [
      "style='bg-color'",
      "background-color",
      "style='background-color'",
      "bgColor"
    ],
    correctAnswer: "style='background-color'"
  },
  {
    question: "Which tag is used to embed a video in HTML?",
    options: [
      "<media>",
      "<video>",
      "<embed>",
      "<movie>"
    ],
    correctAnswer: "<video>"
  },
  {
    question: "What tag is used to embed audio in HTML?",
    options: [
      "<audio>",
      "<sound>",
      "<media>",
      "<music>"
    ],
    correctAnswer: "<audio>"
  },
  {
    question: "Which tag is used to add a caption to a table?",
    options: [
      "<caption>",
      "<title>",
      "<thead>",
      "<summary>"
    ],
    correctAnswer: "<caption>"
  },
  {
    question: "What tag is used to group form elements?",
    options: [
      "<fieldset>",
      "<group>",
      "<formgroup>",
      "<legend>"
    ],
    correctAnswer: "<fieldset>"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: [
      "<style>",
      "<css>",
      "<script>",
      "<headstyle>"
    ],
    correctAnswer: "<style>"
  },
  {
    question: "Which tag is used to include an external JavaScript file?",
    options: [
      "<link>",
      "<js>",
      "<script>",
      "<javascript>"
    ],
    correctAnswer: "<script>"
  },
  {
    question: "What is the default file extension of an HTML file?",
    options: [
      ".txt",
      ".html",
      ".htm",
      ".doc"
    ],
    correctAnswer: ".html"
  },
  {
    question: "Which tag is used to display preformatted text?",
    options: [
      "<pre>",
      "<code>",
      "<text>",
      "<format>"
    ],
    correctAnswer: "<pre>"
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    options: [
      "To add metadata",
      "To insert a paragraph",
      "To create a link",
      "To format text"
    ],
    correctAnswer: "To add metadata"
  },
  {
    question: "Which tag contains the visible page content?",
    options: [
      "<head>",
      "<meta>",
      "<body>",
      "<html>"
    ],
    correctAnswer: "<body>"
  },
  {
    question: "What is the use of the <head> tag?",
    options: [
      "To add the title, scripts, and styles",
      "To create a heading",
      "To define a body section",
      "To load external links"
    ],
    correctAnswer: "To add the title, scripts, and styles"
  },
  {
    question: "Which tag is used to define list items?",
    options: [
      "<li>",
      "<ul>",
      "<ol>",
      "<list>"
    ],
    correctAnswer: "<li>"
  },
  {
    question: "Which element represents a navigation section?",
    options: [
      "<nav>",
      "<navigation>",
      "<menu>",
      "<section>"
    ],
    correctAnswer: "<nav>"
  },
  {
    question: "What does the <em> tag do?",
    options: [
      "Displays emphasized text in italics",
      "Makes text bold",
      "Highlights text",
      "Adds a comment"
    ],
    correctAnswer: "Displays emphasized text in italics"
  },
  {
    question: "What is the <footer> tag used for?",
    options: [
      "Adds a page footer",
      "Adds a site link",
      "Displays bold text",
      "Shows a sticky bar"
    ],
    correctAnswer: "Adds a page footer"
  },
  {
    question: "Which HTML element is used for short quotations?",
    options: [
      "<quote>",
      "<q>",
      "<blockquote>",
      "<shortquote>"
    ],
    correctAnswer: "<q>"
  },
  {
    question: "What does the <iframe> tag do?",
    options: [
      "Embeds another HTML page",
      "Displays an image",
      "Plays audio",
      "Creates a scrollable text box"
    ],
    correctAnswer: "Embeds another HTML page"
  },
  {
    question: "Which tag is used to define a label for input elements?",
    options: [
      "<label>",
      "<inputlabel>",
      "<tag>",
      "<field>"
    ],
    correctAnswer: "<label>"
  },
  {
    question: "Which HTML tag is used to define a division or a section?",
    options: [
      "<section>",
      "<div>",
      "<span>",
      "<part>"
    ],
    correctAnswer: "<div>"
  },
  {
    question: "Which tag is used to highlight text?",
    options: [
      "<highlight>",
      "<mark>",
      "<strong>",
      "<b>"
    ],
    correctAnswer: "<mark>"
  },
  {
    question: "What does the <abbr> tag do?",
    options: [
      "Displays abbreviation",
      "Makes text bold",
      "Creates a table",
      "Shortens URLs"
    ],
    correctAnswer: "Displays abbreviation"
  },
  {
    question: "What is the use of the <small> tag?",
    options: [
      "Displays small text",
      "Reduces image size",
      "Hides content",
      "Creates a comment"
    ],
    correctAnswer: "Displays small text"
  },
  {
    question: "Which HTML tag is used to define contact information?",
    options: [
      "<address>",
      "<contact>",
      "<info>",
      "<footer>"
    ],
    correctAnswer: "<address>"
  },
  {
    question: "What is the correct tag for inserting a background image?",
    options: [
      "<body background='img.jpg'>",
      "<background='img.jpg'>",
      "<img background='img.jpg'>",
      "<bg image='img.jpg'>"
    ],
    correctAnswer: "<body background='img.jpg'>"
  },
  {
    question: "What does the <noscript> tag do?",
    options: [
      "Runs when JavaScript is disabled",
      "Runs JavaScript",
      "Styles script output",
      "Defines a new script"
    ],
    correctAnswer: "Runs when JavaScript is disabled"
  },
  {
    question: "Which attribute is used to specify inline CSS?",
    options: [
      "style",
      "class",
      "css",
      "inline"
    ],
    correctAnswer: "style"
  },
  {
    question: "Which HTML tag is used for inline container elements?",
    options: [
      "<span>",
      "<div>",
      "<section>",
      "<container>"
    ],
    correctAnswer: "<span>"
  },
  {
  question: "Which HTML attribute is used to define inline styles?",
  options: ["style", "class", "id", "font"],
  correctAnswer: "style"
},
{
  question: "Which tag is used to define a line break in HTML?",
  options: ["<br>", "<break>", "<lb>", "<newline>"],
  correctAnswer: "<br>"
},
    ],
    advance:[
      {
    question: "Which HTML element is used to declare metadata about an HTML document?",
    options: ["<head>", "<meta>", "<title>", "<header>"],
    correctAnswer: "<meta>"
  },
  {
    question: "What does the 'sandbox' attribute in an iframe do?",
    options: [
      "Increases loading speed",
      "Applies external CSS styles",
      "Applies restrictions to the iframe content",
      "Embeds audio in the iframe"
    ],
    correctAnswer: "Applies restrictions to the iframe content"
  },
  {
    question: "Which HTML attribute prevents a user from typing into an input field?",
    options: ["readonly", "disable", "hidden", "locked"],
    correctAnswer: "readonly"
  },
  {
    question: "Which attribute specifies that a script should be executed after the page has been parsed?",
    options: ["defer", "async", "type", "onload"],
    correctAnswer: "defer"
  },
  {
    question: "What is the correct use of the <noscript> tag?",
    options: [
      "To link to external scripts",
      "To define script variables",
      "To display content if JavaScript is disabled",
      "To prevent scripts from running"
    ],
    correctAnswer: "To display content if JavaScript is disabled"
  },
  {
    question: "Which input type allows a user to select a range?",
    options: ["range", "slider", "scroll", "step"],
    correctAnswer: "range"
  },
  {
    question: "What does the 'autofocus' attribute do?",
    options: [
      "Auto-scrolls to an element",
      "Applies default styling",
      "Focuses the input field on page load",
      "Submits the form automatically"
    ],
    correctAnswer: "Focuses the input field on page load"
  },
  {
    question: "Which HTML tag is used to define a container for external application or interactive content?",
    options: ["<embed>", "<object>", "<iframe>", "<canvas>"],
    correctAnswer: "<object>"
  },
  {
    question: "What does the 'formnovalidate' attribute do in a submit button?",
    options: [
      "Prevents form submission",
      "Skips HTML5 validation on submit",
      "Disables the form permanently",
      "Triggers JavaScript instead of form action"
    ],
    correctAnswer: "Skips HTML5 validation on submit"
  },
  {
    question: "What is the function of the <template> tag in HTML?",
    options: [
      "Creates forms dynamically",
      "Contains content not rendered immediately",
      "Defines new custom elements",
      "Used for reusable page layout"
    ],
    correctAnswer: "Contains content not rendered immediately"
  },
  {
    question: "Which tag supports image map definitions?",
    options: ["<map>", "<image>", "<coords>", "<area-map>"],
    correctAnswer: "<map>"
  },
  {
    question: "What is the purpose of the 'aria-label' attribute?",
    options: [
      "Used for accessibility to describe an element",
      "Assigns an ID to elements",
      "Applies CSS styles",
      "Binds JavaScript events"
    ],
    correctAnswer: "Used for accessibility to describe an element"
  },
  {
    question: "What does the 'srcset' attribute do in the <img> tag?",
    options: [
      "Applies styles from multiple CSS files",
      "Specifies multiple image sources for different device sizes",
      "Adds captions to images",
      "Defines alternate text"
    ],
    correctAnswer: "Specifies multiple image sources for different device sizes"
  },
  {
    question: "Which tag is used to define a command button the user can invoke?",
    options: ["<command>", "<button>", "<input type='submit'>", "<invoke>"],
    correctAnswer: "<command>"
  },
  {
    question: "Which HTML5 API allows storage of key/value pairs in the browser?",
    options: ["LocalStorage", "Cookie", "WebSQL", "SessionStore"],
    correctAnswer: "LocalStorage"
  },
  {
    question: "What is the 'hidden' attribute used for?",
    options: [
      "Removes the element from DOM",
      "Completely deletes the tag",
      "Hides element from view but keeps in DOM",
      "Adds blur effect to element"
    ],
    correctAnswer: "Hides element from view but keeps in DOM"
  },
  {
    question: "How can you specify that a video should play automatically?",
    options: ["autoplay", "autostart", "play=true", "loop"],
    correctAnswer: "autoplay"
  },
  {
    question: "Which attribute is used to bind a label to a form control?",
    options: ["for", "to", "bind", "id"],
    correctAnswer: "for"
  },
  {
    question: "What does the <progress> tag represent?",
    options: [
      "Indicates task completion progress",
      "Shows a bar chart",
      "Draws shapes",
      "Indicates audio length"
    ],
    correctAnswer: "Indicates task completion progress"
  },
  {
    question: "Which tag is used to define a part of text that is no longer accurate?",
    options: ["<del>", "<obsolete>", "<strike>", "<remove>"],
    correctAnswer: "<del>"
  },
  {
    question: "Which attribute is used to specify a short hint in an input field?",
    options: ["placeholder", "alt", "title", "hint"],
    correctAnswer: "placeholder"
  },
  {
    question: "What does the <details> tag provide?",
    options: [
      "A collapsible section for content",
      "A list of links",
      "Page metadata",
      "Tooltips"
    ],
    correctAnswer: "A collapsible section for content"
  },
  {
    question: "Which tag is used to define scalar measurements within a known range?",
    options: ["<meter>", "<progress>", "<range>", "<measure>"],
    correctAnswer: "<meter>"
  },
  {
    question: "What does the <output> tag do?",
    options: [
      "Displays results of a calculation",
      "Shows error messages",
      "Outputs file data",
      "Renders server logs"
    ],
    correctAnswer: "Displays results of a calculation"
  },
  {
    question: "Which tag defines a rubric for an HTML table?",
    options: ["<caption>", "<label>", "<heading>", "<note>"],
    correctAnswer: "<caption>"
  },
  {
    question: "What does the 'novalidate' attribute do on a form?",
    options: [
      "Skips HTML5 validation on submit",
      "Disables the form",
      "Enables JavaScript validation",
      "Hides required fields"
    ],
    correctAnswer: "Skips HTML5 validation on submit"
  },
  {
    question: "What does the <mark> tag do?",
    options: [
      "Highlights text",
      "Adds a bookmark",
      "Creates a footer note",
      "Comments out text"
    ],
    correctAnswer: "Highlights text"
  },
  {
    question: "Which element provides a caption for a fieldset?",
    options: ["<legend>", "<caption>", "<label>", "<title>"],
    correctAnswer: "<legend>"
  },
  {
    question: "Which HTML tag is used to play sound content?",
    options: ["<audio>", "<sound>", "<mp3>", "<voice>"],
    correctAnswer: "<audio>"
  },
  {
    question: "Which tag defines a standard hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: "<a>"
  },
  {
    question: "What attribute is used with the <a> tag to open a link in a new tab?",
    options: ["target='_blank'", "open='new'", "popup='true'", "tab='new'"],
    correctAnswer: "target='_blank'"
  },
  {
    question: "Which element is used to group block-level elements?",
    options: ["<div>", "<span>", "<section>", "<block>"],
    correctAnswer: "<div>"
  },
  {
    question: "Which tag defines preformatted text?",
    options: ["<pre>", "<code>", "<text>", "<tt>"],
    correctAnswer: "<pre>"
  },
  {
    question: "What does the 'draggable' attribute do?",
    options: [
      "Makes an element draggable by user",
      "Locks an element",
      "Sets element transparency",
      "Toggles visibility"
    ],
    correctAnswer: "Makes an element draggable by user"
  },
  {
    question: "What does <abbr> tag define?",
    options: [
      "Abbreviation or acronym",
      "Bold text",
      "Anchor text",
      "Reference link"
    ],
    correctAnswer: "Abbreviation or acronym"
  },
  {
    question: "What is the <base> tag used for?",
    options: [
      "Specifies the base URL for relative URLs",
      "Creates a base layout",
      "Defines page title",
      "Imports base CSS"
    ],
    correctAnswer: "Specifies the base URL for relative URLs"
  },
  {
    question: "What does the 'download' attribute in <a> tag do?",
    options: [
      "Forces the browser to download the link",
      "Plays media",
      "Redirects to download page",
      "Disables link"
    ],
    correctAnswer: "Forces the browser to download the link"
  },
  {
    question: "Which HTML tag is used to define internal JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    correctAnswer: "<script>"
  },
  {
    question: "Which element represents machine-readable date/time?",
    options: ["<time>", "<date>", "<datetime>", "<clock>"],
    correctAnswer: "<time>"
  },
  {
    question: "Which tag is used to embed SVG content?",
    options: ["<svg>", "<vector>", "<canvas>", "<shape>"],
    correctAnswer: "<svg>"
  },
  {
    question: "What is the <bdi> tag used for?",
    options: [
      "Isolates text direction",
      "Defines bold text",
      "Applies dark mode",
      "Embeds device information"
    ],
    correctAnswer: "Isolates text direction"
  },
  {
    question: "What does the <wbr> tag represent?",
    options: [
      "Optional line break opportunity",
      "Warning block",
      "Wrap border",
      "Word browser render"
    ],
    correctAnswer: "Optional line break opportunity"
  },
  {
    question: "What is the use of the <summary> tag?",
    options: [
      "Defines summary of <details>",
      "Adds meta description",
      "Summarizes table content",
      "Labels article"
    ],
    correctAnswer: "Defines summary of <details>"
  },
  {
    question: "What is the default character encoding in HTML5?",
    options: ["UTF-8", "ASCII", "ISO-8859-1", "UTF-16"],
    correctAnswer: "UTF-8"
  },
  {
    question: "Which element is used for responsive image loading in HTML5?",
    options: ["<picture>", "<img>", "<source>", "<media>"],
    correctAnswer: "<picture>"
  },
  {
    question: "What does the <bdo> tag do?",
    options: [
      "Overrides text direction",
      "Defines bold text",
      "Adds button options",
      "Breaks object data"
    ],
    correctAnswer: "Overrides text direction"
  },
  {
    question: "Which input type hides the actual characters entered by the user?",
    options: ["password", "text", "hidden", "secure"],
    correctAnswer: "password"
  },
  {
    question: "Which tag is used to display computer code in HTML?",
    options: ["<code>", "<pre>", "<kbd>", "<var>"],
    correctAnswer: "<code>"
  },
  {
  question: "Which HTML tag is used to define a client-side image-map?",
  options: ["<imgmap>", "<map>", "<area>", "<use>"],
  correctAnswer: "<map>"
},
{
  question: "What is the purpose of the `manifest` attribute in the `<html>` tag (HTML5)?",
  options: ["It specifies fallback fonts", "It enables video autoplay", "It provides offline caching instructions", "It defines external scripts"],
  correctAnswer: "It provides offline caching instructions"
},
    ]
  },
     css:{
    easy:[
{
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Computer Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which property is used to change the text color of an element?",
    options: ["font-color", "color", "text-color", "style"],
    correctAnswer: "color"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "size"],
    correctAnswer: "font-size"
  },
  {
    question: "How do you make all <p> elements bold?",
    options: ["p {font-weight: bold;}", "p {text-style: bold;}", "p {font: bold;}", "p {bold: true;}"],
    correctAnswer: "p {font-weight: bold;}"
  },
  {
    question: "Which value is used to make an element hidden?",
    options: ["none", "hidden", "display: hidden", "visibility: none"],
    correctAnswer: "display: none"
  },
  {
    question: "What symbol is used for class selectors?",
    options: ["#", ".", ":", "*"],
    correctAnswer: "."
  },
  {
    question: "How do you select an element with id 'main'?",
    options: ["#main", ".main", "main", "*main"],
    correctAnswer: "#main"
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "background", "bgcolor", "background-color"],
    correctAnswer: "background-color"
  },
  {
    question: "What is the default position value of an HTML element?",
    options: ["absolute", "relative", "static", "fixed"],
    correctAnswer: "static"
  },
  {
    question: "How can you make a list not display bullets?",
    options: ["list-style: none;", "bullet: none;", "list: no-bullet;", "text-decoration: none;"],
    correctAnswer: "list-style: none;"
  },
  {
    question: "Which unit is relative to the font-size of the element?",
    options: ["px", "em", "%", "cm"],
    correctAnswer: "em"
  },
  {
    question: "Which property changes the font of an element?",
    options: ["font-weight", "font-family", "text-style", "font-size"],
    correctAnswer: "font-family"
  },
  {
    question: "How do you make text italic in CSS?",
    options: ["font: italic;", "text-style: italic;", "font-style: italic;", "italic: true;"],
    correctAnswer: "font-style: italic;"
  },
  {
    question: "Which property controls the spacing between lines of text?",
    options: ["letter-spacing", "line-spacing", "text-spacing", "line-height"],
    correctAnswer: "line-height"
  },
  {
    question: "Which of the following is not a valid CSS unit?",
    options: ["px", "em", "sec", "%"],
    correctAnswer: "sec"
  },
  {
    question: "What is the purpose of z-index?",
    options: ["To zoom elements", "To stack elements", "To change color", "To apply shadows"],
    correctAnswer: "To stack elements"
  },
  {
    question: "Which property is used to underline text?",
    options: ["text-decoration", "font-style", "text-underline", "decoration"],
    correctAnswer: "text-decoration"
  },
  {
    question: "Which keyword is used to inherit property value from the parent?",
    options: ["copy", "inherit", "default", "initial"],
    correctAnswer: "inherit"
  },
  {
    question: "Which of these is a valid border property?",
    options: ["border: 1px solid black;", "border: solid black;", "border-color: red;", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does 'vw' stand for in CSS units?",
    options: ["vertical width", "viewport width", "variable width", "view width"],
    correctAnswer: "viewport width"
  },
  {
    question: "What is the correct syntax for a comment in CSS?",
    options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
    correctAnswer: "/* comment */"
  },
  {
    question: "Which property makes an element moveable?",
    options: ["z-index", "float", "position", "move"],
    correctAnswer: "position"
  },
  {
    question: "Which CSS property is used to create space between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correctAnswer: "margin"
  },
  {
    question: "Which property defines inner spacing of an element?",
    options: ["margin", "padding", "border", "gap"],
    correctAnswer: "padding"
  },
  {
    question: "What does 'RGB' stand for in colors?",
    options: ["Red Green Blue", "Read Green Black", "Red Gray Black", "Random Gradient Base"],
    correctAnswer: "Red Green Blue"
  },
  {
    question: "What does the 'hover' pseudo-class do?",
    options: ["Targets when mouse clicks", "Targets on scroll", "Targets when mouse hovers", "Targets on drag"],
    correctAnswer: "Targets when mouse hovers"
  },
  {
    question: "What is the value of display property for inline elements?",
    options: ["block", "inline", "inline-block", "none"],
    correctAnswer: "inline"
  },
  {
    question: "Which shorthand sets margin on all four sides?",
    options: ["margin: 10px;", "margin: 10px 5px;", "margin: top right bottom left;", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which of the following is not a position value?",
    options: ["fixed", "relative", "absolute", "inline"],
    correctAnswer: "inline"
  },
  {
    question: "Which property would you use to add shadows to text?",
    options: ["text-decoration", "font-style", "text-shadow", "shadow-text"],
    correctAnswer: "text-shadow"
  },
  {
    question: "How can you set the background image of a page?",
    options: ["background: image('img.png');", "background-image: url('img.png');", "img: background('img.png');", "background: url-img('img.png');"],
    correctAnswer: "background-image: url('img.png');"
  },
  {
    question: "Which property sets the width of an element?",
    options: ["size", "width", "element-width", "box-width"],
    correctAnswer: "width"
  },
  {
    question: "What does the 'float' property do?",
    options: ["Aligns text", "Floats elements to the left or right", "Adds animation", "Creates dropdowns"],
    correctAnswer: "Floats elements to the left or right"
  },
  {
    question: "How can you apply styles to multiple elements?",
    options: ["By separating selectors with commas", "Using and operator", "Using multiple blocks", "Not possible"],
    correctAnswer: "By separating selectors with commas"
  },
  {
    question: "Which tag is used to apply external CSS?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    correctAnswer: "<link>"
  },
  {
    question: "Which file extension is correct for CSS files?",
    options: [".css", ".cstyle", ".stylesheet", ".style"],
    correctAnswer: ".css"
  },
  {
    question: "Which property creates a flexible container?",
    options: ["display: grid;", "display: flex;", "display: inline;", "display: block;"],
    correctAnswer: "display: flex;"
  },
  {
    question: "Which CSS rule centers a block horizontally?",
    options: ["text-align: center;", "margin: auto;", "center: block;", "align: center;"],
    correctAnswer: "margin: auto;"
  },
  {
    question: "Which property controls the visibility of an element?",
    options: ["display", "opacity", "visibility", "z-index"],
    correctAnswer: "visibility"
  },
  {
    question: "How can you animate an element in CSS?",
    options: ["using @animate", "using keyframes", "using transition", "both keyframes and transition"],
    correctAnswer: "both keyframes and transition"
  },
  {
    question: "Which CSS property makes corners rounded?",
    options: ["border-style", "border-radius", "corner-style", "radius"],
    correctAnswer: "border-radius"
  },
  {
    question: "How do you specify a universal selector in CSS?",
    options: ["*", "#", ".", "$"],
    correctAnswer: "*"
  },
  {
    question: "Which CSS property adds space between letters?",
    options: ["line-height", "word-spacing", "letter-spacing", "text-spacing"],
    correctAnswer: "letter-spacing"
  },
  {
    question: "Which property is used to control overflow content?",
    options: ["display", "overflow", "clip", "wrap"],
    correctAnswer: "overflow"
  },
  {
    question: "How to make a box have a shadow?",
    options: ["box-shadow", "box-outline", "box-border", "shadow-effect"],
    correctAnswer: "box-shadow"
  },
  {
    question: "Which of the following applies the highest specificity?",
    options: ["Class", "ID", "Element", "Universal"],
    correctAnswer: "ID"
  },
  {
    question: "How do you apply style only when the element is the first child?",
    options: ["element:first", "element:first-child", "element:child", "element:first-child()"],
    correctAnswer: "element:first-child"
  },
  {
    question: "Which property defines how the background image is repeated?",
    options: ["background-style", "background-repeat", "image-repeat", "repeat-style"],
    correctAnswer: "background-repeat"
  },
  {
    question: "Which CSS property changes the cursor style?",
    options: ["pointer", "cursor", "mouse", "hover"],
    correctAnswer: "cursor"
  },
  {
    question: "Which value allows the background image to cover entire area?",
    options: ["background-repeat: all;", "background-fit: full;", "background-size: cover;", "image-size: 100%;"],
    correctAnswer: "background-size: cover;"
  },
    ],
    advance:[
       {
    question: "What does 'object-fit: cover' do to an image?",
    options: [
      "Stretches to fill the container",
      "Preserves aspect ratio and fills without distortion",
      "Aligns it to center",
      "Clips image to container size",
    ],
    correctAnswer: "Preserves aspect ratio and fills without distortion",
  },
  {
    question: "What is the use of the `accent-color` property?",
    options: [
      "Changes background color of inputs",
      "Sets system control highlight color (checkboxes, radios)",
      "Sets button hover color",
      "Styles hyperlinks",
    ],
    correctAnswer: "Sets system control highlight color (checkboxes, radios)",
  },
  {
    question: "How does 'filter: blur(5px);' affect an element?",
    options: [
      "Blurs only the background",
      "Blurs both content and background",
      "Adds opacity",
      "Blurs only text",
    ],
    correctAnswer: "Blurs both content and background",
  },
  {
    question: "Which property sets how an element appears when printing?",
    options: [
      "display",
      "media-print",
      "@media print",
      "visibility",
    ],
    correctAnswer: "@media print",
  },
  {
    question: "Which of the following is not a valid CSS unit?",
    options: [
      "ch",
      "rl",
      "vw",
      "fr",
    ],
    correctAnswer: "rl",
  },
  {
    question: "What does the `::marker` pseudo-element target?",
    options: [
      "The bullet or number in a list item",
      "Paragraph start",
      "Text selection",
      "First letter of a sentence",
    ],
    correctAnswer: "The bullet or number in a list item",
  },
  {
    question: "How does 'position: sticky' behave?",
    options: [
      "It stays fixed at the top always",
      "It scrolls normally then sticks to a position",
      "It scrolls above other elements",
      "It is only used for sidebars",
    ],
    correctAnswer: "It scrolls normally then sticks to a position",
  },
  {
    question: "What does 'line-clamp' do?",
    options: [
      "Limits the number of visible characters",
      "Limits text to a specific number of lines",
      "Adjusts line height",
      "Wraps the last word",
    ],
    correctAnswer: "Limits text to a specific number of lines",
  },
  {
    question: "What is the purpose of 'overscroll-behavior'?",
    options: [
      "Enables bounce scrolling",
      "Controls scroll chaining between elements",
      "Locks background during scroll",
      "Sets scrollbar visibility",
    ],
    correctAnswer: "Controls scroll chaining between elements",
  },
  {
    question: "Which CSS feature allows layering of stylesheets?",
    options: [
      "@import",
      "@layer",
      "@media",
      "@font-face",
    ],
    correctAnswer: "@layer",
  },
  {
    question: "Which of the following causes hardware acceleration in modern browsers?",
    options: [
      "filter: grayscale(1);",
      "transform: translateZ(0);",
      "opacity: 0.5;",
      "margin: auto;",
    ],
    correctAnswer: "transform: translateZ(0);",
  },
  {
    question: "Which CSS property enables text truncation with ellipsis?",
    options: [
      "text-wrap: ellipsis;",
      "text-trim: ...;",
      "text-overflow: ellipsis;",
      "overflow: clip-text;",
    ],
    correctAnswer: "text-overflow: ellipsis;",
  },
  {
    question: "What is the result of 'display: grid'?",
    options: [
      "One-dimensional layout",
      "Two-dimensional layout system",
      "Replaces Flexbox",
      "Inline-block layout",
    ],
    correctAnswer: "Two-dimensional layout system",
  },
  {
    question: "What does the 'clip-path' property do?",
    options: [
      "Clips image resolution",
      "Hides overflow text",
      "Creates a mask that defines visible area",
      "Applies transparency",
    ],
    correctAnswer: "Creates a mask that defines visible area",
  },
  {
    question: "How is specificity calculated in CSS?",
    options: [
      "Based on rule order",
      "Using inline > ID > class > element",
      "Alphabetically",
      "Randomly",
    ],
    correctAnswer: "Using inline > ID > class > element",
  },
  {
    question: "Which property adjusts kerning in text?",
    options: [
      "letter-spacing",
      "font-kerning",
      "word-spacing",
      "text-align",
    ],
    correctAnswer: "font-kerning",
  },
  {
    question: "What does 'display: contents' do to accessibility?",
    options: [
      "Improves screen reader detection",
      "Hides content from keyboard focus",
      "May cause accessibility issues due to missing parent",
      "Increases tab index",
    ],
    correctAnswer: "May cause accessibility issues due to missing parent",
  },
  {
    question: "What is the role of 'z-index' in positioned elements?",
    options: [
      "Sets stacking order",
      "Controls transition speed",
      "Applies transform",
      "Adds spacing",
    ],
    correctAnswer: "Sets stacking order",
  },
  {
    question: "Which selector targets an input with type 'email'?",
    options: [
      "input[type='email']",
      "#email",
      ".email",
      ":email",
    ],
    correctAnswer: "input[type='email']",
  },
  {
    question: "Which property affects how flex items shrink or grow?",
    options: [
      "flex-grow, flex-shrink",
      "display",
      "flex-position",
      "flex-basis-only",
    ],
    correctAnswer: "flex-grow, flex-shrink",
  },
   {
    question: "What does the 'contain' property do in CSS?",
    options: [
      "Hides overflow content",
      "Prevents child elements from affecting outside layout",
      "Centers the element",
      "Specifies the container height",
    ],
    correctAnswer: "Prevents child elements from affecting outside layout",
  },
  {
    question: "Which CSS feature allows layout depending on available space?",
    options: [
      "Flexbox",
      "Media Queries",
      "Container Queries",
      "Grid",
    ],
    correctAnswer: "Container Queries",
  },
  {
    question: "What does 'aspect-ratio' property define?",
    options: [
      "Ratio of text to container",
      "The zoom scale of the element",
      "Width-to-height proportion",
      "Maximum resolution",
    ],
    correctAnswer: "Width-to-height proportion",
  },
  {
    question: "Which of the following is true about CSS subgrid?",
    options: [
      "Only works in flexbox",
      "Used in container queries",
      "Allows nested grid items to inherit grid definitions",
      "A new display type",
    ],
    correctAnswer: "Allows nested grid items to inherit grid definitions",
  },
  {
    question: "What is the default stacking context for positioned elements?",
    options: [
      "z-index: 1",
      "z-index: auto",
      "z-index: 0",
      "It depends on the browser",
    ],
    correctAnswer: "z-index: auto",
  },
  {
    question: "Which selector has the highest specificity?",
    options: [
      "Class selector",
      "ID selector",
      "Universal selector",
      "Element selector",
    ],
    correctAnswer: "ID selector",
  },
  {
    question: "What is the initial value of the display property?",
    options: [
      "block",
      "inline",
      "none",
      "It depends on the element",
    ],
    correctAnswer: "It depends on the element",
  },
  {
    question: "What does the 'backface-visibility' property affect?",
    options: [
      "Shadow of the element",
      "Background image opacity",
      "Visibility of element's rear during 3D transforms",
      "Z-index stacking",
    ],
    correctAnswer: "Visibility of element's rear during 3D transforms",
  },
  {
    question: "Which unit scales with the root element's font-size?",
    options: [
      "em",
      "px",
      "rem",
      "%",
    ],
    correctAnswer: "rem",
  },
  {
    question: "How is a keyframe animation looped infinitely?",
    options: [
      "animation: move 3s linear;",
      "animation: move infinite;",
      "animation-iteration-count: infinite;",
      "animation-duration: infinite;",
    ],
    correctAnswer: "animation-iteration-count: infinite;",
  },
  {
    question: "What is the effect of 'pointer-events: none;' on an element?",
    options: [
      "It hides the cursor",
      "It disables all mouse interactions",
      "It increases z-index",
      "It makes the element invisible",
    ],
    correctAnswer: "It disables all mouse interactions",
  },
  {
    question: "Which pseudo-class matches an element only if it's the only child?",
    options: [
      ":first-child",
      ":only-of-type",
      ":only-child",
      ":last-child",
    ],
    correctAnswer: ":only-child",
  },
  {
    question: "Which property sets how a background image is repeated?",
    options: [
      "background-repeat",
      "background-position",
      "background-clip",
      "background-origin",
    ],
    correctAnswer: "background-repeat",
  },
  {
    question: "Which media feature detects whether the device supports hover?",
    options: [
      "hover",
      "any-hover",
      "pointer",
      "any-pointer",
    ],
    correctAnswer: "hover",
  },
  {
    question: "Which CSS property determines how content is clipped when it overflows?",
    options: [
      "clip",
      "overflow",
      "visibility",
      "text-overflow",
    ],
    correctAnswer: "overflow",
  },
  {
    question: "Which of the following allows you to define a reusable style?",
    options: [
      "@keyframes",
      "@media",
      "@layer",
      "@property",
    ],
    correctAnswer: "@layer",
  },
  {
    question: "What does the 'isolation' property in CSS control?",
    options: [
      "Element stacking context",
      "Image rendering quality",
      "Z-index resolution",
      "Pointer capturing",
    ],
    correctAnswer: "Element stacking context",
  },
  {
    question: "Which CSS property enables transitions between property values?",
    options: [
      "transform",
      "animation",
      "transition",
      "keyframes",
    ],
    correctAnswer: "transition",
  },
  {
    question: "Which unit is relative to the viewport height?",
    options: [
      "vw",
      "vh",
      "vmin",
      "rem",
    ],
    correctAnswer: "vh",
  },
  {
    question: "What does the 'will-change' property do?",
    options: [
      "Creates a stacking context",
      "Hints browser to optimize performance for expected changes",
      "Forces reflow",
      "Overrides transitions",
    ],
    correctAnswer: "Hints browser to optimize performance for expected changes",
  },
  {
    question: "Which CSS function is used for responsive typography scaling?",
    options: [
      "scale()",
      "clamp()",
      "minmax()",
      "calc()",
    ],
    correctAnswer: "clamp()",
  },
  {
    question: "Which property is used to add a custom property in CSS?",
    options: [
      "--my-color",
      "@property",
      "var()",
      "@custom",
    ],
    correctAnswer: "@property",
  },
  {
    question: "Which CSS value causes an element to ignore pointer events but still be visible?",
    options: [
      "visibility: hidden",
      "pointer-events: none",
      "display: none",
      "z-index: -1",
    ],
    correctAnswer: "pointer-events: none",
  },
  {
    question: "What is the stacking context created by a transformed element?",
    options: [
      "None",
      "It always creates one",
      "Only if z-index is set",
      "Only with translate()",
    ],
    correctAnswer: "It always creates one",
  },
  {
    question: "What does 'mix-blend-mode' control?",
    options: [
      "How background images are repeated",
      "How an element's content blends with background",
      "How opacity is rendered",
      "How borders are drawn",
    ],
    correctAnswer: "How an element's content blends with background",
  },
  {
    question: "Which property defines space between flex items?",
    options: [
      "padding",
      "margin",
      "gap",
      "spacing",
    ],
    correctAnswer: "gap",
  },
  {
    question: "How do you create a fixed aspect ratio in CSS?",
    options: [
      "Using min-width",
      "With padding-top percentage trick",
      "With max-height",
      "Using clip-path",
    ],
    correctAnswer: "With padding-top percentage trick",
  },
  {
    question: "What is a valid syntax to define a grid template area?",
    options: [
      "grid-template-area: 2x2;",
      "grid-template-areas: 'a b' 'c d';",
      "template: grid;",
      "area-template: 'a b';",
    ],
    correctAnswer: "grid-template-areas: 'a b' 'c d';",
  },
  {
    question: "Which CSS property allows content to be placed on multiple lines inside flex?",
    options: [
      "flex-wrap",
      "flex-grow",
      "justify-content",
      "order",
    ],
    correctAnswer: "flex-wrap",
  },
  {
    question: "What happens if you set 'display: contents' on a container?",
    options: [
      "It becomes invisible",
      "Its children render without the parent box",
      "It floats above others",
      "It behaves like inline-block",
    ],
    correctAnswer: "Its children render without the parent box",
  },
    ]
  },
     go:{
    easy:[
{
  question: "What is the keyword used to define a new Go package?",
  options: ["package", "import", "func", "module"],
  correctAnswer: "package"
},
{
  question: "Which built-in function is used to print output to the console in Go?",
  options: ["print()", "log()", "fmt.Println()", "echo()"],
  correctAnswer: "fmt.Println()"
},
  {
    question: "Who developed the Go programming language?",
    options: ["Microsoft", "Google", "Apple", "Facebook"],
    correctAnswer: "Google",
  },
  {
    question: "What is the file extension for a Go source file?",
    options: [".go", ".gol", ".golang", ".g"],
    correctAnswer: ".go",
  },
  {
    question: "Which of the following is the correct way to declare a package in Go?",
    options: [
      "package: main",
      "import main",
      "package main",
      "main package",
    ],
    correctAnswer: "package main",
  },
  {
    question: "Which keyword is used to import packages in Go?",
    options: ["include", "import", "use", "require"],
    correctAnswer: "import",
  },
  {
    question: "Which function is the entry point of a Go program?",
    options: ["main()", "Main()", "start()", "init()"],
    correctAnswer: "main()",
  },
  {
    question: "What does the 'fmt' package in Go provide?",
    options: [
      "File management tools",
      "Mathematical functions",
      "Formatted I/O functions",
      "Networking functions",
    ],
    correctAnswer: "Formatted I/O functions",
  },
  {
    question: "How do you print to the console in Go?",
    options: ["print()", "System.out.println()", "fmt.Println()", "echo()"],
    correctAnswer: "fmt.Println()",
  },
  {
    question: "Which keyword is used to define a function in Go?",
    options: ["func", "function", "def", "define"],
    correctAnswer: "func",
  },
  {
    question: "Which of these is a valid variable declaration in Go?",
    options: [
      "let x int = 5",
      "var x int = 5",
      "int x = 5",
      "x := int 5",
    ],
    correctAnswer: "var x int = 5",
  },
  {
    question: "What is the zero value of an int in Go?",
    options: ["-1", "0", "undefined", "nil"],
    correctAnswer: "0",
  },
  {
    question: "How do you declare a short variable in Go?",
    options: ["x = 5", "let x = 5", "x := 5", "define x = 5"],
    correctAnswer: "x := 5",
  },
  {
    question: "Which keyword is used to create a constant in Go?",
    options: ["define", "const", "constant", "final"],
    correctAnswer: "const",
  },
  {
    question: "Which symbol is used for comments in Go?",
    options: ["#", "//", "<!--", "--"],
    correctAnswer: "//",
  },
  {
    question: "How do you declare an array in Go?",
    options: [
      "arr := []int{1, 2, 3}",
      "arr = [3]int{1, 2, 3}",
      "int[] arr = {1, 2, 3}",
      "var arr [3]int = [3]int{1, 2, 3}",
    ],
    correctAnswer: "var arr [3]int = [3]int{1, 2, 3}",
  },
  {
    question: "What is the keyword used to return a value from a function?",
    options: ["exit", "return", "yield", "output"],
    correctAnswer: "return",
  },
  {
    question: "What is the keyword to declare a struct?",
    options: ["class", "struct", "type", "object"],
    correctAnswer: "type",
  },
  {
    question: "Which data type is used for true/false values?",
    options: ["bool", "boolean", "bit", "flag"],
    correctAnswer: "bool",
  },
  {
    question: "What is a slice in Go?",
    options: [
      "A pointer to a function",
      "A dynamic array",
      "A string method",
      "A keyword",
    ],
    correctAnswer: "A dynamic array",
  },
  {
    question: "Which of these is a correct way to define a map in Go?",
    options: [
      "map<string, int>",
      "map[string]int",
      "dict[string]int",
      "object<string, int>",
    ],
    correctAnswer: "map[string]int",
  },
  {
    question: "What does 'len()' return when used on a slice?",
    options: ["Length of the slice", "Capacity", "Memory size", "Pointer"],
    correctAnswer: "Length of the slice",
  },
  {
    question: "What is the default value of a bool in Go?",
    options: ["true", "false", "nil", "undefined"],
    correctAnswer: "false",
  },
  {
    question: "Which function is used to read user input in Go?",
    options: ["input()", "fmt.Scanln()", "cin>>", "console.read()"],
    correctAnswer: "fmt.Scanln()",
  },
  {
    question: "How do you handle errors in Go?",
    options: ["try-catch", "throw", "if err != nil", "on error"],
    correctAnswer: "if err != nil",
  },
  {
    question: "Which of the following types is used for decimal values?",
    options: ["int", "float32", "byte", "string"],
    correctAnswer: "float32",
  },
  {
    question: "What does the 'defer' keyword do?",
    options: [
      "Delays a function call until the function returns",
      "Creates a thread",
      "Skips execution",
      "Throws an error",
    ],
    correctAnswer: "Delays a function call until the function returns",
  },
  {
    question: "Which of the following is not a valid loop in Go?",
    options: ["for", "while", "range", "do"],
    correctAnswer: "while",
  },
  {
    question: "What is the keyword to define a module in Go?",
    options: ["module", "mod", "go mod", "mod init"],
    correctAnswer: "module",
  },
  {
    question: "What tool is used to manage Go packages?",
    options: ["npm", "pip", "go mod", "composer"],
    correctAnswer: "go mod",
  },
  {
    question: "Which command compiles a Go program?",
    options: ["go make", "go run", "go compile", "build go"],
    correctAnswer: "go build",
  },
  {
    question: "What is a goroutine?",
    options: [
      "A global variable",
      "A lightweight thread managed by Go",
      "A Go error type",
      "A Go struct",
    ],
    correctAnswer: "A lightweight thread managed by Go",
  },
  {
    question: "Which keyword is used to start a goroutine?",
    options: ["go", "routine", "start", "async"],
    correctAnswer: "go",
  },
  {
    question: "How do you declare a pointer in Go?",
    options: ["ptr := &x", "ptr = pointer(x)", "*x = ptr", "x->ptr"],
    correctAnswer: "ptr := &x",
  },
  {
    question: "What is the use of the make() function?",
    options: [
      "Create goroutines",
      "Allocate slices, maps, and channels",
      "Define structs",
      "Create new packages",
    ],
    correctAnswer: "Allocate slices, maps, and channels",
  },
  {
    question: "What does the 'select' keyword do in Go?",
    options: [
      "Select a case in switch",
      "Handle multiple channel operations",
      "Choose a variable",
      "Pause execution",
    ],
    correctAnswer: "Handle multiple channel operations",
  },
  {
    question: "What does 'cap()' return for a slice?",
    options: [
      "Capacity",
      "Pointer size",
      "Number of elements",
      "Length",
    ],
    correctAnswer: "Capacity",
  },
  {
    question: "Which of the following types is unsigned?",
    options: ["int", "int32", "uint", "float32"],
    correctAnswer: "uint",
  },
  {
    question: "What is the maximum number of return values a Go function can have?",
    options: ["1", "2", "3", "Multiple"],
    correctAnswer: "Multiple",
  },
  {
    question: "How do you ignore a value in multiple return values?",
    options: ["skip", "omit", "_", "null"],
    correctAnswer: "_",
  },
  {
    question: "How do you stop a goroutine manually?",
    options: [
      "Kill function",
      "Go does not provide direct killing",
      "Stop() method",
      "Exit() function",
    ],
    correctAnswer: "Go does not provide direct killing",
  },
  {
    question: "What is the output type of fmt.Sprintf?",
    options: ["int", "bool", "string", "nil"],
    correctAnswer: "string",
  },
  {
    question: "What is the 'nil' value used for?",
    options: [
      "Default value for strings",
      "Represents zero",
      "Represents a zero pointer",
      "Marks end of array",
    ],
    correctAnswer: "Represents a zero pointer",
  },
  {
    question: "Which of these is a valid channel declaration?",
    options: [
      "var c chan int",
      "channel c int",
      "c := channel(int)",
      "chan := int c",
    ],
    correctAnswer: "var c chan int",
  },
  {
    question: "Which statement is used to iterate over slices or maps?",
    options: ["foreach", "for...in", "range", "loop"],
    correctAnswer: "range",
  },
  {
    question: "Which built-in function gives current time?",
    options: ["clock()", "time()", "time.Now()", "getTime()"],
    correctAnswer: "time.Now()",
  },
  {
    question: "What does panic() do?",
    options: [
      "Logs a warning",
      "Throws a recoverable error",
      "Stops execution with a runtime error",
      "Skips a loop",
    ],
    correctAnswer: "Stops execution with a runtime error",
  },
  {
    question: "How do you recover from a panic?",
    options: ["try-catch", "recover()", "catch()", "rollback()"],
    correctAnswer: "recover()",
  },
  {
    question: "What is the keyword for interfaces in Go?",
    options: ["interface", "implements", "protocol", "contract"],
    correctAnswer: "interface",
  },
  {
    question: "What does the go fmt tool do?",
    options: [
      "Runs the code",
      "Checks errors",
      "Formats the code",
      "Compiles code",
    ],
    correctAnswer: "Formats the code",
  },
    ],
    advance:[
      {
    question: "What does the `defer` statement do in Go?",
    options: [
      "Executes a function immediately",
      "Skips function execution",
      "Schedules a function call to run after the function completes",
      "Terminates the program"
    ],
    correctAnswer: "Schedules a function call to run after the function completes"
  },
  {
    question: "What will `make([]int, 0)` return?",
    options: ["nil slice", "slice with length 0", "slice with nil values", "compilation error"],
    correctAnswer: "slice with length 0"
  },
  {
    question: "What is the zero value of a `map[string]int` in Go?",
    options: ["nil", "{}", "0", "empty array"],
    correctAnswer: "nil"
  },
  {
    question: "Which keyword is used to implement interfaces in Go?",
    options: ["interface", "implements", "type", "Go doesn't require a keyword"],
    correctAnswer: "Go doesn't require a keyword"
  },
  {
    question: "How does Go handle unused variables?",
    options: [
      "They are ignored",
      "They produce a runtime warning",
      "They result in a compile-time error",
      "They are optimized away"
    ],
    correctAnswer: "They result in a compile-time error"
  },
  {
    question: "Which Go tool is used to format code?",
    options: ["goformat", "go fmt", "gofix", "gofmt"],
    correctAnswer: "gofmt"
  },
  {
    question: "Which of the following is true about channels in Go?",
    options: [
      "They are thread-safe",
      "They are blocking by default",
      "They allow goroutines to communicate",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "What does `<-chan int` represent?",
    options: ["Send-only channel", "Receive-only channel", "Buffered channel", "Closed channel"],
    correctAnswer: "Receive-only channel"
  },
  {
    question: "Which Go keyword is used to launch a goroutine?",
    options: ["async", "go", "thread", "start"],
    correctAnswer: "go"
  },
  {
    question: "How can you ensure a goroutine completes before main exits?",
    options: ["Use time.Sleep", "Use sync.WaitGroup", "Use defer", "Use break"],
    correctAnswer: "Use sync.WaitGroup"
  },
  {
    question: "Which function is used to recover from a panic?",
    options: ["recover()", "handle()", "catch()", "throw()"],
    correctAnswer: "recover()"
  },
  {
    question: "Which keyword can be used to avoid race conditions in Go?",
    options: ["mutex", "safe", "lock", "thread"],
    correctAnswer: "mutex"
  },
  {
    question: "What is the default capacity of an unbuffered channel?",
    options: ["1", "0", "Unlimited", "It depends"],
    correctAnswer: "0"
  },
  {
    question: "What is the output of `len(make([]int, 3, 5))`?",
    options: ["3", "5", "0", "undefined"],
    correctAnswer: "3"
  },
  {
    question: "Which package is used for unit testing in Go?",
    options: ["unittest", "testing", "testify", "check"],
    correctAnswer: "testing"
  },
  {
    question: "How are Go interfaces implemented?",
    options: ["By inheritance", "By composition", "Implicitly", "Explicitly"],
    correctAnswer: "Implicitly"
  },
  {
    question: "How do you check if a map key exists?",
    options: ["map[key]", "val, ok := map[key]", "if key in map", "map.has(key)"],
    correctAnswer: "val, ok := map[key]"
  },
  {
    question: "What will happen if you close a nil channel?",
    options: ["Panic", "Nothing", "Deadlock", "Returns false"],
    correctAnswer: "Panic"
  },
  {
    question: "What is a rune in Go?",
    options: ["A type alias for int", "A byte", "An alias for float32", "An alias for int32"],
    correctAnswer: "An alias for int32"
  },
  {
    question: "How do you prevent concurrent map writes?",
    options: ["Use goroutines", "Use sync.Map", "Use mutex", "Use channel"],
    correctAnswer: "Use mutex"
  },
  {
    question: "What does `select` do in Go?",
    options: [
      "Select a random goroutine",
      "Block until a channel is ready",
      "Execute one of multiple channel operations",
      "Run concurrent processes"
    ],
    correctAnswer: "Execute one of multiple channel operations"
  },
  {
    question: "Can a Go interface contain fields?",
    options: ["Yes", "No", "Only exported fields", "Only constants"],
    correctAnswer: "No"
  },
  {
    question: "What is the size of an empty struct in Go?",
    options: ["0 bytes", "1 byte", "8 bytes", "Depends on architecture"],
    correctAnswer: "0 bytes"
  },
  {
    question: "What is `iota` used for?",
    options: ["Initialize maps", "Declare structs", "Auto-increment constants", "Interface implementation"],
    correctAnswer: "Auto-increment constants"
  },
  {
    question: "What is the default value of an uninitialized bool in Go?",
    options: ["true", "false", "nil", "0"],
    correctAnswer: "false"
  },
  {
    question: "Can Go return multiple values from a function?",
    options: ["No", "Yes", "Only with pointers", "Only with slices"],
    correctAnswer: "Yes"
  },
  {
    question: "What is `context.Context` used for?",
    options: ["HTTP routing", "Handling concurrency", "Managing timeouts and cancellations", "Struct tagging"],
    correctAnswer: "Managing timeouts and cancellations"
  },
  {
    question: "What will `copy(dst, src)` return?",
    options: ["New slice", "Number of bytes copied", "Length of src", "Length of dst"],
    correctAnswer: "Number of bytes copied"
  },
  {
    question: "Can you assign a `[]byte` to a `string`?",
    options: ["Yes", "No", "Only with casting", "Only with interface"],
    correctAnswer: "Only with casting"
  },
  {
    question: "Which keyword allows defining a method on a type?",
    options: ["method", "func", "def", "interface"],
    correctAnswer: "func"
  },
  {
    question: "Which Go feature is most useful for concurrent programming?",
    options: ["Interfaces", "Slices", "Goroutines", "Structs"],
    correctAnswer: "Goroutines"
  },
  {
    question: "What happens if a goroutine panics?",
    options: ["Crashes the app", "Is ignored", "Can be recovered", "Automatically retries"],
    correctAnswer: "Can be recovered"
  },
  {
    question: "Which function stops execution immediately in Go?",
    options: ["exit()", "panic()", "return", "break"],
    correctAnswer: "panic()"
  },
  {
    question: "Which of the following can be used to implement graceful shutdown in Go?",
    options: ["fmt.Println", "os.Exit", "context.Context", "sync.Mutex"],
    correctAnswer: "context.Context"
  },
  {
    question: "Which of the following types does not implement the error interface?",
    options: ["Custom struct with Error() string", "errors.New()", "fmt.Errorf()", "int"],
    correctAnswer: "int"
  },
  {
    question: "What does `sync.Once` do?",
    options: ["Runs code once and only once", "Synchronizes slices", "Prevents deadlocks", "Creates channels"],
    correctAnswer: "Runs code once and only once"
  },
  {
    question: "What does `recover()` return if there's no panic?",
    options: ["nil", "false", "0", "empty string"],
    correctAnswer: "nil"
  },
  {
    question: "Can Go interfaces be nil?",
    options: ["Yes", "No", "Only unexported", "Only in struct"],
    correctAnswer: "Yes"
  },
  {
    question: "Which Go construct provides mutual exclusion?",
    options: ["goroutine", "sync.Mutex", "map", "channel"],
    correctAnswer: "sync.Mutex"
  },
  {
    question: "Which statement initializes a buffered channel?",
    options: ["make(chan int)", "make(chan int, 10)", "new(chan int)", "init(chan int)"],
    correctAnswer: "make(chan int, 10)"
  },
  {
    question: "Which tool helps find race conditions?",
    options: ["gofmt", "go vet", "go test -race", "golint"],
    correctAnswer: "go test -race"
  },
  {
    question: "Can a struct in Go contain an interface field?",
    options: ["Yes", "No", "Only pointers", "Only private interfaces"],
    correctAnswer: "Yes"
  },
  {
    question: "How is a Go module initialized?",
    options: ["go init", "go mod init", "go start", "gomod"],
    correctAnswer: "go mod init"
  },
  {
    question: "What is the purpose of the `init()` function?",
    options: ["Entry point of program", "For testing only", "To initialize packages", "To clean up memory"],
    correctAnswer: "To initialize packages"
  },
  {
    question: "Which function is called before `main()`?",
    options: ["start()", "run()", "init()", "constructor()"],
    correctAnswer: "init()"
  },
  {
    question: "What does `go mod tidy` do?",
    options: ["Deletes modules", "Cleans formatting", "Adds/removes unused dependencies", "Formats code"],
    correctAnswer: "Adds/removes unused dependencies"
  },
  {
    question: "What is the purpose of `context.WithTimeout`?",
    options: ["Infinite execution", "Race condition fix", "Automatic retries", "Limit execution duration"],
    correctAnswer: "Limit execution duration"
  },
  {
    question: "Which Go version introduced generics?",
    options: ["1.13", "1.17", "1.18", "1.20"],
    correctAnswer: "1.18"
  },
  {
    question: "Can Go return pointers to local variables?",
    options: ["Yes", "No", "Only with interfaces", "Only in slices"],
    correctAnswer: "Yes"
  },
  {
    question: "What is the output of `fmt.Println(nil == nil)` if both are interfaces?",
    options: ["true", "false", "compile error", "panic"],
    correctAnswer: "false"
  },
    ]
  },
      rust:{
    easy:[
{
      question: "What is Rust primarily known for?",
      options: ["Speed and safety", "Ease of use", "Dynamic typing", "Web development"],
      correctAnswer: "Speed and safety"
    },
    {
      question: "Which keyword is used to define a constant in Rust?",
      options: ["const", "let", "static", "define"],
      correctAnswer: "const"
    },
    {
      question: "What does the 'mut' keyword do?",
      options: ["Makes a variable immutable", "Declares a constant", "Makes a variable mutable", "Deletes a variable"],
      correctAnswer: "Makes a variable mutable"
    },
    {
      question: "What is the entry point of a Rust program?",
      options: ["main()", "start()", "init()", "entry()"],
      correctAnswer: "main()"
    },
    {
      question: "Which command compiles a Rust program?",
      options: ["rustup", "rustc", "cargo run", "runrs"],
      correctAnswer: "rustc"
    },
    {
      question: "Which command initializes a new Cargo project?",
      options: ["cargo start", "cargo new", "cargo init", "cargo create"],
      correctAnswer: "cargo new"
    },
    {
      question: "Which keyword is used for pattern matching in Rust?",
      options: ["match", "case", "switch", "if"],
      correctAnswer: "match"
    },
    {
      question: "Which macro prints to the console in Rust?",
      options: ["println!", "print()", "console.log", "echo"],
      correctAnswer: "println!"
    },
    {
      question: "Which data type is used for true/false in Rust?",
      options: ["boolean", "bool", "int", "truthy"],
      correctAnswer: "bool"
    },
    {
      question: "What does 'let x = 5;' declare?",
      options: ["A mutable variable", "An immutable variable", "A constant", "A pointer"],
      correctAnswer: "An immutable variable"
    },
    {
      question: "Which symbol is used to borrow a reference?",
      options: ["&", "*", "#", "%"],
      correctAnswer: "&"
    },
    {
      question: "What is the output of 'println!(\"{}\", 5 + 3);'?",
      options: ["53", "8", "{} 8", "Error"],
      correctAnswer: "8"
    },
    {
      question: "Which type represents a sequence of characters?",
      options: ["char", "str", "String", "text"],
      correctAnswer: "String"
    },
    {
      question: "What does the 'enum' keyword define?",
      options: ["A function", "A constant", "A type with variants", "An array"],
      correctAnswer: "A type with variants"
    },
    {
      question: "What is the result of integer division 5 / 2 in Rust?",
      options: ["2", "2.5", "Error", "3"],
      correctAnswer: "2"
    },
    {
      question: "What does 'unwrap()' do in Rust?",
      options: ["Ignores a value", "Extracts value from an Option", "Wraps a value", "Converts to string"],
      correctAnswer: "Extracts value from an Option"
    },
    {
      question: "Which loop runs indefinitely unless broken?",
      options: ["loop", "for", "while", "match"],
      correctAnswer: "loop"
    },
    {
      question: "How do you define an array of 5 integers?",
      options: ["[i32;5]", "i32[5]", "int(5)", "{5;i32}"],
      correctAnswer: "[i32;5]"
    },
    {
      question: "Which keyword defines a structure?",
      options: ["class", "struct", "type", "object"],
      correctAnswer: "struct"
    },
    {
      question: "What is the keyword to return a value from a function?",
      options: ["yield", "exit", "return", "break"],
      correctAnswer: "return"
    },
    {
      question: "What is the file extension for Rust files?",
      options: [".rs", ".rust", ".r", ".rts"],
      correctAnswer: ".rs"
    },
    {
      question: "Which type is used to handle absence of a value?",
      options: ["Result", "Option", "None", "Null"],
      correctAnswer: "Option"
    },
    {
      question: "Which of the following is not a valid Rust primitive type?",
      options: ["f64", "u32", "bool", "float64"],
      correctAnswer: "float64"
    },
    {
      question: "What is the Rust toolchain manager?",
      options: ["cargo", "rustup", "rustc", "rusttool"],
      correctAnswer: "rustup"
    },
    {
      question: "Which keyword is used for error handling?",
      options: ["try", "catch", "match", "Result"],
      correctAnswer: "Result"
    },
    {
      question: "Which macro stops execution and shows an error?",
      options: ["panic!", "throw!", "stop!", "error!"],
      correctAnswer: "panic!"
    },
    {
      question: "Which of the following is a tuple in Rust?",
      options: ["[1, 2]", "{1, 2}", "(1, 2)", "<1, 2>"],
      correctAnswer: "(1, 2)"
    },
    {
      question: "What does 'pub' keyword do?",
      options: ["Makes item public", "Initializes variable", "Imports modules", "Creates loop"],
      correctAnswer: "Makes item public"
    },
    {
      question: "What is the correct syntax to create a vector?",
      options: ["vec![1, 2, 3]", "[1, 2, 3]", "array!(1,2,3)", "new Vec(1,2,3)"],
      correctAnswer: "vec![1, 2, 3]"
    },
    {
      question: "How do you get the length of a vector `v`?",
      options: ["v.len()", "v.length", "length(v)", "len(v)"],
      correctAnswer: "v.len()"
    },
    {
      question: "Which of the following is a valid function definition?",
      options: ["fn add(x: i32, y: i32) -> i32", "function add(x: i32, y: i32): i32", "add(i32 x, i32 y)", "def add(x, y):"],
      correctAnswer: "fn add(x: i32, y: i32) -> i32"
    },
    {
      question: "How is a block of code enclosed in Rust?",
      options: ["{}", "()", "[]", "<>"],
      correctAnswer: "{}"
    },
    {
      question: "What is a crate in Rust?",
      options: ["A function", "A variable", "A package", "A loop"],
      correctAnswer: "A package"
    },
    {
      question: "Which keyword defines a trait?",
      options: ["trait", "interface", "impl", "define"],
      correctAnswer: "trait"
    },
    {
      question: "Which of the following is used for documentation?",
      options: ["///", "//", "/* */", "###"],
      correctAnswer: "///"
    },
    {
      question: "What does 'derive' do in Rust?",
      options: ["Implements traits automatically", "Defines new type", "Creates enum", "Allocates memory"],
      correctAnswer: "Implements traits automatically"
    },
    {
      question: "Which of the following is not a Rust collection type?",
      options: ["Vector", "HashMap", "Set", "LinkedList"],
      correctAnswer: "LinkedList"
    },
    {
      question: "Which command builds and runs the project?",
      options: ["cargo run", "rustc main.rs", "cargo build", "rust run"],
      correctAnswer: "cargo run"
    },
    {
      question: "Which keyword is used to import modules?",
      options: ["use", "import", "include", "from"],
      correctAnswer: "use"
    },
    {
      question: "Which symbol is used to dereference a pointer?",
      options: ["*", "&", "@", "#"],
      correctAnswer: "*"
    },
    {
      question: "What does 'match Some(x)' do?",
      options: ["Checks if x exists", "Matches x only if it’s not None", "Creates an Option", "Returns x"],
      correctAnswer: "Matches x only if it’s not None"
    },
    {
      question: "Which keyword begins an implementation block?",
      options: ["impl", "implement", "trait", "use"],
      correctAnswer: "impl"
    },
    {
      question: "Which of the following is a correct conditional statement?",
      options: ["if x == 5 {}", "if (x = 5)", "if x := 5", "when x == 5"],
      correctAnswer: "if x == 5 {}"
    },
    {
      question: "What does the `as` keyword do?",
      options: ["Casts one type to another", "Assigns variable", "Creates alias", "Starts function"],
      correctAnswer: "Casts one type to another"
    },
    {
      question: "What is the result of `5 % 2` in Rust?",
      options: ["1", "2", "2.5", "Error"],
      correctAnswer: "1"
    },
    {
      question: "Which of the following is used to read input?",
      options: ["std::io", "input()", "console.read()", "readline!"],
      correctAnswer: "std::io"
    },
    {
      question: "How do you define an empty string?",
      options: ["String::new()", "\"\"", "new String()", "String[]"],
      correctAnswer: "String::new()"
    },
    {
      question: "Which trait is required for printing using {}?",
      options: ["Display", "Debug", "Print", "Format"],
      correctAnswer: "Display"
    },
    {
      question: "Which keyword allows a variable to live beyond its scope?",
      options: ["'static", "lifetime", "global", "scope"],
      correctAnswer: "'static"
    },
    {
      question: "Which type of memory management does Rust use?",
      options: ["Ownership", "Garbage collection", "Reference counting", "Manual"],
      correctAnswer: "Ownership"
    },
    ],
    advance:[
      {
    question: "What is the purpose of the `unsafe` keyword in Rust?",
    options: [
      "To write faster code",
      "To bypass Rust’s safety guarantees",
      "To optimize for memory usage",
      "To define macros",
    ],
    correctAnswer: "To bypass Rust’s safety guarantees",
  },
  {
    question: "Which trait must be implemented to allow a type to be formatted using `{}`?",
    options: ["Debug", "Display", "Clone", "Copy"],
    correctAnswer: "Display",
  },
  {
    question: "What does the `'static` lifetime mean in Rust?",
    options: [
      "Data is valid for the current scope only",
      "Data is stored in the heap",
      "Data is valid for the entire duration of the program",
      "Data is mutable",
    ],
    correctAnswer: "Data is valid for the entire duration of the program",
  },
  {
    question: "Which macro is used for pattern matching errors in Rust?",
    options: ["unwrap!", "panic!", "match!", "try!"],
    correctAnswer: "try!",
  },
  {
    question: "What does the `?` operator do in Rust?",
    options: [
      "Converts a value to boolean",
      "Unwraps the Result or propagates the error",
      "Denotes optional value",
      "Checks if value exists",
    ],
    correctAnswer: "Unwraps the Result or propagates the error",
  },
  {
    question: "Which trait is required to overload the `+` operator in Rust?",
    options: ["Add", "Plus", "Sum", "Combine"],
    correctAnswer: "Add",
  },
  {
    question: "Which of the following is true about `Box<T>` in Rust?",
    options: [
      "Allocates memory on stack",
      "Used for compile-time memory allocation",
      "Stores data on heap with fixed size",
      "Used for pattern matching",
    ],
    correctAnswer: "Stores data on heap with fixed size",
  },
  {
    question: "What does `.into_iter()` do?",
    options: [
      "Consumes the collection and returns an iterator",
      "Returns a reference to an iterator",
      "Mutably borrows the iterator",
      "Copies the data",
    ],
    correctAnswer: "Consumes the collection and returns an iterator",
  },
  {
    question: "Which type of smart pointer allows shared mutable access with runtime checks?",
    options: ["Rc<T>", "Box<T>", "RefCell<T>", "Arc<T>"],
    correctAnswer: "RefCell<T>",
  },
  {
    question: "What is the main use of `Arc<T>` in Rust?",
    options: [
      "Safe mutable access to heap data",
      "Reference counting across threads",
      "Atomic integer operations",
      "Optimizing performance",
    ],
    correctAnswer: "Reference counting across threads",
  },
  {
    question: "What is the key difference between `Rc<T>` and `Arc<T>`?",
    options: [
      "`Rc<T>` is thread-safe",
      "`Arc<T>` is used in single-threaded contexts",
      "`Arc<T>` is thread-safe",
      "No difference",
    ],
    correctAnswer: "`Arc<T>` is thread-safe",
  },
  {
    question: "What is the use of lifetimes in Rust?",
    options: [
      "To specify memory size",
      "To track variable ownership",
      "To ensure references are valid",
      "To compile unsafe code",
    ],
    correctAnswer: "To ensure references are valid",
  },
  {
    question: "What does the term 'zero-cost abstractions' mean in Rust?",
    options: [
      "Abstractions are not allowed",
      "Abstractions are replaced with macros",
      "Abstractions have no runtime overhead",
      "Only static memory is allowed",
    ],
    correctAnswer: "Abstractions have no runtime overhead",
  },
  {
    question: "Which crate is used for asynchronous programming in Rust?",
    options: ["async", "await", "tokio", "future"],
    correctAnswer: "tokio",
  },
  {
    question: "What does `Send` trait signify?",
    options: [
      "A type can be shared between threads",
      "A type can be transferred to another thread",
      "A type is serializable",
      "A type is printable",
    ],
    correctAnswer: "A type can be transferred to another thread",
  },
  {
    question: "Which Rust feature ensures memory safety without garbage collection?",
    options: ["Traits", "Ownership system", "Enums", "Modules"],
    correctAnswer: "Ownership system",
  },
  {
    question: "Which trait is used to define custom behavior for `==` operator?",
    options: ["Cmp", "PartialEq", "Eq", "Compare"],
    correctAnswer: "PartialEq",
  },
  {
    question: "What is the purpose of `Cow` in Rust?",
    options: [
      "Compile-only wrapper",
      "Clone on Write for optimizing reads/writes",
      "Compile once wrapper",
      "Copy on Write trait",
    ],
    correctAnswer: "Clone on Write for optimizing reads/writes",
  },
  {
    question: "Which trait allows a type to be printed using `{:?}`?",
    options: ["Debug", "Display", "ToString", "Printable"],
    correctAnswer: "Debug",
  },
  {
    question: "What does `dyn Trait` mean in Rust?",
    options: [
      "A dynamically dispatched trait object",
      "A dynamic macro",
      "A compile-time trait",
      "A function pointer",
    ],
    correctAnswer: "A dynamically dispatched trait object",
  },
  {
    question: "What is the purpose of `PhantomData<T>` in Rust?",
    options: [
      "Allocates memory",
      "Indicates generic type without storing data",
      "Provides trait bounds",
      "Creates threads",
    ],
    correctAnswer: "Indicates generic type without storing data",
  },
  {
    question: "Which macro provides conditional compilation?",
    options: ["#[cfg]", "#[macro]", "#[derive]", "#[impl]"],
    correctAnswer: "#[cfg]",
  },
  {
    question: "What is `impl Trait` used for in function return types?",
    options: [
      "To return multiple values",
      "To implement a trait",
      "To return a type that implements a trait without naming it",
      "To return a macro",
    ],
    correctAnswer: "To return a type that implements a trait without naming it",
  },
  {
    question: "What is the main benefit of using `Result<T, E>` in Rust?",
    options: [
      "Code becomes shorter",
      "Better performance",
      "Compile-time error handling",
      "Memory optimization",
    ],
    correctAnswer: "Compile-time error handling",
  },
  {
    question: "What’s the difference between `Result` and `Option`?",
    options: [
      "`Option` can’t be used with errors",
      "`Result` can store success and error, `Option` is for presence or absence",
      "`Option` is more flexible",
      "`Result` is used for booleans",
    ],
    correctAnswer: "`Result` can store success and error, `Option` is for presence or absence",
  },
  {
    question: "How can recursion in Rust be optimized to avoid stack overflow?",
    options: [
      "Using `Box`",
      "Using tail recursion with `loop`",
      "Using dynamic typing",
      "Using async block",
    ],
    correctAnswer: "Using tail recursion with `loop`",
  },
  {
    question: "Which keyword is used to create a new thread in Rust?",
    options: ["spawn", "new", "thread", "async"],
    correctAnswer: "spawn",
  },
  {
    question: "What does `unwrap_or_else` do?",
    options: [
      "Unwraps or panics",
      "Unwraps or uses a closure to produce a value",
      "Returns error message",
      "Throws exception",
    ],
    correctAnswer: "Unwraps or uses a closure to produce a value",
  },
  {
    question: "Which is NOT a common collection type in Rust?",
    options: ["Vec", "HashSet", "List", "HashMap"],
    correctAnswer: "List",
  },
  {
    question: "What happens if you access a moved value in Rust?",
    options: [
      "Compilation error",
      "Runtime warning",
      "Nothing",
      "It clones automatically",
    ],
    correctAnswer: "Compilation error",
  },
   {
    question: "How does Rust ensure thread safety at compile time?",
    options: [
      "With the borrow checker and ownership system",
      "With a garbage collector",
      "Using runtime type checking",
      "With memory guards",
    ],
    correctAnswer: "With the borrow checker and ownership system",
  },
  {
    question: "What is a trait object in Rust?",
    options: [
      "A trait used only at compile time",
      "A boxed value that implements a trait",
      "An enum that derives a trait",
      "A type alias for a struct",
    ],
    correctAnswer: "A boxed value that implements a trait",
  },
  {
    question: "What is the significance of `Sized` trait in Rust?",
    options: [
      "Indicates if a value is hashable",
      "Indicates if a value has a known size at compile time",
      "Shows if a value is mutable",
      "Ensures values can be compared",
    ],
    correctAnswer: "Indicates if a value has a known size at compile time",
  },
  {
    question: "What does `.expect()` do on a `Result` or `Option`?",
    options: [
      "Returns the value or panics with a custom message",
      "Ignores errors",
      "Returns `None` if error",
      "Wraps value in `Ok`",
    ],
    correctAnswer: "Returns the value or panics with a custom message",
  },
  {
    question: "Which function is used to create an empty `HashMap`?",
    options: ["HashMap::new()", "HashMap::empty()", "HashMap::create()", "new_hashmap()"],
    correctAnswer: "HashMap::new()",
  },
  {
    question: "What is `Pin<T>` used for in Rust?",
    options: [
      "To make a value mutable",
      "To prevent a value from being moved in memory",
      "To speed up execution",
      "To pin threads to cores",
    ],
    correctAnswer: "To prevent a value from being moved in memory",
  },
  {
    question: "Which trait bounds allow a function to take any comparable value?",
    options: ["T: Ord", "T: Copy", "T: Display", "T: Debug"],
    correctAnswer: "T: Ord",
  },
  {
    question: "What does the `move` keyword do in closures?",
    options: [
      "Moves ownership of captured variables into the closure",
      "Moves the closure into a new thread",
      "Changes variable type",
      "Enables dynamic typing",
    ],
    correctAnswer: "Moves ownership of captured variables into the closure",
  },
  {
    question: "Which tool formats Rust code according to standard style?",
    options: ["rustfmt", "cargo format", "rustc format", "ruststyle"],
    correctAnswer: "rustfmt",
  },
  {
    question: "What does the `Send` + `Sync` combination allow in Rust?",
    options: [
      "Multiple threads to read and write safely",
      "Memory allocation",
      "Compile-time recursion",
      "Trait overloading",
    ],
    correctAnswer: "Multiple threads to read and write safely",
  },
  {
    question: "Which command builds a release version of a Rust project?",
    options: ["cargo build --release", "rustc release", "cargo release", "cargo build -r"],
    correctAnswer: "cargo build --release",
  },
  {
    question: "What is the purpose of `std::mem::drop()`?",
    options: [
      "Transfers ownership",
      "Destroys a value explicitly",
      "Clones a value",
      "Moves a value to heap",
    ],
    correctAnswer: "Destroys a value explicitly",
  },
  {
    question: "What is the purpose of `await` in Rust async functions?",
    options: [
      "Blocks the thread until task is done",
      "Returns immediately",
      "Polls a future to completion",
      "Wraps a result",
    ],
    correctAnswer: "Polls a future to completion",
  },
  {
    question: "Which tool is used to run unit tests in Rust?",
    options: ["cargo test", "rustc --test", "cargo check", "cargo run-test"],
    correctAnswer: "cargo test",
  },
  {
    question: "Which trait is used for hashing custom types in `HashMap`?",
    options: ["Hash", "Hasher", "Clone", "Eq"],
    correctAnswer: "Hash",
  },
  {
    question: "Which function is used to read a file into a string in Rust?",
    options: [
      "fs::read_to_string()",
      "fs::read_file()",
      "file::to_string()",
      "io::read()",
    ],
    correctAnswer: "fs::read_to_string()",
  },
  {
    question: "What does the `derive` attribute do in Rust?",
    options: [
      "Automatically implements common traits",
      "Runs code generation tools",
      "Starts the main function",
      "Forces compilation",
    ],
    correctAnswer: "Automatically implements common traits",
  },
  {
    question: "What is the main advantage of using `match` over `if let`?",
    options: [
      "`match` handles all possible cases exhaustively",
      "`match` is more performant",
      "`if let` is deprecated",
      "`match` has less syntax",
    ],
    correctAnswer: "`match` handles all possible cases exhaustively",
  },
  {
    question: "Which Rust type is used for inter-thread communication?",
    options: ["std::sync::mpsc", "std::thread::spawn", "std::io::Pipe", "std::os::unix"],
    correctAnswer: "std::sync::mpsc",
  },
  {
    question: "Which tool checks Rust code for common errors and linting?",
    options: ["clippy", "cargo-check", "linter", "cargo doctor"],
    correctAnswer: "clippy",
  },
    ]
  },
      kotlin:{
    easy:[
{
  question: "What does the Elvis operator (?:) do in Kotlin?",
  options: ["Checks equality", "Performs null-safety fallback", "Concatenates strings", "Repeats a loop"],
  correctAnswer: "Performs null-safety fallback"
},
{
    question: "What is the correct file extension for Kotlin files?",
    options: [".kt", ".kotlin", ".kot", ".java"],
    correctAnswer: ".kt",
  },
  {
    question: "Which keyword is used to declare a variable in Kotlin?",
    options: ["var", "let", "def", "int"],
    correctAnswer: "var",
  },
  {
    question: "How do you declare a read-only variable in Kotlin?",
    options: ["val", "var", "const", "let"],
    correctAnswer: "val",
  },
  {
    question: "What is the entry point of a Kotlin application?",
    options: ["main()", "start()", "run()", "execute()"],
    correctAnswer: "main()",
  },
  {
    question: "Which company developed Kotlin?",
    options: ["JetBrains", "Google", "Microsoft", "Facebook"],
    correctAnswer: "JetBrains",
  },
  {
    question: "What is the Kotlin equivalent of Java's `null` handling?",
    options: ["Nullable types", "Optional types", "Void types", "Missing types"],
    correctAnswer: "Nullable types",
  },
  {
    question: "Which symbol is used to check for nullability in Kotlin?",
    options: ["?", "!", "@", "#"],
    correctAnswer: "?",
  },
  {
    question: "Which function prints text in Kotlin?",
    options: ["println()", "printline()", "echo()", "display()"],
    correctAnswer: "println()",
  },
  {
    question: "Which keyword is used to define a function in Kotlin?",
    options: ["fun", "function", "def", "fn"],
    correctAnswer: "fun",
  },
  {
    question: "What does `val` mean in Kotlin?",
    options: [
      "Immutable variable",
      "Mutable variable",
      "Class name",
      "Return value",
    ],
    correctAnswer: "Immutable variable",
  },
  {
    question: "Which symbol is used to define a lambda in Kotlin?",
    options: ["->", "=>", "<-", "==>"],
    correctAnswer: "->",
  },
  {
    question: "Which collection type does Kotlin support?",
    options: ["List", "Set", "Map", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "How do you define a class in Kotlin?",
    options: ["class MyClass", "Class MyClass", "define class MyClass", "function MyClass"],
    correctAnswer: "class MyClass",
  },
  {
    question: "Kotlin code can run on which platform?",
    options: ["JVM", "JavaScript", "Native", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "What is the safe call operator in Kotlin?",
    options: ["?.", "!!", "::", "?:"],
    correctAnswer: "?.",
  },
  {
    question: "Which operator is used for Elvis in Kotlin?",
    options: ["?:", "?!", "::", "=="],
    correctAnswer: "?:",
  },
  {
    question: "What does `!!` do in Kotlin?",
    options: [
      "Asserts a value is non-null",
      "Throws an exception",
      "Checks type",
      "Creates a list",
    ],
    correctAnswer: "Asserts a value is non-null",
  },
  {
    question: "Which keyword is used to inherit a class in Kotlin?",
    options: ["open", "inherit", "extends", "override"],
    correctAnswer: "open",
  },
  {
    question: "What is the default visibility modifier in Kotlin?",
    options: ["public", "private", "protected", "internal"],
    correctAnswer: "public",
  },
  {
    question: "How do you create an array in Kotlin?",
    options: ["arrayOf()", "Array()", "createArray()", "new Array()"],
    correctAnswer: "arrayOf()",
  },
  {
    question: "Which keyword is used for interfaces in Kotlin?",
    options: ["interface", "protocol", "trait", "extends"],
    correctAnswer: "interface",
  },
  {
    question: "Which loop is available in Kotlin?",
    options: ["for", "while", "do-while", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "What does `in` keyword do in Kotlin loops?",
    options: [
      "Checks if value exists in range or collection",
      "Increments value",
      "Declares variable",
      "Calls function",
    ],
    correctAnswer: "Checks if value exists in range or collection",
  },
  {
    question: "Which keyword is used to return from a function?",
    options: ["return", "exit", "stop", "end"],
    correctAnswer: "return",
  },
  {
    question: "What does `is` keyword do in Kotlin?",
    options: ["Type checking", "Assignment", "Inheritance", "Null check"],
    correctAnswer: "Type checking",
  },
  {
    question: "What is the super class of all classes in Kotlin?",
    options: ["Any", "Object", "Base", "Root"],
    correctAnswer: "Any",
  },
  {
    question: "Which function checks if a string is empty?",
    options: ["isEmpty()", "empty()", "isBlank()", "checkEmpty()"],
    correctAnswer: "isEmpty()",
  },
  {
    question: "Which function trims a string?",
    options: ["trim()", "cut()", "strip()", "slice()"],
    correctAnswer: "trim()",
  },
  {
    question: "How do you write a single-line comment in Kotlin?",
    options: ["//", "#", "--", "/*"],
    correctAnswer: "//",
  },
  {
    question: "How do you write multi-line comments in Kotlin?",
    options: ["/* */", "//", "#", "<!-- -->"],
    correctAnswer: "/* */",
  },
  {
    question: "Which function is used to get string length?",
    options: ["length", "size", "count", "getLength"],
    correctAnswer: "length",
  },
  {
    question: "Which class is used for string manipulation?",
    options: ["StringBuilder", "StringBuffer", "TextWriter", "StringUtil"],
    correctAnswer: "StringBuilder",
  },
  {
    question: "How do you declare a constant in Kotlin?",
    options: ["const val", "let", "static val", "constant"],
    correctAnswer: "const val",
  },
  {
    question: "What is the data type of whole numbers in Kotlin?",
    options: ["Int", "Number", "Whole", "Digit"],
    correctAnswer: "Int",
  },
  {
    question: "How do you convert a string to an integer in Kotlin?",
    options: ["toInt()", "intValue()", "parseInt()", "convertInt()"],
    correctAnswer: "toInt()",
  },
  {
    question: "Which data type represents a true/false value?",
    options: ["Boolean", "Bit", "Truth", "Flag"],
    correctAnswer: "Boolean",
  },
  {
    question: "Which function creates a new list in Kotlin?",
    options: ["listOf()", "newList()", "List()", "makeList()"],
    correctAnswer: "listOf()",
  },
  {
    question: "What does the `!!` operator do?",
    options: ["Throws NPE if null", "Creates nullable type", "Casts type", "Checks null"],
    correctAnswer: "Throws NPE if null",
  },
  {
    question: "How do you declare a function with return type in Kotlin?",
    options: ["fun add(): Int", "function add(Int)", "Int add()", "fun Int add()"],
    correctAnswer: "fun add(): Int",
  },
  {
    question: "What keyword is used for inheritance?",
    options: ["open", "extends", "inherits", "child"],
    correctAnswer: "open",
  },
  {
    question: "Which function checks if two strings are equal?",
    options: ["equals()", "===", "match()", "compareTo()"],
    correctAnswer: "equals()",
  },
  {
    question: "How do you convert an int to a string?",
    options: ["toString()", "stringify()", "convertToString()", "asString()"],
    correctAnswer: "toString()",
  },
  {
    question: "Which function replaces parts of a string?",
    options: ["replace()", "substitute()", "switch()", "change()"],
    correctAnswer: "replace()",
  },
  {
    question: "How do you concatenate strings in Kotlin?",
    options: ["+", "&", "concat()", "append()"],
    correctAnswer: "+",
  },
  {
    question: "Which keyword is used to implement a trait or interface?",
    options: ["override", "extend", "implement", "use"],
    correctAnswer: "override",
  },
  {
    question: "Which function returns the index of a character?",
    options: ["indexOf()", "position()", "findIndex()", "charAt()"],
    correctAnswer: "indexOf()",
  },
  {
    question: "Which keyword is used for conditional branching?",
    options: ["if", "when", "switch", "choose"],
    correctAnswer: "if",
  },
  {
    question: "What is the Kotlin alternative to Java's `switch`?",
    options: ["when", "match", "select", "branch"],
    correctAnswer: "when",
  },
  {
    question: "How do you repeat a task in Kotlin?",
    options: ["loop", "for", "repeat", "do"],
    correctAnswer: "repeat",
  },
    ],
    advance:[
       {
    question: "What is the primary purpose of Kotlin's `sealed` classes?",
    options: [
      "To define abstract methods",
      "To restrict subclassing to a limited set",
      "To prevent object instantiation",
      "To enable lazy loading"
    ],
    correctAnswer: "To restrict subclassing to a limited set"
  },
  {
    question: "What is a key benefit of using Kotlin coroutines over traditional threads?",
    options: [
      "They are type-safe",
      "They are faster at compile time",
      "They use less memory and provide concurrency without blocking threads",
      "They allow static method access"
    ],
    correctAnswer: "They use less memory and provide concurrency without blocking threads"
  },
  {
    question: "Which Kotlin keyword is used to define a function that can be overridden?",
    options: [
      "open",
      "abstract",
      "override",
      "virtual"
    ],
    correctAnswer: "open"
  },
  {
    question: "What does the `by lazy` keyword do in Kotlin?",
    options: [
      "Initializes a variable after constructor",
      "Postpones property initialization until first access",
      "Skips null checks",
      "Defines a backing property"
    ],
    correctAnswer: "Postpones property initialization until first access"
  },
  {
    question: "Which scope function returns the object itself regardless of the lambda result?",
    options: ["apply", "let", "run", "with"],
    correctAnswer: "apply"
  },
  {
    question: "Which Kotlin collection is immutable by default?",
    options: ["ArrayList", "List", "MutableList", "Array"],
    correctAnswer: "List"
  },
  {
    question: "How do you make a function in Kotlin inline?",
    options: ["Add inline keyword before fun", "Use lambda expressions", "Prefix with in:", "No keyword required"],
    correctAnswer: "Add inline keyword before fun"
  },
  {
    question: "What is the use of `companion object` in Kotlin?",
    options: [
      "To declare global variables",
      "To implement multiple inheritance",
      "To hold static members of a class",
      "To handle null safety"
    ],
    correctAnswer: "To hold static members of a class"
  },
  {
    question: "Which annotation is used to call Kotlin code from Java?",
    options: ["@JvmName", "@KotlinBridge", "@JavaInterop", "@CallFromJava"],
    correctAnswer: "@JvmName"
  },
  {
    question: "Which Kotlin feature is designed to replace Java's try-with-resources?",
    options: ["use function", "apply block", "withContext", "finally block"],
    correctAnswer: "use function"
  },
  {
    question: "What does the `suspend` modifier indicate in Kotlin?",
    options: [
      "The function is experimental",
      "The function supports operator overloading",
      "The function is a coroutine and can be paused",
      "The function is inline"
    ],
    correctAnswer: "The function is a coroutine and can be paused"
  },
  {
    question: "Which function creates a read-only list in Kotlin?",
    options: ["mutableListOf()", "arrayListOf()", "listOf()", "setOf()"],
    correctAnswer: "listOf()"
  },
  {
    question: "Which Kotlin scope function is best when working with object configuration?",
    options: ["let", "also", "apply", "run"],
    correctAnswer: "apply"
  },
  {
    question: "What is the primary advantage of using `data class` in Kotlin?",
    options: [
      "Better inheritance handling",
      "Automatic generation of equals(), hashCode(), and toString()",
      "Supports multiple constructors",
      "Automatic serialization"
    ],
    correctAnswer: "Automatic generation of equals(), hashCode(), and toString()"
  },
  {
    question: "Which operator is used in Kotlin for null-safety check?",
    options: ["!!", "?:", "?.", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is a backing field in Kotlin?",
    options: [
      "A property with a default value",
      "A hidden field used by getters and setters",
      "An immutable reference",
      "A reference to parent class"
    ],
    correctAnswer: "A hidden field used by getters and setters"
  },
  {
    question: "How do you declare a lambda expression in Kotlin?",
    options: [
      "{ x -> x * 2 }",
      "lambda(x) => x * 2",
      "fun(x) = x * 2",
      "function(x) { return x * 2 }"
    ],
    correctAnswer: "{ x -> x * 2 }"
  },
  {
    question: "What does the `lateinit` modifier allow in Kotlin?",
    options: [
      "Lazy initialization for primitives",
      "Initialization later for non-null var",
      "Initialization at compile time",
      "Null values assignment"
    ],
    correctAnswer: "Initialization later for non-null var"
  },
  {
    question: "What does the `object` keyword define in Kotlin?",
    options: [
      "A singleton",
      "A regular class",
      "A static block",
      "An enum"
    ],
    correctAnswer: "A singleton"
  },
  {
    question: "Which construct is used to define extension functions in Kotlin?",
    options: ["fun Type.name() {}", "extend fun {}", "type.extend {}", "type.functionName() {}"],
    correctAnswer: "fun Type.name() {}"
  },
  {
    question: "In Kotlin, what does `infix` modifier allow?",
    options: [
      "Using functions in infix notation",
      "Avoiding return types",
      "Declaring lazy properties",
      "Using unsafe calls"
    ],
    correctAnswer: "Using functions in infix notation"
  },
  {
    question: "How do you define a generic class in Kotlin?",
    options: ["class Box<T>", "generic class Box", "Box<Type>", "fun Box(Type)"],
    correctAnswer: "class Box<T>"
  },
  {
    question: "What is the purpose of `@DslMarker` in Kotlin?",
    options: [
      "To mark deprecated methods",
      "To avoid scope pollution in DSLs",
      "To optimize memory usage",
      "To serialize classes"
    ],
    correctAnswer: "To avoid scope pollution in DSLs"
  },
  {
    question: "Which Kotlin feature helps build type-safe HTML builders?",
    options: ["DSLs", "Sealed Classes", "Coroutines", "Delegates"],
    correctAnswer: "DSLs"
  },
  {
    question: "Which feature does Kotlin provide for property delegation?",
    options: ["by keyword", "val keyword", "as keyword", "ref keyword"],
    correctAnswer: "by keyword"
  },
  {
    question: "Which is used to catch exceptions in coroutines?",
    options: ["try-catch", "CoroutineExceptionHandler", "SupervisorScope", "CoroutineScope"],
    correctAnswer: "CoroutineExceptionHandler"
  },
  {
    question: "What is the result of `val result = null ?: 'fallback'`?",
    options: ["fallback", "null", "true", "error"],
    correctAnswer: "fallback"
  },
  {
    question: "Which scope function is best used when you need to return the result of the lambda?",
    options: ["let", "run", "also", "apply"],
    correctAnswer: "run"
  },
  {
    question: "Which keyword is used for declaring abstract functions?",
    options: ["abstract", "interface", "virtual", "open"],
    correctAnswer: "abstract"
  },
  {
    question: "How to define a nullable type in Kotlin?",
    options: ["String?", "?String", "nullable String", "String/null"],
    correctAnswer: "String?"
  },
  {
    question: "Which keyword allows the usage of Java static methods in Kotlin?",
    options: ["@JvmStatic", "@StaticImport", "@JavaMethod", "@StaticCall"],
    correctAnswer: "@JvmStatic"
  },
  {
    question: "What is the return type of a Kotlin function that returns nothing?",
    options: ["Unit", "void", "Nothing", "None"],
    correctAnswer: "Unit"
  },
  {
    question: "How can you create a singleton in Kotlin?",
    options: ["Using object declaration", "Using static keyword", "Using private constructor", "Using companion object"],
    correctAnswer: "Using object declaration"
  },
  {
    question: "Which library is typically used for asynchronous programming in Kotlin?",
    options: ["kotlinx.coroutines", "kotlinx.async", "kotlin.concurrent", "kotlin.async"],
    correctAnswer: "kotlinx.coroutines"
  },
  {
    question: "What is the purpose of `Nothing` type in Kotlin?",
    options: [
      "To denote a function that never returns",
      "To denote null variables",
      "To create arrays",
      "To represent all classes"
    ],
    correctAnswer: "To denote a function that never returns"
  },
  {
    question: "How is a tail-recursive function marked in Kotlin?",
    options: ["tailrec", "tail", "rec", "loop"],
    correctAnswer: "tailrec"
  },
  {
    question: "What does `super` keyword refer to in Kotlin?",
    options: ["Parent class", "Current class", "Next class", "Subclass"],
    correctAnswer: "Parent class"
  },
  {
    question: "Which is a valid Kotlin interface declaration?",
    options: ["interface Clickable", "class interface Clickable", "interface = Clickable", "Clickable implements interface"],
    correctAnswer: "interface Clickable"
  },
  {
    question: "Can Kotlin interfaces have default method implementations?",
    options: ["Yes", "No", "Only abstract", "Only static"],
    correctAnswer: "Yes"
  },
  {
    question: "What is the use of `@Parcelize` in Kotlin?",
    options: ["To make class Parcelable automatically", "To define JSON schema", "To create database tables", "To validate input"],
    correctAnswer: "To make class Parcelable automatically"
  },
  {
    question: "What does `::` operator mean in Kotlin?",
    options: [
      "Function reference",
      "Lambda expression",
      "Concatenation",
      "Property delegation"
    ],
    correctAnswer: "Function reference"
  },
  {
    question: "Which file extension is used for Kotlin source files?",
    options: [".kt", ".kot", ".kotlin", ".java"],
    correctAnswer: ".kt"
  },
  {
    question: "What is `super<T>` used for?",
    options: [
      "To call a method from a specific superclass",
      "To inherit multiple classes",
      "To override parent method",
      "To implement an interface"
    ],
    correctAnswer: "To call a method from a specific superclass"
  },
  {
    question: "What is the result of `listOf(1, 2, 3).filter { it > 1 }`?",
    options: ["[2, 3]", "[1, 2, 3]", "[1]", "[3]"],
    correctAnswer: "[2, 3]"
  },
  {
    question: "Which feature enables destructuring declarations in Kotlin?",
    options: ["Component functions", "Deconstructor", "Object unpacking", "Lambda binding"],
    correctAnswer: "Component functions"
  },
  {
    question: "Can you inherit from multiple classes in Kotlin?",
    options: ["No", "Yes", "Only with sealed classes", "Only with mixins"],
    correctAnswer: "No"
  },
  {
    question: "What is `reified` keyword used for in Kotlin?",
    options: [
      "To keep type information at runtime",
      "To define interface methods",
      "To create generic objects",
      "To hide visibility"
    ],
    correctAnswer: "To keep type information at runtime"
  },
  {
    question: "Which scope function allows chaining and returns the receiver object?",
    options: ["also", "let", "run", "takeIf"],
    correctAnswer: "also"
  },
  {
  question: "What is the result of the following code? `val list = listOf(1, 2, 3); println(list.filterIndexed { index, _ -> index % 2 == 0 })`",
  options: [
    "[2]",
    "[1, 2, 3]",
    "[1, 3]",
    "[2, 3]"
  ],
  correctAnswer: "[1, 3]"
},
{
  question: "What is the primary use of Kotlin’s `sealed` classes?",
  options: [
    "To allow multiple inheritance",
    "To define restricted class hierarchies",
    "To declare immutable data",
    "To define singleton classes"
  ],
  correctAnswer: "To define restricted class hierarchies"
},
    ]
  },
        swift:{
    easy:[
{
    question: "Which keyword is used to declare a constant in Swift?",
    options: ["let", "var", "const", "define"],
    correctAnswer: "let"
  },
  {
    question: "Which keyword is used to declare a variable in Swift?",
    options: ["let", "val", "var", "define"],
    correctAnswer: "var"
  },
  {
    question: "What is the correct syntax to define a function in Swift?",
    options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "fun myFunc() {}"],
    correctAnswer: "func myFunc() {}"
  },
  {
    question: "Which symbol is used for string interpolation in Swift?",
    options: ["$", "#", "\\", "\\()"],
    correctAnswer: "\\()"
  },
  {
    question: "What is the type of a whole number in Swift?",
    options: ["String", "Double", "Int", "Float"],
    correctAnswer: "Int"
  },
  {
    question: "How do you create an array in Swift?",
    options: ["let arr = [1, 2, 3]", "let arr = {1, 2, 3}", "let arr = (1, 2, 3)", "let arr = <1, 2, 3>"],
    correctAnswer: "let arr = [1, 2, 3]"
  },
  {
    question: "How do you print something to the console in Swift?",
    options: ["console.log()", "print()", "echo()", "printf()"],
    correctAnswer: "print()"
  },
  {
    question: "Which operator is used for assignment in Swift?",
    options: ["==", "=", "->", ":"],
    correctAnswer: "="
  },
  {
    question: "Which keyword is used to define a class in Swift?",
    options: ["struct", "class", "object", "define"],
    correctAnswer: "class"
  },
  {
    question: "Which keyword is used to define a structure in Swift?",
    options: ["object", "struct", "structure", "class"],
    correctAnswer: "struct"
  },
  {
    question: "How do you declare an optional in Swift?",
    options: ["let name = String?", "let name: String?", "optional String name", "String name?"],
    correctAnswer: "let name: String?"
  },
  {
    question: "What does 'nil' represent in Swift?",
    options: ["Zero", "Empty string", "No value", "False"],
    correctAnswer: "No value"
  },
  {
    question: "What is the file extension for Swift source files?",
    options: [".java", ".swift", ".swf", ".kt"],
    correctAnswer: ".swift"
  },
  {
    question: "How do you create a dictionary in Swift?",
    options: ["[\"key\": \"value\"]", "{\"key\": \"value\"}", "<key, value>", "(key: value)"],
    correctAnswer: "[\"key\": \"value\"]"
  },
  {
    question: "What is the Swift equivalent of a for-each loop?",
    options: ["for i in arr", "foreach arr as i", "loop i in arr", "arr.each i"],
    correctAnswer: "for i in arr"
  },
  {
    question: "Which of the following is a Boolean value in Swift?",
    options: ["true", "yes", "on", "enabled"],
    correctAnswer: "true"
  },
  {
    question: "Which function converts a string to an integer in Swift?",
    options: ["parseInt()", "Int()", "toInt()", "convertInt()"],
    correctAnswer: "Int()"
  },
  {
    question: "Which Swift keyword is used to define a block of code to be executed later?",
    options: ["function", "defer", "closure", "block"],
    correctAnswer: "closure"
  },
  {
    question: "Which type represents decimal numbers in Swift?",
    options: ["Int", "Double", "Bool", "Char"],
    correctAnswer: "Double"
  },
  {
    question: "How do you safely unwrap an optional in Swift?",
    options: ["if let", "unwrap", "optional", "if exists"],
    correctAnswer: "if let"
  },
  {
    question: "What is the output of `print(\"Hello \\(name)\")` if name = \"John\"?",
    options: ["Hello \\(name)", "Hello John", "Hello name", "Hello"],
    correctAnswer: "Hello John"
  },
  {
    question: "What keyword is used to return a value from a function in Swift?",
    options: ["give", "yield", "return", "send"],
    correctAnswer: "return"
  },
  {
    question: "How do you define a constant string in Swift?",
    options: ["let name = \"Swift\"", "const name = \"Swift\"", "string name = \"Swift\"", "var name = Swift"],
    correctAnswer: "let name = \"Swift\""
  },
  {
    question: "Which data type is used for true/false values?",
    options: ["Int", "Bool", "Binary", "Flag"],
    correctAnswer: "Bool"
  },
  {
    question: "Which collection type does not allow duplicate values?",
    options: ["Array", "Set", "Dictionary", "Tuple"],
    correctAnswer: "Set"
  },
  {
    question: "How do you create an empty array of integers?",
    options: ["let arr = []", "let arr: [Int] = []", "let arr = [Int]", "let arr = array()"],
    correctAnswer: "let arr: [Int] = []"
  },
  {
    question: "Which loop is used when the number of iterations is not known?",
    options: ["for", "while", "foreach", "loop"],
    correctAnswer: "while"
  },
  {
    question: "What is used to group multiple values into a single compound value?",
    options: ["Set", "Tuple", "Array", "Class"],
    correctAnswer: "Tuple"
  },
  {
    question: "What keyword is used to define an enumeration?",
    options: ["enum", "enumeration", "enumar", "type"],
    correctAnswer: "enum"
  },
  {
    question: "How do you make a function parameter optional?",
    options: ["Use = nil", "Use ?", "Use optional", "Use let"],
    correctAnswer: "Use = nil"
  },
  {
    question: "Which operator is used for range in Swift?",
    options: ["..", "..<", "...", ":-"],
    correctAnswer: "...",
  },
  {
    question: "What is the default value of an optional?",
    options: ["0", "null", "nil", "false"],
    correctAnswer: "nil"
  },
  {
    question: "Which character denotes the start of string interpolation?",
    options: ["$", "#", "(", "\\"],
    correctAnswer: "\\"
  },
  {
    question: "How do you check if an array is empty?",
    options: ["arr.empty", "arr.isEmpty", "isEmpty(arr)", "arr.length == 0"],
    correctAnswer: "arr.isEmpty"
  },
  {
    question: "How do you concatenate strings in Swift?",
    options: ["+ operator", "& operator", "concat()", "append()"],
    correctAnswer: "+ operator"
  },
  {
    question: "Which type is used for a collection of key-value pairs?",
    options: ["Set", "Tuple", "Array", "Dictionary"],
    correctAnswer: "Dictionary"
  },
  {
    question: "How do you comment a single line in Swift?",
    options: ["#", "/* */", "//", "--"],
    correctAnswer: "//"
  },
  {
    question: "Which keyword defines an immutable value?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "let"
  },
  {
    question: "Which keyword defines a mutable value?",
    options: ["let", "const", "var", "mutable"],
    correctAnswer: "var"
  },
  {
    question: "What is the keyword to import a module?",
    options: ["include", "import", "require", "use"],
    correctAnswer: "import"
  },
  {
    question: "What is the type of true/false values?",
    options: ["Int", "String", "Bool", "Bit"],
    correctAnswer: "Bool"
  },
  {
    question: "Which of these is a valid function declaration?",
    options: ["function add()", "def add()", "func add()", "add()"],
    correctAnswer: "func add()"
  },
  {
    question: "Which Swift type represents fractional numbers?",
    options: ["Float", "Int", "Char", "Bool"],
    correctAnswer: "Float"
  },
  {
    question: "Which type is used for single characters?",
    options: ["String", "Char", "Character", "Text"],
    correctAnswer: "Character"
  },
  {
    question: "Which operator is used for equality check?",
    options: ["=", "==", "!=", "<="],
    correctAnswer: "=="
  },
  {
    question: "What is the output of `5 % 2`?",
    options: ["2", "1", "0", "2.5"],
    correctAnswer: "1"
  },
  {
    question: "What does `break` do in a loop?",
    options: ["Continues loop", "Ends loop", "Skips iteration", "Restarts loop"],
    correctAnswer: "Ends loop"
  },
  {
    question: "Which loop guarantees at least one execution?",
    options: ["while", "do-while", "for", "foreach"],
    correctAnswer: "do-while"
  },
  {
    question: "Which type holds a group of heterogeneous values?",
    options: ["Array", "Set", "Tuple", "List"],
    correctAnswer: "Tuple"
  },
  {
  question: "What is the correct way to declare a variable in Swift?",
  options: ["var name = \"John\"", "let = name \"John\"", "name = var \"John\"", "string name = \"John\""],
  correctAnswer: "var name = \"John\""
},
    ],
    advance:[
      {
    question: "What is the purpose of the `guard` statement in Swift?",
    options: ["To skip iteration", "To exit early when a condition fails", "To catch errors", "To continue execution"],
    correctAnswer: "To exit early when a condition fails"
  },
  {
    question: "What is a closure in Swift?",
    options: ["A data type", "A class method", "A self-contained block of code", "A loop control statement"],
    correctAnswer: "A self-contained block of code"
  },
  {
    question: "What is the difference between `weak` and `unowned` references?",
    options: ["They both keep a strong reference", "Weak can become nil, unowned cannot", "Unowned can become nil, weak cannot", "They are the same"],
    correctAnswer: "Weak can become nil, unowned cannot"
  },
  {
    question: "What is the purpose of the `defer` statement in Swift?",
    options: ["To delay function execution", "To clean up before exiting scope", "To handle errors", "To create closures"],
    correctAnswer: "To clean up before exiting scope"
  },
  {
    question: "What is `optional chaining` in Swift?",
    options: ["A way to handle multiple errors", "A method of string interpolation", "A process of calling properties on an optional that might be nil", "A technique for subclassing"],
    correctAnswer: "A process of calling properties on an optional that might be nil"
  },
  {
    question: "How does Swift handle memory management?",
    options: ["Garbage Collection", "Manual Allocation", "Automatic Reference Counting (ARC)", "Manual Reference Counting"],
    correctAnswer: "Automatic Reference Counting (ARC)"
  },
  {
    question: "Which keyword is used to define a protocol in Swift?",
    options: ["interface", "contract", "protocol", "abstract"],
    correctAnswer: "protocol"
  },
  {
    question: "What is the purpose of `lazy` in Swift?",
    options: ["To delay variable declaration", "To create a computed property", "To initialize the property only when accessed", "To avoid memory leaks"],
    correctAnswer: "To initialize the property only when accessed"
  },
  {
    question: "What is the difference between `class` and `struct` in Swift?",
    options: ["Structs are reference types", "Classes are value types", "Structs are value types, classes are reference types", "There is no difference"],
    correctAnswer: "Structs are value types, classes are reference types"
  },
  {
    question: "What does the `mutating` keyword do in Swift?",
    options: ["Allows a constant to change", "Allows a method to change properties in a struct", "Allows changing a protocol", "Allows recursion"],
    correctAnswer: "Allows a method to change properties in a struct"
  },
  {
    question: "How can you make a Swift property read-only?",
    options: ["Use `private(set)`", "Use `readonly`", "Use `get only`", "Use `const`"],
    correctAnswer: "Use `private(set)`"
  },
  {
    question: "What is a computed property in Swift?",
    options: ["A constant value", "A property with a getter and optional setter", "A method", "A class property"],
    correctAnswer: "A property with a getter and optional setter"
  },
  {
    question: "What is the `Codable` protocol used for?",
    options: ["UI design", "Memory management", "Encoding and decoding data", "Networking"],
    correctAnswer: "Encoding and decoding data"
  },
  {
    question: "How do you handle errors in Swift?",
    options: ["if-else", "try-catch", "try-throw-catch", "throw-catch-finally"],
    correctAnswer: "try-throw-catch"
  },
  {
    question: "What is the purpose of `@escaping` in Swift?",
    options: ["To catch exceptions", "To call methods synchronously", "To indicate a closure outlives the function it was passed to", "To break out of a loop"],
    correctAnswer: "To indicate a closure outlives the function it was passed to"
  },
  {
    question: "Which Swift feature allows combining multiple protocols into one?",
    options: ["Protocol grouping", "Typealias", "Protocol composition", "Generic extension"],
    correctAnswer: "Protocol composition"
  },
  {
    question: "How do you define a tuple in Swift?",
    options: ["[Int, String]", "(Int, String)", "{Int, String}", "<Int, String>"],
    correctAnswer: "(Int, String)"
  },
  {
    question: "What is the use of `@available` attribute in Swift?",
    options: ["To limit access to a class", "To mark API availability", "To define extensions", "To create observers"],
    correctAnswer: "To mark API availability"
  },
  {
    question: "What does `final` keyword mean for a class in Swift?",
    options: ["It cannot be instantiated", "It cannot be subclassed", "It is abstract", "It is static"],
    correctAnswer: "It cannot be subclassed"
  },
  {
    question: "Which Swift feature allows values of any type?",
    options: ["Generic", "Enum", "Any", "Universal"],
    correctAnswer: "Any"
  },
  {
    question: "What is a protocol extension?",
    options: ["An abstract method", "A subclass of a protocol", "An implementation for a protocol method", "A protocol that conforms to another"],
    correctAnswer: "An implementation for a protocol method"
  },
  {
    question: "What is a typealias in Swift?",
    options: ["A reference to a variable", "A method overload", "An alias for a type", "A closure"],
    correctAnswer: "An alias for a type"
  },
  {
    question: "What is the output type of `type(of: value)`?",
    options: ["Value type", "Type name as string", "The actual type", "A protocol"],
    correctAnswer: "The actual type"
  },
  {
    question: "What is a `Result` type in Swift?",
    options: ["A future", "A tuple", "An enum with success/failure", "A protocol"],
    correctAnswer: "An enum with success/failure"
  },
  {
    question: "Which keyword is used to throw an error in Swift?",
    options: ["error", "catch", "throw", "fail"],
    correctAnswer: "throw"
  },
  {
    question: "Which function is used to delay execution in Swift?",
    options: ["Timer.wait()", "DispatchQueue.asyncAfter()", "sleep()", "delay()"],
    correctAnswer: "DispatchQueue.asyncAfter()"
  },
  {
    question: "What is a `lazy var`?",
    options: ["Computed property", "Thread-safe property", "Property initialized only once when accessed", "Global constant"],
    correctAnswer: "Property initialized only once when accessed"
  },
  {
    question: "What is the purpose of `override` keyword?",
    options: ["To make class final", "To implement protocol", "To replace a superclass method", "To create computed property"],
    correctAnswer: "To replace a superclass method"
  },
  {
    question: "What are enums with associated values?",
    options: ["Enums with raw values", "Enums that store additional data", "Enums for protocols", "Enums used in structs"],
    correctAnswer: "Enums that store additional data"
  },
  {
    question: "Which operator unwraps an optional in Swift?",
    options: ["??", "!", "&", "*"],
    correctAnswer: "!"
  },
  {
    question: "Which collection is unordered in Swift?",
    options: ["Array", "Set", "Dictionary", "Tuple"],
    correctAnswer: "Set"
  },
  {
    question: "How do you define a failable initializer?",
    options: ["init()", "init?", "init!", "fail init"],
    correctAnswer: "init?"
  },
  {
    question: "What is the use of `@objc` attribute in Swift?",
    options: ["To enable JSON encoding", "To mark a method accessible from Objective-C", "To create UI elements", "To override methods"],
    correctAnswer: "To mark a method accessible from Objective-C"
  },
  {
    question: "How can you make a property thread-safe?",
    options: ["Use `lazy`", "Use `let`", "Use `DispatchQueue`", "Use `sync`"],
    correctAnswer: "Use `DispatchQueue`"
  },
  {
    question: "What is the output of `nil ?? \"default\"`?",
    options: ["nil", "default", "error", "undefined"],
    correctAnswer: "default"
  },
  {
    question: "What is `self` in Swift?",
    options: ["A static variable", "A reference to current instance", "A protocol", "A method"],
    correctAnswer: "A reference to current instance"
  },
  {
    question: "What is the purpose of `didSet` and `willSet`?",
    options: ["To override a setter", "To manage notifications", "To observe property changes", "To inherit methods"],
    correctAnswer: "To observe property changes"
  },
  {
    question: "How do you declare a generic function in Swift?",
    options: ["func<T>()", "generic func()", "func generic<T>()", "func<T> name()"],
    correctAnswer: "func<T>()"
  },
  {
    question: "Which loop ensures at least one execution?",
    options: ["for-in", "while", "repeat-while", "do-while"],
    correctAnswer: "repeat-while"
  },
  {
    question: "What is an escaping closure?",
    options: ["A closure that returns a value", "A closure passed to another function and executed later", "A closure that throws error", "A closure used in structs"],
    correctAnswer: "A closure passed to another function and executed later"
  },
  {
    question: "What is the use of `#available` in Swift?",
    options: ["To detect compiler version", "To check platform version availability", "To include libraries", "To define enums"],
    correctAnswer: "To check platform version availability"
  },
  {
    question: "What is the default value of an optional?",
    options: ["nil", "0", "false", "undefined"],
    correctAnswer: "nil"
  },
  {
    question: "How do you prevent subclassing in Swift?",
    options: ["Use `private`", "Use `final`", "Use `static`", "Use `const`"],
    correctAnswer: "Use `final`"
  },
  {
    question: "What is `Map` used for in Swift collections?",
    options: ["Filtering", "Transforming elements", "Looping", "Reducing"],
    correctAnswer: "Transforming elements"
  },
  {
    question: "What is a property observer in Swift?",
    options: ["A debugger", "An extension", "Code that observes changes to a property", "A loop"],
    correctAnswer: "Code that observes changes to a property"
  },
  {
    question: "What is an autoclosure in Swift?",
    options: ["A closure passed automatically", "A closure that runs only once", "A syntax sugar for closures", "A closure used in classes"],
    correctAnswer: "A syntax sugar for closures"
  },
  {
    question: "What is the purpose of `inout` in Swift?",
    options: ["To return value", "To change parameter inside function", "To catch errors", "To define global variables"],
    correctAnswer: "To change parameter inside function"
  },
  {
    question: "How do you restrict access to a class member to the current module?",
    options: ["private", "public", "internal", "fileprivate"],
    correctAnswer: "internal"
  },
  {
    question: "How can a subclass call its superclass’s initializer?",
    options: ["super.init()", "parent.init()", "base()", "init.super()"],
    correctAnswer: "super.init()"
  },
  {
  question: "What does the `defer` statement do in Swift?",
  options: [
    "Executes a block of code immediately",
    "Delays execution until the next run loop",
    "Executes code just before the current scope exits",
    "Cancels a scheduled task"
  ],
  correctAnswer: "Executes code just before the current scope exits"
},
    ]
  },
          ruby:{
    easy:[
 {
    question: "What is the file extension for Ruby files?",
    options: [".ruby", ".rb", ".r", ".py"],
    correctAnswer: ".rb"
  },
  {
    question: "How do you print something in Ruby?",
    options: ["echo 'Hello'", "puts 'Hello'", "console.log('Hello')", "print('Hello')"],
    correctAnswer: "puts 'Hello'"
  },
  {
    question: "Which symbol is used to define a variable in Ruby?",
    options: ["$", "@", "#", "None"],
    correctAnswer: "None"
  },
  {
    question: "How do you write a single-line comment in Ruby?",
    options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
    correctAnswer: "# comment"
  },
  {
    question: "Which method is used to convert a string to an integer in Ruby?",
    options: ["to_number", "int()", "to_i", "convert()"],
    correctAnswer: "to_i"
  },
  {
    question: "Which keyword is used to define a method in Ruby?",
    options: ["func", "def", "method", "function"],
    correctAnswer: "def"
  },
  {
    question: "What is the output of `5 + 3` in Ruby?",
    options: ["8", "53", "Error", "None"],
    correctAnswer: "8"
  },
  {
    question: "What is the output of `'Ruby'.length`?",
    options: ["3", "4", "5", "0"],
    correctAnswer: "4"
  },
  {
    question: "Which of the following is a boolean value in Ruby?",
    options: ["True", "Yes", "false", "None"],
    correctAnswer: "false"
  },
  {
    question: "How do you declare an array in Ruby?",
    options: ["array()", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
    correctAnswer: "[1, 2, 3]"
  },
  {
    question: "Which of these is a valid Ruby loop?",
    options: ["for", "foreach", "times", "repeat"],
    correctAnswer: "times"
  },
  {
    question: "What does `nil` mean in Ruby?",
    options: ["zero", "undefined", "no value", "empty string"],
    correctAnswer: "no value"
  },
  {
    question: "How do you get user input in Ruby?",
    options: ["gets", "input()", "scanf", "prompt"],
    correctAnswer: "gets"
  },
  {
    question: "Which operator is used for string concatenation in Ruby?",
    options: ["+", "&", ".", "concat"],
    correctAnswer: "+"
  },
  {
    question: "Which method adds an element to an array in Ruby?",
    options: ["append()", "push()", "add()", "insert()"],
    correctAnswer: "push()"
  },
  {
    question: "What is the result of `10 / 3` in Ruby?",
    options: ["3", "3.33", "3.0", "Error"],
    correctAnswer: "3"
  },
  {
    question: "Which of the following is a Ruby data type?",
    options: ["integer", "float", "symbol", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does the `chomp` method do in Ruby?",
    options: ["Removes spaces", "Trims leading spaces", "Removes newlines", "Capitalizes the string"],
    correctAnswer: "Removes newlines"
  },
  {
    question: "Which method converts a string to uppercase in Ruby?",
    options: ["uppercase()", "upcase", "toUpper", "makeUpper()"],
    correctAnswer: "upcase"
  },
  {
    question: "Which symbol is used for instance variables in Ruby?",
    options: ["$", "@", "#", "&"],
    correctAnswer: "@"
  },
  {
    question: "What is the output of `[1, 2, 3].length`?",
    options: ["3", "4", "2", "1"],
    correctAnswer: "3"
  },
  {
    question: "What is the keyword to create a class in Ruby?",
    options: ["class", "Class", "object", "struct"],
    correctAnswer: "class"
  },
  {
    question: "How do you end a method in Ruby?",
    options: ["close", "stop", "end", "done"],
    correctAnswer: "end"
  },
  {
    question: "What does `elsif` do in Ruby?",
    options: ["Ends loop", "Alternative to else", "Else-if condition", "Throws error"],
    correctAnswer: "Else-if condition"
  },
  {
    question: "What does the `next` keyword do in loops?",
    options: ["Breaks loop", "Skips to next iteration", "Restarts loop", "Exits loop"],
    correctAnswer: "Skips to next iteration"
  },
  {
    question: "What does `break` do in Ruby loops?",
    options: ["Restarts loop", "Skips iteration", "Exits loop", "Throws error"],
    correctAnswer: "Exits loop"
  },
  {
    question: "How do you define a constant in Ruby?",
    options: ["const", "CONST", "Uppercase variable name", "constant"],
    correctAnswer: "Uppercase variable name"
  },
  {
    question: "What does `.reverse` do in Ruby?",
    options: ["Reverses string/array", "Sorts array", "Deletes array", "None"],
    correctAnswer: "Reverses string/array"
  },
  {
    question: "How do you create a hash in Ruby?",
    options: ["{}", "[]", "()", "<>"],
    correctAnswer: "{}"
  },
  {
    question: "Which method checks if a string includes another string?",
    options: ["has?", "includes", "include?", "contains"],
    correctAnswer: "include?"
  },
  {
    question: "What does `.to_s` do in Ruby?",
    options: ["Converts to string", "Saves to storage", "Stops program", "Shows result"],
    correctAnswer: "Converts to string"
  },
  {
    question: "What is `1..5` in Ruby?",
    options: ["Array", "Range", "String", "Loop"],
    correctAnswer: "Range"
  },
  {
    question: "How do you define an empty array?",
    options: ["[]", "{}", "()", "null"],
    correctAnswer: "[]"
  },
  {
    question: "Which symbol is used for global variables in Ruby?",
    options: ["$", "@", "#", "&"],
    correctAnswer: "$"
  },
  {
    question: "Which method removes an item from the end of an array?",
    options: ["pop", "delete", "remove", "cut"],
    correctAnswer: "pop"
  },
  {
    question: "What is `'Hello' + 'World'`?",
    options: ["Hello World", "HelloWorld", "Error", "None"],
    correctAnswer: "HelloWorld"
  },
  {
    question: "How do you check equality in Ruby?",
    options: ["==", "=", "===", "!"],
    correctAnswer: "=="
  },
  {
    question: "Which keyword is used for inheritance in Ruby?",
    options: ["inherits", "extends", "super", "<"],
    correctAnswer: "<"
  },
  {
    question: "What does `nil.class` return?",
    options: ["null", "object", "NilClass", "None"],
    correctAnswer: "NilClass"
  },
  {
    question: "Which method is used to sort an array?",
    options: ["sort()", "arrange", "sort", "order"],
    correctAnswer: "sort"
  },
  {
    question: "How do you check if an array is empty?",
    options: ["isEmpty", "length == 0", "empty?", "null?"],
    correctAnswer: "empty?"
  },
  {
    question: "What does `!.` operator do?",
    options: ["Boolean NOT", "AND", "OR", "Nil-safe navigation"],
    correctAnswer: "Nil-safe navigation"
  },
  {
    question: "How do you repeat a block 5 times?",
    options: ["5.times", "repeat(5)", "loop(5)", "times(5)"],
    correctAnswer: "5.times"
  },
  {
    question: "How do you capitalize a string?",
    options: ["capitalize()", "upcase", "title()", "capitalize"],
    correctAnswer: "capitalize"
  },
  {
    question: "How do you check data type of a variable?",
    options: ["typeof", "class", "instanceof", "dataType"],
    correctAnswer: "class"
  },
  {
    question: "How do you round a float in Ruby?",
    options: ["round()", "Math.round", "ceil()", "truncate"],
    correctAnswer: "round()"
  },
  {
    question: "What does `&&` mean?",
    options: ["OR", "AND", "NOT", "XOR"],
    correctAnswer: "AND"
  },
  {
    question: "How do you define a block in Ruby?",
    options: ["{}", "[]", "()", "<>"],
    correctAnswer: "{}"
  },
  {
    question: "What does `each` do?",
    options: ["Iterates over array", "Adds to array", "Reverses array", "None"],
    correctAnswer: "Iterates over array"
  },
  {
    question: "Which keyword is used to return a value from a method?",
    options: ["give", "return", "output", "end"],
    correctAnswer: "return"
  },
    ],
    advance:[
       {
    question: "What is the main purpose of `method_missing` in Ruby?",
    options: [
      "To define a method dynamically",
      "To raise an exception for unknown methods",
      "To override existing methods",
      "To call a superclass method"
    ],
    correctAnswer: "To define a method dynamically"
  },
  {
    question: "Which module provides Ruby’s interface to network sockets?",
    options: [
      "Socket",
      "TCPSocket",
      "Net",
      "Network"
    ],
    correctAnswer: "Socket"
  },
  {
    question: "In Ruby, what does the `super` keyword do?",
    options: [
      "Calls a method from a superclass",
      "Calls a method with higher priority",
      "Skips the current method",
      "None of the above"
    ],
    correctAnswer: "Calls a method from a superclass"
  },
  {
    question: "What is the output of `:symbol.to_s.class`?",
    options: [
      "Symbol",
      "String",
      "Object",
      "NilClass"
    ],
    correctAnswer: "String"
  },
  {
    question: "Which Ruby method is used to check if a variable is defined?",
    options: [
      "exists?",
      "defined?",
      "is_defined?",
      "check?"
    ],
    correctAnswer: "defined?"
  },
  {
    question: "What is the default access modifier for Ruby class methods?",
    options: [
      "Private",
      "Public",
      "Protected",
      "Internal"
    ],
    correctAnswer: "Public"
  },
  {
    question: "Which keyword is used to create a module in Ruby?",
    options: [
      "mod",
      "module",
      "include",
      "require"
    ],
    correctAnswer: "module"
  },
  {
    question: "What is the difference between `include` and `extend` in Ruby?",
    options: [
      "`include` adds methods to instance, `extend` to class",
      "`extend` adds constants, `include` adds methods",
      "Both are the same",
      "`extend` overrides methods, `include` does not"
    ],
    correctAnswer: "`include` adds methods to instance, `extend` to class"
  },
  {
    question: "Which method is called when an object is converted to a string?",
    options: [
      "to_s",
      "to_str",
      "to_string",
      "stringify"
    ],
    correctAnswer: "to_s"
  },
  {
    question: "Which operator is used to define a range in Ruby?",
    options: [
      "..",
      "=>",
      "<>",
      "--"
    ],
    correctAnswer: ".."
  },
  {
    question: "What is the purpose of `yield` in a method?",
    options: [
      "To call a block passed to the method",
      "To pause execution",
      "To return from a method",
      "To raise an error"
    ],
    correctAnswer: "To call a block passed to the method"
  },
  {
    question: "What is a Proc in Ruby?",
    options: [
      "A data type",
      "A class instance",
      "A block of code saved in a variable",
      "A thread handler"
    ],
    correctAnswer: "A block of code saved in a variable"
  },
  {
    question: "Which method creates a new thread in Ruby?",
    options: [
      "Thread.start",
      "Thread.new",
      "Thread.create",
      "Thread.spawn"
    ],
    correctAnswer: "Thread.new"
  },
  {
    question: "What does `__FILE__` represent in Ruby?",
    options: [
      "Current method",
      "Current file name",
      "Current directory",
      "Current line number"
    ],
    correctAnswer: "Current file name"
  },
  {
    question: "What is the value of `true && false || true`?",
    options: [
      "true",
      "false",
      "nil",
      "undefined"
    ],
    correctAnswer: "true"
  },
  {
    question: "How do you rescue from multiple exceptions?",
    options: [
      "rescue A, B",
      "rescue A || B",
      "rescue A; rescue B",
      "rescue [A, B]"
    ],
    correctAnswer: "rescue A, B"
  },
  {
    question: "What is the difference between `throw` and `raise`?",
    options: [
      "`throw` jumps to catch, `raise` creates exception",
      "`throw` is faster",
      "`raise` cannot be caught",
      "They are the same"
    ],
    correctAnswer: "`throw` jumps to catch, `raise` creates exception"
  },
  {
    question: "Which gem is used for testing in Ruby?",
    options: [
      "RSpec",
      "Nokogiri",
      "Sinatra",
      "YARD"
    ],
    correctAnswer: "RSpec"
  },
  {
    question: "What is the purpose of `singleton_class`?",
    options: [
      "To access class methods of an object",
      "To define instance variables",
      "To create a new class",
      "To mix in a module"
    ],
    correctAnswer: "To access class methods of an object"
  },
  {
    question: "What is the output of `nil.to_s`?",
    options: [
      "nil",
      "0",
      "empty string",
      "undefined"
    ],
    correctAnswer: "empty string"
  },


  {
    question: "Which of the following creates a hash?",
    options: [
      "Hash.new",
      "Array.new",
      "String.new",
      "Set.new"
    ],
    correctAnswer: "Hash.new"
  },
  {
    question: "How do you freeze an object in Ruby?",
    options: [
      "object.lock",
      "object.freeze",
      "freeze(object)",
      "object.immutable"
    ],
    correctAnswer: "object.freeze"
  },
  {
    question: "What does `binding.pry` do?",
    options: [
      "Starts a debugger session",
      "Prints the binding",
      "Halts all execution",
      "Throws an error"
    ],
    correctAnswer: "Starts a debugger session"
  },
  {
    question: "What is the default encoding in Ruby?",
    options: [
      "UTF-8",
      "ASCII",
      "Binary",
      "None"
    ],
    correctAnswer: "UTF-8"
  },
  {
    question: "Which class is the superclass of all classes?",
    options: [
      "Object",
      "BasicObject",
      "Class",
      "Module"
    ],
    correctAnswer: "BasicObject"
  },
  {
    question: "What is monkey patching in Ruby?",
    options: [
      "Modifying existing classes at runtime",
      "Fixing bugs",
      "Creating new methods",
      "Adding new modules"
    ],
    correctAnswer: "Modifying existing classes at runtime"
  },
  {
    question: "What does `next` do in a loop?",
    options: [
      "Skips to the next iteration",
      "Ends the loop",
      "Restarts the loop",
      "Raises error"
    ],
    correctAnswer: "Skips to the next iteration"
  },
  {
    question: "How do you define a constant in Ruby?",
    options: [
      "UPPER_CASE",
      "const keyword",
      "final keyword",
      "def const"
    ],
    correctAnswer: "UPPER_CASE"
  },
  {
    question: "What does `retry` do in a rescue block?",
    options: [
      "Retries the begin block",
      "Repeats the rescue block",
      "Throws again",
      "Does nothing"
    ],
    correctAnswer: "Retries the begin block"
  },
  {
    question: "Which symbol denotes a block parameter?",
    options: [
      "&",
      "*",
      "%",
      "#"
    ],
    correctAnswer: "&"
  },

  {
    question: "What is the output of `[1,2,3] * 2` in Ruby?",
    options: [
      "[1,2,3,1,2,3]",
      "Error",
      "[2,4,6]",
      "[1,2,3]*2"
    ],
    correctAnswer: "[1,2,3,1,2,3]"
  },
  {
    question: "What does `tap` do in Ruby?",
    options: [
      "Yields self to block and returns self",
      "Prints a variable",
      "Creates a new object",
      "Raises an error"
    ],
    correctAnswer: "Yields self to block and returns self"
  },
  {
    question: "What is the difference between `clone` and `dup`?",
    options: [
      "`clone` copies frozen state, `dup` does not",
      "`dup` is slower",
      "`clone` is shallow",
      "No difference"
    ],
    correctAnswer: "`clone` copies frozen state, `dup` does not"
  },
  {
    question: "Which of the following is a valid symbol?",
    options: [
      ":name",
      "name:",
      "$name",
      "#name"
    ],
    correctAnswer: ":name"
  },
  {
    question: "What does `autoload` do?",
    options: [
      "Loads a module when it's first used",
      "Preloads everything",
      "Disables loading",
      "Reloads a method"
    ],
    correctAnswer: "Loads a module when it's first used"
  },
  {
    question: "What is a Refinement in Ruby?",
    options: [
      "Scoped monkey patching",
      "A new object type",
      "A constant",
      "A private method"
    ],
    correctAnswer: "Scoped monkey patching"
  },
  {
    question: "What is the effect of calling `abort`?",
    options: [
      "Ends program immediately",
      "Raises exception",
      "Pauses execution",
      "Ignores error"
    ],
    correctAnswer: "Ends program immediately"
  },
  {
    question: "Which method is called when you print an object?",
    options: [
      "to_s",
      "print",
      "puts",
      "inspect"
    ],
    correctAnswer: "to_s"
  },
  {
    question: "What does `enum_for` do?",
    options: [
      "Creates an Enumerator",
      "Starts a new enum",
      "Lists constants",
      "Filters array"
    ],
    correctAnswer: "Creates an Enumerator"
  },
  {
    question: "What is the scope of a block variable in Ruby?",
    options: [
      "Only inside the block",
      "Global",
      "Instance-wide",
      "Class-wide"
    ],
    correctAnswer: "Only inside the block"
  },
  {
  question: "What does the `&.` operator do in Ruby?",
  options: ["It performs a bitwise AND", "It checks nil before method call", "It creates a Proc", "It defines a block"],
  correctAnswer: "It checks nil before method call"
},
{
  question: "Which Ruby keyword is used to rescue exceptions specifically?",
  options: ["try", "rescue", "catch", "trap"],
  correctAnswer: "rescue"
},
{
  question: "What is the default visibility of class methods in Ruby?",
  options: ["private", "protected", "public", "internal"],
  correctAnswer: "public"
},
{
  question: "Which method converts a symbol to a string in Ruby?",
  options: [":symbol.to_string", ":symbol.to_s", "symbol.stringify", "symbol.to_char"],
  correctAnswer: ":symbol.to_s"
},
{
  question: "Which gem is commonly used in Ruby for authentication?",
  options: ["Devise", "OmniAuth", "Authy", "Pundit"],
  correctAnswer: "Devise"
},
{
  question: "What does `super` do inside a method definition?",
  options: ["Calls the base class method", "Accesses superclass variables", "Stops execution", "Returns superclass object"],
  correctAnswer: "Calls the base class method"
},
{
  question: "What does the `tap` method help with in Ruby?",
  options: ["Debug intermediate results", "Create threads", "Encrypt data", "Benchmark code"],
  correctAnswer: "Debug intermediate results"
},
{
  question: "Which Rails method rolls back a transaction?",
  options: ["rollback!", "abort!", "raise ActiveRecord::Rollback", "transaction_cancel"],
  correctAnswer: "raise ActiveRecord::Rollback"
},
{
  question: "What will `['a', 'b', 'c'].join('-')` return?",
  options: ["abc", "a-b-c", "['a', 'b', 'c']", "a-bc"],
  correctAnswer: "a-b-c"
},
{
  question: "What’s the difference between `Proc` and `lambda` in Ruby?",
  options: ["None", "Lambda returns on return, Proc exits entire method", "Proc is faster", "Proc can’t accept arguments"],
  correctAnswer: "Lambda returns on return, Proc exits entire method"
},
    ]
  },
          shell:{
    easy:[
{
    question: "Which symbol is used to comment in shell scripts?",
    options: ["//", "#", "/* */", "--"],
    correctAnswer: "#"
  },
  {
    question: "Which command is used to list files in a directory?",
    options: ["ls", "list", "dir", "show"],
    correctAnswer: "ls"
  },
  {
    question: "What does the `pwd` command do?",
    options: ["Prints working drive", "Prints working directory", "Pings website", "None of the above"],
    correctAnswer: "Prints working directory"
  },
  {
    question: "Which command is used to change directory?",
    options: ["mv", "cd", "chdir", "dir"],
    correctAnswer: "cd"
  },
  {
    question: "Which command is used to copy files?",
    options: ["cp", "copy", "mv", "duplicate"],
    correctAnswer: "cp"
  },
  {
    question: "What does the `rm` command do?",
    options: ["Removes a file", "Renames a file", "Moves a file", "Reads a file"],
    correctAnswer: "Removes a file"
  },
  {
    question: "How do you make a shell script executable?",
    options: ["chmod +x file", "exec file", "sh file", "bash file"],
    correctAnswer: "chmod +x file"
  },
  {
    question: "Which command shows current date and time?",
    options: ["time", "clock", "now", "date"],
    correctAnswer: "date"
  },
  {
    question: "Which command is used to display content of a file?",
    options: ["cat", "open", "read", "show"],
    correctAnswer: "cat"
  },
  {
    question: "What does `echo` do?",
    options: ["Exits terminal", "Prints text", "Opens file", "Lists processes"],
    correctAnswer: "Prints text"
  },
  {
    question: "How do you read user input in shell?",
    options: ["scan", "input", "read", "get"],
    correctAnswer: "read"
  },
  {
    question: "What does `$0` represent in shell script?",
    options: ["Script name", "First argument", "Current directory", "Exit status"],
    correctAnswer: "Script name"
  },
  {
    question: "What does `$1` represent?",
    options: ["Script name", "First argument", "Second argument", "Variable"],
    correctAnswer: "First argument"
  },
  {
    question: "What does `&&` do between two commands?",
    options: ["OR operator", "Runs both in background", "Runs second if first succeeds", "None"],
    correctAnswer: "Runs second if first succeeds"
  },
  {
    question: "What does `||` do in shell?",
    options: ["AND operator", "Runs second if first fails", "Starts a loop", "None"],
    correctAnswer: "Runs second if first fails"
  },
  {
    question: "Which command displays running processes?",
    options: ["ps", "run", "jobs", "exec"],
    correctAnswer: "ps"
  },
  {
    question: "Which command shows your current user name?",
    options: ["whoami", "me", "id", "user"],
    correctAnswer: "whoami"
  },
  {
    question: "How do you create a new directory?",
    options: ["dir", "mkdir", "newdir", "cd"],
    correctAnswer: "mkdir"
  },
  {
    question: "Which command renames a file?",
    options: ["rename", "mv", "edit", "change"],
    correctAnswer: "mv"
  },
  {
    question: "Which file extension is commonly used for shell scripts?",
    options: [".sh", ".bash", ".script", ".exe"],
    correctAnswer: ".sh"
  },
  {
    question: "Which command is used to display disk usage?",
    options: ["disk", "df", "du", "space"],
    correctAnswer: "du"
  },
  {
    question: "Which command is used to display free memory?",
    options: ["mem", "free", "ram", "sysinfo"],
    correctAnswer: "free"
  },
  {
    question: "Which command is used to count lines in a file?",
    options: ["count", "wc -l", "linecount", "len"],
    correctAnswer: "wc -l"
  },
  {
    question: "Which command is used to find text in files?",
    options: ["find", "search", "grep", "scan"],
    correctAnswer: "grep"
  },
  {
    question: "What does the `touch` command do?",
    options: ["Opens file", "Edits file", "Creates empty file", "Deletes file"],
    correctAnswer: "Creates empty file"
  },
  {
    question: "Which command is used to move files?",
    options: ["mv", "cp", "move", "rename"],
    correctAnswer: "mv"
  },
  {
    question: "How do you write a loop in shell?",
    options: ["for", "loop", "repeat", "each"],
    correctAnswer: "for"
  },
  {
    question: "What symbol is used to redirect output to a file?",
    options: [">", "<", "&", "*"],
    correctAnswer: ">"
  },
  {
    question: "Which command will pause execution for a few seconds?",
    options: ["pause", "wait", "sleep", "stop"],
    correctAnswer: "sleep"
  },
  {
    question: "Which command is used to find the location of executables?",
    options: ["where", "locate", "which", "find"],
    correctAnswer: "which"
  },
  {
    question: "Which command shows system uptime?",
    options: ["up", "uptime", "sysinfo", "time"],
    correctAnswer: "uptime"
  },
  {
    question: "How do you write a function in shell?",
    options: ["function name()", "def name()", "name() { }", "func name()"],
    correctAnswer: "name() { }"
  },
  {
    question: "What does `$?` represent?",
    options: ["Exit status of last command", "Last argument", "Current process ID", "Current directory"],
    correctAnswer: "Exit status of last command"
  },
  {
    question: "What does `#!/bin/bash` at the top of a script mean?",
    options: ["Path to bash", "Comment", "Exit code", "Function"],
    correctAnswer: "Path to bash"
  },
  {
    question: "How do you check if a file exists in shell?",
    options: ["-f filename", "-e filename", "file.exists()", "exists file"],
    correctAnswer: "-e filename"
  },
  {
    question: "How do you exit a shell script?",
    options: ["quit", "stop", "exit", "break"],
    correctAnswer: "exit"
  },
  {
    question: "Which command is used to change file permissions?",
    options: ["chmod", "chperm", "perm", "access"],
    correctAnswer: "chmod"
  },
  {
    question: "How do you set a variable in shell?",
    options: ["set x = 5", "x = 5", "x=5", "define x 5"],
    correctAnswer: "x=5"
  },
  {
    question: "Which command clears the terminal screen?",
    options: ["clear", "cls", "reset", "empty"],
    correctAnswer: "clear"
  },
  {
    question: "Which command is used to search command history?",
    options: ["history", "search", "log", "cmds"],
    correctAnswer: "history"
  },
  {
    question: "Which command runs a script?",
    options: ["run file.sh", "bash file.sh", "open file.sh", "go file.sh"],
    correctAnswer: "bash file.sh"
  },
  {
    question: "What is the purpose of the `basename` command?",
    options: ["Get full path", "Get file name from path", "Delete file", "Compare files"],
    correctAnswer: "Get file name from path"
  },
  {
    question: "What symbol is used for piping commands?",
    options: ["|", "&", ";", "!"],
    correctAnswer: "|"
  },
  {
    question: "How do you get the length of a string variable?",
    options: ["${#var}", "length(var)", "strlen(var)", "#var"],
    correctAnswer: "${#var}"
  },
  {
    question: "Which command kills a process by name?",
    options: ["killall", "kill", "stop", "terminate"],
    correctAnswer: "killall"
  },
  {
    question: "How do you get the process ID of the current script?",
    options: ["$PID", "$$", "$!", "$@"],
    correctAnswer: "$$"
  },
  {
    question: "What is the use of `shift` in shell?",
    options: ["Shifts array values", "Skips arguments", "Moves to next argument", "None"],
    correctAnswer: "Moves to next argument"
  },
  {
    question: "Which operator is used to compare numbers in shell?",
    options: ["==", "-eq", "equals", "is"],
    correctAnswer: "-eq"
  },
  {
    question: "How do you make a loop infinite?",
    options: ["while true", "for i", "loop forever", "repeat"],
    correctAnswer: "while true"
  },
  {
  question: "Which command is used to display the current username in Shell?",
  options: ["whoami", "echo $USER", "id -un", "All of the above"],
  correctAnswer: "All of the above"
},
    ],
    advance:[
       {
    question: "What does the `set -e` command do in a shell script?",
    options: [
      "Ends the script if a command fails",
      "Prints all commands before executing",
      "Sets environment variables",
      "Enables echo mode"
    ],
    correctAnswer: "Ends the script if a command fails"
  },
  {
    question: "How do you define a function in Bash?",
    options: [
      "function name() { }",
      "def name() { }",
      "func name { }",
      "name -> function { }"
    ],
    correctAnswer: "function name() { }"
  },
  {
    question: 'What does `"$@"` represent in a Bash script?',
    options: [
      "All arguments as a single word",
      "All arguments as separate words",
      "The first argument",
      "The last argument"
    ],
    correctAnswer: "All arguments as separate words"
  },
  {
    question: "What does `$(...)` do in Shell scripting?",
    options: [
      "Comments a line",
      "Executes a command and returns the output",
      "Defines a variable",
      "Creates a loop"
    ],
    correctAnswer: "Executes a command and returns the output"
  },
  {
    question: "What is the purpose of `trap` in shell scripts?",
    options: [
      "To catch and handle signals",
      "To loop a command",
      "To set a breakpoint",
      "To debug the script"
    ],
    correctAnswer: "To catch and handle signals"
  },
  {
    question: "How can you read a file line by line in Bash?",
    options: [
      "`while read line; do ... done < file`",
      "`for line in file; do ... done`",
      "`readlines file`",
      "`cat file | read`"
    ],
    correctAnswer: "`while read line; do ... done < file`"
  },
  {
    question: "Which of the following is used to check if a file exists?",
    options: [
      "`[ -e file ]`",
      "`file.exists()`",
      "`check file`",
      "`if exist file`"
    ],
    correctAnswer: "`[ -e file ]`"
  },
  {
    question: "What does the `exec` command do in Shell?",
    options: [
      "Replaces the shell with the given command",
      "Exits the current shell",
      "Creates a new shell process",
      "Compiles the script"
    ],
    correctAnswer: "Replaces the shell with the given command"
  },
  {
    question: "How do you perform arithmetic in Bash?",
    options: [
      "`$((1 + 2))`",
      "`add 1 2`",
      "`math(1+2)`",
      "`1 + 2`"
    ],
    correctAnswer: "`$((1 + 2))`"
  },
  {
    question: "How do you check if a variable is empty in Bash?",
    options: [
      "`[ -z \"$var\" ]`",
      "`if empty $var`",
      "`$var == null`",
      "`[ $var -eq 0 ]`"
    ],
    correctAnswer: "`[ -z \"$var\" ]`"
  },
  {
    question: "What is the use of `IFS` in Bash?",
    options: [
      "To set the internal field separator",
      "To ignore file system errors",
      "To include foreign scripts",
      "To enable interactive file scripting"
    ],
    correctAnswer: "To set the internal field separator"
  },
  {
    question: "What does the `shift` command do?",
    options: [
      "Shifts positional parameters to the left",
      "Shifts shell execution to background",
      "Moves to next command in sequence",
      "None of the above"
    ],
    correctAnswer: "Shifts positional parameters to the left"
  },
  {
    question: "Which command is used to print the number of arguments passed?",
    options: [
      "`echo $#`",
      "`count $@`",
      "`len($@)`",
      "`args.length`"
    ],
    correctAnswer: "`echo $#`"
  },
  {
    question: "How can you debug a Bash script?",
    options: [
      "`bash -x script.sh`",
      "`debug script.sh`",
      "`run -d script.sh`",
      "`bash -debug script.sh`"
    ],
    correctAnswer: "`bash -x script.sh`"
  },
  {
    question: "How do you append to a file in Bash?",
    options: [
      "`command >> file`",
      "`command > file`",
      "`command | file`",
      "`command <- file`"
    ],
    correctAnswer: "`command >> file`"
  },
  {
    question: "What is the meaning of `$0` in a script?",
    options: [
      "Script name",
      "First argument",
      "Last argument",
      "Script path"
    ],
    correctAnswer: "Script name"
  },
  {
    question: "Which of the following will return the exit status of the last command?",
    options: [
      "`$?`",
      "`$!`",
      "`$@`",
      "`$#`"
    ],
    correctAnswer: "`$?`"
  },
  {
    question: "How do you make a script executable?",
    options: [
      "`chmod +x script.sh`",
      "`make executable script.sh`",
      "`run script.sh`",
      "`bash +x script.sh`"
    ],
    correctAnswer: "`chmod +x script.sh`"
  },
  {
    question: "Which command is used to compare two strings?",
    options: [
      "`[ \"$a\" == \"$b\" ]`",
      "`if a = b`",
      "`cmp $a $b`",
      "`compare $a $b`"
    ],
    correctAnswer: "`[ \"$a\" == \"$b\" ]`"
  },
  {
    question: "How to loop over an array in Bash?",
    options: [
      "`for i in \"${array[@]}\"; do ...; done`",
      "`foreach i in array`",
      "`for i in array[]`",
      "`loop array`"
    ],
    correctAnswer: "`for i in \"${array[@]}\"; do ...; done`"
  },

  {
    question: "Which Bash command waits for a process to finish?",
    options: ["wait", "hold", "sleep", "pause"],
    correctAnswer: "wait"
  },
  {
    question: "What does `>&2` do in Bash?",
    options: [
      "Redirects output to stderr",
      "Redirects output to stdout",
      "Closes stderr",
      "Redirects stderr to null"
    ],
    correctAnswer: "Redirects output to stderr"
  },
  {
    question: "How do you get the PID of the last background process?",
    options: ["$!", "$$", "$?", "$@"],
    correctAnswer: "$!"
  },
  {
    question: "What does `source script.sh` do?",
    options: [
      "Executes the script in the current shell",
      "Runs it in a new shell",
      "Compiles the script",
      "Saves it as template"
    ],
    correctAnswer: "Executes the script in the current shell"
  },
  {
    question: "Which command is used to schedule a command at a specific time?",
    options: ["at", "cron", "now", "time"],
    correctAnswer: "at"
  },
  {
    question: "Which character is used for command substitution?",
    options: ["`", "@", "$", "!"],
    correctAnswer: "`"
  },
  {
    question: "How do you check if a directory exists?",
    options: ["[ -d dir ]", "[ -f dir ]", "[ dir == true ]", "[ dir ]"],
    correctAnswer: "[ -d dir ]"
  },
  {
    question: "What does `uname -a` show?",
    options: [
      "Kernel and system info",
      "Username only",
      "Disk usage",
      "All running users"
    ],
    correctAnswer: "Kernel and system info"
  },
  {
    question: "How do you count the number of files in a directory?",
    options: ["ls | wc -l", "ls -c", "count dir", "ls -n"],
    correctAnswer: "ls | wc -l"
  },
  {
    question: "Which command lists all environment variables?",
    options: ["env", "vars", "export", "echo $ENV"],
    correctAnswer: "env"
  },
  {
    question: "What does `find . -type f` do?",
    options: [
      "Finds all files recursively from current dir",
      "Finds all directories",
      "Finds all symbolic links",
      "Finds all hidden files"
    ],
    correctAnswer: "Finds all files recursively from current dir"
  },
  {
    question: "How do you print the 3rd column in a file using `awk`?",
    options: ["awk '{print $3}'", "awk '$3'", "awk -col 3", "awk 3 print"],
    correctAnswer: "awk '{print $3}'"
  },
  {
    question: "What is the use of `cut -d':' -f1 /etc/passwd`?",
    options: [
      "Prints all usernames",
      "Prints passwords",
      "Lists shell paths",
      "None"
    ],
    correctAnswer: "Prints all usernames"
  },
  {
    question: "How do you compress a file using gzip?",
    options: ["gzip file.txt", "zip file.txt", "tar file.txt", "zcat file.txt"],
    correctAnswer: "gzip file.txt"
  },
  {
    question: "How do you rename a file?",
    options: ["mv old new", "rename old new", "cp old new", "name old new"],
    correctAnswer: "mv old new"
  },
  {
    question: "What does `tail -f` do?",
    options: [
      "Continuously displays appended lines",
      "Prints first lines",
      "Deletes lines",
      "Finds patterns"
    ],
    correctAnswer: "Continuously displays appended lines"
  },
  {
    question: "Which command shows current running processes?",
    options: ["ps", "run", "ls", "top"],
    correctAnswer: "ps"
  },
  {
    question: "What does `crontab -e` do?",
    options: [
      "Edits the crontab file",
      "Erases cron jobs",
      "Executes cron",
      "Exports environment"
    ],
    correctAnswer: "Edits the crontab file"
  },
  {
    question: "How do you create an alias in Bash?",
    options: ["alias ll='ls -l'", "set alias ll", "define ll = ls", "map ll ls"],
    correctAnswer: "alias ll='ls -l'"
  },
  {
    question: "Which file stores shell aliases and settings?",
    options: [
      "~/.bashrc",
      "/etc/passwd",
      "~/.shellrc",
      "/usr/bash.conf"
    ],
    correctAnswer: "~/.bashrc"
  },
  {
      question: "What does `IFS` in Bash stand for?",
      options: ["Internal File Separator", "Input File Separator", "Internal Field Separator", "Input Field Splitter"],
      correctAnswer: "Internal Field Separator"
    },
    {
      question: "What is the purpose of the `exec` command in Bash?",
      options: ["To replace the shell with a command", "To run multiple processes", "To switch user context", "To redirect to another terminal"],
      correctAnswer: "To replace the shell with a command"
    },
    {
      question: "What does `trap` do in a Bash script?",
      options: ["Catches and handles signals", "Sets a breakpoint", "Pauses execution", "Kills background jobs"],
      correctAnswer: "Catches and handles signals"
    },
    {
      question: "What is the output of `echo $0`?",
      options: ["Current shell", "Current directory", "Exit status", "Process ID"],
      correctAnswer: "Current shell"
    },
    {
      question: "How can you read a file line-by-line in Bash?",
      options: ["cat file", "for line in file", "while read line; do ...; done < file", "readline file"],
      correctAnswer: "while read line; do ...; done < file"
    },
    {
      question: "What does `2>&1` do in a Bash command?",
      options: ["Redirects stdout to stderr", "Redirects stderr to stdout", "Appends output to file", "Splits output to two files"],
      correctAnswer: "Redirects stderr to stdout"
    },
    {
      question: "What is a here-document in Bash?",
      options: ["A document stored in /tmp", "A way to create temporary files", "A method of redirecting input to a command", "A signal handler"],
      correctAnswer: "A method of redirecting input to a command"
    },
    {
      question: "What does `set -e` do in a Bash script?",
      options: ["Exits script on error", "Sets environment variable", "Enables echo mode", "Lists all environment variables"],
      correctAnswer: "Exits script on error"
    },
    {
      question: "Which command prints the number of arguments passed to a script?",
      options: ["echo $*", "echo $#", "echo $@", "echo $$"],
      correctAnswer: "echo $#"
    },
    {
      question: "Which Bash built-in returns the exit code of the last command?",
      options: ["$!", "$?", "$$", "$@"],
      correctAnswer: "$?"
    },
    ]
  },
          r:{
    easy:[
{
      question: "What is the file extension of R scripts?",
      options: [".r", ".R", ".rscript", ".Rs"],
     correctAnswer: ".R"
    },
    {
      question: "Which function is used to print in R?",
      options: ["echo()", "print()", "output()", "display()"],
     correctAnswer: "print()"
    },
    {
      question: "Which symbol is used for assignment in R?",
      options: ["=", "<-", "->", ":"],
     correctAnswer: "<-"
    },
    {
      question: "Which function is used to create a vector in R?",
      options: ["vector()", "array()", "c()", "list()"],
     correctAnswer: "c()"
    },
    {
      question: "Which function gives the structure of an object?",
      options: ["str()", "summary()", "describe()", "typeof()"],
     correctAnswer: "str()"
    },
    {
      question: "Which function returns the number of elements in a vector?",
      options: ["length()", "count()", "elements()", "dim()"],
     correctAnswer: "length()"
    },
    {
      question: "Which function is used to read CSV files in R?",
      options: ["read.csv()", "csv.read()", "import.csv()", "load.csv()"],
     correctAnswer: "read.csv()"
    },
    {
      question: "Which function shows the first few rows of a data frame?",
      options: ["start()", "peek()", "head()", "first()"],
     correctAnswer: "head()"
    },
    {
      question: "What type of language is R?",
      options: ["Object-oriented", "Functional", "Procedural", "All of the above"],
     correctAnswer: "All of the above"
    },
    {
      question: "Which package is used for data manipulation?",
      options: ["ggplot2", "tidyverse", "dplyr", "shiny"],
     correctAnswer: "dplyr"
    },
    {
      question: "Which function is used to generate a sequence in R?",
      options: ["seq()", "range()", "series()", "gen()"],
     correctAnswer: "seq()"
    },
    {
      question: "Which of the following is not a basic data type in R?",
      options: ["numeric", "character", "logical", "object"],
     correctAnswer: "object"
    },
    {
      question: "Which function returns a summary of a dataset?",
      options: ["summary()", "describe()", "view()", "inspect()"],
     correctAnswer: "summary()"
    },
    {
      question: "Which operator is used for logical AND in R?",
      options: ["&&", "&", "AND", "and"],
     correctAnswer: "&"
    },
    {
      question: "What will `class(3.14)` return?",
      options: ["numeric", "integer", "double", "float"],
     correctAnswer: "numeric"
    },
    {
      question: "What is the output of `typeof(TRUE)`?",
      options: ["logical", "boolean", "numeric", "character"],
     correctAnswer: "logical"
    },
    {
      question: "Which of these is used to create a matrix in R?",
      options: ["matrix()", "mat()", "create.matrix()", "array()"],
     correctAnswer: "matrix()"
    },
    {
      question: "Which function combines vectors by columns?",
      options: ["cbind()", "combine()", "colbind()", "coljoin()"],
     correctAnswer: "cbind()"
    },
    {
      question: "Which function combines vectors by rows?",
      options: ["rbind()", "rowbind()", "rowjoin()", "combine()"],
     correctAnswer: "rbind()"
    },
    {
      question: "Which data type holds key-value pairs?",
      options: ["list", "vector", "data.frame", "named list"],
     correctAnswer: "named list"
    },
    {
      question: "How do you check the class of an object?",
      options: ["type()", "class()", "object()", "typeof()"],
     correctAnswer: "class()"
    },
    {
      question: "Which symbol is used for comments in R?",
      options: ["//", "#", "--", "/* */"],
     correctAnswer: "#"
    },
    {
      question: "What does `NA` stand for in R?",
      options: ["New Attribute", "Null Attribute", "Not Available", "No Assignment"],
     correctAnswer: "Not Available"
    },
    {
      question: "Which package is used for data visualization?",
      options: ["dplyr", "tidyr", "ggplot2", "shiny"],
     correctAnswer: "ggplot2"
    },
    {
      question: "How do you install a package in R?",
      options: ["install(pkg)", "install.packages()", "pkg.install()", "setup.package()"],
     correctAnswer: "install.packages()"
    },
    {
      question: "Which function loads a package?",
      options: ["load()", "library()", "use()", "require()"],
     correctAnswer: "library()"
    },
    {
      question: "What is the function to create a data frame?",
      options: ["data.frame()", "create.df()", "make.df()", "dataframe()"],
     correctAnswer: "data.frame()"
    },
    {
      question: "What will `length(1:10)` return?",
      options: ["10", "11", "1", "Error"],
     correctAnswer: "10"
    },
    {
      question: "How do you remove an object in R?",
      options: ["remove()", "delete()", "rm()", "del()"],
     correctAnswer: "rm()"
    },
    {
      question: "What does `is.na()` do?",
      options: ["Removes NA values", "Replaces NA values", "Checks for NA", "Ignores NA"],
     correctAnswer: "Checks for NA"
    },
    {
      question: "What is the output of `mean(c(1, 2, 3))`?",
      options: ["6", "2", "1", "3"],
     correctAnswer: "2"
    },
    {
      question: "Which function calculates standard deviation?",
      options: ["sd()", "std()", "deviation()", "stdev()"],
     correctAnswer: "sd()"
    },
    {
      question: "Which operator checks equality in R?",
      options: ["==", "=", "!=", "<-"],
     correctAnswer: "=="
    },
    {
      question: "Which function repeats values?",
      options: ["rep()", "repeat()", "loop()", "clone()"],
     correctAnswer: "rep()"
    },
    {
      question: "What does `paste()` do?",
      options: ["Joins strings", "Separates strings", "Trims strings", "Replaces strings"],
     correctAnswer: "Joins strings"
    },
    {
      question: "What does `tolower()` do in R?",
      options: ["Lowercases text", "Counts letters", "Capitalizes text", "Removes text"],
     correctAnswer: "Lowercases text"
    },
    {
      question: "What is the default data structure for strings in R?",
      options: ["character", "text", "string", "word"],
     correctAnswer: "character"
    },
    {
      question: "Which function finds the maximum value?",
      options: ["max()", "maximum()", "top()", "peak()"],
     correctAnswer: "max()"
    },
    {
      question: "Which function finds the minimum value?",
      options: ["min()", "minimum()", "low()", "bottom()"],
     correctAnswer: "min()"
    },
    {
      question: "How can you create a sequence from 1 to 5?",
      options: ["1:5", "seq(1, 5)", "c(1:5)", "All of the above"],
     correctAnswer: "All of the above"
    },
    {
      question: "Which function sorts a vector?",
      options: ["order()", "rank()", "sort()", "arrange()"],
     correctAnswer: "sort()"
    },
    {
      question: "Which function reverses a vector?",
      options: ["rev()", "reverse()", "flip()", "turn()"],
     correctAnswer: "rev()"
    },
    {
      question: "What is the output of `typeof(3L)`?",
      options: ["integer", "numeric", "double", "float"],
     correctAnswer: "integer"
    },
    {
      question: "Which function checks if an object is numeric?",
      options: ["is.numeric()", "is.number()", "check.numeric()", "type.numeric()"],
     correctAnswer: "is.numeric()"
    },
    {
      question: "What does `dim()` return for a matrix?",
      options: ["Dimensions", "Length", "Shape", "Size"],
     correctAnswer: "Dimensions"
    },
    {
      question: "Which function returns column names?",
      options: ["colnames()", "columns()", "get.columns()", "col.names()"],
     correctAnswer: "colnames()"
    },
    {
      question: "Which function returns row names?",
      options: ["rownames()", "rows()", "get.rows()", "row.names()"],
     correctAnswer: "rownames()"
    },
    {
      question: "Which operator is used for element-wise multiplication?",
      options: ["*", "%*%", "x", "."],
     correctAnswer: "*"
    },
    {
      question: "Which operator is used for matrix multiplication?",
      options: ["%*%", "*", "%/%", "^"],
     correctAnswer: "%*%"
    },
    {
  question: "What does the `summary()` function in R do?",
  options: ["It creates plots", "It summarizes statistical data", "It installs packages", "It reads a CSV file"],
 correctAnswer: "It summarizes statistical data"
},
{
  question: "Which function is used to create a sequence of numbers in R?",
  options: ["sequence()", "seq()", "range()", "generate()"],
 correctAnswer: "seq()"
},
    ],
    advance:[
       {
    question: "Which R function is used for Principal Component Analysis?",
    options: ["lm()", "prcomp()", "kmeans()", "pca()"],
   correctAnswer: "prcomp()"
  },
  {
    question: "In R, what is the purpose of the `apply()` function?",
    options: ["To iterate over lists", "To apply a function to margins of an array", "To sort a vector", "To visualize data"],
   correctAnswer: "To apply a function to margins of an array"
  },
  {
    question: "Which R package is commonly used for data manipulation and transformation?",
    options: ["ggplot2", "shiny", "dplyr", "MASS"],
   correctAnswer: "dplyr"
  },
  {
    question: "What does the `glm()` function do in R?",
    options: ["Performs generalized linear modeling", "Generates linear models", "Generates logistic curves", "Groups data"],
   correctAnswer: "Performs generalized linear modeling"
  },
  {
    question: "Which function is used for time series forecasting in R?",
    options: ["predict()", "forecast()", "ts()", "auto.arima()"],
   correctAnswer: "auto.arima()"
  },
  {
    question: "What does `%>%` represent in R?",
    options: ["Assignment operator", "Pipe operator", "Comparison operator", "Concatenation operator"],
   correctAnswer: "Pipe operator"
  },
  {
    question: "What package provides the `%>%` operator?",
    options: ["base", "stringr", "magrittr", "stats"],
   correctAnswer: "magrittr"
  },
  {
    question: "Which package in R is used for creating web applications?",
    options: ["dplyr", "ggplot2", "shiny", "lubridate"],
   correctAnswer: "shiny"
  },
  {
    question: "What function is used to merge two data frames in R?",
    options: ["cbind()", "rbind()", "merge()", "join()"],
   correctAnswer: "merge()"
  },
  {
    question: "Which function returns the structure of an R object?",
    options: ["class()", "typeof()", "structure()", "str()"],
   correctAnswer: "str()"
  },
  {
    question: "Which function in R is used to fit linear regression models?",
    options: ["lm()", "glm()", "regress()", "fit()"],
   correctAnswer: "lm()"
  },
  {
    question: "How do you check for NA values in a dataset?",
    options: ["is.null()", "is.na()", "na.check()", "has.na()"],
   correctAnswer: "is.na()"
  },
  {
    question: "Which function is used to remove NA values?",
    options: ["omit.na()", "na.omit()", "remove.na()", "clear.na()"],
   correctAnswer: "na.omit()"
  },
  {
    question: "Which package is best for creating static visualizations?",
    options: ["plotly", "ggplot2", "shiny", "dplyr"],
   correctAnswer: "ggplot2"
  },
  {
    question: "Which function is used for hierarchical clustering?",
    options: ["kmeans()", "hclust()", "cluster()", "group()"],
   correctAnswer: "hclust()"
  },
  {
    question: "What does the `cut()` function do in R?",
    options: ["Cuts strings", "Splits numeric data into bins", "Cuts columns from data", "Slices matrices"],
   correctAnswer: "Splits numeric data into bins"
  },
  {
    question: "Which function performs ANOVA in R?",
    options: ["anova()", "lm()", "aov()", "summary()"],
   correctAnswer: "aov()"
  },
  {
    question: "Which function is used to convert factors to numeric in R?",
    options: ["as.numeric()", "to.numeric()", "factor()", "convert()"],
   correctAnswer: "as.numeric()"
  },
  {
    question: "Which function reads Excel files in R?",
    options: ["read.csv()", "read_excel()", "read.excel()", "xls.read()"],
   correctAnswer: "read_excel()"
  },
  {
    question: "Which package provides tools for string manipulation?",
    options: ["stringr", "readr", "lubridate", "tidyr"],
   correctAnswer: "stringr"
  },
  {
    question: "Which function in base R is used to sort data?",
    options: ["arrange()", "sort()", "order()", "rank()"],
   correctAnswer: "sort()"
  },
  {
    question: "What does the `levels()` function return?",
    options: ["Variable values", "Unique numeric values", "Factor levels", "Character vectors"],
   correctAnswer: "Factor levels"
  },
  {
    question: "Which function is used to create a correlation matrix?",
    options: ["correlation()", "cor()", "corr()", "matrix.corr()"],
   correctAnswer: "cor()"
  },
  {
    question: "Which function shows missing data visually?",
    options: ["na.plot()", "missmap()", "show.na()", "plot.na()"],
   correctAnswer: "missmap()"
  },
  {
    question: "Which package helps with working with dates?",
    options: ["lubridate", "ggplot2", "dplyr", "data.table"],
   correctAnswer: "lubridate"
  },
  {
    question: "Which function returns the summary statistics of a variable?",
    options: ["summary()", "describe()", "stats()", "analyze()"],
   correctAnswer: "summary()"
  },
  {
    question: "Which function converts a character to date format?",
    options: ["as.Date()", "to.Date()", "date()", "convert.date()"],
   correctAnswer: "as.Date()"
  },
  {
    question: "Which argument in `ggplot2` specifies the data source?",
    options: ["aes()", "data", "geom", "mapping"],
   correctAnswer: "data"
  },
  {
    question: "What function is used to bind rows?",
    options: ["cbind()", "rbind()", "merge()", "join()"],
   correctAnswer: "rbind()"
  },
  {
    question: "Which function is used to calculate standard deviation?",
    options: ["std()", "sd()", "var()", "deviation()"],
   correctAnswer: "sd()"
  },
  {
    question: "Which function returns variable names in a dataset?",
    options: ["colnames()", "varnames()", "names()", "attributes()"],
   correctAnswer: "names()"
  },
  {
    question: "Which function would convert a wide dataset to long?",
    options: ["spread()", "gather()", "pivot_longer()", "reshape()"],
   correctAnswer: "pivot_longer()"
  },
  {
    question: "Which package allows fast reading of large datasets?",
    options: ["data.table", "readr", "readxl", "utils"],
   correctAnswer: "data.table"
  },
  {
    question: "Which function is used to build bar plots?",
    options: ["barplot()", "plot()", "hist()", "boxplot()"],
   correctAnswer: "barplot()"
  },
  {
    question: "What function is used to subset rows by condition?",
    options: ["subset()", "filter()", "select()", "condition()"],
   correctAnswer: "subset()"
  },
  {
    question: "Which operator is used for matrix multiplication?",
    options: ["*", "%*%", "%x%", "+"],
   correctAnswer: "%*%"
  },
  {
    question: "What is the role of the `tidyr` package?",
    options: ["Modeling", "Data visualization", "Data reshaping", "Web development"],
   correctAnswer: "Data reshaping"
  },
  {
    question: "Which R function is used to check object class?",
    options: ["class()", "typeof()", "structure()", "data.class()"],
   correctAnswer: "class()"
  },
  {
    question: "Which function can test for linearity?",
    options: ["plot()", "lm()", "boxplot()", "shapiro.test()"],
   correctAnswer: "lm()"
  },
  {
    question: "Which function helps fit logistic regression?",
    options: ["lm()", "glm()", "logit()", "regression()"],
   correctAnswer: "glm()"
  },
  {
    question: "Which function helps create factor variables?",
    options: ["as.factor()", "factorize()", "to.factor()", "factors()"],
   correctAnswer: "as.factor()"
  },
  {
    question: "Which package is useful for machine learning in R?",
    options: ["MASS", "caret", "e1071", "All of the above"],
   correctAnswer: "All of the above"
  },
  {
    question: "Which function calculates cumulative sums?",
    options: ["sum()", "cumsum()", "total()", "accumulate()"],
   correctAnswer: "cumsum()"
  },
  {
    question: "Which method is used to find clusters in data?",
    options: ["kmeans()", "lm()", "aov()", "cluster()"],
   correctAnswer: "kmeans()"
  },
  {
    question: "Which function generates random normal values?",
    options: ["random()", "rnorm()", "norm()", "generate()"],
   correctAnswer: "rnorm()"
  },
  {
    question: "What does `sink()` do in R?",
    options: ["Saves output to file", "Downloads data", "Opens a connection", "Creates a plot"],
   correctAnswer: "Saves output to file"
  },
  {
    question: "Which function calculates the interquartile range?",
    options: ["iqr()", "IQR()", "range()", "summary()"],
   correctAnswer: "IQR()"
  },
  {
    question: "Which R package is commonly used for reporting?",
    options: ["shiny", "rmarkdown", "dplyr", "report()"],
   correctAnswer: "rmarkdown"
  },
  {
    question: "Which function is used to perform Chi-squared test?",
    options: ["chi()", "chisq.test()", "chi.test()", "x2.test()"],
   correctAnswer: "chisq.test()"
  },
  {
    question: "Which function is used to plot a histogram?",
    options: ["hist()", "barplot()", "boxplot()", "curve()"],
   correctAnswer: "hist()"
  }
    ]
  },
          sql:{
    easy:[
 {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Stylish Question Language", "Simple Query List", "Structured Question Language"],
    correctAnswer: "Structured Query Language"
  },
  {
    question: "Which SQL statement is used to retrieve data from a database?",
    options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
    correctAnswer: "SELECT"
  },
  {
    question: "Which keyword is used to eliminate duplicate rows in a SQL SELECT statement?",
    options: ["ONLY", "UNIQUE", "REMOVE", "DISTINCT"],
    correctAnswer: "DISTINCT"
  },
  {
    question: "Which SQL clause is used to filter records?",
    options: ["ORDER BY", "FILTER", "WHERE", "GROUP BY"],
    correctAnswer: "WHERE"
  },
  {
    question: "Which operator is used to check if a value is within a range?",
    options: ["IN", "BETWEEN", "WITHIN", "RANGE"],
    correctAnswer: "BETWEEN"
  },
  {
    question: "What symbol is used for a wildcard character in SQL?",
    options: ["!", "*", "%", "#"],
    correctAnswer: "%"
  },
  {
    question: "Which command is used to remove a table from a database?",
    options: ["DELETE", "DROP", "REMOVE", "ERASE"],
    correctAnswer: "DROP"
  },
  {
    question: "Which SQL statement is used to insert new data into a table?",
    options: ["INSERT INTO", "ADD TO", "NEW ENTRY", "INCLUDE"],
    correctAnswer: "INSERT INTO"
  },
  {
    question: "What does the COUNT() function do?",
    options: ["Counts characters", "Counts rows", "Counts columns", "Counts tables"],
    correctAnswer: "Counts rows"
  },
  {
    question: "Which clause is used to sort the result-set in SQL?",
    options: ["ORDER", "GROUP BY", "SORT BY", "ORDER BY"],
    correctAnswer: "ORDER BY"
  },
  {
    question: "Which of the following is a valid SQL data type?",
    options: ["chartext", "numbering", "VARCHAR", "textual"],
    correctAnswer: "VARCHAR"
  },
  {
    question: "What is the default sorting order of ORDER BY?",
    options: ["DESC", "ASC", "NONE", "RANDOM"],
    correctAnswer: "ASC"
  },
  {
    question: "Which clause groups rows sharing a property?",
    options: ["ORDER BY", "GROUP BY", "SORT", "MERGE"],
    correctAnswer: "GROUP BY"
  },
  {
    question: "Which command is used to remove all rows from a table?",
    options: ["DELETE", "REMOVE", "TRUNCATE", "DROP"],
    correctAnswer: "TRUNCATE"
  },
  {
    question: "Which of the following is not a SQL aggregate function?",
    options: ["SUM()", "AVG()", "TOTAL()", "MAX()"],
    correctAnswer: "TOTAL()"
  },
  {
    question: "What keyword is used to check a condition for each row in a SELECT statement?",
    options: ["CHECK", "IF", "WHERE", "THEN"],
    correctAnswer: "WHERE"
  },
  {
    question: "Which SQL function returns the largest value?",
    options: ["BIGGEST()", "MAX()", "LARGE()", "HIGHEST()"],
    correctAnswer: "MAX()"
  },
  {
    question: "What is the purpose of the LIKE operator?",
    options: ["To compare exact values", "To create indexes", "To match patterns", "To sort results"],
    correctAnswer: "To match patterns"
  },
  {
    question: "Which clause is used to combine rows from two or more tables?",
    options: ["COMBINE", "JOIN", "MERGE", "TOGETHER"],
    correctAnswer: "JOIN"
  },
  {
    question: "What does the AND operator do in SQL?",
    options: ["Performs addition", "Combines conditions", "Replaces values", "Selects all columns"],
    correctAnswer: "Combines conditions"
  },
  {
    question: "Which SQL statement is used to change data in a table?",
    options: ["EDIT", "UPDATE", "MODIFY", "CHANGE"],
    correctAnswer: "UPDATE"
  },
  {
    question: "What does the OR operator do?",
    options: ["Performs subtraction", "Returns true if either condition is true", "Sorts data", "Duplicates data"],
    correctAnswer: "Returns true if either condition is true"
  },
  {
    question: "Which of the following is a DML command?",
    options: ["CREATE", "DROP", "INSERT", "ALTER"],
    correctAnswer: "INSERT"
  },
  {
    question: "What does SQL’s NULL mean?",
    options: ["0", "Empty String", "Unknown or missing value", "Not available"],
    correctAnswer: "Unknown or missing value"
  },
  {
    question: "Which SQL statement is used to create a new table?",
    options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
    correctAnswer: "CREATE TABLE"
  },
  {
    question: "Which keyword is used to check for non-matching values?",
    options: ["NOT", "NO", "EXCEPT", "EXCLUDE"],
    correctAnswer: "NOT"
  },
  {
    question: "Which command adds a column to an existing table?",
    options: ["MODIFY TABLE", "INSERT COLUMN", "ALTER TABLE", "APPEND COLUMN"],
    correctAnswer: "ALTER TABLE"
  },
  {
    question: "What keyword is used with NULL to find non-null values?",
    options: ["NOT NULL", "EXISTS", "HAS VALUE", "DEFINED"],
    correctAnswer: "NOT NULL"
  },
  {
    question: "Which operator compares a value to a list of values?",
    options: ["IN", "ALL", "COMPARE", "MATCH"],
    correctAnswer: "IN"
  },
  {
    question: "Which command removes a column from a table?",
    options: ["DELETE COLUMN", "DROP COLUMN", "REMOVE COLUMN", "ALTER REMOVE"],
    correctAnswer: "DROP COLUMN"
  },
  {
    question: "Which clause is used to limit the number of rows returned?",
    options: ["LIMIT", "STOP", "ROW", "TOP"],
    correctAnswer: "LIMIT"
  },
  {
    question: "Which function returns the number of rows?",
    options: ["SUM()", "MAX()", "COUNT()", "SIZE()"],
    correctAnswer: "COUNT()"
  },
  {
    question: "What is the wildcard character for a single character?",
    options: ["*", "_", "%", "#"],
    correctAnswer: "_"
  },
  {
    question: "What SQL keyword is used to remove duplicates?",
    options: ["UNIQUE", "REMOVE", "DISTINCT", "FILTER"],
    correctAnswer: "DISTINCT"
  },
  {
    question: "Which SQL clause is used to rename a column in the output?",
    options: ["RENAME", "AS", "ALIAS", "NEW"],
    correctAnswer: "AS"
  },
  {
    question: "Which SQL clause is used to filter group results?",
    options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
    correctAnswer: "HAVING"
  },
  {
    question: "Which function returns the smallest value?",
    options: ["LOW()", "MIN()", "SMALL()", "LEAST()"],
    correctAnswer: "MIN()"
  },
  {
    question: "What type of JOIN returns all rows from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "FULL JOIN", "CROSS JOIN"],
    correctAnswer: "FULL JOIN"
  },
  {
    question: "What keyword ensures all rows are returned including unmatched rows from the left table?",
    options: ["FULL", "LEFT JOIN", "RIGHT JOIN", "ALL"],
    correctAnswer: "LEFT JOIN"
  },
  {
    question: "What is the default value of a column if not specified?",
    options: ["0", "''", "NULL", "undefined"],
    correctAnswer: "NULL"
  },
  {
    question: "Which clause is used for pattern matching?",
    options: ["MATCH", "SIMILAR", "LIKE", "EQUALS"],
    correctAnswer: "LIKE"
  },
  {
    question: "What command is used to rename a table?",
    options: ["RENAME TO", "ALTER RENAME", "CHANGE NAME", "MODIFY TO"],
    correctAnswer: "RENAME TO"
  },
  {
    question: "Which command gives structure of a table?",
    options: ["SHOW TABLE", "DESCRIBE", "INFO TABLE", "TABLE DETAILS"],
    correctAnswer: "DESCRIBE"
  },
  {
    question: "What is the command to delete all rows but keep structure?",
    options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
    correctAnswer: "TRUNCATE"
  },
  {
    question: "What function calculates average?",
    options: ["AVG()", "MEAN()", "AVERAGE()", "SUM()/COUNT()"],
    correctAnswer: "AVG()"
  },
  {
    question: "Which command is used to set user privileges?",
    options: ["ALLOW", "SET PRIVILEGES", "GRANT", "AUTH"],
    correctAnswer: "GRANT"
  },
  {
    question: "Which SQL keyword removes access from a user?",
    options: ["DELETE", "REVOKE", "DROP", "DENY"],
    correctAnswer: "REVOKE"
  },
  {
    question: "What clause is used to restrict rows before grouping?",
    options: ["HAVING", "LIMIT", "WHERE", "FILTER"],
    correctAnswer: "WHERE"
  },
  {
    question: "Which SQL clause helps rename column in result?",
    options: ["AS", "RENAME", "ALIAS", "MODIFY"],
    correctAnswer: "AS"
  },
  {
    question: "What operator is used for inequality in SQL?",
    options: ["!=", "<>", "≠", "NOT"],
    correctAnswer: "<>"
  },
    ],
    advance:[
       {
    question: "Which SQL clause is used to filter groups of rows?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswer: "HAVING"
  },
  {
    question: "Which join returns all rows from the left table and matched rows from the right table?",
    options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL JOIN"],
    correctAnswer: "LEFT JOIN"
  },
  {
    question: "What does the RANK() function do in SQL?",
    options: [
      "Assigns a unique number to each row",
      "Ranks rows within a partition",
      "Deletes duplicate rows",
      "Counts number of rows"
    ],
    correctAnswer: "Ranks rows within a partition"
  },
  {
    question: "What is a CTE in SQL?",
    options: ["Common Table Expression", "Computed Table Entry", "Current Table Engine", "Central Table Expression"],
    correctAnswer: "Common Table Expression"
  },
  {
    question: "Which SQL keyword is used to remove duplicate records?",
    options: ["UNIQUE", "DELETE", "DISTINCT", "TRIM"],
    correctAnswer: "DISTINCT"
  },
  {
    question: "What is the purpose of the SQL UNION operator?",
    options: [
      "Joins tables by matching columns",
      "Combines result sets from multiple SELECTs",
      "Sorts data",
      "Filters duplicate records only"
    ],
    correctAnswer: "Combines result sets from multiple SELECTs"
  },
  {
    question: "What does the COALESCE() function do?",
    options: ["Deletes null values", "Returns the first non-null value", "Sorts rows", "Converts strings to numbers"],
    correctAnswer: "Returns the first non-null value"
  },
  {
    question: "What is the default sort order of ORDER BY?",
    options: ["Random", "Descending", "Ascending", "Grouped"],
    correctAnswer: "Ascending"
  },
  {
    question: "Which constraint enforces uniqueness on a column?",
    options: ["NOT NULL", "FOREIGN KEY", "PRIMARY KEY", "UNIQUE"],
    correctAnswer: "UNIQUE"
  },
  {
    question: "What is the use of the LIMIT clause?",
    options: ["Sorts data", "Skips rows", "Limits number of returned rows", "Filters rows"],
    correctAnswer: "Limits number of returned rows"
  },
  {
    question: "Which function returns the number of rows in a result set?",
    options: ["COUNT()", "ROWNUM()", "TOTAL()", "SIZE()"],
    correctAnswer: "COUNT()"
  },
  {
    question: "What is a foreign key?",
    options: [
      "A key used to sort rows",
      "A key linking two tables",
      "A key for primary index",
      "A key used for duplicates"
    ],
    correctAnswer: "A key linking two tables"
  },
  {
    question: "What does INNER JOIN do?",
    options: [
      "Returns all records from both tables",
      "Returns unmatched rows",
      "Returns rows with matching keys in both tables",
      "Creates a temporary table"
    ],
    correctAnswer: "Returns rows with matching keys in both tables"
  },
  {
    question: "What is the purpose of the IS NULL operator?",
    options: ["Checks if value is empty string", "Checks for null value", "Returns numeric data", "Filters duplicates"],
    correctAnswer: "Checks for null value"
  },
  {
    question: "Which function is used to round values in SQL?",
    options: ["TRIM()", "ROUND()", "MOD()", "CEIL()"],
    correctAnswer: "ROUND()"
  },
  {
    question: "What does the SQL keyword BETWEEN do?",
    options: ["Checks for equality", "Limits string length", "Filters a range", "Finds duplicates"],
    correctAnswer: "Filters a range"
  },
  {
    question: "Which operator is used to match a pattern?",
    options: ["LIKE", "=", "IN", "BETWEEN"],
    correctAnswer: "LIKE"
  },
  {
    question: "Which clause is used to group rows in SQL?",
    options: ["GROUP BY", "ORDER BY", "SORT", "WHERE"],
    correctAnswer: "GROUP BY"
  },
  {
    question: "Which keyword is used to rename a column or table in a query?",
    options: ["AS", "WITH", "RENAME", "USING"],
    correctAnswer: "AS"
  },
  {
    question: "What is the purpose of the ROW_NUMBER() function?",
    options: [
      "Counts rows",
      "Assigns a sequential number to rows",
      "Deletes rows",
      "Duplicates rows"
    ],
    correctAnswer: "Assigns a sequential number to rows"
  },
  {
    question: "Which clause is evaluated first in a SELECT query?",
    options: ["FROM", "WHERE", "SELECT", "GROUP BY"],
    correctAnswer: "FROM"
  },
  {
    question: "What does a FULL OUTER JOIN return?",
    options: [
      "Only matched rows",
      "All unmatched rows only",
      "Matched + unmatched rows from both tables",
      "Rows from the left table only"
    ],
    correctAnswer: "Matched + unmatched rows from both tables"
  },
  {
    question: "What is the result of NULL + 5?",
    options: ["0", "5", "NULL", "Error"],
    correctAnswer: "NULL"
  },
  {
    question: "Which keyword adds a new record in a table?",
    options: ["ADD", "INSERT", "UPDATE", "CREATE"],
    correctAnswer: "INSERT"
  },
  {
    question: "Which SQL command is used to delete a table?",
    options: ["REMOVE TABLE", "DELETE", "DROP TABLE", "TRUNCATE"],
    correctAnswer: "DROP TABLE"
  },
  {
    question: "What does the DISTINCT keyword do?",
    options: ["Deletes rows", "Sorts data", "Returns unique values", "Filters NULL values"],
    correctAnswer: "Returns unique values"
  },
  {
    question: "Which keyword is used to change a value in SQL?",
    options: ["MODIFY", "SET", "UPDATE", "CHANGE"],
    correctAnswer: "UPDATE"
  },
  {
    question: "Which aggregate function gives the maximum value?",
    options: ["MAX()", "HIGH()", "GREATEST()", "TOP()"],
    correctAnswer: "MAX()"
  },
  {
    question: "How do you prevent NULL values in a column?",
    options: ["UNIQUE", "NOT NULL", "DEFAULT", "INDEX"],
    correctAnswer: "NOT NULL"
  },
  {
    question: "What does the NVL() function do in Oracle SQL?",
    options: ["Removes duplicates", "Converts numbers", "Replaces NULL with a default", "Finds NULL values"],
    correctAnswer: "Replaces NULL with a default"
  },
  {
    question: "What is the purpose of TRUNCATE?",
    options: ["Deletes all rows faster", "Deletes one row", "Deletes a table", "Resets table name"],
    correctAnswer: "Deletes all rows faster"
  },
  {
    question: "What is a subquery?",
    options: [
      "A query inside a query",
      "A new table",
      "A foreign key",
      "A stored function"
    ],
    correctAnswer: "A query inside a query"
  },
  {
    question: "What does the EXISTS operator check?",
    options: ["If table exists", "If column is not null", "If subquery returns rows", "If duplicate exists"],
    correctAnswer: "If subquery returns rows"
  },
  {
    question: "Which SQL clause is used to rename a table?",
    options: ["ALTER", "RENAME", "AS", "MODIFY"],
    correctAnswer: "RENAME"
  },
  {
    question: "Which type of JOIN gives the Cartesian product?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "RIGHT JOIN"],
    correctAnswer: "CROSS JOIN"
  },
  {
    question: "Which SQL command is used to create a view?",
    options: ["MAKE VIEW", "CREATE VIEW", "NEW VIEW", "ADD VIEW"],
    correctAnswer: "CREATE VIEW"
  },
  {
    question: "How is a primary key different from a unique key?",
    options: [
      "Primary key allows duplicates",
      "Primary key doesn't allow NULLs, Unique does",
      "Both are same",
      "Primary key is used in foreign tables"
    ],
    correctAnswer: "Primary key doesn't allow NULLs, Unique does"
  },
  {
    question: "Which function returns the current system date in SQL?",
    options: ["NOW()", "GETDATE()", "SYSDATE()", "TODAY()"],
    correctAnswer: "SYSDATE()"
  },
  {
    question: "Which SQL statement is used to modify the structure of a table?",
    options: ["MODIFY", "UPDATE", "ALTER", "CHANGE"],
    correctAnswer: "ALTER"
  },
  {
    question: "What is the output of COUNT(*) on an empty table?",
    options: ["NULL", "0", "1", "Error"],
    correctAnswer: "0"
  },
  {
    question: "Which of the following is not a valid SQL aggregate function?",
    options: ["SUM()", "COUNT()", "AVG()", "MERGE()"],
    correctAnswer: "MERGE()"
  },
  {
    question: "What does the INTERSECT keyword do?",
    options: ["Adds result sets", "Subtracts result sets", "Finds common records", "Finds duplicates"],
    correctAnswer: "Finds common records"
  },
  {
    question: "What is the purpose of the DEFAULT constraint?",
    options: [
      "Limits duplicate values",
      "Prevents NULL values",
      "Assigns default value when no value is provided",
      "Deletes invalid entries"
    ],
    correctAnswer: "Assigns default value when no value is provided"
  },
  {
    question: "Which function returns the length of a string in SQL?",
    options: ["SIZE()", "LENGTH()", "STRLEN()", "STRINGLEN()"],
    correctAnswer: "LENGTH()"
  },
  {
    question: "How can you prevent SQL injection?",
    options: ["Use subqueries", "Use wildcards", "Use parameterized queries", "Use LIKE instead of ="],
    correctAnswer: "Use parameterized queries"
  },
  {
    question: "Which data type stores large binary objects?",
    options: ["VARCHAR", "BLOB", "TEXT", "INT"],
    correctAnswer: "BLOB"
  },
  {
    question: "What is normalization in databases?",
    options: ["Index creation", "Elimination of redundancy", "Compression", "Adding constraints"],
    correctAnswer: "Elimination of redundancy"
  },
  {
    question: "Which keyword allows multiple rows to be inserted?",
    options: ["BATCH", "MULTI", "VALUES", "ARRAY"],
    correctAnswer: "VALUES"
  },
  {
    question: "Which clause combines rows with the same values?",
    options: ["GROUP BY", "JOIN", "HAVING", "WHERE"],
    correctAnswer: "GROUP BY"
  },
  {
    question: "Which SQL keyword is used to end a transaction?",
    options: ["STOP", "COMMIT", "END", "SAVE"],
    correctAnswer: "COMMIT"
  },
    ]
  },
  haskell:{
    easy:[
  {
    question: "What is the correct file extension for Haskell files?",
    options: [".hs", ".h", ".hk", ".hl"],
    correctAnswer: ".hs"
  },
  {
    question: "Which keyword is used to define a function in Haskell?",
    options: ["def", "function", "let", "fn"],
    correctAnswer: "let"
  },
  {
    question: "What is the result of `2 + 3 * 4` in Haskell?",
    options: ["20", "14", "24", "10"],
    correctAnswer: "14"
  },
  {
    question: "Which of the following is a Haskell data type?",
    options: ["Int", "Number", "Decimal", "CharList"],
    correctAnswer: "Int"
  },
  {
    question: "What does `::` signify in Haskell?",
    options: ["Type annotation", "Equality", "Concatenation", "Assignment"],
    correctAnswer: "Type annotation"
  },
  {
    question: "Which function returns the length of a list?",
    options: ["size", "count", "length", "len"],
    correctAnswer: "length"
  },
  {
    question: "Which of these is a valid Haskell list?",
    options: ["[1,2,3]", "{1,2,3}", "(1,2,3)", "<1,2,3>"],
    correctAnswer: "[1,2,3]"
  },
  {
    question: "What will `head [5,6,7]` return?",
    options: ["5", "[5]", "6", "[6]"],
    correctAnswer: "5"
  },
  {
    question: "Which keyword is used to create a new data type?",
    options: ["struct", "record", "data", "type"],
    correctAnswer: "data"
  },
  {
    question: "What is `ghci`?",
    options: ["A compiler", "An interpreter", "A debugger", "A formatter"],
    correctAnswer: "An interpreter"
  },
  {
    question: "How do you define a constant in Haskell?",
    options: ["val x = 10", "x = 10", "const x = 10", "define x = 10"],
    correctAnswer: "x = 10"
  },
  {
    question: "Which symbol is used for list concatenation?",
    options: ["+", "++", "&", "|"],
    correctAnswer: "++"
  },
  {
    question: "What will `tail [1,2,3]` return?",
    options: ["[2,3]", "[1,2]", "2", "3"],
    correctAnswer: "[2,3]"
  },
  {
    question: "Which function checks if a list is empty?",
    options: ["empty", "isEmpty", "null", "isempty"],
    correctAnswer: "null"
  },
  {
    question: "Which function gets the last element of a list?",
    options: ["last", "end", "tail", "final"],
    correctAnswer: "last"
  },
  {
    question: "How are comments written in Haskell?",
    options: ["// comment", "# comment", "-- comment", "/* comment */"],
    correctAnswer: "-- comment"
  },
  {
    question: "What is the result of `length []`?",
    options: ["0", "1", "undefined", "error"],
    correctAnswer: "0"
  },
  {
    question: "Which keyword defines type synonyms?",
    options: ["alias", "typedef", "synonym", "type"],
    correctAnswer: "type"
  },
  {
    question: "Which function converts an integer to string?",
    options: ["show", "toString", "convert", "str"],
    correctAnswer: "show"
  },
  {
    question: "Which of the following is lazy in Haskell?",
    options: ["Functions", "Lists", "Variables", "Everything"],
    correctAnswer: "Everything"
  },
  {
    question: "What is the output of `succ 5`?",
    options: ["6", "4", "7", "error"],
    correctAnswer: "6"
  },
  {
    question: "Which function returns the first n elements of a list?",
    options: ["slice", "first", "take", "get"],
    correctAnswer: "take"
  },
  {
    question: "Which function skips the first n elements of a list?",
    options: ["drop", "skip", "tail", "cut"],
    correctAnswer: "drop"
  },
  {
    question: "Which function reverses a list?",
    options: ["invert", "flip", "reverse", "back"],
    correctAnswer: "reverse"
  },
  {
    question: "Which function returns True if all elements satisfy a condition?",
    options: ["each", "filter", "all", "map"],
    correctAnswer: "all"
  },
  {
    question: "Which of these is a numeric literal in Haskell?",
    options: ["5", "'5'", "\"5\"", "`5`"],
    correctAnswer: "5"
  },
  {
    question: "What is the result of `div 10 3`?",
    options: ["3", "3.33", "4", "error"],
    correctAnswer: "3"
  },
  {
    question: "Which function returns a character from its ASCII value?",
    options: ["fromChar", "chr", "ascii", "char"],
    correctAnswer: "chr"
  },
  {
    question: "Which function checks if a number is even?",
    options: ["even", "isEven", "mod2", "checkEven"],
    correctAnswer: "even"
  },
  {
    question: "What is the type of `True`?",
    options: ["Bool", "Boolean", "Int", "Char"],
    correctAnswer: "Bool"
  },
  {
    question: "What does the `:` operator do in a list?",
    options: ["Appends", "Prepends", "Multiplies", "Slices"],
    correctAnswer: "Prepends"
  },
  {
    question: "Which function filters a list based on a predicate?",
    options: ["where", "filter", "map", "find"],
    correctAnswer: "filter"
  },
  {
    question: "Which of these is a Haskell logical operator?",
    options: ["&&", "and", "&", "&&&"],
    correctAnswer: "&&"
  },
  {
    question: "Which of these is a tuple in Haskell?",
    options: ["(1, 'a')", "[1, 'a']", "{1, 'a'}", "<1, 'a'>"],
    correctAnswer: "(1, 'a')"
  },
  {
    question: "What does `mod 10 3` return?",
    options: ["1", "3", "0", "error"],
    correctAnswer: "1"
  },
  {
    question: "Which function maps a function over a list?",
    options: ["each", "map", "filter", "apply"],
    correctAnswer: "map"
  },
  {
    question: "Which keyword is used in pattern matching?",
    options: ["match", "select", "case", "when"],
    correctAnswer: "case"
  },
  {
    question: "What will `not True` return?",
    options: ["False", "True", "Error", "0"],
    correctAnswer: "False"
  },
  {
    question: "Which function returns the maximum of two values?",
    options: ["max", "maximum", "bigger", "high"],
    correctAnswer: "max"
  },
  {
    question: "Which keyword is used for conditional expressions?",
    options: ["if", "case", "cond", "match"],
    correctAnswer: "if"
  },
  {
    question: "What will `[1..5]` produce?",
    options: ["[1,2,3,4,5]", "[1,5]", "1 to 5", "range(1,5)"],
    correctAnswer: "[1,2,3,4,5]"
  },
  {
    question: "Which operator is used for function application?",
    options: ["$", "=>", "->", "#"],
    correctAnswer: "$"
  },
  {
    question: "What is the result of `minimum [4,2,8]`?",
    options: ["2", "4", "8", "undefined"],
    correctAnswer: "2"
  },
  {
    question: "What is the type of `\"hello\"`?",
    options: ["String", "Char", "Text", "[Char]"],
    correctAnswer: "[Char]"
  },
  {
    question: "What does `zip [1,2] [\"a\",\"b\"]` return?",
    options: ["[(1,\"a\"),(2,\"b\")]", "[[1,\"a\"],[2,\"b\"]]", "[1,2,a,b]", "error"],
    correctAnswer: "[(1,\"a\"),(2,\"b\")]"
  },
  {
    question: "Which function finds the sum of elements in a list?",
    options: ["sum", "total", "addAll", "combine"],
    correctAnswer: "sum"
  },
  {
    question: "Which function finds the product of list elements?",
    options: ["product", "multiply", "times", "prod"],
    correctAnswer: "product"
  },
  {
    question: "What is the output of `take 0 [1,2,3]`?",
    options: ["[]", "[1]", "[1,2]", "0"],
    correctAnswer: "[]"
  },
  {
    question: "What does `elem 2 [1,2,3]` return?",
    options: ["True", "False", "2", "undefined"],
    correctAnswer: "True"
  },
  {
    question: "What is `:t` used for in GHCi?",
    options: ["Type check", "Test", "Tuple", "Terminate"],
    correctAnswer: "Type check"
  },
    ],
    advance:[
        {
    question: "What is a monad in Haskell?",
    options: ["A type of data structure", "A function", "A design pattern for input/output", "A type class used for sequencing computations"],
    correctAnswer: "A type class used for sequencing computations"
  },
  {
    question: "Which operator is used to bind monadic values in Haskell?",
    options: ["<*>", ">>=", "<$", "=>"],
    correctAnswer: ">>="
  },
  {
    question: "What does the `Maybe` monad represent?",
    options: ["A list of possible values", "An optional value that might be missing", "A computation that always fails", "A sequence of numbers"],
    correctAnswer: "An optional value that might be missing"
  },
  {
    question: "In Haskell, what does `Functor` type class define?",
    options: ["The `map` function for containers", "The `bind` function for monads", "Mathematical functions", "Error handling"],
    correctAnswer: "The `map` function for containers"
  },
  {
    question: "What does the `do` notation simplify?",
    options: ["Type inference", "List comprehension", "Monadic code sequencing", "Pattern matching"],
    correctAnswer: "Monadic code sequencing"
  },
  {
    question: "Which of these is a lawful monad?",
    options: ["Tuple", "IO", "Int", "Char"],
    correctAnswer: "IO"
  },
  {
    question: "Which type class must a type be an instance of to use `fmap`?",
    options: ["Applicative", "Monad", "Functor", "Foldable"],
    correctAnswer: "Functor"
  },
  {
    question: "What is `foldr` used for?",
    options: ["To reverse a list", "To map a function", "To reduce a list from the right", "To concatenate lists"],
    correctAnswer: "To reduce a list from the right"
  },
  {
    question: "Which of the following types is the most generic?",
    options: ["[a]", "(Int, String)", "Maybe a", "IO a"],
    correctAnswer: "Maybe a"
  },
  {
    question: "What does `seq` do in Haskell?",
    options: ["Compares values", "Forces evaluation of its first argument", "Creates a sequence of numbers", "Reads input"],
    correctAnswer: "Forces evaluation of its first argument"
  },
  {
    question: "Which function ensures strict evaluation of a value?",
    options: ["lazy", "seq", "evaluate", "strict"],
    correctAnswer: "seq"
  },
  {
    question: "What is `liftM` used for?",
    options: ["Lifting values into a monad", "Mapping over functors", "Lifting functions into monads", "Pattern matching"],
    correctAnswer: "Lifting functions into monads"
  },
  {
    question: "Which of the following is a type constructor?",
    options: ["Int", "a", "Maybe", "True"],
    correctAnswer: "Maybe"
  },
  {
    question: "What is the kind of `Maybe`?",
    options: ["* -> *", "*", "* -> * -> *", "Int -> Bool"],
    correctAnswer: "* -> *"
  },
  {
    question: "What is the result of `mapM_ print [1,2,3]`?",
    options: ["123", "Prints each number on a new line", "Returns a list", "Does nothing"],
    correctAnswer: "Prints each number on a new line"
  },
  {
    question: "Which type class allows function application inside a context?",
    options: ["Functor", "Monad", "Applicative", "Foldable"],
    correctAnswer: "Applicative"
  },
  {
    question: "Which function chains monadic actions discarding the result of the first?",
    options: [">>", ">>=", "return", "<*>"],
    correctAnswer: ">>"
  },
  {
    question: "Which Haskell construct is lazily evaluated by default?",
    options: ["List", "Int", "Char", "Tuple"],
    correctAnswer: "List"
  },
  {
    question: "What does the `newtype` keyword define?",
    options: ["A new type synonym", "A new algebraic data type", "A wrapper around an existing type", "A polymorphic type"],
    correctAnswer: "A wrapper around an existing type"
  },
  {
    question: "Which function is used for short-circuiting folds?",
    options: ["foldr", "foldl", "scanl", "foldr1"],
    correctAnswer: "foldr"
  },
  {
    question: "Which extension allows defining functions via type-level programming?",
    options: ["OverloadedStrings", "TypeFamilies", "DeriveFunctor", "RecordWildCards"],
    correctAnswer: "TypeFamilies"
  },
  {
    question: "Which of the following is a GADT?",
    options: ["data X = A | B", "data X a where", "data X = X Int", "type X = Int"],
    correctAnswer: "data X a where"
  },
  {
    question: "What is `mappend` used for?",
    options: ["Combining monadic values", "Appending lists", "Combining monoid values", "Mapping over a list"],
    correctAnswer: "Combining monoid values"
  },
  {
    question: "What does `:t` do in GHCi?",
    options: ["Shows the type of an expression", "Runs a test", "Compiles code", "Shows value"],
    correctAnswer: "Shows the type of an expression"
  },
  {
    question: "What is the result of `head []`?",
    options: ["[]", "0", "Runtime error", "Nothing"],
    correctAnswer: "Runtime error"
  },
  {
    question: "Which library provides concurrent Haskell programming?",
    options: ["Control.Monad", "Data.List", "Control.Concurrent", "System.IO"],
    correctAnswer: "Control.Concurrent"
  },
  {
    question: "What does `unsafePerformIO` do?",
    options: ["Performs IO in a pure function (not safe)", "Performs safe IO", "Creates a thread", "Defines an exception"],
    correctAnswer: "Performs IO in a pure function (not safe)"
  },
  {
    question: "What does the `par` function do?",
    options: ["Executes two computations in parallel", "Parses input", "Prints to stdout", "Pattern matches"],
    correctAnswer: "Executes two computations in parallel"
  },
  {
    question: "Which Haskell tool is used for profiling?",
    options: ["ghc", "ghci", "hpc", "stack"],
    correctAnswer: "hpc"
  },
  {
    question: "What is the `Either` type used for?",
    options: ["Handling success/failure", "Representing Booleans", "Defining IO actions", "Managing concurrency"],
    correctAnswer: "Handling success/failure"
  },
  {
    question: "Which of these is not a valid type class?",
    options: ["Monad", "Functor", "Applicative", "Numeric"],
    correctAnswer: "Numeric"
  },
  {
    question: "What does `:info` do in GHCi?",
    options: ["Shows info about a type or function", "Evaluates expression", "Loads file", "Shows all errors"],
    correctAnswer: "Shows info about a type or function"
  },
  {
    question: "Which package manager is common in Haskell?",
    options: ["Cargo", "NPM", "Stack", "Pip"],
    correctAnswer: "Stack"
  },
  {
    question: "What is `pure` used for in Haskell?",
    options: ["To force evaluation", "To lift a value into a monad", "To evaluate IO", "To handle strings"],
    correctAnswer: "To lift a value into a monad"
  },
  {
    question: "Which function is used for pattern matching on `Maybe`?",
    options: ["case", "match", "check", "guard"],
    correctAnswer: "case"
  },
  {
    question: "What is the result of `length [1..5]`?",
    options: ["6", "4", "5", "0"],
    correctAnswer: "5"
  },
  {
    question: "What does `deriving Show` do?",
    options: ["Allows printing a type", "Creates a new type", "Defines a function", "Makes a type serializable"],
    correctAnswer: "Allows printing a type"
  },
  {
    question: "Which type allows recursion?",
    options: ["IO", "List", "Maybe", "Int"],
    correctAnswer: "List"
  },
  {
    question: "Which pragma enables language extensions?",
    options: ["{-# LANGUAGE ... #-}", "#! /usr/bin/env", "-- pragma", "::"],
    correctAnswer: "{-# LANGUAGE ... #-}"
  },
  {
    question: "What is `fix` in Haskell?",
    options: ["A debugging tool", "A combinator to define recursive functions", "An exception handler", "A fold function"],
    correctAnswer: "A combinator to define recursive functions"
  },
  {
    question: "Which function applies a list of functions to a single value?",
    options: ["sequence", "traverse", "ap", "map"],
    correctAnswer: "ap"
  },
  {
    question: "What does the `$` operator do?",
    options: ["Applies function to argument with low precedence", "Adds two numbers", "Defines a lambda", "Declares a variable"],
    correctAnswer: "Applies function to argument with low precedence"
  },
  {
    question: "What kind of evaluation strategy does Haskell use?",
    options: ["Eager", "Lazy", "Strict", "Greedy"],
    correctAnswer: "Lazy"
  },
  {
    question: "What is the purpose of `let` in Haskell?",
    options: ["Declare local bindings", "Run IO", "Handle exceptions", "Match patterns"],
    correctAnswer: "Declare local bindings"
  },
  {
    question: "Which operator is used for function composition?",
    options: ["$", ".", "->", "++"],
    correctAnswer: "."
  },
  {
    question: "What is a type synonym?",
    options: ["A new type entirely", "An alias for an existing type", "A type constructor", "A polymorphic type"],
    correctAnswer: "An alias for an existing type"
  },
  {
    question: "What does `tail [1,2,3]` return?",
    options: ["[2,3]", "[1]", "[1,2]", "[]"],
    correctAnswer: "[2,3]"
  },
  {
    question: "What is `zip` used for?",
    options: ["Combining two lists into a list of pairs", "Joining strings", "Reducing a list", "Splitting a list"],
    correctAnswer: "Combining two lists into a list of pairs"
  },
  {
    question: "What is the purpose of the `where` clause?",
    options: ["Define local bindings", "Restrict input types", "Import modules", "Export functions"],
    correctAnswer: "Define local bindings"
  },
  {
  question: "What does the `Monad` typeclass represent in Haskell?",
  options: [
    "A way to manage side effects and sequencing computations",
    "A data structure for efficient list processing",
    "A mechanism for inheritance in Haskell",
    "An alternative to functions in Haskell"
  ],
  correctAnswer: "A way to manage side effects and sequencing computations"
},
    ]
  },
  scala:{
    easy:[
 {
    question: "What is the file extension for a Scala source file?",
    options: [".scala", ".sc", ".java", ".scl"],
    correctAnswer: ".scala"
  },
  {
    question: "Which keyword is used to define a variable in Scala?",
    options: ["val", "var", "let", "def"],
    correctAnswer: "var"
  },
  {
    question: "Which keyword is used to define an immutable value in Scala?",
    options: ["const", "val", "let", "immutable"],
    correctAnswer: "val"
  },
  {
    question: "What is the entry point of a Scala application?",
    options: ["main", "run", "start", "init"],
    correctAnswer: "main"
  },
  {
    question: "Which collection type is immutable by default in Scala?",
    options: ["List", "Array", "Buffer", "Queue"],
    correctAnswer: "List"
  },
  {
    question: "What is the result of 1 + 2 in Scala?",
    options: ["3", "'3'", "12", "Error"],
    correctAnswer: "3"
  },
  {
    question: "Which symbol is used to define a function in Scala?",
    options: ["def", "func", "function", "fn"],
    correctAnswer: "def"
  },
  {
    question: "What does `val` stand for?",
    options: ["Value", "Variable", "Validate", "Variant"],
    correctAnswer: "Value"
  },
  {
    question: "Which of the following is a valid data type in Scala?",
    options: ["Int", "String", "Boolean", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Scala is a __________ language.",
    options: ["statically typed", "dynamically typed", "loosely typed", "weakly typed"],
    correctAnswer: "statically typed"
  },
  {
    question: "How do you write a single-line comment in Scala?",
    options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
    correctAnswer: "// comment"
  },
  {
    question: "Which of the following is a valid loop in Scala?",
    options: ["for", "while", "do-while", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which company originally developed Scala?",
    options: ["EPFL", "Oracle", "Google", "IBM"],
    correctAnswer: "EPFL"
  },
  {
    question: "What is the default visibility of a class in Scala?",
    options: ["public", "private", "protected", "package-private"],
    correctAnswer: "public"
  },
  {
    question: "Which keyword is used to extend a class?",
    options: ["extends", "inherits", "super", "base"],
    correctAnswer: "extends"
  },
  {
    question: "Which keyword is used to mix in traits?",
    options: ["with", "using", "include", "trait"],
    correctAnswer: "with"
  },
  {
    question: "What does REPL stand for in Scala?",
    options: ["Read Eval Print Loop", "Run Every Program Logically", "Random Execution Programming Language", "None"],
    correctAnswer: "Read Eval Print Loop"
  },
  {
    question: "Which keyword defines a function without a name?",
    options: ["lambda", "anonymous", "=>", "func"],
    correctAnswer: "=>"
  },
  {
    question: "Which keyword is used to define a trait?",
    options: ["trait", "interface", "mixin", "implements"],
    correctAnswer: "trait"
  },
  {
    question: "Scala supports both _________ and object-oriented programming.",
    options: ["functional", "procedural", "logical", "declarative"],
    correctAnswer: "functional"
  },
  {
    question: "Which of the following is a collection in Scala?",
    options: ["List", "Set", "Map", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which of the following can be used to define a block of code in Scala?",
    options: ["{ }", "[ ]", "( )", "< >"],
    correctAnswer: "{ }"
  },
  {
    question: "What is the correct syntax to define an array in Scala?",
    options: ["Array(1,2,3)", "array[1,2,3]", "new Array(1,2,3)", "[1,2,3]"],
    correctAnswer: "Array(1,2,3)"
  },
  {
    question: "How do you print output in Scala?",
    options: ["println()", "print()", "echo()", "display()"],
    correctAnswer: "println()"
  },
  {
    question: "Which method is used to compare two strings in Scala?",
    options: ["equals()", "==", "compareTo()", "cmp()"],
    correctAnswer: "equals()"
  },
  {
    question: "Which of these is a valid boolean value in Scala?",
    options: ["true", "false", "both", "none"],
    correctAnswer: "both"
  },
  {
    question: "What is the result of `5 / 2` in Scala?",
    options: ["2", "2.5", "2.0", "Error"],
    correctAnswer: "2"
  },
  {
    question: "Which of the following is not a valid identifier in Scala?",
    options: ["myVar", "1stVar", "_temp", "data123"],
    correctAnswer: "1stVar"
  },
  {
    question: "What is a tuple in Scala?",
    options: ["Immutable ordered collection", "Mutable collection", "String collection", "Loop structure"],
    correctAnswer: "Immutable ordered collection"
  },
  {
    question: "Which of the following is a string interpolation method?",
    options: ["s", "f", "raw", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What does `Option` represent?",
    options: ["Presence or absence of value", "List of numbers", "Error handling", "None"],
    correctAnswer: "Presence or absence of value"
  },
  {
    question: "Which keyword is used to create a class in Scala?",
    options: ["class", "define", "type", "new"],
    correctAnswer: "class"
  },
  {
    question: "How do you define a method in Scala?",
    options: ["def methodName", "function methodName", "func methodName", "method methodName"],
    correctAnswer: "def methodName"
  },
  {
    question: "Which method is used to get the length of a string?",
    options: ["length", "size", "count", "len"],
    correctAnswer: "length"
  },
  {
    question: "Scala uses which symbol for anonymous functions?",
    options: ["=>", "->", "::", ":"],
    correctAnswer: "=>"
  },
  {
    question: "What is the parent class of all classes in Scala?",
    options: ["Any", "Object", "Root", "Base"],
    correctAnswer: "Any"
  },
  {
    question: "Scala runs on which virtual machine?",
    options: ["JVM", "CLR", "Python VM", "Scala VM"],
    correctAnswer: "JVM"
  },
  {
    question: "Which keyword is used to import packages?",
    options: ["import", "include", "require", "use"],
    correctAnswer: "import"
  },
  {
    question: "What is a trait in Scala?",
    options: ["Reusable unit of code", "Collection", "Exception", "Keyword"],
    correctAnswer: "Reusable unit of code"
  },
  {
    question: "What does the `match` keyword do?",
    options: ["Pattern matching", "Looping", "Conditional branching", "Exception handling"],
    correctAnswer: "Pattern matching"
  },
  {
    question: "Which of the following is not a Scala collection?",
    options: ["Set", "List", "Tree", "Map"],
    correctAnswer: "Tree"
  },
  {
    question: "What does `None` represent in Scala?",
    options: ["No value", "Zero", "False", "Null"],
    correctAnswer: "No value"
  },
  {
    question: "What is the return type of `Unit` in Scala?",
    options: ["void", "null", "0", "undefined"],
    correctAnswer: "void"
  },
  {
    question: "Which operator is used for string concatenation?",
    options: ["+", "&", "concat", "."],
    correctAnswer: "+"
  },
  {
    question: "Which data type is used for decimals in Scala?",
    options: ["Double", "Int", "String", "Char"],
    correctAnswer: "Double"
  },
  {
    question: "What does `head` do in a list?",
    options: ["Returns first element", "Returns last element", "Adds element", "Removes element"],
    correctAnswer: "Returns first element"
  },
  {
    question: "How do you create an empty list in Scala?",
    options: ["List()", "[]", "empty()", "new List"],
    correctAnswer: "List()"
  },
  {
    question: "Which of the following is used to filter elements in a collection?",
    options: ["filter", "select", "where", "map"],
    correctAnswer: "filter"
  },
  {
    question: "What does `map` do in a collection?",
    options: ["Applies a function to each element", "Filters elements", "Sorts elements", "Joins elements"],
    correctAnswer: "Applies a function to each element"
  },
  {
    question: "What is the Scala equivalent of `null` for `Option`?",
    options: ["None", "Nothing", "Empty", "Null"],
    correctAnswer: "None"
  },
    ],
    advance:[
      {
    question: "What is the difference between `val` and `var` in Scala?",
    options: ["val is immutable, var is mutable", "Both are immutable", "Both are mutable", "val is mutable, var is immutable"],
    correctAnswer: "val is immutable, var is mutable"
  },
  {
    question: "Which construct allows pattern matching on data structures?",
    options: ["match", "switch", "if-else", "loop"],
    correctAnswer: "match"
  },
  {
    question: "Which trait is used to implement lazy collections in Scala?",
    options: ["Iterable", "Traversable", "Stream", "Seq"],
    correctAnswer: "Stream"
  },
  {
    question: "What is the purpose of `Option` in Scala?",
    options: ["Error handling", "To handle optional values", "To define methods", "To implement recursion"],
    correctAnswer: "To handle optional values"
  },
  {
    question: "What does `case class` in Scala provide by default?",
    options: ["Getters", "Equals & hashCode", "Pattern matching support", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you create an anonymous function in Scala?",
    options: ["x -> x + 1", "(x) => x + 1", "function(x) x + 1", "lambda x: x + 1"],
    correctAnswer: "(x) => x + 1"
  },
  {
    question: "Which of these is not a collection in Scala?",
    options: ["List", "Tuple", "Map", "Set"],
    correctAnswer: "Tuple"
  },
  {
    question: "What is a `trait` in Scala?",
    options: ["A data structure", "A kind of class", "A reusable interface", "An immutable variable"],
    correctAnswer: "A reusable interface"
  },
  {
    question: "What is the default return type of a method without an explicit return?",
    options: ["Unit", "Null", "Any", "Nothing"],
    correctAnswer: "Unit"
  },
  {
    question: "What does `yield` do in Scala for-comprehensions?",
    options: ["Returns the final value", "Terminates the loop", "Throws an exception", "Modifies the iterator"],
    correctAnswer: "Returns the final value"
  },
  {
    question: "What is the type of an empty list in Scala?",
    options: ["List[Nothing]", "List[Null]", "List[Any]", "List[Unit]"],
    correctAnswer: "List[Nothing]"
  },
  {
    question: "Which of the following is used for concurrent programming in Scala?",
    options: ["Future", "Thread", "Coroutine", "Timer"],
    correctAnswer: "Future"
  },
  {
    question: "What is the parent of all types in Scala?",
    options: ["Any", "Object", "Nothing", "Unit"],
    correctAnswer: "Any"
  },
  {
    question: "What is the bottom type in Scala type hierarchy?",
    options: ["Null", "Nothing", "AnyVal", "Unit"],
    correctAnswer: "Nothing"
  },
  {
    question: "How are higher-order functions defined?",
    options: ["Functions that take/return functions", "Functions that have multiple parameters", "Functions inside classes", "Functions that use recursion"],
    correctAnswer: "Functions that take/return functions"
  },
  {
    question: "Which keyword is used to extend a trait in Scala?",
    options: ["implements", "extends", "uses", "inherits"],
    correctAnswer: "extends"
  },
  {
    question: "Which of these is a pure functional construct in Scala?",
    options: ["if", "while", "match", "var"],
    correctAnswer: "match"
  },
  {
    question: "What is the return type of a function that never returns?",
    options: ["Unit", "Null", "Nothing", "Any"],
    correctAnswer: "Nothing"
  },
  {
    question: "What is the significance of underscore (_) in Scala?",
    options: ["Wildcard", "Default value", "Error handler", "Loop variable"],
    correctAnswer: "Wildcard"
  },
  {
    question: "Which monad is used for asynchronous computation in Scala?",
    options: ["Try", "Option", "Future", "Either"],
    correctAnswer: "Future"
  },
  {
    question: "What is the difference between `map` and `flatMap`?",
    options: ["flatMap flattens nested structures", "map modifies keys", "map works only on lists", "flatMap is faster"],
    correctAnswer: "flatMap flattens nested structures"
  },
  {
    question: "What does `sealed` keyword do in Scala?",
    options: ["Restricts subclassing to same file", "Makes a class final", "Allows inheritance", "Used for private methods"],
    correctAnswer: "Restricts subclassing to same file"
  },
  {
    question: "What type of collection is immutable by default?",
    options: ["ArrayBuffer", "ListBuffer", "List", "Array"],
    correctAnswer: "List"
  },
  {
    question: "Which type safely represents a value that may be null?",
    options: ["Try", "Either", "Option", "Match"],
    correctAnswer: "Option"
  },
  {
    question: "Which function is used to transform elements of a collection?",
    options: ["map", "foreach", "filter", "reduce"],
    correctAnswer: "map"
  },
  {
    question: "What is `implicit` used for?",
    options: ["Automatic parameter passing", "Hiding variables", "Overloading functions", "Logging"],
    correctAnswer: "Automatic parameter passing"
  },
  {
    question: "What is tail recursion?",
    options: ["Recursive call at the end", "Any recursive function", "Recursion using while loop", "Memory-heavy recursion"],
    correctAnswer: "Recursive call at the end"
  },
  {
    question: "What does `lazy val` mean?",
    options: ["Evaluated on first access", "Evaluated at compile time", "Never evaluated", "Used in recursion"],
    correctAnswer: "Evaluated on first access"
  },
  {
    question: "What does `object` keyword define?",
    options: ["Singleton", "Class instance", "Static method", "Abstract method"],
    correctAnswer: "Singleton"
  },
  {
    question: "Which method converts a collection to a string?",
    options: ["mkString", "toString", "toSeq", "join"],
    correctAnswer: "mkString"
  },
  {
    question: "Which construct is used to handle exceptions functionally?",
    options: ["Try", "Catch", "Match", "Throw"],
    correctAnswer: "Try"
  },
  {
    question: "Which class is used for lazy evaluation of sequences?",
    options: ["Stream", "List", "Array", "Set"],
    correctAnswer: "Stream"
  },
  {
    question: "Which collection allows duplicate keys in Scala?",
    options: ["Map", "List", "Multimap", "Set"],
    correctAnswer: "Multimap"
  },
  {
    question: "What does `foldLeft` do?",
    options: ["Reduces a collection from the left", "Maps a collection", "Filters collection", "Sorts collection"],
    correctAnswer: "Reduces a collection from the left"
  },
  {
    question: "Which type class represents monadic computations?",
    options: ["Monad", "Functor", "Applicative", "Semigroup"],
    correctAnswer: "Monad"
  },
  {
    question: "Which operator is used to prepend to a List?",
    options: ["::", "++", "+=", "--"],
    correctAnswer: "::"
  },
  {
    question: "Which of the following is a covariant type?",
    options: ["List[+A]", "Array[-A]", "Option[A]", "Map[A, B]"],
    correctAnswer: "List[+A]"
  },
  {
    question: "How can you ensure a method must be overridden?",
    options: ["abstract", "override", "final", "implicit"],
    correctAnswer: "abstract"
  },
  {
    question: "Which keyword defines an abstract class?",
    options: ["abstract", "trait", "class", "object"],
    correctAnswer: "abstract"
  },
  {
    question: "Which of the following can have constructor parameters?",
    options: ["class", "trait", "object", "None of the above"],
    correctAnswer: "class"
  },
  {
    question: "What is the role of companion object?",
    options: ["Holds static members", "Defines interface", "Creates traits", "Compiles classes"],
    correctAnswer: "Holds static members"
  },
  {
    question: "How do you define an infinite collection lazily?",
    options: ["Stream", "Array", "Set", "List"],
    correctAnswer: "Stream"
  },
  {
    question: "Which keyword restricts access to the same package?",
    options: ["protected", "private[package]", "public", "internal"],
    correctAnswer: "private[package]"
  },
  {
    question: "Which class represents computation that may fail?",
    options: ["Try", "Either", "Option", "Future"],
    correctAnswer: "Try"
  },
  {
    question: "Which structure is used for partial function application?",
    options: ["Underscore _", "match", "trait", "class"],
    correctAnswer: "Underscore _"
  },
  {
    question: "Which library provides functional programming constructs in Scala?",
    options: ["Scalaz", "Akka", "Spark", "Play"],
    correctAnswer: "Scalaz"
  },
  {
    question: "Which annotation suppresses compiler warnings?",
    options: ["@deprecated", "@unchecked", "@suppress", "@ignore"],
    correctAnswer: "@unchecked"
  },
  {
    question: "What is an example of a pure function?",
    options: ["Function with no side effects", "Function that prints", "Function that logs", "Function with global state"],
    correctAnswer: "Function with no side effects"
  },
  {
    question: "Which is not a monad in Scala?",
    options: ["Option", "Future", "Try", "Set"],
    correctAnswer: "Set"
  },
  {
    question: "What type of evaluation strategy does Scala use?",
    options: ["Eager by default", "Lazy by default", "Call by need", "Call by name always"],
    correctAnswer: "Eager by default"
  },
    ]
  },
  elixir:{
    easy:[
{
    question: "What is the file extension for Elixir source files?",
    options: [".exs", ".el", ".ex", ".elx"],
    correctAnswer: ".ex"
  },
  {
    question: "Which command runs Elixir code from the terminal?",
    options: ["elixir", "elixirc", "iex", "runex"],
    correctAnswer: "elixir"
  },
  {
    question: "What does IEx stand for in Elixir?",
    options: ["Interactive Expression", "Interactive Elixir", "Internal Elixir", "Input Elixir"],
    correctAnswer: "Interactive Elixir"
  },
  {
    question: "What is the keyword to define a function in Elixir?",
    options: ["def", "function", "fn", "fun"],
    correctAnswer: "def"
  },
  {
    question: "Which symbol is used to define an anonymous function?",
    options: ["fn -> end", "function() {}", "def()", "lambda"],
    correctAnswer: "fn -> end"
  },
  {
    question: "Which data type is used for text in Elixir?",
    options: ["String", "str", "Text", "CharList"],
    correctAnswer: "String"
  },
  {
    question: "How do you concatenate two strings in Elixir?",
    options: ["<>", "+", "++", "&"],
    correctAnswer: "<>"
  },
  {
    question: "How do you write a comment in Elixir?",
    options: ["#", "//", "--", "%%"],
    correctAnswer: "#"
  },
  {
    question: "Which module is commonly used for working with lists?",
    options: ["List", "Array", "Enumerable", "Map"],
    correctAnswer: "List"
  },
  {
    question: "What is the result of 2 + 3 in Elixir?",
    options: ["5", "'5'", "23", "undefined"],
    correctAnswer: "5"
  },
  {
    question: "Which data type allows key-value pairs?",
    options: ["Map", "List", "Tuple", "Set"],
    correctAnswer: "Map"
  },
  {
    question: "Which keyword is used to match patterns in Elixir?",
    options: ["=", "==", ":=", "=>"],
    correctAnswer: "="
  },
  {
    question: "Which of these is a valid Elixir atom?",
    options: [":ok", "ok:", "#ok", "@ok"],
    correctAnswer: ":ok"
  },
  {
    question: "What does `Enum.map` do?",
    options: ["Applies a function to each element", "Sorts a list", "Filters a list", "Returns a map"],
    correctAnswer: "Applies a function to each element"
  },
  {
    question: "What is the return type of an Elixir function?",
    options: ["Last evaluated expression", "Void", "Return statement", "Nil"],
    correctAnswer: "Last evaluated expression"
  },
  {
    question: "What is a tuple in Elixir?",
    options: ["Fixed-size ordered collection", "Key-value store", "String type", "Unordered list"],
    correctAnswer: "Fixed-size ordered collection"
  },
  {
    question: "What does `length/1` return?",
    options: ["Number of elements in a list", "Length of a string", "Number of keys in a map", "Tuple size"],
    correctAnswer: "Number of elements in a list"
  },
  {
    question: "How do you define a module in Elixir?",
    options: ["defmodule", "module", "defclass", "mod"],
    correctAnswer: "defmodule"
  },
  {
    question: "Which function converts a string to an atom?",
    options: ["String.to_atom", "toAtom", "Atom.to_string", "String.atom"],
    correctAnswer: "String.to_atom"
  },
  {
    question: "What is the purpose of `mix` in Elixir?",
    options: ["Build tool", "Debugger", "Compiler", "Test runner only"],
    correctAnswer: "Build tool"
  },
  {
    question: "What does `hd/1` return in a list?",
    options: ["First element", "Last element", "Length", "All elements"],
    correctAnswer: "First element"
  },
  {
    question: "What does `tl/1` return in a list?",
    options: ["Tail (all but first)", "Total length", "Tuple length", "None"],
    correctAnswer: "Tail (all but first)"
  },
  {
    question: "How do you interpolate variables in a string?",
    options: ["#{var}", "$var", "${var}", "%var%"],
    correctAnswer: "#{var}"
  },
  {
    question: "Which keyword is used to define a conditional?",
    options: ["if", "when", "switch", "select"],
    correctAnswer: "if"
  },
  {
    question: "How do you create a list in Elixir?",
    options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
    correctAnswer: "[1, 2, 3]"
  },
  {
    question: "What does `IO.puts` do?",
    options: ["Prints to console", "Reads input", "Pauses program", "Returns tuple"],
    correctAnswer: "Prints to console"
  },
  {
    question: "What is `nil` in Elixir?",
    options: ["Represents nothing", "False", "Empty string", "Zero"],
    correctAnswer: "Represents nothing"
  },
  {
    question: "What does `is_atom(:ok)` return?",
    options: ["true", "false", "error", "nil"],
    correctAnswer: "true"
  },
  {
    question: "What is a characteristic of Elixir variables?",
    options: ["Immutable", "Global", "Mutable", "Dynamic"],
    correctAnswer: "Immutable"
  },
  {
    question: "How do you start an interactive shell?",
    options: ["iex", "elixir", "elixirc", "elx"],
    correctAnswer: "iex"
  },
  {
    question: "Which operator checks equality?",
    options: ["==", "=", "===", ":="],
    correctAnswer: "=="
  },
  {
    question: "What does `Enum.sum([1, 2, 3])` return?",
    options: ["6", "123", "[6]", "error"],
    correctAnswer: "6"
  },
  {
    question: "What does `Map.get(%{a: 1}, :a)` return?",
    options: ["1", "a", "%{a: 1}", "nil"],
    correctAnswer: "1"
  },
  {
    question: "How do you define a default argument in a function?",
    options: ["def func(x \\\\ 1)", "def func(x = 1)", "def func(x := 1)", "def func(x: 1)"],
    correctAnswer: "def func(x \\\\ 1)"
  },
  {
    question: "Which type represents true/false in Elixir?",
    options: ["boolean", "bool", "Boolean", "truefalse"],
    correctAnswer: "boolean"
  },
  {
    question: "Which Elixir type represents fixed values like :ok?",
    options: ["Atom", "Symbol", "Literal", "Enum"],
    correctAnswer: "Atom"
  },
  {
    question: "How do you check if a variable is a list?",
    options: ["is_list(var)", "typeof(var) == list", "checkList(var)", "list?(var)"],
    correctAnswer: "is_list(var)"
  },
  {
    question: "Which of these is a valid atom?",
    options: [":hello", "#hello", "@hello", "!hello"],
    correctAnswer: ":hello"
  },
  {
    question: "How do you declare multiple function clauses?",
    options: ["Using pattern matching", "Using switch", "Using elif", "Using elif clause"],
    correctAnswer: "Using pattern matching"
  },
  {
    question: "What is a pipe operator in Elixir?",
    options: ["|>", ">>", "<<", "=>"],
    correctAnswer: "|>"
  },
  {
    question: "What does `is_integer(10)` return?",
    options: ["true", "false", "nil", "error"],
    correctAnswer: "true"
  },
  {
    question: "Which module is used for file operations?",
    options: ["File", "IO", "Map", "Enum"],
    correctAnswer: "File"
  },
  {
    question: "How do you pattern match a tuple?",
    options: ["{a, b} = {1, 2}", "[a, b] = [1, 2]", "(a, b) = (1, 2)", "<a, b> = <1, 2>"],
    correctAnswer: "{a, b} = {1, 2}"
  },
  {
    question: "Which function raises an exception if key is missing?",
    options: ["Map.fetch!", "Map.get", "Map.read", "Map.retrieve"],
    correctAnswer: "Map.fetch!"
  },
  {
    question: "What does `String.length(\"abc\")` return?",
    options: ["3", "abc", "'abc'", "error"],
    correctAnswer: "3"
  },
{
  question: "What is the file extension for Elixir source code files?",
  options: [".ex", ".el", ".exs", ".elx"],
  correctAnswer: ".ex"
},
  {
    question: "Which of these is immutable in Elixir?",
    options: ["List", "Map", "Tuple", "All of them"],
    correctAnswer: "All of them"
  },
  {
    question: "Which keyword is used for recursion?",
    options: ["def", "fn", "rec", "loop"],
    correctAnswer: "def"
  },
  {
    question: "Which built-in type represents time?",
    options: ["NaiveDateTime", "DateTime", "Time", "All of them"],
    correctAnswer: "All of them"
  },
  {
    question: "How to define a guard clause?",
    options: ["when", "if", "guard", "case"],
    correctAnswer: "when"
  },
    ],
    advance:[
     {
    question: "What is the purpose of `GenServer` in Elixir?",
    options: ["To manage state and handle concurrency", "To define macros", "To render HTML templates", "To create database schemas"],
    correctAnswer: "To manage state and handle concurrency"
  },
  {
    question: "Which module provides the ability to supervise processes in Elixir?",
    options: ["GenServer", "Supervisor", "Registry", "Agent"],
    correctAnswer: "Supervisor"
  },
  {
    question: "What is a `Task` in Elixir used for?",
    options: ["Defining structs", "Managing dependencies", "Asynchronous operations", "Parsing JSON"],
    correctAnswer: "Asynchronous operations"
  },
  {
    question: "What does `spawn` do in Elixir?",
    options: ["Starts a GenServer", "Creates a new process", "Opens a TCP port", "Defines a module"],
    correctAnswer: "Creates a new process"
  },
  {
    question: "Which Elixir macro is used to handle pattern matching and branching logic?",
    options: ["if", "case", "def", "for"],
    correctAnswer: "case"
  },
  {
    question: "How can you handle timeouts in `GenServer.call/3`?",
    options: ["Using `catch`", "With a `timeout` parameter", "By using `try` block", "With `defguard`"],
    correctAnswer: "With a `timeout` parameter"
  },
  {
    question: "What Elixir data type is best suited for pattern matching and immutability?",
    options: ["Lists", "Tuples", "Maps", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which construct ensures a block of code is executed even if an error occurs?",
    options: ["try/rescue", "try/after", "if/else", "case"],
    correctAnswer: "try/after"
  },
  {
    question: "What does the `@moduledoc` attribute do?",
    options: ["Stores global config", "Defines struct fields", "Documents a module", "Specifies the entry point"],
    correctAnswer: "Documents a module"
  },
  {
    question: "Which operator is used to match and bind values in pattern matching?",
    options: ["=", "==", "<-", "::"],
    correctAnswer: "="
  },
  {
    question: "What is the result of `Enum.reduce([1,2,3], 0, fn x, acc -> x + acc end)`?",
    options: ["6", "0", "1", "3"],
    correctAnswer: "6"
  },
  {
    question: "Which module is used to manipulate dates and times?",
    options: ["DateTime", "NaiveDateTime", "Calendar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you define a private function in Elixir?",
    options: ["private def", "defp", "def private", "fnp"],
    correctAnswer: "defp"
  },
  {
    question: "What is the Elixir build tool and package manager?",
    options: ["Hex", "Mix", "Bundler", "Cargo"],
    correctAnswer: "Mix"
  },
  {
    question: "Which macro is used to define compile-time constants?",
    options: ["@define", "@const", "@attribute", "@"],
    correctAnswer: "@"
  },
  {
    question: "What is `Agent` in Elixir used for?",
    options: ["Supervising child processes", "Handling HTTP requests", "Managing shared state", "Logging messages"],
    correctAnswer: "Managing shared state"
  },
  {
    question: "Which Elixir construct allows for conditional execution based on guards?",
    options: ["if", "cond", "when", "unless"],
    correctAnswer: "when"
  },
  {
    question: "What does `use` do in Elixir?",
    options: ["Starts a process", "Injects code via a macro", "Imports a module", "Creates a struct"],
    correctAnswer: "Injects code via a macro"
  },
  {
    question: "What does the `with` construct help simplify?",
    options: ["Loops", "Error handling", "String interpolation", "Enum transformations"],
    correctAnswer: "Error handling"
  },
  {
    question: "Which function converts a string to an atom?",
    options: ["String.to_atom", "to_atom", "Atom.to_string", "String.atom"],
    correctAnswer: "String.to_atom"
  },
  {
    question: "What is a protocol in Elixir?",
    options: ["A way to handle strings", "A compile-time macro", "A polymorphic behavior", "A web framework"],
    correctAnswer: "A polymorphic behavior"
  },
  {
    question: "Which behavior is used for implementing a long-running stateful process?",
    options: ["Supervisor", "Agent", "GenServer", "Task"],
    correctAnswer: "GenServer"
  },
  {
    question: "What is a common use of macros in Elixir?",
    options: ["Performance optimization", "Pattern matching", "Compile-time code generation", "Importing modules"],
    correctAnswer: "Compile-time code generation"
  },
  {
    question: "What does `receive` do in Elixir?",
    options: ["Waits for message in a process", "Renders templates", "Connects to DB", "Defines a variable"],
    correctAnswer: "Waits for message in a process"
  },
  {
    question: "Which module is used to generate random values?",
    options: ["Enum", "Map", "Random", "Enum.random"],
    correctAnswer: "Enum.random"
  },
  {
    question: "What is the result of `List.flatten([[1,2],[3,4]])`?",
    options: ["[1,2,3,4]", "[[1,2],[3,4]]", "[1,[2,3],4]", "[1,2],[3,4]"],
    correctAnswer: "[1,2,3,4]"
  },
  {
    question: "What does `String.split(\"a,b,c\", \",\")` return?",
    options: [["a","b","c"], "a b c", "abc", "a,c"],
    correctAnswer: ["a","b","c"]
  },
  {
    question: "Which module is used for functional operations on collections?",
    options: ["List", "Enum", "Stream", "Both Enum and Stream"],
    correctAnswer: "Both Enum and Stream"
  },
  {
    question: "Which Elixir feature helps with lightweight concurrency?",
    options: ["Processes", "Threads", "Fibers", "Coroutines"],
    correctAnswer: "Processes"
  },
  {
    question: "What is the output of `is_atom(:ok)`?",
    options: ["true", "false", "ok", ":ok"],
    correctAnswer: "true"
  },
  {
    question: "Which macro defines a module?",
    options: ["def", "defmodule", "mod", "module"],
    correctAnswer: "defmodule"
  },
  {
    question: "What happens when you divide by zero in Elixir?",
    options: ["Error", "Returns `:infinity`", "Returns `nil`", "Nothing"],
    correctAnswer: "Error"
  },
  {
    question: "How do you define a guard clause in a function head?",
    options: ["if", "cond", "when", "unless"],
    correctAnswer: "when"
  },
  {
    question: "What is `iex` in Elixir?",
    options: ["A compiler", "An editor", "Interactive shell", "Deployment tool"],
    correctAnswer: "Interactive shell"
  },
  {
    question: "Which function merges two maps?",
    options: ["Map.concat", "Map.merge", "Map.join", "Map.combine"],
    correctAnswer: "Map.merge"
  },
  {
    question: "What is the purpose of the `Stream` module?",
    options: ["Stream audio", "Lazy enum operations", "Handle HTTP requests", "Send files"],
    correctAnswer: "Lazy enum operations"
  },
  {
    question: "Which tool is used for testing in Elixir?",
    options: ["ExSpec", "ExUnit", "ElixirTest", "MixTest"],
    correctAnswer: "ExUnit"
  },
  {
    question: "How do you specify a dependency in Elixir?",
    options: ["mix deps.add", "mix add", "in mix.exs file", "hex install"],
    correctAnswer: "in mix.exs file"
  },
  {
    question: "What does `defstruct` do?",
    options: ["Defines a struct", "Creates a class", "Implements behavior", "Spawns a process"],
    correctAnswer: "Defines a struct"
  },
  {
    question: "Which function appends an element to a list?",
    options: ["List.put", "List.insert", "++", "--"],
    correctAnswer: "++"
  },
  {
    question: "What’s the arity of `add(a, b)`?",
    options: ["1", "2", "0", "Depends on values"],
    correctAnswer: "2"
  },
  {
    question: "Which module is used to handle Erlang-style tuples?",
    options: ["Tuple", "List", "Record", "Struct"],
    correctAnswer: "Tuple"
  },
  {
    question: "What does `Kernel.apply/3` do?",
    options: ["Applies a macro", "Calls a function dynamically", "Returns function arity", "Evaluates code"],
    correctAnswer: "Calls a function dynamically"
  },
  {
    question: "How do you refer to the current module inside it?",
    options: ["this", "self", "__MODULE__", "__SELF__"],
    correctAnswer: "__MODULE__"
  },
  {
    question: "What does `flush()` do in `iex`?",
    options: ["Clears memory", "Displays messages in the inbox", "Terminates processes", "Flushes cache"],
    correctAnswer: "Displays messages in the inbox"
  },
  {
    question: "What’s a `sigil` in Elixir?",
    options: ["A struct", "A string shortcut", "A macro", "An OTP feature"],
    correctAnswer: "A string shortcut"
  },
  {
    question: "How can you ensure an expression returns a boolean?",
    options: ["Use `!!`", "Use `is_boolean`", "Use `not`", "Elixir always returns boolean"],
    correctAnswer: "Use `!!`"
  },
  {
    question: "What is the correct way to define a named function?",
    options: ["def add(x, y) do x + y end", "function add(x, y) { return x + y }", "let add = fn(x,y)", "add = def(x, y) ->"],
    correctAnswer: "def add(x, y) do x + y end"
  },
  {
    question: "What is the default timeout for `GenServer.call`?",
    options: ["1000 ms", "5000 ms", "10000 ms", "No timeout"],
    correctAnswer: "5000 ms"
  } ,
  {
  question: "In Elixir, which module is commonly used to handle tasks asynchronously?",
  options: ["Agent", "Task", "Process", "GenServer"],
  correctAnswer: "Task"
},
    ]
  },
    lua:{
    easy:[
 {
    question: "Which keyword is used to declare a variable in Lua?",
    options: ["let", "var", "local", "declare"],
    correctAnswer: "local"
  },
  {
    question: "What is the file extension for Lua scripts?",
    options: [".lua", ".lu", ".ls", ".l"],
    correctAnswer: ".lua"
  },
  {
    question: "Which function is used to print output in Lua?",
    options: ["echo()", "console.log()", "printf()", "print()"],
    correctAnswer: "print()"
  },
  {
    question: "What is the default starting index of arrays in Lua?",
    options: ["0", "1", "-1", "Depends on system"],
    correctAnswer: "1"
  },
  {
    question: "Which symbol is used for comments in Lua?",
    options: ["//", "#", "--", "%%"],
    correctAnswer: "--"
  },
  {
    question: "How do you represent a string in Lua?",
    options: ["With quotes", "With brackets", "With commas", "With colons"],
    correctAnswer: "With quotes"
  },
  {
    question: "Which of these is a valid loop in Lua?",
    options: ["repeat", "do-while", "until", "loop"],
    correctAnswer: "repeat"
  },
  {
    question: "Which keyword is used to define a function in Lua?",
    options: ["func", "function", "def", "method"],
    correctAnswer: "function"
  },
  {
    question: "What is the value of `nil` in Lua?",
    options: ["0", "null", "undefined", "absence of value"],
    correctAnswer: "absence of value"
  },
  {
    question: "Which of these is a valid table in Lua?",
    options: ["{}", "[]", "()", "<>"],
    correctAnswer: "{}"
  },
  {
    question: "Which operator is used for string concatenation in Lua?",
    options: ["+", "&", "..", "::"],
    correctAnswer: ".."
  },
  {
    question: "How do you declare a global variable in Lua?",
    options: ["var x = 5", "global x = 5", "x = 5", "let x = 5"],
    correctAnswer: "x = 5"
  },
  {
    question: "Which function gets the type of a variable?",
    options: ["typeof()", "getType()", "type()", "typeof"],
    correctAnswer: "type()"
  },
  {
    question: "Which data type is used to store true or false in Lua?",
    options: ["boolean", "bit", "int", "logic"],
    correctAnswer: "boolean"
  },
  {
    question: "What keyword ends a function block in Lua?",
    options: ["end", "done", "finish", "stop"],
    correctAnswer: "end"
  },
  {
    question: "What is the result of `type(nil)` in Lua?",
    options: ["null", "nil", "none", "nil"],
    correctAnswer: "nil"
  },
  {
    question: "How do you write multi-line comments in Lua?",
    options: ["--[[ comment ]]", "// comment //", "/* comment */", "<!-- comment -->"],
    correctAnswer: "--[[ comment ]]"
  },
  {
    question: "Which operator checks for equality in Lua?",
    options: ["==", "=", "===", "!"],
    correctAnswer: "=="
  },
  {
    question: "Which function gets the length of a string or table?",
    options: ["len()", "#", "length()", "strlen()"],
    correctAnswer: "#"
  },
  {
    question: "Which function can load and run code from a string?",
    options: ["eval()", "run()", "exec()", "load()"],
    correctAnswer: "load()"
  },
  {
    question: "What is the result of `print(type(123))`?",
    options: ["'number'", "'string'", "'integer'", "'value'"],
    correctAnswer: "'number'"
  },
  {
    question: "Which operator is used for logical AND in Lua?",
    options: ["&&", "&", "and", "&&&"],
    correctAnswer: "and"
  },
  {
    question: "What does `pairs()` function iterate over?",
    options: ["arrays only", "strings only", "tables", "numbers"],
    correctAnswer: "tables"
  },
  {
    question: "What does `ipairs()` iterate over?",
    options: ["numeric indices", "string indices", "all keys", "global variables"],
    correctAnswer: "numeric indices"
  },
  {
    question: "Which one is a valid Lua boolean value?",
    options: ["yes", "no", "true", "enabled"],
    correctAnswer: "true"
  },
  {
    question: "How do you write a 'while' loop in Lua?",
    options: ["loop...end", "while...end", "repeat...while", "do...until"],
    correctAnswer: "while...end"
  },
  {
    question: "Which one is a control structure in Lua?",
    options: ["if", "check", "when", "loop"],
    correctAnswer: "if"
  },
  {
    question: "How do you define a table with key-value pairs?",
    options: ["{ key = value }", "[ key: value ]", "< key, value >", "{ key: value }"],
    correctAnswer: "{ key = value }"
  },
  {
    question: "How do you get user input in Lua?",
    options: ["input()", "get()", "io.read()", "scanf()"],
    correctAnswer: "io.read()"
  },
  {
    question: "What is the purpose of `require()`?",
    options: ["Import files", "Export files", "Print data", "Loop data"],
    correctAnswer: "Import files"
  },
  {
    question: "Which library provides file I/O in Lua?",
    options: ["os", "io", "file", "stream"],
    correctAnswer: "io"
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["return", "yield", "exit", "end"],
    correctAnswer: "return"
  },
  {
    question: "What does `os.time()` return?",
    options: ["Current time as string", "Seconds since epoch", "Formatted date", "Milliseconds"],
    correctAnswer: "Seconds since epoch"
  },
  {
    question: "How do you define an anonymous function in Lua?",
    options: ["function() end", "def() end", "() => {}", "lambda()"],
    correctAnswer: "function() end"
  },
  {
    question: "What will `type(true)` return?",
    options: ["bool", "boolean", "'boolean'", "'true'"],
    correctAnswer: "'boolean'"
  },
  {
    question: "Which function stops program execution?",
    options: ["stop()", "exit()", "os.exit()", "end()"],
    correctAnswer: "os.exit()"
  },
  {
    question: "What is the scope of a variable declared without `local`?",
    options: ["block", "local", "global", "function"],
    correctAnswer: "global"
  },
  {
    question: "Which function can convert a number to a string?",
    options: ["str()", "tostring()", "to_string()", "convert()"],
    correctAnswer: "tostring()"
  },
  {
    question: "What does `math.random()` do?",
    options: ["Generates random integer", "Returns random string", "Sorts numbers", "Shuffles arrays"],
    correctAnswer: "Generates random integer"
  },
  {
    question: "Which standard library handles date and time?",
    options: ["datetime", "os", "clock", "calendar"],
    correctAnswer: "os"
  },
  {
    question: "What is the result of `type({})`?",
    options: ["'object'", "'array'", "'table'", "'record'"],
    correctAnswer: "'table'"
  },
  {
    question: "Which of the following is not a Lua data type?",
    options: ["nil", "number", "float", "boolean"],
    correctAnswer: "float"
  },
  {
    question: "How do you write a numeric for loop?",
    options: ["for i=1,10 do", "loop i=1 to 10", "while i<10", "repeat until"],
    correctAnswer: "for i=1,10 do"
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["||", "or", "|", "||!"],
    correctAnswer: "or"
  },
  {
    question: "What will `type('Lua')` return?",
    options: ["string", "'string'", "'text'", "text"],
    correctAnswer: "'string'"
  },
  {
    question: "How do you access table values in Lua?",
    options: ["table.value", "table[value]", "table['key']", "value(table)"],
    correctAnswer: "table['key']"
  },
  {
    question: "What does `#table` return?",
    options: ["Size of table", "Keys of table", "Length of values", "Sum of elements"],
    correctAnswer: "Size of table"
  },
  {
    question: "Which of these functions checks a value's type?",
    options: ["typeof()", "type()", "class()", "kind()"],
    correctAnswer: "type()"
  },
  {
    question: "Which of the following represents a valid Lua string?",
    options: [`"Lua"`, `'Lua'`, `[[Lua]]`, `All of the above`],
    correctAnswer: `All of the above`
  },
  {
    question: "Lua was developed in which country?",
    options: ["USA", "Brazil", "India", "Japan"],
    correctAnswer: "Brazil"
  },
    ],
    advance:[
       {
    question: "What is the result of `type(type({}))` in Lua?",
    options: ["table", "nil", "string", "function"],
    correctAnswer: "string"
  },
  {
    question: "Which metamethod handles table indexing when a key doesn't exist?",
    options: ["__call", "__index", "__newindex", "__metatable"],
    correctAnswer: "__index"
  },
  {
    question: "Which of the following methods is used to sort a table?",
    options: ["table.reverse", "table.sort", "table.order", "table.arrange"],
    correctAnswer: "table.sort"
  },
  {
    question: "Which function in Lua loads a chunk as a function?",
    options: ["load", "require", "dofile", "getfenv"],
    correctAnswer: "load"
  },
  {
    question: "Which function returns the memory used in kilobytes?",
    options: ["collectgarbage('count')", "gcinfo()", "getmem()", "memory.count()"],
    correctAnswer: "collectgarbage('count')"
  },
  {
    question: "How do you protect a metatable from being accessed?",
    options: ["__lock", "__protect", "__metatable", "__readonly"],
    correctAnswer: "__metatable"
  },
  {
    question: "Which keyword is used to define a coroutine?",
    options: ["async", "yield", "coroutine", "thread"],
    correctAnswer: "coroutine"
  },
  {
    question: "What does `coroutine.resume` return on success?",
    options: ["false and error", "true and result(s)", "nil", "coroutine state"],
    correctAnswer: "true and result(s)"
  },
  {
    question: "Which Lua function is used to get a table's metatable?",
    options: ["getmeta()", "table.getmeta()", "getmetatable()", "metaof()"],
    correctAnswer: "getmetatable()"
  },
  {
    question: "What is the correct way to define a local function?",
    options: ["def foo()", "function foo()", "local function foo()", "func foo()"],
    correctAnswer: "local function foo()"
  },
  {
    question: "Which statement about tables in Lua is correct?",
    options: ["They can only store strings", "They are immutable", "They can act as arrays and dictionaries", "They can't have nil values"],
    correctAnswer: "They can act as arrays and dictionaries"
  },
  {
    question: "What will `print(10 ~= 10)` output?",
    options: ["true", "false", "nil", "error"],
    correctAnswer: "false"
  },
  {
    question: "What does the `...` syntax mean inside a function?",
    options: ["Global variable", "String concatenation", "Variable number of arguments", "Loop variable"],
    correctAnswer: "Variable number of arguments"
  },
  {
    question: "What does `require` return in Lua?",
    options: ["nil", "boolean", "module table", "function"],
    correctAnswer: "module table"
  },
  {
    question: "What is the correct way to create a new coroutine?",
    options: ["thread.create()", "coroutine.new()", "coroutine.create()", "spawn()"],
    correctAnswer: "coroutine.create()"
  },
  {
    question: "How do you yield execution in a coroutine?",
    options: ["pause()", "coroutine.stop()", "coroutine.yield()", "yield()"],
    correctAnswer: "coroutine.yield()"
  },
  {
    question: "What is the maximum number of upvalues a Lua function can have?",
    options: ["Up to 200", "No limit", "60", "Up to 255"],
    correctAnswer: "Up to 60"
  },
  {
    question: "Which Lua function can load a string and return it as a function?",
    options: ["string.load()", "eval()", "loadstring()", "exec()"],
    correctAnswer: "loadstring()"
  },
  {
    question: "What will `type(nil)` return?",
    options: ["null", "nil", "void", "nil type"],
    correctAnswer: "nil"
  },
  {
    question: "Which function runs a garbage collection cycle?",
    options: ["collectgarbage()", "gc.run()", "garbage()", "run_gc()"],
    correctAnswer: "collectgarbage()"
  },
  {
    question: "What happens when you try to index a nil value?",
    options: ["Returns nil", "Throws an error", "Creates the key", "Ignores silently"],
    correctAnswer: "Throws an error"
  },
  {
    question: "Which of these can be used to manipulate strings in Lua?",
    options: ["string.find", "string.match", "string.gsub", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which operator is used to concatenate strings in Lua?",
    options: ["+", "&", "++", ".."],
    correctAnswer: ".."
  },
  {
    question: "What does `#` operator return for a table?",
    options: ["Number of keys", "Length", "Index count", "Memory size"],
    correctAnswer: "Length"
  },
  {
    question: "How does Lua treat functions?",
    options: ["Only as procedures", "First-class values", "Immutable", "Primitive only"],
    correctAnswer: "First-class values"
  },
  {
    question: "Which data structure is native to Lua?",
    options: ["Array", "HashMap", "Table", "Set"],
    correctAnswer: "Table"
  },
  {
    question: "How many values can a Lua function return?",
    options: ["Only one", "Exactly two", "Multiple values", "None"],
    correctAnswer: "Multiple values"
  },
  {
    question: "What is the scope of a variable defined without `local`?",
    options: ["Function scope", "Global", "Block", "None"],
    correctAnswer: "Global"
  },
  {
    question: "Which of the following is not a valid Lua type?",
    options: ["nil", "string", "number", "char"],
    correctAnswer: "char"
  },
  {
    question: "Which function returns all arguments passed to a vararg function?",
    options: ["select", "args()", "unpack", "..."],
    correctAnswer: "select"
  },
  {
    question: "How can you check if a variable exists in a table?",
    options: ["isset()", "if table[key] then", "exists()", "keyof()"],
    correctAnswer: "if table[key] then"
  },
  {
    question: "Which of the following is used to define modules in Lua?",
    options: ["module()", "package()", "mod()", "unit()"],
    correctAnswer: "module()"
  },
  {
    question: "Which function is used to resume a coroutine?",
    options: ["coroutine.start()", "coroutine.resume()", "thread.resume()", "start()"],
    correctAnswer: "coroutine.resume()"
  },
  {
    question: "What is the main function of metatables?",
    options: ["Garbage collection", "Memory optimization", "Operator overloading", "Loop control"],
    correctAnswer: "Operator overloading"
  },
  {
    question: "What does `setmetatable(t, mt)` do?",
    options: ["Returns the metatable", "Assigns a metatable to `t`", "Clears a table", "Locks the table"],
    correctAnswer: "Assigns a metatable to `t`"
  },
  {
    question: "Which standard library provides string manipulation?",
    options: ["str", "strings", "string", "text"],
    correctAnswer: "string"
  },
  {
    question: "Which operator represents logical AND in Lua?",
    options: ["&&", "and", "&", "all"],
    correctAnswer: "and"
  },
  {
    question: "How do you handle errors in Lua?",
    options: ["try/catch", "error()", "throw()", "panic()"],
    correctAnswer: "error()"
  },
  {
    question: "What does `assert()` do in Lua?",
    options: ["Always throws", "Checks condition and errors if false", "Creates exceptions", "Validates variable types"],
    correctAnswer: "Checks condition and errors if false"
  },
  {
    question: "Which function compiles and runs code from a string?",
    options: ["eval()", "load()", "exec()", "run()"],
    correctAnswer: "load()"
  },
  {
    question: "Which Lua function stops the program?",
    options: ["end()", "exit()", "os.exit()", "terminate()"],
    correctAnswer: "os.exit()"
  },
  {
    question: "Which keyword breaks out of a loop?",
    options: ["stop", "break", "exit", "quit"],
    correctAnswer: "break"
  },
  {
    question: "What does `ipairs()` return?",
    options: ["All elements", "Only numeric keys in order", "Key-value pairs in random order", "None"],
    correctAnswer: "Only numeric keys in order"
  },
  {
    question: "What is the difference between `pairs()` and `ipairs()`?",
    options: ["No difference", "pairs is unordered, ipairs is ordered", "ipairs returns keys only", "pairs only works on arrays"],
    correctAnswer: "pairs is unordered, ipairs is ordered"
  },
  {
    question: "Which Lua version introduced the `goto` statement?",
    options: ["5.0", "5.1", "5.2", "5.3"],
    correctAnswer: "5.2"
  },
  {
    question: "How do you iterate over all key-value pairs in a table?",
    options: ["for k, v in table()", "for k, v in pairs(t)", "each(t)", "foreach(t)"],
    correctAnswer: "for k, v in pairs(t)"
  },
  {
    question: "Which of the following is a tail call?",
    options: ["Function calling itself recursively at end", "Any function call", "Loop condition", "Coroutine call"],
    correctAnswer: "Function calling itself recursively at end"
  },
  {
    question: "What is the output of `type({})`?",
    options: ["list", "object", "table", "array"],
    correctAnswer: "table"
  },
  {
    question: "What will `tonumber(\"abc\")` return?",
    options: ["NaN", "0", "nil", "error"],
    correctAnswer: "nil"
  },
   {
    question: "What is the result of `type(type({}))` in Lua?",
    options: ["table", "nil", "string", "function"],
    correctAnswer: "string"
  },
  {
    question: "Which metamethod handles table indexing when a key doesn't exist?",
    options: ["__call", "__index", "__newindex", "__metatable"],
    correctAnswer: "__index"
  },
  {
    question: "Which of the following methods is used to sort a table?",
    options: ["table.reverse", "table.sort", "table.order", "table.arrange"],
    correctAnswer: "table.sort"
  },
  {
    question: "Which function in Lua loads a chunk as a function?",
    options: ["load", "require", "dofile", "getfenv"],
    correctAnswer: "load"
  },
  {
    question: "Which function returns the memory used in kilobytes?",
    options: ["collectgarbage('count')", "gcinfo()", "getmem()", "memory.count()"],
    correctAnswer: "collectgarbage('count')"
  },
  {
    question: "How do you protect a metatable from being accessed?",
    options: ["__lock", "__protect", "__metatable", "__readonly"],
    correctAnswer: "__metatable"
  },
  {
    question: "Which keyword is used to define a coroutine?",
    options: ["async", "yield", "coroutine", "thread"],
    correctAnswer: "coroutine"
  },
  {
    question: "What does `coroutine.resume` return on success?",
    options: ["false and error", "true and result(s)", "nil", "coroutine state"],
    correctAnswer: "true and result(s)"
  },
  {
    question: "Which Lua function is used to get a table's metatable?",
    options: ["getmeta()", "table.getmeta()", "getmetatable()", "metaof()"],
    correctAnswer: "getmetatable()"
  },
  {
    question: "What is the correct way to define a local function?",
    options: ["def foo()", "function foo()", "local function foo()", "func foo()"],
    correctAnswer: "local function foo()"
  },
  {
    question: "Which statement about tables in Lua is correct?",
    options: ["They can only store strings", "They are immutable", "They can act as arrays and dictionaries", "They can't have nil values"],
    correctAnswer: "They can act as arrays and dictionaries"
  },
  {
    question: "What will `print(10 ~= 10)` output?",
    options: ["true", "false", "nil", "error"],
    correctAnswer: "false"
  },
  {
    question: "What does the `...` syntax mean inside a function?",
    options: ["Global variable", "String concatenation", "Variable number of arguments", "Loop variable"],
    correctAnswer: "Variable number of arguments"
  },
  {
    question: "What does `require` return in Lua?",
    options: ["nil", "boolean", "module table", "function"],
    correctAnswer: "module table"
  },
  {
    question: "What is the correct way to create a new coroutine?",
    options: ["thread.create()", "coroutine.new()", "coroutine.create()", "spawn()"],
    correctAnswer: "coroutine.create()"
  },
  {
    question: "How do you yield execution in a coroutine?",
    options: ["pause()", "coroutine.stop()", "coroutine.yield()", "yield()"],
    correctAnswer: "coroutine.yield()"
  },
  {
    question: "What is the maximum number of upvalues a Lua function can have?",
    options: ["Up to 200", "No limit", "60", "Up to 255"],
    correctAnswer: "Up to 60"
  },
  {
    question: "Which Lua function can load a string and return it as a function?",
    options: ["string.load()", "eval()", "loadstring()", "exec()"],
    correctAnswer: "loadstring()"
  },
  {
    question: "What will `type(nil)` return?",
    options: ["null", "nil", "void", "nil type"],
    correctAnswer: "nil"
  },
  {
    question: "Which function runs a garbage collection cycle?",
    options: ["collectgarbage()", "gc.run()", "garbage()", "run_gc()"],
    correctAnswer: "collectgarbage()"
  },
  {
    question: "What happens when you try to index a nil value?",
    options: ["Returns nil", "Throws an error", "Creates the key", "Ignores silently"],
    correctAnswer: "Throws an error"
  },
  {
    question: "Which of these can be used to manipulate strings in Lua?",
    options: ["string.find", "string.match", "string.gsub", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which operator is used to concatenate strings in Lua?",
    options: ["+", "&", "++", ".."],
    correctAnswer: ".."
  },
  {
    question: "What does `#` operator return for a table?",
    options: ["Number of keys", "Length", "Index count", "Memory size"],
    correctAnswer: "Length"
  },
  {
    question: "How does Lua treat functions?",
    options: ["Only as procedures", "First-class values", "Immutable", "Primitive only"],
    correctAnswer: "First-class values"
  },
  {
    question: "Which data structure is native to Lua?",
    options: ["Array", "HashMap", "Table", "Set"],
    correctAnswer: "Table"
  },
  {
    question: "How many values can a Lua function return?",
    options: ["Only one", "Exactly two", "Multiple values", "None"],
    correctAnswer: "Multiple values"
  },
  {
    question: "What is the scope of a variable defined without `local`?",
    options: ["Function scope", "Global", "Block", "None"],
    correctAnswer: "Global"
  },
  {
    question: "Which of the following is not a valid Lua type?",
    options: ["nil", "string", "number", "char"],
    correctAnswer: "char"
  },
  {
    question: "Which function returns all arguments passed to a vararg function?",
    options: ["select", "args()", "unpack", "..."],
    correctAnswer: "select"
  },
  {
    question: "How can you check if a variable exists in a table?",
    options: ["isset()", "if table[key] then", "exists()", "keyof()"],
    correctAnswer: "if table[key] then"
  },
  {
    question: "Which of the following is used to define modules in Lua?",
    options: ["module()", "package()", "mod()", "unit()"],
    correctAnswer: "module()"
  },
  {
    question: "Which function is used to resume a coroutine?",
    options: ["coroutine.start()", "coroutine.resume()", "thread.resume()", "start()"],
    correctAnswer: "coroutine.resume()"
  },
  {
    question: "What is the main function of metatables?",
    options: ["Garbage collection", "Memory optimization", "Operator overloading", "Loop control"],
    correctAnswer: "Operator overloading"
  },
  {
    question: "What does `setmetatable(t, mt)` do?",
    options: ["Returns the metatable", "Assigns a metatable to `t`", "Clears a table", "Locks the table"],
    correctAnswer: "Assigns a metatable to `t`"
  },
  {
    question: "Which standard library provides string manipulation?",
    options: ["str", "strings", "string", "text"],
    correctAnswer: "string"
  },
  {
    question: "Which operator represents logical AND in Lua?",
    options: ["&&", "and", "&", "all"],
    correctAnswer: "and"
  },
  {
    question: "How do you handle errors in Lua?",
    options: ["try/catch", "error()", "throw()", "panic()"],
    correctAnswer: "error()"
  },
  {
    question: "What does `assert()` do in Lua?",
    options: ["Always throws", "Checks condition and errors if false", "Creates exceptions", "Validates variable types"],
    correctAnswer: "Checks condition and errors if false"
  },
  {
    question: "Which function compiles and runs code from a string?",
    options: ["eval()", "load()", "exec()", "run()"],
    correctAnswer: "load()"
  },
  {
    question: "Which Lua function stops the program?",
    options: ["end()", "exit()", "os.exit()", "terminate()"],
    correctAnswer: "os.exit()"
  },
  {
    question: "Which keyword breaks out of a loop?",
    options: ["stop", "break", "exit", "quit"],
    correctAnswer: "break"
  },
  {
    question: "What does `ipairs()` return?",
    options: ["All elements", "Only numeric keys in order", "Key-value pairs in random order", "None"],
    correctAnswer: "Only numeric keys in order"
  },
  {
    question: "What is the difference between `pairs()` and `ipairs()`?",
    options: ["No difference", "pairs is unordered, ipairs is ordered", "ipairs returns keys only", "pairs only works on arrays"],
    correctAnswer: "pairs is unordered, ipairs is ordered"
  },
  {
    question: "Which Lua version introduced the `goto` statement?",
    options: ["5.0", "5.1", "5.2", "5.3"],
    correctAnswer: "5.2"
  },
  {
    question: "How do you iterate over all key-value pairs in a table?",
    options: ["for k, v in table()", "for k, v in pairs(t)", "each(t)", "foreach(t)"],
    correctAnswer: "for k, v in pairs(t)"
  },
  {
    question: "Which of the following is a tail call?",
    options: ["Function calling itself recursively at end", "Any function call", "Loop condition", "Coroutine call"],
    correctAnswer: "Function calling itself recursively at end"
  },
  {
    question: "What is the output of `type({})`?",
    options: ["list", "object", "table", "array"],
    correctAnswer: "table"
  },
  {
    question: "What will `tonumber(\"abc\")` return?",
    options: ["NaN", "0", "nil", "error"],
    correctAnswer: "nil"
  },
    ]
  },
    "c++":{
    easy:[
{
        question: "What is the extension of a C++ source file?",
        options: [".c", ".cpp", ".java", ".txt"],
        correctAnswer: ".cpp"
      },
      {
        question: "Which of the following is a valid C++ data type?",
        options: ["integer", "floaty", "int", "decimal"],
        correctAnswer: "int"
      },
      {
        question: "Which operator is used to access members of a structure using a pointer?",
        options: [".", "->", "*", "&"],
        correctAnswer: "->"
      },
      {
        question: "Which symbol is used for comments in C++?",
        options: ["#", "//", "**", "<!-- -->"],
        correctAnswer: "//"
      },
      {
        question: "What is the correct way to declare a variable in C++?",
        options: ["int x;", "x int;", "declare x int;", "x = int;"],
        correctAnswer: "int x;"
      },
      {
        question: "What is the default value of a local int variable?",
        options: ["0", "1", "Garbage value", "NULL"],
        correctAnswer: "Garbage value"
      },
      {
        question: "Which keyword is used to create an object?",
        options: ["create", "new", "malloc", "object"],
        correctAnswer: "new"
      },
      {
        question: "Which loop is guaranteed to run at least once?",
        options: ["for", "while", "do-while", "None"],
        correctAnswer: "do-while"
      },
      {
        question: "Which of the following is used for dynamic memory allocation?",
        options: ["malloc", "calloc", "new", "All of the above"],
        correctAnswer: "new"
      },
      {
        question: "Which header file is used for input/output operations?",
        options: ["iostream", "stdlib.h", "stdio.h", "conio.h"],
        correctAnswer: "iostream"
      },
      {
        question: "Which operator is used to get the address of a variable?",
        options: ["*", "&", "@", "#"],
        correctAnswer: "&"
      },
      {
        question: "Which keyword is used to define a class in C++?",
        options: ["object", "class", "define", "type"],
        correctAnswer: "class"
      },
      {
        question: "What is the scope resolution operator?",
        options: ["::", ":", ".", "->"],
        correctAnswer: "::"
      },
      {
        question: "Which keyword is used to inherit a class?",
        options: ["extends", "inherits", "public", "base"],
        correctAnswer: "public"
      },
      {
        question: "Which of the following is not a valid access specifier in C++?",
        options: ["public", "private", "protected", "sealed"],
        correctAnswer: "sealed"
      },
      {
        question: "What is the size of int on most 32-bit systems?",
        options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
        correctAnswer: "4 bytes"
      },
      {
        question: "Which of these is a loop in C++?",
        options: ["for", "repeat", "foreach", "loop"],
        correctAnswer: "for"
      },
      {
        question: "Which keyword is used to return a value from a function?",
        options: ["break", "return", "exit", "goto"],
        correctAnswer: "return"
      },
      {
        question: "Which function is the entry point in C++?",
        options: ["start()", "init()", "main()", "run()"],
        correctAnswer: "main()"
      },
      {
        question: "Which keyword is used to create a constant?",
        options: ["define", "constant", "const", "final"],
        correctAnswer: "const"
      },
      {
        question: "Which of the following can be overloaded?",
        options: ["functions", "operators", "constructors", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "Which of the following is not a type of constructor?",
        options: ["Default", "Parameterized", "Copy", "Virtual"],
        correctAnswer: "Virtual"
      },
      {
        question: "Which of the following is used to destroy objects in C++?",
        options: ["free()", "delete", "destroy", "None"],
        correctAnswer: "delete"
      },
      {
        question: "Which data type is used to store true or false?",
        options: ["bool", "boolean", "int", "bit"],
        correctAnswer: "bool"
      },
      {
        question: "Which operator is used for pointer dereferencing?",
        options: ["&", "*", "->", "::"],
        correctAnswer: "*"
      },
      {
        question: "Which keyword is used for function overloading?",
        options: ["virtual", "inline", "None", "override"],
        correctAnswer: "None"
      },
      {
        question: "Which operator is used for multiplication?",
        options: ["x", "*", "%", "#"],
        correctAnswer: "*"
      },
      {
        question: "Which header file defines std::string?",
        options: ["string", "cstring", "stdlib", "iostream"],
        correctAnswer: "string"
      },
      {
        question: "Which one is a conditional operator?",
        options: ["?", ":", "&&", "="],
        correctAnswer: "?"
      },
      {
        question: "How do you declare an array of 10 integers?",
        options: ["int[10] a;", "int a[10];", "array int a[10];", "int array a;"],
        correctAnswer: "int a[10];"
      },
      {
        question: "What is the correct way to declare a function?",
        options: ["func() int;", "int func();", "function int func();", "int = func();"],
        correctAnswer: "int func();"
      },
      {
        question: "Which data type is used to represent decimal numbers?",
        options: ["float", "int", "char", "bool"],
        correctAnswer: "float"
      },
      {
        question: "Which keyword prevents inheritance?",
        options: ["sealed", "static", "final", "None of the above"],
        correctAnswer: "final"
      },
      {
        question: "Which concept allows the same function to behave differently?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        correctAnswer: "Polymorphism"
      },
      {
        question: "Which function is used to allocate memory dynamically?",
        options: ["alloc()", "malloc()", "new", "calloc()"],
        correctAnswer: "new"
      },
      {
        question: "What is the value of ‘sizeof(char)’?",
        options: ["2", "4", "1", "8"],
        correctAnswer: "1"
      },
      {
        question: "Which of these is a relational operator?",
        options: ["&&", "==", "+", "&"],
        correctAnswer: "=="
      },
      {
        question: "Which keyword is used to refer to the current object?",
        options: ["self", "this", "obj", "me"],
        correctAnswer: "this"
      },
      {
        question: "Which type is used to represent characters?",
        options: ["char", "string", "int", "bool"],
        correctAnswer: "char"
      },
      {
        question: "What does the 'break' statement do?",
        options: ["Exits a loop", "Skips a loop", "Repeats a loop", "None"],
        correctAnswer: "Exits a loop"
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["try", "handle", "catch", "Both try and catch"],
        correctAnswer: "Both try and catch"
      },
      {
        question: "Which symbol is used for the modulus operator?",
        options: ["%", "&", "#", "*"],
        correctAnswer: "%"
      },
      {
        question: "Which keyword is used to inherit privately?",
        options: ["private", "protected", "inherits", "None"],
        correctAnswer: "private"
      },
      {
        question: "Which keyword is used to define a namespace?",
        options: ["package", "using", "namespace", "include"],
        correctAnswer: "namespace"
      },
      {
        question: "What is the output of: cout << 5 + 3?",
        options: ["53", "8", "35", "Error"],
        correctAnswer: "8"
      },
      {
        question: "Which one is a logical operator?",
        options: ["+", "-", "&&", "="],
        correctAnswer: "&&"
      },
      {
        question: "What is a class in C++?",
        options: ["Data type", "Object", "Blueprint for objects", "Function"],
        correctAnswer: "Blueprint for objects"
      },
      {
        question: "Which one is a unary operator?",
        options: ["+", "--", "==", "*"],
        correctAnswer: "--"
      },
      {
        question: "What is used to define a block of code?",
        options: ["()", "{}", "[]", "<>"],
        correctAnswer: "{}"
      },
      {
  question: "Which symbol is used for single-line comments in C++?",
  options: ["//", "/*", "#", "--"],
  correctAnswer: "//"
},
    ],
    advance:[
      {
    question: "What is the primary purpose of a virtual destructor in C++?",
    options: [
      "To allow overloading",
      "To enable memory allocation",
      "To ensure proper cleanup in inheritance",
      "To prevent object slicing"
    ],
    correctAnswer: "To ensure proper cleanup in inheritance"
  },
  {
    question: "What does the `explicit` keyword do in C++?",
    options: [
      "Allows implicit conversions",
      "Prevents implicit conversions",
      "Declares static variables",
      "Declares global constants"
    ],
    correctAnswer: "Prevents implicit conversions"
  },
  {
    question: "Which feature allows functions to operate on different data types?",
    options: ["Templates", "Pointers", "Namespaces", "Macros"],
    correctAnswer: "Templates"
  },
  {
    question: "What is the size of a `nullptr` in C++?",
    options: ["0 bytes", "1 byte", "2 bytes", "Depends on the architecture"],
    correctAnswer: "Depends on the architecture"
  },
  {
    question: "What does RAII stand for in C++?",
    options: [
      "Resource Allocation is Immediate",
      "Resource Acquisition Is Initialization",
      "Return After Initialization Invocation",
      "Recursive Allocation in Inheritance"
    ],
    correctAnswer: "Resource Acquisition Is Initialization"
  },
  {
    question: "Which C++ construct helps in resolving name conflicts?",
    options: ["Namespace", "Macro", "Static", "Friend"],
    correctAnswer: "Namespace"
  },
  {
    question: "Which operator cannot be overloaded in C++?",
    options: ["+", "=", "::", "[]"],
    correctAnswer: "::"
  },
  {
    question: "Which smart pointer automatically deletes the object it holds when it goes out of scope?",
    options: ["shared_ptr", "unique_ptr", "auto_ptr", "raw pointer"],
    correctAnswer: "unique_ptr"
  },
  {
    question: "What is the output of `sizeof(char)` in C++?",
    options: ["0", "1", "2", "Depends on compiler"],
    correctAnswer: "1"
  },
  {
    question: "Which keyword is used to define a class template?",
    options: ["template", "typename", "class", "def"],
    correctAnswer: "template"
  },

  {
    question: "What is object slicing in C++?",
    options: [
      "Cutting memory blocks",
      "Losing derived part of an object when assigned to base",
      "Casting to a smaller type",
      "Pointer arithmetic error"
    ],
    correctAnswer: "Losing derived part of an object when assigned to base"
  },
  {
    question: "Which C++ operator is used for dereferencing a pointer?",
    options: ["*", "&", "->", "."],
    correctAnswer: "*"
  },
  {
    question: "What does the keyword `mutable` allow in C++?",
    options: [
      "Changing const objects",
      "Declaring static variables",
      "Overloading operators",
      "Multiple inheritance"
    ],
    correctAnswer: "Changing const objects"
  },
  {
    question: "Which method is automatically called when an object is destroyed?",
    options: ["Constructor", "Deconstructor", "Destructor", "Cleaner"],
    correctAnswer: "Destructor"
  },
  {
    question: "What does the `typeid` operator do?",
    options: [
      "Returns a new type",
      "Compares variable types",
      "Returns type information",
      "Changes type at runtime"
    ],
    correctAnswer: "Returns type information"
  },
  {
    question: "What is the output of `sizeof(int*)` on a 64-bit system?",
    options: ["2", "4", "8", "16"],
    correctAnswer: "8"
  },
  {
    question: "Which of the following best describes `std::move`?",
    options: [
      "Performs a deep copy",
      "Transfers ownership of resources",
      "Deletes an object",
      "Prevents access to moved object"
    ],
    correctAnswer: "Transfers ownership of resources"
  },
  {
    question: "What is the purpose of `noexcept` in C++?",
    options: [
      "Prevents segmentation fault",
      "Ensures no exceptions are thrown",
      "Allows global access",
      "Makes function static"
    ],
    correctAnswer: "Ensures no exceptions are thrown"
  },
  {
    question: "Which keyword is used to inherit a class publicly in C++?",
    options: ["inherit", "extends", "public", "super"],
    correctAnswer: "public"
  },
  {
    question: "What is the use of the `friend` keyword in C++?",
    options: [
      "For multiple inheritance",
      "To allow access to private members",
      "To link libraries",
      "To declare a new class"
    ],
    correctAnswer: "To allow access to private members"
  },

  {
    question: "Which container in STL stores elements in key-value pairs?",
    options: ["vector", "set", "map", "queue"],
    correctAnswer: "map"
  },
  {
    question: "What is the difference between `delete` and `delete[]`?",
    options: [
      "`delete` deallocates objects; `delete[]` deallocates arrays",
      "`delete` clears pointers",
      "`delete[]` is faster",
      "No difference"
    ],
    correctAnswer: "`delete` deallocates objects; `delete[]` deallocates arrays"
  },
  {
    question: "What is a lambda in C++?",
    options: [
      "A macro",
      "A lightweight function object",
      "A template class",
      "A data type"
    ],
    correctAnswer: "A lightweight function object"
  },
  {
    question: "Which of these is a correct syntax for a range-based for loop?",
    options: [
      "for (auto i : container)",
      "for (int i=0; i<container; i++)",
      "foreach (i in container)",
      "for in container"
    ],
    correctAnswer: "for (auto i : container)"
  },
  {
    question: "What is a segmentation fault?",
    options: [
      "Syntax error",
      "Illegal access of memory",
      "Overloaded function call",
      "Namespace conflict"
    ],
    correctAnswer: "Illegal access of memory"
  },
  {
    question: "What is a pure virtual function?",
    options: [
      "A function with `static` keyword",
      "A function defined in base class only",
      "A function with `= 0` in base class",
      "A friend function"
    ],
    correctAnswer: "A function with `= 0` in base class"
  },
  {
    question: "Which class in C++ has no object and only static members?",
    options: ["Abstract class", "Utility class", "Static class", "Singleton"],
    correctAnswer: "Static class"
  },
  {
    question: "What happens if a constructor throws an exception?",
    options: [
      "Object is partially created",
      "Destructor is called",
      "Object creation fails",
      "Stack overflows"
    ],
    correctAnswer: "Object creation fails"
  },
  {
    question: "Which smart pointer allows multiple owners?",
    options: ["unique_ptr", "shared_ptr", "raw pointer", "weak_ptr"],
    correctAnswer: "shared_ptr"
  },
  {
    question: "What is the purpose of `std::tie`?",
    options: [
      "To create tuples",
      "To unpack tuples",
      "To allocate memory",
      "To manage threads"
    ],
    correctAnswer: "To unpack tuples"
  },

  {
    question: "Which keyword prevents a function from being overridden?",
    options: ["final", "override", "const", "static"],
    correctAnswer: "final"
  },
  {
    question: "Which header provides functionality for multi-threading in C++11?",
    options: ["<thread>", "<mutex>", "<iostream>", "<functional>"],
    correctAnswer: "<thread>"
  },
  {
    question: "What does `emplace_back()` do differently than `push_back()`?",
    options: [
      "It pushes two elements",
      "It constructs in-place without copying",
      "It reverses the array",
      "It clears the container first"
    ],
    correctAnswer: "It constructs in-place without copying"
  },
  {
    question: "Which C++ feature supports runtime polymorphism?",
    options: ["Function overloading", "Inheritance", "Virtual functions", "Macros"],
    correctAnswer: "Virtual functions"
  },
  {
    question: "What happens when you access an uninitialized pointer?",
    options: [
      "Compiler error",
      "Segmentation fault",
      "It auto initializes",
      "Returns 0"
    ],
    correctAnswer: "Segmentation fault"
  },
  {
    question: "Which keyword is used to prevent further inheritance?",
    options: ["final", "sealed", "private", "virtual"],
    correctAnswer: "final"
  },
  {
    question: "Which of these manages synchronization between threads?",
    options: ["<chrono>", "<thread>", "<atomic>", "<mutex>"],
    correctAnswer: "<mutex>"
  },
  {
    question: "What is the output of `typeid(42).name()`?",
    options: ["int", "42", "Depends on compiler", "Integer"],
    correctAnswer: "Depends on compiler"
  },
  {
    question: "Which C++ feature allows multiple constructors with different parameters?",
    options: ["Constructor chaining", "Overloading", "Templates", "Virtuals"],
    correctAnswer: "Overloading"
  },
  {
    question: "What is the return type of `main()` in C++?",
    options: ["void", "int", "char", "float"],
    correctAnswer: "int"
  },
  {
    question: "Which operator is overloaded for stream output?",
    options: ["<<", ">>", "==", "->"],
    correctAnswer: "<<"
  },
  {
    question: "Which of these is a move constructor signature?",
    options: [
      "ClassName(const ClassName& obj)",
      "ClassName(ClassName&& obj)",
      "ClassName(ClassName obj)",
      "ClassName(&obj)"
    ],
    correctAnswer: "ClassName(ClassName&& obj)"
  },
  {
    question: "Which keyword ensures a function is not inlined?",
    options: ["volatile", "noinline", "static", "inline"],
    correctAnswer: "noinline"
  },
  {
    question: "What does STL stand for?",
    options: [
      "Standard Type Library",
      "Structured Template Library",
      "Standard Template Library",
      "System Template Link"
    ],
    correctAnswer: "Standard Template Library"
  },
  {
    question: "Which iterator allows both forward and backward traversal?",
    options: ["Random", "Forward", "Bidirectional", "Input"],
    correctAnswer: "Bidirectional"
  },
  {
    question: "What is the use of `std::function`?",
    options: [
      "To allocate memory",
      "To wrap callable objects",
      "To define macros",
      "To serialize data"
    ],
    correctAnswer: "To wrap callable objects"
  },
  {
    question: "Which function allocates memory without initializing it?",
    options: ["malloc()", "calloc()", "new", "delete"],
    correctAnswer: "malloc()"
  },
  {
    question: "Which of the following is a dangling pointer?",
    options: [
      "A pointer to a deleted object",
      "A pointer to null",
      "A pointer to main()",
      "A pointer to a static variable"
    ],
    correctAnswer: "A pointer to a deleted object"
  },
  {
    question: "Which of these uses lazy evaluation?",
    options: ["for loop", "while loop", "if-else", "short-circuit operators"],
    correctAnswer: "short-circuit operators"
  },
  {
    question: "What is the primary purpose of a virtual destructor in C++?",
    options: [
      "To allow overloading",
      "To enable memory allocation",
      "To ensure proper cleanup in inheritance",
      "To prevent object slicing"
    ],
    correctAnswer: "To ensure proper cleanup in inheritance"
  },
  {
    question: "What does the `explicit` keyword do in C++?",
    options: [
      "Allows implicit conversions",
      "Prevents implicit conversions",
      "Declares static variables",
      "Declares global constants"
    ],
    correctAnswer: "Prevents implicit conversions"
  },
  {
    question: "Which feature allows functions to operate on different data types?",
    options: ["Templates", "Pointers", "Namespaces", "Macros"],
    correctAnswer: "Templates"
  },
  {
    question: "What is the size of a `nullptr` in C++?",
    options: ["0 bytes", "1 byte", "2 bytes", "Depends on the architecture"],
    correctAnswer: "Depends on the architecture"
  },
  {
    question: "What does RAII stand for in C++?",
    options: [
      "Resource Allocation is Immediate",
      "Resource Acquisition Is Initialization",
      "Return After Initialization Invocation",
      "Recursive Allocation in Inheritance"
    ],
    correctAnswer: "Resource Acquisition Is Initialization"
  },
  {
    question: "Which C++ construct helps in resolving name conflicts?",
    options: ["Namespace", "Macro", "Static", "Friend"],
    correctAnswer: "Namespace"
  },
  {
    question: "Which operator cannot be overloaded in C++?",
    options: ["+", "=", "::", "[]"],
    correctAnswer: "::"
  },
  {
    question: "Which smart pointer automatically deletes the object it holds when it goes out of scope?",
    options: ["shared_ptr", "unique_ptr", "auto_ptr", "raw pointer"],
    correctAnswer: "unique_ptr"
  },
  {
    question: "What is the output of `sizeof(char)` in C++?",
    options: ["0", "1", "2", "Depends on compiler"],
    correctAnswer: "1"
  },
  {
    question: "Which keyword is used to define a class template?",
    options: ["template", "typename", "class", "def"],
    correctAnswer: "template"
  },

  {
    question: "What is object slicing in C++?",
    options: [
      "Cutting memory blocks",
      "Losing derived part of an object when assigned to base",
      "Casting to a smaller type",
      "Pointer arithmetic error"
    ],
    correctAnswer: "Losing derived part of an object when assigned to base"
  },
  {
    question: "Which C++ operator is used for dereferencing a pointer?",
    options: ["*", "&", "->", "."],
    correctAnswer: "*"
  },
  {
    question: "What does the keyword `mutable` allow in C++?",
    options: [
      "Changing const objects",
      "Declaring static variables",
      "Overloading operators",
      "Multiple inheritance"
    ],
    correctAnswer: "Changing const objects"
  },
  {
    question: "Which method is automatically called when an object is destroyed?",
    options: ["Constructor", "Deconstructor", "Destructor", "Cleaner"],
    correctAnswer: "Destructor"
  },
  {
    question: "What does the `typeid` operator do?",
    options: [
      "Returns a new type",
      "Compares variable types",
      "Returns type information",
      "Changes type at runtime"
    ],
    correctAnswer: "Returns type information"
  },
  {
    question: "What is the output of `sizeof(int*)` on a 64-bit system?",
    options: ["2", "4", "8", "16"],
    correctAnswer: "8"
  },
  {
    question: "Which of the following best describes `std::move`?",
    options: [
      "Performs a deep copy",
      "Transfers ownership of resources",
      "Deletes an object",
      "Prevents access to moved object"
    ],
    correctAnswer: "Transfers ownership of resources"
  },
  {
    question: "What is the purpose of `noexcept` in C++?",
    options: [
      "Prevents segmentation fault",
      "Ensures no exceptions are thrown",
      "Allows global access",
      "Makes function static"
    ],
    correctAnswer: "Ensures no exceptions are thrown"
  },
  {
    question: "Which keyword is used to inherit a class publicly in C++?",
    options: ["inherit", "extends", "public", "super"],
    correctAnswer: "public"
  },
  {
    question: "What is the use of the `friend` keyword in C++?",
    options: [
      "For multiple inheritance",
      "To allow access to private members",
      "To link libraries",
      "To declare a new class"
    ],
    correctAnswer: "To allow access to private members"
  },

  {
    question: "Which container in STL stores elements in key-value pairs?",
    options: ["vector", "set", "map", "queue"],
    correctAnswer: "map"
  },
  {
    question: "What is the difference between `delete` and `delete[]`?",
    options: [
      "`delete` deallocates objects; `delete[]` deallocates arrays",
      "`delete` clears pointers",
      "`delete[]` is faster",
      "No difference"
    ],
    correctAnswer: "`delete` deallocates objects; `delete[]` deallocates arrays"
  },
  {
    question: "What is a lambda in C++?",
    options: [
      "A macro",
      "A lightweight function object",
      "A template class",
      "A data type"
    ],
    correctAnswer: "A lightweight function object"
  },
  {
    question: "Which of these is a correct syntax for a range-based for loop?",
    options: [
      "for (auto i : container)",
      "for (int i=0; i<container; i++)",
      "foreach (i in container)",
      "for in container"
    ],
    correctAnswer: "for (auto i : container)"
  },
  {
    question: "What is a segmentation fault?",
    options: [
      "Syntax error",
      "Illegal access of memory",
      "Overloaded function call",
      "Namespace conflict"
    ],
    correctAnswer: "Illegal access of memory"
  },
  {
    question: "What is a pure virtual function?",
    options: [
      "A function with `static` keyword",
      "A function defined in base class only",
      "A function with `= 0` in base class",
      "A friend function"
    ],
    correctAnswer: "A function with `= 0` in base class"
  },
  {
    question: "Which class in C++ has no object and only static members?",
    options: ["Abstract class", "Utility class", "Static class", "Singleton"],
    correctAnswer: "Static class"
  },
  {
    question: "What happens if a constructor throws an exception?",
    options: [
      "Object is partially created",
      "Destructor is called",
      "Object creation fails",
      "Stack overflows"
    ],
    correctAnswer: "Object creation fails"
  },
  {
    question: "Which smart pointer allows multiple owners?",
    options: ["unique_ptr", "shared_ptr", "raw pointer", "weak_ptr"],
    correctAnswer: "shared_ptr"
  },
  {
    question: "What is the purpose of `std::tie`?",
    options: [
      "To create tuples",
      "To unpack tuples",
      "To allocate memory",
      "To manage threads"
    ],
    correctAnswer: "To unpack tuples"
  },

  {
    question: "Which keyword prevents a function from being overridden?",
    options: ["final", "override", "const", "static"],
    correctAnswer: "final"
  },
  {
    question: "Which header provides functionality for multi-threading in C++11?",
    options: ["<thread>", "<mutex>", "<iostream>", "<functional>"],
    correctAnswer: "<thread>"
  },
  {
    question: "What does `emplace_back()` do differently than `push_back()`?",
    options: [
      "It pushes two elements",
      "It constructs in-place without copying",
      "It reverses the array",
      "It clears the container first"
    ],
    correctAnswer: "It constructs in-place without copying"
  },
  {
    question: "Which C++ feature supports runtime polymorphism?",
    options: ["Function overloading", "Inheritance", "Virtual functions", "Macros"],
    correctAnswer: "Virtual functions"
  },
  {
    question: "What happens when you access an uninitialized pointer?",
    options: [
      "Compiler error",
      "Segmentation fault",
      "It auto initializes",
      "Returns 0"
    ],
    correctAnswer: "Segmentation fault"
  },
  {
    question: "Which keyword is used to prevent further inheritance?",
    options: ["final", "sealed", "private", "virtual"],
    correctAnswer: "final"
  },
  {
    question: "Which of these manages synchronization between threads?",
    options: ["<chrono>", "<thread>", "<atomic>", "<mutex>"],
    correctAnswer: "<mutex>"
  },
  {
    question: "What is the output of `typeid(42).name()`?",
    options: ["int", "42", "Depends on compiler", "Integer"],
    correctAnswer: "Depends on compiler"
  },
  {
    question: "Which C++ feature allows multiple constructors with different parameters?",
    options: ["Constructor chaining", "Overloading", "Templates", "Virtuals"],
    correctAnswer: "Overloading"
  },
  {
    question: "What is the return type of `main()` in C++?",
    options: ["void", "int", "char", "float"],
    correctAnswer: "int"
  },
  {
    question: "Which operator is overloaded for stream output?",
    options: ["<<", ">>", "==", "->"],
    correctAnswer: "<<"
  },
  {
    question: "Which of these is a move constructor signature?",
    options: [
      "ClassName(const ClassName& obj)",
      "ClassName(ClassName&& obj)",
      "ClassName(ClassName obj)",
      "ClassName(&obj)"
    ],
    correctAnswer: "ClassName(ClassName&& obj)"
  },
  {
    question: "Which keyword ensures a function is not inlined?",
    options: ["volatile", "noinline", "static", "inline"],
    correctAnswer: "noinline"
  },
  {
    question: "What does STL stand for?",
    options: [
      "Standard Type Library",
      "Structured Template Library",
      "Standard Template Library",
      "System Template Link"
    ],
    correctAnswer: "Standard Template Library"
  },
  {
    question: "Which iterator allows both forward and backward traversal?",
    options: ["Random", "Forward", "Bidirectional", "Input"],
    correctAnswer: "Bidirectional"
  },
  {
    question: "What is the use of `std::function`?",
    options: [
      "To allocate memory",
      "To wrap callable objects",
      "To define macros",
      "To serialize data"
    ],
    correctAnswer: "To wrap callable objects"
  },
  {
    question: "Which function allocates memory without initializing it?",
    options: ["malloc()", "calloc()", "new", "delete"],
    correctAnswer: "malloc()"
  },
  {
    question: "Which of the following is a dangling pointer?",
    options: [
      "A pointer to a deleted object",
      "A pointer to null",
      "A pointer to main()",
      "A pointer to a static variable"
    ],
    correctAnswer: "A pointer to a deleted object"
  },
  {
    question: "Which of these uses lazy evaluation?",
    options: ["for loop", "while loop", "if-else", "short-circuit operators"],
    correctAnswer: "short-circuit operators"
  },
    ]
  },
    "c#":{
    easy:[
{
      question: "What is the correct file extension for C# files?",
      options: [".cs", ".csharp", ".c#", ".cpp"],
      correctAnswer: ".cs"
    },
    {
      question: "Which keyword is used to define a class in C#?",
      options: ["class", "Class", "define", "struct"],
      correctAnswer: "class"
    },
    {
      question: "What symbol is used to denote a single-line comment in C#?",
      options: ["//", "/*", "#", "--"],
      correctAnswer: "//"
    },
    {
      question: "Which of these is a value type in C#?",
      options: ["int", "string", "object", "array"],
      correctAnswer: "int"
    },
    {
      question: "What is the entry point of a C# application?",
      options: ["Main()", "Start()", "Run()", "Begin()"],
      correctAnswer: "Main()"
    },
    {
      question: "Which access modifier makes a member accessible only within its own class?",
      options: ["private", "public", "protected", "internal"],
      correctAnswer: "private"
    },
    {
      question: "Which keyword is used to create an object in C#?",
      options: ["new", "create", "object", "init"],
      correctAnswer: "new"
    },
    {
      question: "Which of the following is used for decision-making in C#?",
      options: ["if", "do", "class", "new"],
      correctAnswer: "if"
    },
    {
      question: "What does IDE stand for?",
      options: [
        "Integrated Development Environment",
        "Integrated Design Environment",
        "Internal Development Environment",
        "Interactive Debugging Engine"
      ],
      correctAnswer: "Integrated Development Environment"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["do-while", "while", "for", "foreach"],
      correctAnswer: "do-while"
    },
    {
      question: "Which keyword is used to inherit a class in C#?",
      options: [" :", "inherits", "extends", "->"],
      correctAnswer: ":"
    },
    {
      question: "Which data type is used for true/false values?",
      options: ["bool", "int", "string", "char"],
      correctAnswer: "bool"
    },
    {
      question: "Which method converts a string to an integer in C#?",
      options: ["int.Parse()", "Convert.ToChar()", "ToString()", "parseInt()"],
      correctAnswer: "int.Parse()"
    },
    {
      question: "Which keyword is used to handle exceptions?",
      options: ["try", "catch", "throw", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Which of the following denotes a string in C#?",
      options: ["\"\"", "''", "##", "//"],
      correctAnswer: "\"\""
    },
    {
      question: "Which keyword is used to declare a constant?",
      options: ["const", "final", "static", "readonly"],
      correctAnswer: "const"
    },
    {
      question: "Which of the following is a correct way to declare an array?",
      options: ["int[] nums;", "array int nums;", "int nums[];", "nums<int>[];"],
      correctAnswer: "int[] nums;"
    },
    {
      question: "Which statement is used to exit a loop?",
      options: ["break", "return", "continue", "exit"],
      correctAnswer: "break"
    },
    {
      question: "What is the default value of an int in C#?",
      options: ["0", "null", "undefined", "1"],
      correctAnswer: "0"
    },
    {
      question: "Which class is the base of all classes in C#?",
      options: ["Object", "Base", "Parent", "Main"],
      correctAnswer: "Object"
    },
    {
      question: "What keyword is used to define a method in C#?",
      options: ["void", "func", "method", "function"],
      correctAnswer: "void"
    },
    {
      question: "Which operator is used for equality check?",
      options: ["==", "=", "!=", "==="],
      correctAnswer: "=="
    },
    {
      question: "Which access modifier allows access from anywhere?",
      options: ["public", "private", "protected", "internal"],
      correctAnswer: "public"
    },
    {
      question: "Which namespace contains fundamental classes?",
      options: ["System", "Basic", "Main", "Root"],
      correctAnswer: "System"
    },
    {
      question: "Which loop is best for iterating over arrays?",
      options: ["foreach", "while", "do-while", "goto"],
      correctAnswer: "foreach"
    },
    {
      question: "What does the 'static' keyword indicate?",
      options: [
        "Belongs to the class, not instance",
        "Runs automatically",
        "Can’t be overridden",
        "Creates an object"
      ],
      correctAnswer: "Belongs to the class, not instance"
    },
    {
      question: "Which operator is used to access members of a class?",
      options: [".", "->", "::", ":"],
      correctAnswer: "."
    },
    {
      question: "What is boxing in C#?",
      options: [
        "Converting value type to object",
        "Removing an object",
        "Type casting",
        "Unpacking a class"
      ],
      correctAnswer: "Converting value type to object"
    },
    {
      question: "Which type supports null in C#?",
      options: ["Nullable types", "All types", "Only string", "None"],
      correctAnswer: "Nullable types"
    },
    {
      question: "Which keyword defines an interface?",
      options: ["interface", "class", "abstract", "struct"],
      correctAnswer: "interface"
    },
    {
      question: "Which type is used to store text?",
      options: ["string", "char", "int", "bool"],
      correctAnswer: "string"
    },
    {
      question: "What is the size of an int in C#?",
      options: ["4 bytes", "2 bytes", "8 bytes", "16 bytes"],
      correctAnswer: "4 bytes"
    },
    {
      question: "What is the default value of a bool?",
      options: ["false", "true", "null", "0"],
      correctAnswer: "false"
    },
    {
      question: "What is used to import namespaces?",
      options: ["using", "import", "require", "include"],
      correctAnswer: "using"
    },
    {
      question: "Which symbol denotes a preprocessor directive?",
      options: ["#", "@", "$", "&"],
      correctAnswer: "#"
    },
    {
      question: "Which keyword defines a structure?",
      options: ["struct", "structure", "class", "record"],
      correctAnswer: "struct"
    },
    {
      question: "Which operator is used to combine conditions?",
      options: ["&&", "==", "&", "||"],
      correctAnswer: "&&"
    },
    {
      question: "What does CLR stand for?",
      options: [
        "Common Language Runtime",
        "C# Language Resource",
        "Common Line Reader",
        "Central Logic Runtime"
      ],
      correctAnswer: "Common Language Runtime"
    },
    {
      question: "Which method displays output to console?",
      options: ["Console.WriteLine()", "print()", "echo()", "System.Out()"],
      correctAnswer: "Console.WriteLine()"
    },
    {
      question: "What is the result of 5 % 2 in C#?",
      options: ["1", "2", "0", "2.5"],
      correctAnswer: "1"
    },
    {
      question: "Which keyword is used to throw an exception?",
      options: ["throw", "raise", "error", "catch"],
      correctAnswer: "throw"
    },
    {
      question: "Which loop executes a block a specific number of times?",
      options: ["for", "if", "switch", "try"],
      correctAnswer: "for"
    },
    {
      question: "Which modifier prevents a class from being inherited?",
      options: ["sealed", "final", "static", "private"],
      correctAnswer: "sealed"
    },
    {
      question: "What is the output of true && false?",
      options: ["false", "true", "null", "undefined"],
      correctAnswer: "false"
    },
    {
      question: "Which of the following is a reference type?",
      options: ["string", "int", "bool", "double"],
      correctAnswer: "string"
    },
    {
      question: "What is the keyword to define read-only fields?",
      options: ["readonly", "const", "static", "sealed"],
      correctAnswer: "readonly"
    },
    {
      question: "Which function is used to read input?",
      options: ["Console.ReadLine()", "get()", "scanf()", "cin"],
      correctAnswer: "Console.ReadLine()"
    },
    {
      question: "What does 'null' represent in C#?",
      options: ["No object reference", "Zero", "False", "Empty string"],
      correctAnswer: "No object reference"
    },
    {
      question: "Which keyword is used to implement polymorphism?",
      options: ["virtual", "poly", "static", "this"],
      correctAnswer: "virtual"
    },
    {
      question: "What keyword refers to the current instance?",
      options: ["this", "self", "me", "current"],
      correctAnswer: "this"
    },
    ],
    advance:[
       {
        question: "What is boxing in C#?",
        options: ["Converting a value type to object", "Converting an object to value type", "Wrapping a class", "None of the above"],
        correctAnswer: "Converting a value type to object"
      },
      {
        question: "What is the use of 'yield' keyword in C#?",
        options: ["Pause execution", "Create a delegate", "Return multiple values one by one", "Handle exceptions"],
        correctAnswer: "Return multiple values one by one"
      },
      {
        question: "What is the output of: int x = 5; int y = ++x + x++; Console.WriteLine(y);?",
        options: ["12", "11", "10", "13"],
        correctAnswer: "12"
      },
      {
        question: "What is covariance in C#?",
        options: ["Assigning derived type to base type", "Assigning base type to derived type", "Both", "None"],
        correctAnswer: "Assigning derived type to base type"
      },
      {
        question: "Which interface is used for querying data in LINQ?",
        options: ["IEnumerable", "IQueryable", "IDisposable", "IDataReader"],
        correctAnswer: "IQueryable"
      },
      {
        question: "What is the default access modifier for a class in C#?",
        options: ["internal", "public", "private", "protected"],
        correctAnswer: "internal"
      },
      {
        question: "Which of these is a correct way to define a generic method?",
        options: ["public T MyMethod<T>(T param)", "T MyMethod(T param)", "generic MyMethod<T>(T param)", "public MyMethod<T>(param)"],
        correctAnswer: "public T MyMethod<T>(T param)"
      },
      {
        question: "What does the 'is' keyword do in C#?",
        options: ["Checks type compatibility", "Casts an object", "Compares values", "None"],
        correctAnswer: "Checks type compatibility"
      },
      {
        question: "What is a delegate in C#?",
        options: ["Object reference", "Pointer to a function", "Namespace", "A loop structure"],
        correctAnswer: "Pointer to a function"
      },
      {
        question: "Which operator is used for null-coalescing in C#?",
        options: ["??", "!", "?.", "?:"] ,
        correctAnswer: "??"
      },
      {
        question: "What is the use of 'params' keyword?",
        options: ["Pass variable number of arguments", "Reference parameter", "Output parameter", "Named arguments"],
        correctAnswer: "Pass variable number of arguments"
      },
      {
        question: "Which feature allows method overriding in C#?",
        options: ["virtual and override", "static and override", "abstract only", "sealed only"],
        correctAnswer: "virtual and override"
      },
      {
        question: "What does async keyword do?",
        options: ["Marks method to run asynchronously", "Runs method in a new thread", "Makes method faster", "Compiles method only"],
        correctAnswer: "Marks method to run asynchronously"
      },
      {
        question: "What is a lambda expression?",
        options: ["Anonymous function", "Class method", "Constructor", "Thread function"],
        correctAnswer: "Anonymous function"
      },
      {
        question: "Which exception is thrown when array index is out of bounds?",
        options: ["IndexOutOfRangeException", "OutOfMemoryException", "InvalidCastException", "OverflowException"],
        correctAnswer: "IndexOutOfRangeException"
      },
      {
        question: "What is the benefit of using StringBuilder over String?",
        options: ["Better performance in concatenation", "Immutability", "Better formatting", "None"],
        correctAnswer: "Better performance in concatenation"
      },
      {
        question: "Which keyword prevents inheritance of a class?",
        options: ["sealed", "static", "readonly", "const"],
        correctAnswer: "sealed"
      },
      {
        question: "What is a nullable type in C#?",
        options: ["A value type that can be null", "A reference type", "An enum", "A pointer"],
        correctAnswer: "A value type that can be null"
      },
      {
        question: "What is the result of null ?? 'default'?",
        options: ["default", "null", "error", "undefined"],
        correctAnswer: "default"
      },
      {
        question: "What is the purpose of using 'lock' statement?",
        options: ["Prevent race condition", "Prevent deadlock", "Handle exceptions", "Memory allocation"],
        correctAnswer: "Prevent race condition"
      },
      {
        question: "Which collection allows key-value pair and maintains order?",
        options: ["SortedDictionary", "Dictionary", "Hashtable", "ArrayList"],
        correctAnswer: "SortedDictionary"
      },
      {
        question: "What is the base class of all classes in C#?",
        options: ["Object", "Base", "Class", "System"],
        correctAnswer: "Object"
      },
      {
        question: "What is method overloading?",
        options: ["Same method name with different parameters", "Method with same name in derived class", "Abstract method", "Virtual method"],
        correctAnswer: "Same method name with different parameters"
      },
      {
        question: "What is the default value of bool in C#?",
        options: ["false", "true", "null", "0"],
        correctAnswer: "false"
      },
      {
        question: "Which access modifier makes a member accessible only within its class?",
        options: ["private", "protected", "internal", "public"],
        correctAnswer: "private"
      },
      {
        question: "Which keyword is used to implement an interface?",
        options: [":", "inherits", "extends", "implements"],
        correctAnswer: ":"
      },
      {
        question: "What is the use of 'nameof' operator?",
        options: ["Gets the name of variable or type", "Gets the type of variable", "Checks null", "None"],
        correctAnswer: "Gets the name of variable or type"
      },
      {
        question: "How to define a constant in C#?",
        options: ["const", "static", "readonly", "define"],
        correctAnswer: "const"
      },
      {
        question: "What is the use of 'using' statement?",
        options: ["Dispose object automatically", "Import namespace", "Define block", "Initialize variable"],
        correctAnswer: "Dispose object automatically"
      },
      {
        question: "What is an interface?",
        options: ["A contract with no implementation", "Class with constructor", "Class with abstract methods", "Data structure"],
        correctAnswer: "A contract with no implementation"
      },
      {
        question: "Which keyword defines a read-only field?",
        options: ["readonly", "const", "static", "sealed"],
        correctAnswer: "readonly"
      },
      {
        question: "What is the use of 'out' parameter?",
        options: ["Return multiple values", "Output to file", "Optional value", "Default parameter"],
        correctAnswer: "Return multiple values"
      },
      {
        question: "Which LINQ keyword is used for filtering?",
        options: ["where", "select", "from", "group"],
        correctAnswer: "where"
      },
      {
        question: "What does the 'throw' keyword do?",
        options: ["Throws an exception", "Creates object", "Returns value", "Closes program"],
        correctAnswer: "Throws an exception"
      },
      {
        question: "What does 'abstract' keyword mean?",
        options: ["Method/class must be overridden", "Method is final", "Static method", "Partial class"],
        correctAnswer: "Method/class must be overridden"
      },
      {
        question: "What does 'base' keyword refer to?",
        options: ["Parent class", "Child class", "Interface", "Current method"],
        correctAnswer: "Parent class"
      },
      {
        question: "What is the purpose of 'finally' block?",
        options: ["Always executes", "Runs on error", "Only runs if exception", "Used with if"],
        correctAnswer: "Always executes"
      },
      {
        question: "What is a static constructor?",
        options: ["Constructor called once per type", "Constructor per object", "Constructor for interfaces", "Constructor with arguments"],
        correctAnswer: "Constructor called once per type"
      },
      {
        question: "Which method is entry point of a C# program?",
        options: ["Main", "Start", "Begin", "Run"],
        correctAnswer: "Main"
      },
      {
        question: "What is the purpose of the 'sealed' modifier?",
        options: ["Prevent inheritance", "Allow only interface", "Restrict constructor", "Hide field"],
        correctAnswer: "Prevent inheritance"
      },
      {
        question: "Which type of class cannot be instantiated?",
        options: ["abstract", "sealed", "partial", "static"],
        correctAnswer: "abstract"
      },
      {
        question: "What is an indexer in C#?",
        options: ["Allows object to be indexed like arrays", "Access database", "Define array size", "Overload operator"],
        correctAnswer: "Allows object to be indexed like arrays"
      },
      {
        question: "Which statement is used to handle exceptions?",
        options: ["try-catch", "catch-only", "throw-only", "using"],
        correctAnswer: "try-catch"
      },
      {
        question: "What does '??=' operator do?",
        options: ["Assign value if null", "Compare null", "Add if not null", "None"],
        correctAnswer: "Assign value if null"
      },
      {
        question: "What is the use of 'ref' keyword?",
        options: ["Pass argument by reference", "Pass by value", "Output only", "Const argument"],
        correctAnswer: "Pass argument by reference"
      },
      {
        question: "What is the return type of a constructor?",
        options: ["None", "void", "object", "depends on class"],
        correctAnswer: "None"
      },
      {
        question: "What is the use of 'dynamic' type?",
        options: ["Resolved at runtime", "Static type", "Compile-time type", "Generic"],
        correctAnswer: "Resolved at runtime"
      },
      {
        question: "What is tuple in C#?",
        options: ["Group of multiple values", "DataTable", "JSON object", "Class"],
        correctAnswer: "Group of multiple values"
      },
      {
        question: "Which feature allows defining multiple interfaces to a class?",
        options: ["Multiple interface implementation", "Abstract inheritance", "Sealed class", "None"],
        correctAnswer: "Multiple interface implementation"
      },
      {
        question: "Which design pattern is used for logging services?",
        options: ["Singleton", "Factory", "Observer", "Adapter"],
        correctAnswer: "Singleton"
      },
    ]
  },
  // Add other languages similarly
};

export function getMockQuiz(language, level) {
  const lang = language.toLowerCase();
  const lvl = level.toLowerCase();
  const questions = mockQuestions[lang]?.[lvl] || [];

  return questions; 
}

