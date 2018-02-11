var SqlQuestions = function (options) {
  this.options = options;
  this.data = [
    {
      question : "What does SQL stand for ?",
      answers: [
        "Structured Query Language",
        "Structured Question Language",
        "Strong Question Language",
        "Tables Language;"
      ],
      level: 3,
      correct: "Structured Query Language"
    },
    {
      question : "Which SQL statement is used to extract data from a database ?",
      answers: [
        "OPEN",
        "GET",
        "EXTRACT",
        "SELECT"
      ],
      level: 1,
      correct: "SELECT"
    },
    {
      question : "Which SQL statement is used to update data in a database ?",
      answers: [
        "SAVE",
        "MODIFY",
        "UPDATE",
        "ALTER"
      ],
      level: 3,
      correct: "UPDATE"
    },
    {
      question : "Which SQL statement is used to delete data from a database ?",
      answers: [
        "COLLAPSE",
        "REMOVE",
        "DELETE",
        "DROP"
      ],
      level: 1,
      correct: "DELETE"
    },
    {
      question : "Which one of the following databases has PHP supported almost since the beginning ?",
      answers: [
        "Oracle Database",
        "SQL",
        "SQL+",
        "MySQL"
      ],
      level: 2,
      correct: "MySQL"
    },
    {
      question : "The updated MySQL extension released with PHP 5 is typically referred to as..",
      answers: [
        "MySQL",
        "mysqly",
        "lite",
        "mysqli"
      ],
      level: 2,
      correct: "mysqli"
    },
    {
      question : "What is returned by TRUNC(789.8389, 2) ?",
      answers: [
        "789.84",
        "789.83",
        "78",
        "789"
      ],
      level: 3,
      correct: "789.83"
    },
    {
      question : "In which of the following cases a DML statement is not executed ?",
      answers: [
        "When existing rows are modified",
        "When some rows are deleted",
        "When a table is deleted",
        "All"
      ],
      level: 1,
      correct: "When a table is deleted"
    },
    {
      question : "Which of the following is not true about the database objects ?",
      answers: [
        "Indexes improve performance of queries.",
        "Views give alternative names to objects.",
        "Sequences are numeric value generators.",
        "Tables are the basic unit of storage."
      ],
      level: 1,
      correct: "Views give alternative names to objects."
    },
    {
      question : "Which of the following is not true about use of a database view ?",
      answers: [
        "It restricts data access.",
        "It makes queries easy.",
        "It provides data independence.",
        "It prevents different views of same data."
      ],
      level: 2,
      correct: "It prevents different views of same data."
    },
    {
      question : "Which statement is used for allocating system privileges to the users ?",
      answers: [
        "CREATE",
        "GRANT",
        "REVOKE",
        "ROLE"
      ],
      level: 3,
      correct: "GRANT"
    }
  ]
};

SqlQuestions.prototype.questions = function () {
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