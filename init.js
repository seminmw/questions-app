$(document).ready(function() {

  var questionsApp = {

  corrAndIncorr : {
    correct : 0,
    incorrect : 0,
    userAnswers : []
  },

  condition : {
    sectionName : 'section',
    level : { level : null},
    currentStep : 0,
    firstStep : 0,
    lastStep : 0,
  },

  otherClass : {
    shuffle : Shuffle,
    content : Content,
    sectionContent : ''
  },

  images : {
    "html"       : "images/html.png",
    "css"        : "images/css.png",
    "php"        : "images/php.png",
    "sql"        : "images/sql.png",
    "jQuery"     : "images/jquery.png",
    "javaScript" : "images/js.png"
  },

  content : Content,

  sectionContent : '',

  deleteStartContent : function() {
    var that = this;
    $("#content").empty();
    $("#content").append(`<button type="button" class="btn btn-warning" id="x">MENU</button>`);
  },

  createStartContent : function() {
    $("#content").append(`

      <img class="logo" src="images/logo-brand.jpg" />

      <div id="menuH">

        <div class="row" id="mainMenu">
            <div class="col-md-6 offset-md-3">
              <button type="button" class="btn btn-outline-dark btn-lg btn-block" id="menu" name="html">HTML</button>
            </div>
        </div>
        <div class="row" id="mainMenu">
            <div class="col-md-6 offset-md-3">
              <button type="button" class="btn btn-outline-dark btn-lg btn-block" id="menu" name="css">CSS</button>
            </div>
        </div>
        <div class="row" id="mainMenu">
            <div class="col-md-6 offset-md-3">
              <button type="button" class="btn btn-outline-dark btn-lg btn-block" id="menu" name="javaScript">Java Script</button>
            </div>
        </div>
        <div class="row" id="mainMenu">
            <div class="col-md-6 offset-md-3">
              <button type="button" class="btn btn-outline-dark btn-lg btn-block" id="menu" name="jQuery">jQuery</button>
            </div>
        </div>
        <div class="row" id="mainMenu">
            <div class="col-md-6 offset-md-3">
              <button type="button" class="btn btn-outline-dark btn-lg btn-block" id="menu" name="php">PHP</button>
            </div>
        </div>
        <div class="row" id="mainMenu">
            <div class="col-md-6 offset-md-3">
              <button type="button" class="btn btn-outline-dark btn-lg btn-block" id="menu" name="sql">SQL</button>
            </div>
        </div>

      </div>`
    );

  },

  createQuesionContent : function( nameOflang, obj, step, corr, incor ) {
    var that = this;

    var question = obj[step]["question"];
    var answer   = obj[step]["answers"];

    console.log(that.images[nameOflang]);

    $("#content").append(`
    <div class="container tasks">
      <div class="row">
        <div class="col-sm">

          <img class="picture" src=${that.images[nameOflang]}>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-10 x">
        <div class="card text-white bg-dark mb-3">
        <div class="card-header"></div>
        <div class="card-body text-white">
          <p class="card-text">${question}</p>
        </div>
      </div>
        </div>
      </div>
      <div class="row justify-content-center diff">
        <div class="col-5">
          <button type="button" class="btn btn-outline-primary var">${answer[0]}</button>
        </div>
        <div class="col-5">
          <button type="button" class="btn btn-outline-primary var">${answer[1]}</button>
        </div>
      </div>
      <div class="row justify-content-center diff">
        <div class="col-5">
          <button type="button" class="btn btn-outline-primary var">${answer[2]}</button>
        </div>
        <div class="col-5">
          <button type="button" class="btn btn-outline-primary var">${answer[3]}</button>
        </div>
      </div>
     <div class="row justify-content-center diff">
      <div class="col-10 p">
        <button type="button" class="btn btn-outline-primary press">PRESS</button>
      </div>
     </div>
  </div>`
    );
  },


  createFinalContentv3 : function( corr, incorr ) {
    var that = this;
    that.removeContentOfNextStep();


    var styles = {
      "wrong" : "danger",
      "right" : "success"
    }

    var table = '';
    $.each( that.corrAndIncorr.userAnswers, function( index, elem ){
      table += `
        <tr class="table-${styles[elem[2]]}">
          <th scope="row">${index + 1}</th>
          <td> ${elem[0]} </td>
          <td> ${elem[1]} </td>
          <td>${elem[2]} </td>
        </tr>
      `;
    })

    $("#content").append(`
    <div class="container tables">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="alert alert-dismissible alert-warning">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <p class="mb-0">You answered ${corr} questions correctly and ${incorr} wrong. Want to try more ?</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <table class="table table-hover">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Question</th>
                <th scope="col">User's answer</th>
                <th scope="col">Right answer</th>
              </tr>
            </thead>
            <tbody>
              ${table}
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 offset-md-2">
            <button type="button" class="btn btn-outline-primary newB" id="choose" action="restart">restart</button>
        </div>
        <div class="col-md-3 offset-md-2">
            <button type="button" class="btn btn-outline-primary newB"id="choose" action="mainMenu">main menu</button>
        </div>
      </div>
    </div>`
    );
  },

  createLevelmenu : function( sectionName ) {
    var that = this;
    that.deleteStartContent();
    $("#content").append(`
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h1> Сhoose the difficulty of the ${sectionName}   </h1>
          </div>
        </div>

        <div class="row justify-content-center diff">
          <div class="col-4">
            <button type="button" class="btn btn-outline-primary difficulty" level="1">easy</button>
          </div>
        </div>
        <div class="row justify-content-center diff">
          <div class="col-4">
            <button type="button" class="btn btn-outline-primary difficulty" level="2">middle</button>
          </div>
        </div>
        <div class="row justify-content-center diff">
          <div class="col-4">
            <button type="button" class="btn btn-outline-primary difficulty" level="3">hard</button>
          </div>
        </div>
    </div>`);
  },


  removeQuestionContent : function() {
    var that = this;

    that.condition.currentStep = 0;
    that.condition.lastStep = 0;
    that.corrAndIncorr.correct = 0;
    that.corrAndIncorr.incorrect = 0;
    that.corrAndIncorr.userAnswers = [];

    $("#content").empty();
    $("#x").remove();
    $(".tasks").remove();
  },

  removeContentOfNextStep : function() {
    $(".tasks").remove();
  },

  init : function() {
    var that = this;

    that.start();
  },

  finalChoose : function( action, nameOfTask ) {
    var that = this;

    if ( action == "restart" ) {
      that.removeQuestionContent();
      that.deleteStartContent();
      that.lengthOfQuestion( nameOfTask );
      that.createQuesionContent(
        nameOfTask,
        that.sectionContent,
        that.condition.currentStep,
        that.corrAndIncorr.correct,
        that.corrAndIncorr.incorrect
      );

    } else if( action == "mainMenu" ) {
      that.removeQuestionContent();
      that.createStartContent();
    }
  },

  onClickAnimation : function ( elem, bool ) {
    elem.css( "background-color", bool ? "rgb(0, 123, 255)" : "red" );
  },

  checkPress : function( arr ) {
    return (arr.length == 0 ? false : true);
  },

  nextStep : function( nameOfLang, obj, step, last, corr, incor ) {
    var that = this;

    that.condition.currentStep += 1;
    var step = that.condition.currentStep;

    if( that.endOfGame( step, last ) ){
      that.createFinalContentv3( corr, incor );
    } else {
      that.removeContentOfNextStep();
      that.createQuesionContent(
        nameOfLang,
        obj,
        step,
        corr,
        incor
      );
  }
  },

  corrOrIncorr : function( text, obj, step, elem ) {
    var that = this;

    var answer  = obj[step].correct;
    var question = obj[step].question;
    var userAnswer = that.replaceSymbol(text);

    if ( typeof answer == "string" && userAnswer.length == 1 ) {
      if ( answer === userAnswer[0]  ) {
        that.corrAndIncorr.correct += 1;
        that.corrAndIncorr.userAnswers.push([question,userAnswer,"right"]);
        return true;
      }
    }
    else if ( typeof userAnswer == "object" &&  userAnswer.equals(answer)  ) {
      that.corrAndIncorr.correct += 1;
      that.corrAndIncorr.userAnswers.push([question,userAnswer,"right"]);
      return true;
    }

    that.corrAndIncorr.incorrect += 1;
    that.corrAndIncorr.userAnswers.push([question,userAnswer,"wrong"]);
  },

  lengthOfQuestion : function() {
    var that = this;
    that.condition.lastStep = that.sectionContent.length;
  },

  addAttrAsnwer : function( elem ) {
    elem.toggleClass("mark");
  },

  getAnswers : function() {
    var arr = [];

    $( ".mark" ).each( function( index, elem ) {
      arr.push( $(elem).text() );
    })

    return arr.sort();
  },

  endOfGame : function( currStep, lastStep ) {
    return ( currStep === lastStep );
  },

  escapeHtml : function (text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  },

  replaceSymbol : function ( arr ) {
    var that = this;

    return arr.map( function ( item ) {
      return item = that.escapeHtml( item );
    });
  },

  mainMenu : function( obj, currentStep, corr, incorr ) {
    var that = this;

    $( document ).on( 'click', '#menu', function( ev ) {

      that.condition.sectionName = $(this).attr( "name" );
      that.createLevelmenu( that.condition.sectionName );

      $( document ).on( 'click', '.difficulty', function( ev ) {

        that.condition.level.level = $(this).attr("level");
        that.sectionContent = new that.content[that.condition.sectionName](that.condition.level).questions();
        that.sectionContent = new that.otherClass.shuffle(that.sectionContent).shuffleOfAnswers();
        that.lengthOfQuestion();
        that.deleteStartContent();
        that.createQuesionContent(
          that.condition.sectionName,
          that.sectionContent,
          that.condition.currentStep,
          that.corrAndIncorr.correct,
          that.corrAndIncorr.incorrect
        );
      });
    })
  },

  answersOnquestions : function() {
    var that = this;

    that.addMark();

    that.pressButton();
  },

  pressButton : function() {
    var that = this;

    $( document ).on( 'click', '.press', function( ev ) {
      var x = that.getAnswers();

      if ( that.checkPress( that.getAnswers() ) ){

        that.corrOrIncorr( that.getAnswers(), that.sectionContent, that.condition.currentStep, $(this) );
        setTimeout(that.nextStep.bind( questionsApp ),
        500,
        that.condition.sectionName,
        that.sectionContent,
        that.condition.currentStep,
        that.condition.lastStep,
        that.corrAndIncorr.correct,
        that.corrAndIncorr.incorrect
      );
      that.endOfGame( that.condition.currentStep, that.condition.lastStep );
      } else {
        alert("select the answers");
      }
    });

  },

  addMark : function() {
    var that = this;

    $( document ).on( 'click', '.var', function( ev ) {
      $answer = parseInt($(this).text());

      that.addAttrAsnwer($(this));
    })

  },

  exitButton : function() {
    that = this;

    $(document).on( 'click', '#x', function( ev ) {
      $attr = $(this).attr( "id" );
      that.removeQuestionContent();
      that.createStartContent();
    })

  },

  restartButton : function() {
    var that = this;

    $( document ).on( 'click', '#choose', function( ev ) {
      $attr = $(this).attr( "action" );
      //alert($attr);
      that.sectionContent = new that.otherClass.shuffle(that.sectionContent).shuffleOfAnswers();
      that.finalChoose( $attr, that.condition.sectionName );
    })
  },


  start : function( ev ) {
    var that = this;

    that.mainMenu( that.content, that.condition.currentStep, that.corrAndIncorr.correct, that.corrAndIncorr.incorrect );

    that.answersOnquestions();

    that.exitButton();

    that.restartButton();

  }

  }

  questionsApp.init();

})