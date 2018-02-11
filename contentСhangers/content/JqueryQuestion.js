var JqueryQuestions = function (options) {
  this.options = options;
  this.data = [
    {
      question : "Which of the following is correct ?",
      answers: [
        "jQuery is a JavaScript Library",
        "jQuery is a JSON Library",
        "jQuery is a PHP Library",
        "jQuery is a Java Library"
      ],
      level: 3,
      correct: "jQuery is a JavaScript Library"
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
      question : "Which sign does jQuery use as a shortcut for jQuery ?",
      answers: [
        "the ? Sign",
        "the # Sign",
        "the ! Sign",
        "the $ Sign"
      ],
      level: 3,
      correct: "the $ Sign"
    },
    {
      question : "Look at the following selector: $(quot;divquot;). What does it select?",
      answers: [
        "The middle div element",
        "The last div element;",
        "The first div element",
        "All div elements"
      ],
      level: 1,
      correct: "The first div element"
    },
    {
      question : "Which jQuery method is used to hide selected elements ?",
      answers: [
        "hidden()",
        "visible(false)",
        "hide()",
        "display(none)"
      ],
      level: 2,
      correct: "hide()"
    },
    {
      question : "What is the correct jQuery code for making all div elements 100 pixels high ?",
      answers: [
        "$(“div”).yPos(100)",
        "$(“div”).height(100)",
        "hide()",
        "$(“div”).height=”100″"
      ],
      level: 2,
      correct: "$(“div”).height(100)"
    },
    {
      question : "What scripting language is jQuery written in?",
      answers: [
        "VBScript",
        "JavaScript",
        "C++",
        "Java"
      ],
      level: 1,
      correct: "JavaScript"
    },
    {
      question : "Which jQuery function is used to prevent code from running, before the document is finished loading?",
      answers: [
        "$(document).load()",
        "$(document).ready()",
        "$(body).onload()",
        "$(body).onready()"
      ],
      level: 1,
      correct: "$(document).ready()"
    },
    {
      question : "Which jQuery method should be used to deal with name conflicts ?",
      answers: [
        "noConflict()",
        "nameConflict()",
        "conflict()",
        "noNameConflict()"
      ],
      level: 3,
      correct: "noConflict()"
    },
    {
      question : "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
      answers: [
        "switchClass()",
        "toggleClass()",
        "switch()",
        "altClass()"
      ],
      level: 2,
      correct: "toggleClass()"
    },
    {
      question : "Is jQuery a W3C standard ?",
      answers: [
        "No",
        "Yes",
        "Maybe",
        "Yes and No"
      ],
      level: 2,
      correct: "No"
    },
    {
      question : "Which of the following jQuery method gets a set of elements containing the unique next siblings of each of the given set of elements ?",
      answers: [
        "locateNext( selector )",
        "getNext( selector)",
        "next( selector )",
        "fullnext( selector )"
      ],
      level: 3,
      correct: "next( selector )"
    },
    {
      question : "Which of the following jQuery method gets a set of elements containing the unique previous siblings of each of the matched set of elements ?",
      answers: [
        "parents( selector )",
        "prev( selector)",
        "siblings( selector )",
        "None of the above"
      ],
      level: 3,
      correct: "prev( selector)"
    },
    {
      question : "Which of the following jQuery method can be used to attach a function to be executed whenever an AJAX request begins and there is none already active ?",
      answers: [
        "ajaxStart( callback )",
        "ajaxComplete( callback )",
        "ajax",
        "ajaxSend"
      ],
      level: 2,
      correct: "ajaxStart( callback )"
    },
    {
      question : "Which of the following jQuery method can be used to attach a function to be executed whenever AJAX request completed successfully?",
      answers: [
        "ajaxStart( callback )",
        "ajaxComplete( callback )",
        "ajaxSuccess( callback ))",
        "ajaxSend( callback )"
      ],
      level: 1,
      correct: "ajaxSuccess( callback )"
    },
    {
      question : "Which built-in method reverses the order of the elements of an array ?",
      answers: [
        "changeOrder(order)",
        "reverse()",
        "sort(order)",
        "reverseAll()"
      ],
      level: 1,
      correct: "reverse()"
    }
  ]
};

JqueryQuestions.prototype.questions = function () {
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