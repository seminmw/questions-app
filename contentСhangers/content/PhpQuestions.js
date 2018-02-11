var PhpQuestions = function (options) {
  this.options = options;
  this.data = [
    {
      question : "What does PHP stand for?",
      answers: [
        "Personal Hypertext Processor",
        "Private Home Page",
        "PHP: Hypertext Preprocessor",
        "Computer Home Page"
      ],
      level: 3,
      correct: "Personal Hypertext Processor"
    },
    {
      question : "PHP server scripts are surrounded by delimiters, which ?",
      answers: [
        "&lt;?php...?&gt;",
        "&lt;?php&gt; ... &lt;/?gt;",
        "&lt;&&gt; ... &lt; / & &gt;",
        "&lt;script&gt; ... &lt; / script&gt;"
      ],
      level: 1,
      correct: "&lt;?php...?&gt;"
    },
    {
      question : "How do you write &quot;Hello World&quot; in PHP",
      answers: [
        "Hello World;",
        "echo &quot;Hello World&quot;;",
        "Document.Write(&quot;Hello World&quot;);",
        "console.log(Hello World)"
      ],
      level: 3,
      correct: "echo &quot;Hello World&quot;;"
    },
    {
      question : "All variables in PHP start with which symbol ?",
      answers: [
        "&",
        "?",
        "$",
        "!"
      ],
      level: 1,
      correct: "$"
    },
    {
      question : " PHP files have a default file extension of_______",
      answers: [
        ".html",
        ".xml",
        ".php",
        ".ph"
      ],
      level: 1,
      correct: ".php"
    },
    {
      question : "Which version of PHP introduced Try/catch Exception?",
      answers: [
        "PHP 4",
        "PHP 5.3",
        "PHP 5",
        "PHP 7"
      ],
      level: 1,
      correct: "PHP 5"
    },
    {
      question : "Which of the following function is used to get environment variables in PHP ?",
      answers: [
        "search()",
        "environment()",
        "env()",
        "getenv()"
      ],
      level: 3,
      correct: "getenv()"
    },
    {
      question : "Which of the following function returns the sum of the values in an array ?",
      answers: [
        "array_sum()",
        "array_concat()",
        "array_slice()",
        "array_udiff()"
      ],
      level: 2,
      correct: "array_sum()"
    },
    {
      question : "Which of the following function is used to check if a file exists or not ?",
      answers: [
        "fopen()",
        "fread()",
        "ex()",
        "file_exist()"
      ],
      level: 3,
      correct: "file_exist()"
    },
    {
      question : "Which of the following magic constant of PHP returns full path and filename of the file ?",
      answers: [
        "_LINE_",
        "_FILE_",
        "_FUNCTION_",
        "_EXIST_"
      ],
      level: 3,
      correct: "_FILE_"
    }
  ]
};

PhpQuestions.prototype.questions = function () {
  var that = this;
  return this.data.filter(function (item) {
    if (!that.options) {
      return true;
    }

    if (that.options.level) {
      if (!item.level) {
        return false;
      }
      return item.level == that.options.level;
    }

    return true;
  })
}