var JavaScriptQuestions = function (options) {
  this.options = options;
  this.data = [
    {
      question : "Inside which HTML element do we put the JavaScript ?",
      answers: [
        "&lt;script&gt;",
        "&lt;scripting&gt;",
        "&lt;jsscripting&gt;",
        "&lt;javascript&gt;"
      ],
      level: 3,
      correct: "&lt;script&gt;"
    },
    {
      question : "Where is the correct place to insert a JavaScript ?",
      answers: [
        "The &lt;body&gt; section",
        "Anywhere",
        "The &lt;head&gt; section",
        "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"
      ],
      level: 1,
      correct: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"
    },
    {
      question : "How do you write quot;Hello Worldquot; in an alert box ?",
      answers: [
        "msg(quot;Hello Worldquot;);",
        "msgBox(quot;Hello Worldquot;)",
        "alert(quot;Hello Worldquot;);",
        "alertBox(quot;Hello Worldquot;);"
      ],
      level: 3,
      correct: "alert(quot;Hello Worldquot;);"

    },
    {
      question : "What is the correct syntax for referring to an external script called quot;xxx.jsquot; ?",
      answers: [
        "&lt;script name=quot;xxx.jsquot;&gt;",
        "&lt;script link=quot;xxx.jsquot;&gt;",
        "&lt;script src=quot;xxx.jsquot;&gt;",
        "&lt;script href=quot;xxx.jsquot;&gt;"
      ],
      level: 1,
      correct: "&lt;script src=quot;xxx.jsquot;&gt;"
    },
    {
      question : "What is the correct HTML for adding a background color ?",
      answers: [
        "&lt;background&gt; yellow &lt;/background&gt;",
        "&lt;body bg= &quot;yellow&quot;&gt;",
        "&lt;body style=&quot;background-color:yellow;&quot;&gt;",
        "&lt;body style=&quot;color:yellow&quot;&gt;"
      ],
      level: 2,
      correct: "&lt;body style=&quot;background-color:yellow;&quot;&gt;"
    },
    {
      question : "Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order ?",
      answers: [
        "localeCompare()",
        "search()",
        "substr()",
        "concat()"
      ],
      level: 1,
      correct: "localeCompare()"
    },
    {
      question : "Which of the following function of String object creates an HTML anchor that is used as a hypertext target ?",
      answers: [
        "anchor()",
        "link()",
        "blink()",
        "big()"
      ],
      level: 2,
      correct: "anchor()"
    },
    {
      question : "Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a $lt;sup$gt; tag ?",
      answers: [
        "sup()",
        "small()",
        "strike()",
        "sub()"
      ],
      level: 1,
      correct: "&lt;body style=&quot;background-color:yellow;&quot;&gt;"
    },
    {
      question : "Which of the following function of Array object removes the last element from an array and returns that element ?",
      answers: [
        "pop()",
        "push()",
        "join()",
        "map()"
      ],
      level: 2,
      correct: "pop()"
    },
    {
      question : "Which of the following function of Array object returns a string representing the array and its elements ?",
      answers: [
        "toSource()",
        "sort()",
        "splice()",
        "toString()"
      ],
      level: 2,
      correct: "toString()"
    },
    {
      question : "Which of the following function of String object returns the character at the specified index ?",
      answers: [
        "charAt()",
        "charCodeAt()",
        "concat()",
        "indexOf()"
      ],
      level: 3,
      correct: "charAt()"
    },
  ]
};

JavaScriptQuestions.prototype.questions = function () {
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