var CssQuestions = function (options) {
  this.options = options;
  this.data = [
    {
      question : "Choose the correct HTML element for the largest heading ?",
      answers: [
        "&lt;heading&gt;",
        "&lt;head&gt;",
        "&lt;h1&gt;",
        "&lt;h6&gt;"
      ],
      level: 3,
      correct: "&lt;h1&gt;"
    },
    {
      question : "What does HTML stand for ?",
      answers: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Programming language",
        "Home Tool Markup Language"
      ],
      level: 1,
      correct: "Hyper Text Markup Language"
    },
    {
      question : "How can you open a link in a new tab/browser window ?",
      answers: [
        "target=&quot;new&quot;",
        "new",
        "target=&quot;_blank&quot;",
        "target=&quot;blank&quot;"
      ],
      level: 3,
      correct: "target=&quot;_blank&quot;"
    },
    {
      question : "What is the correct HTML element for inserting a line break ?",
      answers: [
        "&lt;break&gt;",
        "&lt;lb&gt;",
        "&lt;br&gt;",
        "&lt;/n&gt;"
      ],
      level: 1,
      correct: "&lt;br&gt;"
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
      question : "Which of the following is correct about CSS?",
      answers: [
        "CSS is used to control the style of a web document",
        "CSS is the acronym for quot;Cascading Style Sheetquot;",
        "You can write CSS once and then reuse same sheet in multiple HTML pages.",
        "All of these"
      ],
      level: 1,
      correct: "All of these"
    },
    {
      question : "Which of the following defines a measurement relative to a font's x-height?",
      answers: [
        "ex",
        "cm",
        "ma",
        "mq"
      ],
      level: 2,
      correct: "ex"
    },
    {
      question : "Which of the following defines a measurement in picas?",
      answers: [
        "im",
        "mm",
        "pc",
        "pt"
      ],
      level: 2,
      correct: "pc"
    },
    {
      question : "Which of the following property is used to set the background color of an element?",
      answers: [
        "background-color",
        "background-image",
        "background-repeat",
        "background-position"
      ],
      level: 1,
      correct: "background-color"
    },
  ]
};

CssQuestions.prototype.questions = function () {
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