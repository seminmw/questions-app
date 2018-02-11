var Shuffle = function (data) {
  this.data = data;
}

Shuffle.prototype.toShuffle = function ( array ) {
  var that = this;
  var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);

      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
    }

    return copy;

}

Shuffle.prototype.shuffleOfAnswers = function () {
  var that = this;

  that.data = that.toShuffle(that.data);
  that.data.forEach( function(element,index) {
    that.data[index].answers = that.toShuffle(element.answers);
  });

  return that.data;
}