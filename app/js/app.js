angular.module('ppp', ['ngDragDrop'])
.controller('PuzzleController', ['$scope', function ($scope) {
  $scope.puzzle = {
    quote: "Be the change that you wish to see in the world.",
    quoteBy: "Mahatma Ghandi",
    source: "Some Source, Feb. 13, 1967",
    purchaseLink: "https://www.etsy.com/shop/DonnaDiddit",
    shuffledLetters: [],
    words: function() {
      return this.quote.split(' ');
    },
    letters: function() {
      return this.quote.match(/\w/gi);
    },
    shuffle: function() {
      var letters = this.letters().join('').shuffle().toUpperCase();
      this.shuffledLetters = [];
      for(var i=0; i<letters.length; i++) {
        this.shuffledLetters.push(letters[i]);
      }
    },
    difficulty: function() {
      var numLetters = this.letters().length;
      if(numLetters > 40) {
        return "Hard";
      } else if( numLetters > 20) {
        return "Medium";
      } else {
        return "Easy";
      }
    }
  };
  $scope.draggables = [];
  $scope.addDraggable = function(data) {
    this.draggables.push(data);
  };
  $scope.puzzle.shuffle();
   $scope.startCallback = function(event, ui) {
    console.log('You started draggin');
  };

  $scope.stopCallback = function(event, ui) {
    console.log('Why did you stop draggin me?');
  };

  $scope.dragCallback = function(event, ui) {
    console.log('hey, look I`m flying');
  };

  $scope.dropCallback = function(event, ui) {
    console.log('hey, you dumped me :-(');
  };

  $scope.overCallback = function(event, ui) {
    console.log('Look, I`m over you');
  };

  $scope.outCallback = function(event, ui) {
    console.log('I`m not, hehe');
  };

  $scope.acceptor = function() {
    return true;
  };
}])
.directive('pppHint', function() {
  return {
    restrict: 'EA',
    replace: true,
    template: '<div data-drop="true" jqyoui-droppable></div>',
    link: function(scope, element) {

      var words = scope.puzzle.words(),
          quotationMark = $('<button>'),
          elem = $(element);

      quotationMark.attr('type', 'button');
      quotationMark.attr('class', 'btn btn-default pin pin-placeholder pin-punctuation disabled');
      quotationMark.text('"');

      elem.append(quotationMark);

      //console.log("Words: " + words);

      for( var i=0; i<words.length; i++ ) {

        var wordElem = $('<div>');
        wordElem.attr('class', 'btn-group pin-word');

        for( var j=0; j<words[i].length; j++ ) {

          var letter = $('<div jqyoui-droppable="{onDrop:\'dropCallback\',onOver: \'overCallback\', onOut: \'outCallback\'}">'),
              isPunctuation = false;

          letter.attr('class', 'btn btn-default pin pin-placeholder');
          letter.attr('data-drop', 'true');
          //letter.attr('jqyoui-droppable', '{onDrop:\'dropCallback\',onOver: \'overCallback\', onOut: \'outCallback\'}');
          //letter.attr('data-jqyoui-options', '');

          if( i+1 !== words.length && j+1 === words[i].length ) {
            letter.addClass('pin-word-end');
          }

          if( !/\w/.test(words[i].charAt(j)) ) {
            letter.addClass('pin-punctuation disabled');
            isPunctuation = true;
          }

          if( isPunctuation ) {
            letter.text(words[i].charAt(j));
          }

          wordElem.append(letter);
        }

        elem.append(wordElem);
      }

      elem.append(quotationMark.clone());
    }
  };
})
.directive('pppLetter', function() {

  return {
    restrict: 'EA',
    template: '<div class="btn btn-default pin pin-letter" data-drag="true" jqyoui-draggable="{letter:\'{{letter}}\',animate:true,placeholder:\'keep\',onStart:\'startCallback(item, $index)\', onStop: \'stopCallback\', onDrag: \'dragCallback\'}" data-jqyoui-options="{revert: \'invalid\'}" ng-transclude></div>',
    transclude: true,
    replace: true
  };

});

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};


