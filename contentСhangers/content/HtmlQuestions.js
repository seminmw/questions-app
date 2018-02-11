var HtmlQuestions = function (options) {
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
      question : "The common element which describe the web page, is ?",
      answers: [
        "heading",
        "paragraph",
        "List",
        "All of these"
      ],
      level: 1,
      correct: "All of these"
    },
    {
      question : "The attribute of &lt;form&gt; tag",
      answers: [
        "Method",
        "Action",
        "Both (Method) and (Action)",
        "None of these"
      ],
      level: 2,
      correct: "Both (Method) and (Action)"
    },
    {
      question : "www is based on which model ?",
      answers: [
        "Local-server",
        "Client-server",
        "3-tier",
        "None of these"
      ],
      level: 2,
      correct: "Client-server"
    },
    {
      question : "Markup tags tell the web browser",
      answers: [
        "Markup tags tell the web browser",
        "How to display the page",
        "How to display message box on page",
        "None of these"
      ],
      level: 2,
      correct: "How to display the page"
    },
    {
      question : "What are Empty elements and is it valid?",
      answers: [
        "No, there is no such terms as Empty Element",
        "Empty elements are element with no data",
        "No, it is not valid to use Empty Element",
        "None of these"
      ],
      level: 1,
      correct: "Empty elements are element with no data"
    },
    {
      question : "Which of the following attributes of text box control allow to limit the maximum character ?",
      answers: [
        "size",
        "len",
        "maxlength",
        "all of these"
      ],
      level: 1,
      correct: "maxlength"
    },
    {
      question : "Web pages starts with which ofthe following tag ?",
      answers: [
        "&lt;Body&gt;",
        "&lt;Title&gt;",
        "&lt;HTML&gt;",
        "&lt;Form&gt;"
      ],
      level: 1,
      correct: "&lt;HTML&gt"
    },
    {
      question : "HTML is a subset of",
      answers: [
        "SGMT",
        "SGML",
        "SGMD",
        "None of these"
      ],
      level: 3,
      correct: "SGML"
    },
    {
      question : "The attribute, which define the relationship between current document and HREF'ed URL is",
      answers: [
        "REL",
        "URL",
        "REV",
        "all of these"
      ],
      level: 3,
      correct: "REL"
    },
    {
      question : "&lt;DT&gt; tag is designed to fit a single line of our web page but &lt;DD&gt; tag will accept a",
      answers: [
        "line of text",
        "full paragraph",
        "word",
        "request"
      ],
      level: 3,
      correct: "full paragraph"
    },
    {
      question : "Any part of the graphic that is not included in another hot zone is considered to be part of",
      answers: [
        "rect",
        "point",
        "default",
        "polygon"
      ],
      level: 3,
      correct: "default"
    }
  ]
};

HtmlQuestions.prototype.questions = function () {
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