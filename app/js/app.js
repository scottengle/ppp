angular.module('ppp', ['ngDragDrop', 'timer'])
.controller('PuzzleController', ['$scope', '$timeout', function ($scope, $timeout) {

  $scope.puzzleData = {};
  $scope.puzzleData.small = [
    {
        "id": "UN0019",
        "name": "Common Phrase #1",
        "quote": "Happy Anniversary!",
        "source": "",
        "difficulty": "Easy"
    },
    // {
    //     "id": "UN0020",
    //     "name": "Common Phrase #2",
    //     "quote": "Congratulations!",
    //     "source": "",
    //     "difficulty": "Easy"
    // },
    {
        "id": "UN0004",
        "name": "Common Phrase #3",
        "quote": "Will You Marry Me?",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN014",
        "name": "Common Phrase #4",
        "quote": "Merry Christmas!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0001",
        "name": "Common Phrase #5",
        "quote": "Happy Birthday!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0005",
        "name": "Common Phrase #6",
        "quote": "I Want A Divorce.",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0015",
        "name": "Common Phrase #7",
        "quote": "Happy Hanukkah!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0016",
        "name": "Common Phrase #8",
        "quote": "Happy Holidays!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0017",
        "name": "Common Phrase #9",
        "quote": "Peace, Love & Joy",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0018",
        "name": "Common Phrase #10",
        "quote": "Happy New Year!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0009",
        "name": "Common Phrase #11",
        "quote": "Get Well Soon!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0010",
        "name": "Common Phrase #12",
        "quote": "OMGWTFBBQ!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0011",
        "name": "Common Phrase #13",
        "quote": "For The Win!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0003",
        "name": "Common Phrase #14",
        "quote": "It's A Girl!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0006",
        "name": "Common Phrase #15",
        "quote": "I Love You!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UNUN0007",
        "name": "Common Phrase #16",
        "quote": "Mazel Tov!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0008",
        "name": "Common Phrase #17",
        "quote": "Thank You!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0002",
        "name": "Common Phrase #18",
        "quote": "It's A Boy!",
        "source": "",
        "difficulty": "Easy"
    },
    {
        "id": "UN0002",
        "name": "Common Phrase #19",
        "quote": "I'm Sorry!",
        "source": "",
        "difficulty": "Easy"
    }
  ];

  $scope.puzzleData.medium = [
    {
        "id": "SC0002",
        "name": "Albert Einstein",
        "quote": "Imagination is more important than knowledge.",
        "source": "Einstein, Albert, and Bernard Shaw. Einstein on Cosmic Religion: And Other Opinions and Aphorisms. Dover ed. Mineola, N.Y.: Dover Publications, 2009.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0005",
        "name": "Anaïs Nin",
        "quote": "My hair is being pulled by the stars again.",
        "source": "Nin, Anais. Fire: From \"A Journal of Love\" : The Unexpurgated Diary of Anaïs Nin, 1934-1937. New York: Harcourt Brace, 1995.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0006",
        "name": "Anakreon of Teos",
        "quote": "The dice of love are madness and turmoil.",
        "source": "Rayor, Diane J. Sappho's Lyre Archaic Lyric and Women Poets of Ancient Greece. Berkeley: U of California, 1991.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0008",
        "name": "Archilochus of Paros",
        "quote": "Limb loosening desire conquers me.",
        "source": "Rayor, Diane J. Sappho's Lyre Archaic Lyric and Women Poets of Ancient Greece. Berkeley: U of California, 1991.",
        "difficulty": "Medium"
    },
    {
        "id": "SC0003",
        "name": "Janna Levin",
        "quote": "The universe is not a silent movie.",
        "source": "Levin, Janna. \"The Sound the Universe Makes.\" Janna Levin:. TED Talks, Mar. 2011. <>.",
        "difficulty": "Medium"
    },
    {
        "id": "SC0004",
        "name": "Jill Tarter",
        "quote": "You never have to stop asking why.",
        "source": "Nova, The Secret Life of Scientists and Engineers, Video Profile Jill Tarter. <>",
        "difficulty": "Medium"
    },
    {
        "id": "LT0003",
        "name": "Lewis Carroll",
        "quote": "Who in the world am I? Ah, that's the great puzzle.",
        "source": "Carroll, Lewis. Alice's Adventures in Wonderland. London: MacMillan and Co., 1865.",
        "difficulty": "Medium"
    },
    {
        "id": "PH0005",
        "name": "Mahatma Gandhi",
        "quote": "Nothing is impossible for pure love.",
        "source": "Gandhi, Mahatma and Mahadev Desai. Gandhi, an Autobiography: The Story of My Experiments with Truth. London: Phoenix, 1949.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0011",
        "name": "Mark Twain",
        "quote": "The funniest things are the forbidden. ",
        "source": "Twain, Mark, and Frederick Anderson. Mark Twain's Notebooks and Journals. Berkeley: U of California, 1975.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0014",
        "name": "Mary Wollstonecraft Shelley",
        "quote": "Live, and be happy, and make others so.",
        "source": "Shelley, Mary Wollstonecraft, and James Rieger. Frankenstein, Or, The Modern Prometheus, the 1818 Text. Phoenix ed. Chicago: U of Chicago, 1982.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0026",
        "name": "Maya Angelou",
        "quote": "When you learn, teach. When you get, give.",
        "source": "Our Grandmothers'.",
        "difficulty": "Medium"
    },
    {
        "id": "PH0006",
        "name": "Mother Teresa",
        "quote": "Love is a fruit in season at all times.",
        "source": "Hunt, Dorothy S. Love, a Fruit Always in Season: Daily Meditations from the Words of Mother Teresa of Calcutta. San Francisco: Ignatius, 1987.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0027",
        "name": "Oscar Wilde",
        "quote": "One can resist everything but temptation.",
        "source": "Phrases and philosophies for the use of the young. Oscar Wilde.Published 1907 by A.R. Keller in London, N.Y.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0004",
        "name": "Oscar Wilde",
        "quote": "One should always be a little improbable.",
        "source": "Wilde, Oscar, and Aubrey Beardsley. Phrases and Philosophies for the Use of the Young. London: [L. Smithers], 1903.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0002",
        "name": "Rūmī ",
        "quote": "Let the beauty of what you love be what you do.",
        "source": "Ferguson, Linda J. Path for Greatness: Work as Spiritual Service. West Conshohocken, PA.: Infinity, 2011.",
        "difficulty": "Medium"
    },
    {
        "id": "SC0001",
        "name": "Stephen Hawking",
        "quote": "It matters that you don’t just give up.",
        "source": "A Brief History of Mine. Stephen Hawkins. 8 January 2012. Lady Mitchell Hall, Sidgwick Avenue, Cambridge University, England.",
        "difficulty": "Medium"
    },
    {
        "id": "LT0001",
        "name": "William Shakespeare",
        "quote": "If music be the food of love, play on.",
        "source": "Shakespeare, William, and George Steevens. The Dramatic Works of Shakspeare. London: Printed by W. Bulmer and, Shakspeare Printing Office, for John and Josiah Boydell, and George Nicol, from the Types of W. Martin, 1802.",
        "difficulty": "Medium"
    },
    {
        "id": "PH0007",
        "name": "Hillel the Elder",
        "quote": "If I am not for myself who is for me? And being for my own self, what am 'I'? And if not now, when?",
        "source": "",
        "difficulty": "Medium"
    }
  ];

  $scope.puzzleData.large = [
    {
        "id": "SC0007",
        "name": "Albert Einstein",
        "quote": "The most beautiful experience we can have is the mysterious.",
        "source": "Einstein, Albert, and Carl Seelig. Ideas and Opinions: Based on Mein Weltbild. New York: Crown Publishers, 1954.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0007",
        "name": "Archilochus of Paros",
        "quote": "The fox knows many things; the hedgehog, one big thing.",
        "source": "Rayor, Diane J. Sappho's Lyre Archaic Lyric and Women Poets of Ancient Greece. Berkeley: U of California, 1991.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0025",
        "name": "Audre Lorde",
        "quote": "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
        "source": "Lorde, Audre. Our Dead behind Us: Poems. New York: W.W. Norton, 1986.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0022",
        "name": "Catherine Aird",
        "quote": "If you can't be a good example, then you'll just have to be a horrible warning.",
        "source": "Aird, Catherine. His Burial Too. Garden City, N.Y.: Published for the Crime Club by Doubleday, 1973.",
        "difficulty": "Hard"
    },
    {
        "id": "PH0002",
        "name": "Early Medieval Ireland",
        "quote": "Three candles that illume every darkness: truth, nature, knowledge.",
        "source": "Meyer, Kuno. Selections from Ancient Irish Poetry,. 2d Impression. ed. London: Constable, 1911.",
        "difficulty": "Hard"
    },
    {
        "id": "PO0005",
        "name": "Eleanor Roosevelt",
        "quote": "There is no more exhilarating experience than to determine one's position, state it bravely and then act boldly.",
        "source": "Roosevelt, Eleanor. Tomorrow Is Now. New York: Harper & Row, 1963.",
        "difficulty": "Hard"
    },
    {
        "id": "AR0003",
        "name": "Francisco Goya",
        "quote": "Fantasy, abandoned by reason, produces impossible monsters; united with it, she is the mother of the arts and the origin of marvels.",
        "source": "Goya, Francisco. El sueño de la razón produce monstruos. Plate 43 of Los Caprichos. 1799 .Etching, aquatint, drypoint and burin. The Metropolitan Museum of Art.",
        "difficulty": "Hard"
    },
    {
        "id": "AR0004",
        "name": "Frida Kahlo",
        "quote": "What would I do without the absurd and the ephemeral?",
        "source": "Kahlo, Frida, and Sarah M. Lowe. The Diary of Frida Kahlo: An Intimate Self-portrait. New York: H.N. Abrams, 1995.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0009",
        "name": "Krista Tippett",
        "quote": "Compassion cultivates and practices curiosity.",
        "source": "Tippett, Krista. \"Reconnecting with Compassion.\" Krista Tippett:. TEDPrize, 1 Nov. 2010. Web<>",
        "difficulty": "Hard"
    },
    {
        "id": "PH0003",
        "name": "Lewis Carroll",
        "quote": "If you drink much from a bottle marked 'poison' it is almost certain to disagree with you, sooner or later.",
        "source": "Carroll, Lewis. Alice's Adventures in Wonderland. London: MacMillan and Co., 1865.",
        "difficulty": "Hard"
    },
    {
        "id": "AR0002",
        "name": "Louis Armstrong",
        "quote": "What a wonderful world it would be if only we'd give it a chance. Love baby, love. That's the secret, yeah.",
        "source": "What a Wonderful World it Would Be. Louis Armstrong and His Friends. 1970. Flying Dutchman, Amsterdam.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0010",
        "name": "Luigi Pirandello",
        "quote": "Oh sir, you know well that life is full of infinite absurdities which strangely enough, do not even need to appear plausible since they are true.",
        "source": "Pirandello, Luigi. Three Plays. New York: E.P. Dutton, 1922. Sei personaggi in cerca d'autore.",
        "difficulty": "Hard"
    },
    {
        "id": "PH0003",
        "name": "Mahatma Gandhi",
        "quote": "A man is but the product of his thoughts. What he thinks, he becomes.",
        "source": "Gandhi, Mahatma. Ethical Religion Nîthi Dharma. 2d ed. Madras: S. Ganesan, 1922.",
        "difficulty": "Hard"
    },
    {
        "id": "SC0005",
        "name": "Maria Mitchell",
        "quote": "Study as if you were going to live forever; live as if you were going to die tomorrow.",
        "source": "Cook, John. The Book of Positive Quotations. 2nd ed. Minneapolis: Fairview, 2007.",
        "difficulty": "Hard"
    },
    {
        "id": "SC0006",
        "name": "Marie Curie",
        "quote": "Stability can only be attained by inactive matter.",
        "source": "\"Marie Curie - Nobel Lecture: Radium and the New Concepts in Chemistry\" Nobelprize.org. Nobel Media AB 2014. http://www.nobelprize.org/nobel_prizes/chemistry/laureates/1911/marie-curie-lecture.html",
        "difficulty": "Hard"
    },
    {
        "id": "LT0012",
        "name": "Mark Twain",
        "quote": "Always do right. This will gratify some people, and astonish the rest.",
        "source": "Twain, Mark. To the Young People's Society, Greenpoint Presbyterian Church, Brooklyn. February 16, 1901",
        "difficulty": "Hard"
    },
    {
        "id": "LT0013",
        "name": "Mark Twain",
        "quote": "Education consists mainly in what we have unlearned.",
        "source": "Twain, Mark, and Albert Bigelow Paine. Mark Twain's Notebook. [2nd ed. St. Clair Shores, Mich.: Scholarly, 1971.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0024",
        "name": "Neil Gaiman",
        "quote": "So be wise, because the world needs more wisdom, and if you cannot be wise, pretend to be someone who is wise, and then just behave like they would.",
        "source": "Gaiman, Neil. \"Make Good Art.\" Keynote Speech, 134th Commencement from The University of the Arts in Philadelphia, Philadelphia, Pennsylvania, May 17, 2012.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0015",
        "name": "Octavia Butler",
        "quote": "Intelligence is ongoing, individual adaptability.",
        "source": "Butler, Octavia E. Parable of the Sower. A Four Walls Eight Windows 1st ed. New York: Four Walls Eight Windows, 1993.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0016",
        "name": "Octavia Butler",
        "quote": "We are born Not with purpose, But with potential.",
        "source": "Butler, Octavia E. Parable of the Talents: A Novel. A Seven Stories Press 1st ed. New York: Seven Stories, 1998.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0028",
        "name": "Oscar Wilde",
        "quote": "After a good dinner one can forgive anybody, even one's own relations.",
        "source": "Phrases and philosophies for the use of the young. Oscar Wilde.Published 1907 by A.R. Keller in London, N.Y.",
        "difficulty": "Hard"
    },
    {
        "id": "PO0001",
        "name": "President Barack Hussein Obama",
        "quote": "On this day, we gather because we have chosen hope over fear, unity of purpose over conflict and discord.",
        "source": "Inaugural Speech of the 44th President of the United States of America President Barack Hussein Obama. January 20, 2009",
        "difficulty": "Hard"
    },
    {
        "id": "LT0017",
        "name": "Salma Al-Khadra' al-Jayyusi",
        "quote": "My cup has many cracks yet the wine always kissed the brim.",
        "source": "Boullata, Kamal. Women of the Fertile Crescent: An Anthology of Modern Poetry by Arab Women. Washington: Three Continents, 1978.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0018",
        "name": "Sappho of Lesbos",
        "quote": "You came when I was longing for you, and to my heart suffering in passion's fire you were delicious ice.",
        "source": "Barnstone, Willis. Sappho Poems: A New Version. Los Angeles: Sun & Moon, 1998.",
        "difficulty": "Hard"
    },
    {
        "id": "PH0001",
        "name": "Tenzin Gyatso 14th Dalai Lama ",
        "quote": "Reason well from the beginning and then there will never be any need to look back with confusion and doubt.",
        "source": "Lama, Dalai and Mullin, Glenn H., The Path to Enlightenment. Ithaca, N.Y.: Snow Lion Publications, 1995",
        "difficulty": "Hard"
    },
    {
        "id": "LT0019",
        "name": "Tom Robbins",
        "quote": "To achieve the impossible, it is precisely the unthinkable that must be thought.",
        "source": "Robbins, Tom. Jitterbug Perfume. Toronto: Bantam, 1984.",
        "difficulty": "Hard"
    },
    {
        "id": "LT0021",
        "name": "Wislawa Szymborska",
        "quote": "Any knowledge that doesn't lead to new questions quickly dies out.",
        "source": "\"Wislawa Szymborska - Nobel Lecture: The Poet and the World\". Nobelprize.org.Nobel Media AB 2014. Web. <http://www.nobelprize.org/nobel_prizes/literature/laureates/1996/szymborska-lecture.html>",
        "difficulty": "Hard"
    },
    {
        "id": "LT0020",
        "name": "Wislawa Szymborska",
        "quote": "Whatever inspiration is, it's born from a continuous \"I don't know.\"",
        "source": "\"Wislawa Szymborska - Nobel Lecture: The Poet and the World\". Nobelprize.org. Nobel Media AB 2014. <>",
        "difficulty": "Hard"
    }
  ];

  $scope.puzzle = {

    quote: "",

    quoteBy: "",

    source: "",

    difficulty: "",

    purchaseLink: "https://www.etsy.com/shop/DonnaDiddit",

    letters: [],

    shuffledLetters: [],

    words: [],

    correct: 0,

    solved: false,

    shuffle: function() {

      var draggableLetters = this.letters.join('').shuffle().toUpperCase();

      this.shuffledLetters = [];

      for(var i=0; i<draggableLetters.length; i++) {

        this.shuffledLetters.push(draggableLetters[i]);

      }

    }

  };

  $scope.setPuzzleData = function(puzzle) {

    var selectedPuzzle;

    $scope.mergedPuzzleData = $scope.puzzleData.small.concat($scope.puzzleData.medium, $scope.puzzleData.large);

    if(puzzle) {

      selectedPuzzle = puzzle;

    } else {

      puzzleIndex = Math.floor((Math.random() * $scope.mergedPuzzleData.length));

      selectedPuzzle = $scope.mergedPuzzleData[puzzleIndex];

    }

    console.log(selectedPuzzle);

    $scope.puzzle.id = selectedPuzzle.id;
    $scope.puzzle.quote = selectedPuzzle.quote;
    $scope.puzzle.quoteBy = selectedPuzzle.name;
    $scope.puzzle.source = selectedPuzzle.source;
    $scope.puzzle.difficulty = selectedPuzzle.difficulty;

    $scope.puzzle.words = selectedPuzzle.quote.split(' ');

    $scope.puzzle.indexedCharacters = function() {

      console.log(selectedPuzzle.quote.split(''));

    }();

    console.log("Scope Words: " + $scope.puzzle.words);

    $scope.puzzle.letters = selectedPuzzle.quote.match(/\w/gi);

    console.log("Scope Letters: " + $scope.puzzle.letters);

    $scope.puzzle.shuffle();

  };

  $scope.setPuzzleData();

  $scope.startCallback = function(event, ui) {

    $scope.uncheckAnswer();

    $scope.unassignPin(event.target);

  };

  $scope.dropCallback = function(event, ui) {

    if(!$(event.target).hasClass('disabled')) {

      $scope.placePin(ui.draggable.get(0), event.target);

    }

  };

  $scope.assignPin = function(pin, placeholder) {

    pin.placeholder = placeholder;

    placeholder.pin = pin;

  };

  $scope.unassignPin = function(pin) {

    if(pin.placeholder) {

      delete pin.placeholder.pin;

      delete pin.placeholder;

    }

  };

  $scope.placePin = function(pin, placeholder) {

    $(pin).offset(

      { top: $(placeholder).offset().top + ($(placeholder).outerWidth() - $(pin).outerWidth())/2,

        left: $(placeholder).offset().left + ($(placeholder).outerWidth() - $(pin).outerWidth())/2

      }

    );

    $scope.assignPin(pin, placeholder);

  };

  $scope.unplacePin = function(pin) {

    $(pin).offset(

      { top: $(pin).parent().offset().top + ($(pin).parent().outerWidth() - $(pin).outerWidth())/2,

        left: $(pin).parent().offset().left + ($(pin).parent().outerWidth() - $(pin).outerWidth())/2 }

    );

    $scope.unassignPin(pin);

  };

  $scope.revert = function(event) {

    if( $(event.context).hasClass('disabled') || !$(event.context).hasClass('ui-droppable') || event.context.pin ) {

      return true;

    }

  };

  $scope.giveHint = function() {

    var placeholders = $('.pin-placeholder').filter(function(idx, elem) {

          if($(this).hasClass('pin-punctuation')) {

            return false;

          } else {

            return !this.pin || (this.pin && $(this.pin).text() != $(this).attr('correct'));

          }

        }),

        unplacedPins = $('.pin-letter').filter(function(idx, elem) {

          return !this.placeholder || (this.placeholder && $(this.placeholder).attr('correct') != $(this).text());

        }),

        hintIndex = Math.floor((Math.random() * unplacedPins.length)),

        hintLetter = $(unplacedPins[hintIndex]).text(),

        incorrectlyPlacedPins = placeholders.filter(function() {

          if(this.pin && $(this.pin).text() !== $(this).attr('correct')){

            return true;

          }

        });

    // Reset all incorrectly placed pins

    unplacedPins.each(function() {

      $scope.unplacePin(this);

    });

    for(var i=0; i<placeholders.length; i++) {

      if( hintLetter === $(placeholders[i]).attr('correct')) {

        // if there isn't already a pin here
        if( !placeholders[i].pin ) {

          $scope.unassignPin(unplacedPins[hintIndex]);

          $scope.placePin(unplacedPins[hintIndex], placeholders[i]);

        }

      }

    }

    $scope.updateCorrectAnswers();

  };

  $scope.checkAnswer = function() {

    $('.pin-placeholder').each(function() {

      if(this.pin) {

        var correctValue = $(this).attr('correct'),
            pinValue = $(this.pin).text();

        if(correctValue !== pinValue) {

          $(this).removeClass('pin-placeholder-correct', 0);

          $(this).addClass('pin-placeholder-incorrect', 0);

        } else {

          $(this).removeClass('pin-placeholder-incorrect', 0);

          $(this).addClass('pin-placeholder-correct', 0);

        }

        $(this).removeClass('pin-placeholder-correct pin-placeholder-incorrect', 3000);

      }

    });

    $scope.updateCorrectAnswers();

  };

  $scope.updateCorrectAnswers = function() {
    var count = 0;

    $('.pin-placeholder').each(function() {

      if(this.pin) {

        if($(this).attr('correct') === $(this.pin).text()) {

          count++;

        }

      }

    });

    $scope.puzzle.correct = count;

    if(!$scope.puzzle.solved && count === $scope.puzzle.letters.length) {

      $scope.puzzle.solved = true;

      $timeout(function() { alert('You Win!'); }, 100);

    }

  };

  $scope.resetPuzzle = function() {

    $('.pin-letter').each(function() {

      $scope.unplacePin($(this).get(0));

    });

    $scope.puzzle.correct = 0;
    $scope.startTimer();
    $scope.stopTimer();
    $scope.timerStarted = false;
    $scope.timerRunning = false;

  };

  $scope.uncheckAnswer = function() {

    $('.pin-placeholder').removeClass('pin-placeholder-correct pin-placeholder-incorrect');

  };

  $scope.timerStarted = false;
  $scope.timerRunning = false;

  $scope.startTimer = function(){

    $scope.timerStarted = true;
    $scope.timerRunning = true;
    $scope.$broadcast('timer-start');

  };

  $scope.stopTimer = function(){

      $scope.timerRunning = false;
      $scope.$broadcast('timer-stop');

  };

  $scope.resumeTimer = function() {

    $scope.timerRunning = true;
    $scope.$broadcast('timer-resume');

  };

  $scope.resetTimer = function() {

    $scope.timerRunning = false;
    $scope.$broadcast('timer-stop');
    $scope.$broadcast('timer-clear');

  };

  $scope.onPuzzleChange = function() {

    $scope.resetPuzzle();
    $scope.setPuzzleData($scope.selectedPuzzle);

  };

}])
.directive('pppQuotationMark', function() {

  return {

    restrict: 'EA',

    replace: true,

    template: '<div class="btn btn-default pin pin-placeholder pin-punctuation disabled">"</div>'

  };

})
.directive('pppHint', function() {

  return {

    restrict: 'EA',

    replace: true,

    transclude: true,

    template: '<div class="pin-hint-area" ng-transclude></div>'

  };

})
.directive('pppHintWord', function() {

  return {

    restrict: 'EA',

    replace: true,

    transclude: true,

    template: '<div class="btn-group pin-word pin-hint-word pin-word-end" ng-transclude></div>',

    link: function(scope, element, attrs) {

      if(scope.$last) {

         $(element).removeClass('pin-word-end');

      }

    }

  };

})
.directive('pppHintLetter', function() {

  return {

    restrict: 'EA',

    replace: true,

    transclude: true,

    templateUrl: '/app/js/hintLetterTemplate.html',

    link: function(scope, element) {

      $(element).removeClass('pin-punctuation disabled');

      console.log("Index: " + scope.$index);
      console.log("Received Letter: " + scope.letter);

      if( !/\w/.test(scope.letter) ) {

        console.log("Letter " + scope.letter + " tested as punctuation.");

        $(element).addClass('pin-punctuation');

        $(element).addClass('disabled');

        $(element).attr('data-drop', false);

        $(element).attr('data-jqyoui-options', '{disable}');

      } else {

        console.log("Letter " + scope.letter + " tested as a normal character.");

        $(element).text('');

      }

    }

  };

})
.directive('pppLetter', function() {

  return {

    restrict: 'EA',

    templateUrl: '/app/js/letterTemplate.html',

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