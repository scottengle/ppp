(function() {
    'use strict';
    
    angular
        .module('ppp')
		.factory('puzzleDataService', puzzleDataService);
	
	puzzleDataService.$inject = ['$q'];
	
	function puzzleDataService($q) {
		
		var svc = {
			getPuzzlesBySize: getPuzzlesBySize
		};
		
		return svc;	
			
		////////

		function getPuzzlesBySize(size) {
			
			var defer = $q.defer();
			var data = [];
			
			switch(size) {
				case 'small':
					data = processQuotes(getSmallPuzzles());
					defer.resolve(data);
					break;
				case 'medium':
					data = processQuotes(getMediumPuzzles());
					defer.resolve(data);
					break;
				case 'large':
					data = processQuotes(getLargePuzzles());
					defer.resolve(data);
					break;
				default:
					data = processQuotes(getSmallPuzzles()).concat(processQuotes(getMediumPuzzles()), processQuotes(getLargePuzzles()));
					defer.resolve(data);
			}
			
			return defer.promise;
		}
		
		function processQuotes(quotes) {
			angular.forEach(quotes, function(quote) {
				if(quote.rawQuote) {
					quote.quote = {};
					quote.quote.letters = [];
					quote.quote.words = 0;
					quote.quote.draggableLetters = [];
					
					var rawWords = quote.rawQuote.split(' ');
					
					for(var i=0; i<rawWords.length; i++) {
						var currentWord = {};
						currentWord.isFirst = (i === 0);
						currentWord.isLast = (i === rawWords.length - 1);
						currentWord.id = quote.id + '_word' + (i+1);
						currentWord.rawWord = rawWords[i];
						for(var j=0; j<currentWord.rawWord.length; j++) {
							var currentLetter = {};
							currentLetter.id = currentWord.id + '_letter' + (j+1);
							currentLetter.isFirst = (currentWord.isFirst && j === 0);
							currentLetter.isWordStart = (j === 0);
							currentLetter.isWordEnd = (j === currentWord.rawWord.length - 1);
							currentLetter.isLast = (currentWord.isLast && currentLetter.isWordEnd);
							currentLetter.value = currentWord.rawWord[j].toUpperCase();
							currentLetter.isPunctuation = !/\w/.test(currentLetter.value);
							quote.quote.letters.push(currentLetter);
							
							if(currentLetter.isWordEnd) {
								quote.quote.words++;
							}
							
							if(!currentLetter.isPunctuation) {
								quote.quote.draggableLetters.push(currentLetter.value);
							}
						}
					}
					
					shuffle(quote.quote.draggableLetters);
				}
			});
			return quotes;
		}
		
		function getSmallPuzzles() {
			return [
				{
				    "id": "UN0019",
				    "name": "Common Phrase #1",
				    "rawQuote": "Happy Anniversary!",
				    "source": "",
				    "difficulty": "Easy"
				},
				// {
				//     "id": "UN0020",
				//     "name": "Common Phrase #2",
				//     "rawQuote": "Congratulations!",
				//     "source": "",
				//     "difficulty": "Easy"
				// },
				{
				    "id": "UN0004",
				    "name": "Common Phrase #3",
				    "rawQuote": "Will You Marry Me?",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN014",
				    "name": "Common Phrase #4",
				    "rawQuote": "Merry Christmas!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0001",
				    "name": "Common Phrase #5",
				    "rawQuote": "Happy Birthday!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0005",
				    "name": "Common Phrase #6",
				    "rawQuote": "I Want A Divorce.",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0015",
				    "name": "Common Phrase #7",
				    "rawQuote": "Happy Hanukkah!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0016",
				    "name": "Common Phrase #8",
				    "rawQuote": "Happy Holidays!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0017",
				    "name": "Common Phrase #9",
				    "rawQuote": "Peace, Love & Joy",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0018",
				    "name": "Common Phrase #10",
				    "rawQuote": "Happy New Year!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0009",
				    "name": "Common Phrase #11",
				    "rawQuote": "Get Well Soon!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0010",
				    "name": "Common Phrase #12",
				    "rawQuote": "OMGWTFBBQ!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0011",
				    "name": "Common Phrase #13",
				    "rawQuote": "For The Win!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0003",
				    "name": "Common Phrase #14",
				    "rawQuote": "It's A Girl!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0006",
				    "name": "Common Phrase #15",
				    "rawQuote": "I Love You!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UNUN0007",
				    "name": "Common Phrase #16",
				    "rawQuote": "Mazel Tov!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0008",
				    "name": "Common Phrase #17",
				    "rawQuote": "Thank You!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0002",
				    "name": "Common Phrase #18",
				    "rawQuote": "It's A Boy!",
				    "source": "",
				    "difficulty": "Easy"
				},
				{
				    "id": "UN0002",
				    "name": "Common Phrase #19",
				    "rawQuote": "I'm Sorry!",
				    "source": "",
				    "difficulty": "Easy"
				}
			];
		}
		
		function getMediumPuzzles() {
			return [
			    {
			        "id": "SC0002",
			        "name": "Albert Einstein",
			        "rawQuote": "Imagination is more important than knowledge.",
			        "source": "Einstein, Albert, and Bernard Shaw. Einstein on Cosmic Religion: And Other Opinions and Aphorisms. Dover ed. Mineola, N.Y.: Dover Publications, 2009.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0005",
			        "name": "Anaïs Nin",
			        "rawQuote": "My hair is being pulled by the stars again.",
			        "source": "Nin, Anais. Fire: From \"A Journal of Love\" : The Unexpurgated Diary of Anaïs Nin, 1934-1937. New York: Harcourt Brace, 1995.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0006",
			        "name": "Anakreon of Teos",
			        "rawQuote": "The dice of love are madness and turmoil.",
			        "source": "Rayor, Diane J. Sappho's Lyre Archaic Lyric and Women Poets of Ancient Greece. Berkeley: U of California, 1991.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0008",
			        "name": "Archilochus of Paros",
			        "rawQuote": "Limb loosening desire conquers me.",
			        "source": "Rayor, Diane J. Sappho's Lyre Archaic Lyric and Women Poets of Ancient Greece. Berkeley: U of California, 1991.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "SC0003",
			        "name": "Janna Levin",
			        "rawQuote": "The universe is not a silent movie.",
			        "source": "Levin, Janna. \"The Sound the Universe Makes.\" Janna Levin:. TED Talks, Mar. 2011. <>.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "SC0004",
			        "name": "Jill Tarter",
			        "rawQuote": "You never have to stop asking why.",
			        "source": "Nova, The Secret Life of Scientists and Engineers, Video Profile Jill Tarter. <>",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0003",
			        "name": "Lewis Carroll",
			        "rawQuote": "Who in the world am I? Ah, that's the great puzzle.",
			        "source": "Carroll, Lewis. Alice's Adventures in Wonderland. London: MacMillan and Co., 1865.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "PH0005",
			        "name": "Mahatma Gandhi",
			        "rawQuote": "Nothing is impossible for pure love.",
			        "source": "Gandhi, Mahatma and Mahadev Desai. Gandhi, an Autobiography: The Story of My Experiments with Truth. London: Phoenix, 1949.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0011",
			        "name": "Mark Twain",
			        "rawQuote": "The funniest things are the forbidden. ",
			        "source": "Twain, Mark, and Frederick Anderson. Mark Twain's Notebooks and Journals. Berkeley: U of California, 1975.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0014",
			        "name": "Mary Wollstonecraft Shelley",
			        "rawQuote": "Live, and be happy, and make others so.",
			        "source": "Shelley, Mary Wollstonecraft, and James Rieger. Frankenstein, Or, The Modern Prometheus, the 1818 Text. Phoenix ed. Chicago: U of Chicago, 1982.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0026",
			        "name": "Maya Angelou",
			        "rawQuote": "When you learn, teach. When you get, give.",
			        "source": "Our Grandmothers'.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "PH0006",
			        "name": "Mother Teresa",
			        "rawQuote": "Love is a fruit in season at all times.",
			        "source": "Hunt, Dorothy S. Love, a Fruit Always in Season: Daily Meditations from the Words of Mother Teresa of Calcutta. San Francisco: Ignatius, 1987.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0027",
			        "name": "Oscar Wilde",
			        "rawQuote": "One can resist everything but temptation.",
			        "source": "Phrases and philosophies for the use of the young. Oscar Wilde.Published 1907 by A.R. Keller in London, N.Y.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0004",
			        "name": "Oscar Wilde",
			        "rawQuote": "One should always be a little improbable.",
			        "source": "Wilde, Oscar, and Aubrey Beardsley. Phrases and Philosophies for the Use of the Young. London: [L. Smithers], 1903.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0002",
			        "name": "Rūmī ",
			        "rawQuote": "Let the beauty of what you love be what you do.",
			        "source": "Ferguson, Linda J. Path for Greatness: Work as Spiritual Service. West Conshohocken, PA.: Infinity, 2011.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "SC0001",
			        "name": "Stephen Hawking",
			        "rawQuote": "It matters that you don’t just give up.",
			        "source": "A Brief History of Mine. Stephen Hawkins. 8 January 2012. Lady Mitchell Hall, Sidgwick Avenue, Cambridge University, England.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "LT0001",
			        "name": "William Shakespeare",
			        "rawQuote": "If music be the food of love, play on.",
			        "source": "Shakespeare, William, and George Steevens. The Dramatic Works of Shakspeare. London: Printed by W. Bulmer and, Shakspeare Printing Office, for John and Josiah Boydell, and George Nicol, from the Types of W. Martin, 1802.",
			        "difficulty": "Medium"
			    },
			    {
			        "id": "PH0007",
			        "name": "Hillel the Elder",
			        "rawQuote": "If I am not for myself who is for me? And being for my own self, what am 'I'? And if not now, when?",
			        "source": "",
			        "difficulty": "Medium"
			    }
			];
		}
		
		function getLargePuzzles() {
			return [
			    {
			        "id": "SC0007",
			        "name": "Albert Einstein",
			        "rawQuote": "The most beautiful experience we can have is the mysterious.",
			        "source": "Einstein, Albert, and Carl Seelig. Ideas and Opinions: Based on Mein Weltbild. New York: Crown Publishers, 1954.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0007",
			        "name": "Archilochus of Paros",
			        "rawQuote": "The fox knows many things; the hedgehog, one big thing.",
			        "source": "Rayor, Diane J. Sappho's Lyre Archaic Lyric and Women Poets of Ancient Greece. Berkeley: U of California, 1991.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0025",
			        "name": "Audre Lorde",
			        "rawQuote": "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
			        "source": "Lorde, Audre. Our Dead behind Us: Poems. New York: W.W. Norton, 1986.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0022",
			        "name": "Catherine Aird",
			        "rawQuote": "If you can't be a good example, then you'll just have to be a horrible warning.",
			        "source": "Aird, Catherine. His Burial Too. Garden City, N.Y.: Published for the Crime Club by Doubleday, 1973.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "PH0002",
			        "name": "Early Medieval Ireland",
			        "rawQuote": "Three candles that illume every darkness: truth, nature, knowledge.",
			        "source": "Meyer, Kuno. Selections from Ancient Irish Poetry,. 2d Impression. ed. London: Constable, 1911.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "PO0005",
			        "name": "Eleanor Roosevelt",
			        "rawQuote": "There is no more exhilarating experience than to determine one's position, state it bravely and then act boldly.",
			        "source": "Roosevelt, Eleanor. Tomorrow Is Now. New York: Harper & Row, 1963.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "AR0003",
			        "name": "Francisco Goya",
			        "rawQuote": "Fantasy, abandoned by reason, produces impossible monsters; united with it, she is the mother of the arts and the origin of marvels.",
			        "source": "Goya, Francisco. El sueño de la razón produce monstruos. Plate 43 of Los Caprichos. 1799 .Etching, aquatint, drypoint and burin. The Metropolitan Museum of Art.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "AR0004",
			        "name": "Frida Kahlo",
			        "rawQuote": "What would I do without the absurd and the ephemeral?",
			        "source": "Kahlo, Frida, and Sarah M. Lowe. The Diary of Frida Kahlo: An Intimate Self-portrait. New York: H.N. Abrams, 1995.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0009",
			        "name": "Krista Tippett",
			        "rawQuote": "Compassion cultivates and practices curiosity.",
			        "source": "Tippett, Krista. \"Reconnecting with Compassion.\" Krista Tippett:. TEDPrize, 1 Nov. 2010. Web<>",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "PH0003",
			        "name": "Lewis Carroll",
			        "rawQuote": "If you drink much from a bottle marked 'poison' it is almost certain to disagree with you, sooner or later.",
			        "source": "Carroll, Lewis. Alice's Adventures in Wonderland. London: MacMillan and Co., 1865.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "AR0002",
			        "name": "Louis Armstrong",
			        "rawQuote": "What a wonderful world it would be if only we'd give it a chance. Love baby, love. That's the secret, yeah.",
			        "source": "What a Wonderful World it Would Be. Louis Armstrong and His Friends. 1970. Flying Dutchman, Amsterdam.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0010",
			        "name": "Luigi Pirandello",
			        "rawQuote": "Oh sir, you know well that life is full of infinite absurdities which strangely enough, do not even need to appear plausible since they are true.",
			        "source": "Pirandello, Luigi. Three Plays. New York: E.P. Dutton, 1922. Sei personaggi in cerca d'autore.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "PH0003",
			        "name": "Mahatma Gandhi",
			        "rawQuote": "A man is but the product of his thoughts. What he thinks, he becomes.",
			        "source": "Gandhi, Mahatma. Ethical Religion Nîthi Dharma. 2d ed. Madras: S. Ganesan, 1922.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "SC0005",
			        "name": "Maria Mitchell",
			        "rawQuote": "Study as if you were going to live forever; live as if you were going to die tomorrow.",
			        "source": "Cook, John. The Book of Positive Quotations. 2nd ed. Minneapolis: Fairview, 2007.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "SC0006",
			        "name": "Marie Curie",
			        "rawQuote": "Stability can only be attained by inactive matter.",
			        "source": "\"Marie Curie - Nobel Lecture: Radium and the New Concepts in Chemistry\" Nobelprize.org. Nobel Media AB 2014. http://www.nobelprize.org/nobel_prizes/chemistry/laureates/1911/marie-curie-lecture.html",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0012",
			        "name": "Mark Twain",
			        "rawQuote": "Always do right. This will gratify some people, and astonish the rest.",
			        "source": "Twain, Mark. To the Young People's Society, Greenpoint Presbyterian Church, Brooklyn. February 16, 1901",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0013",
			        "name": "Mark Twain",
			        "rawQuote": "Education consists mainly in what we have unlearned.",
			        "source": "Twain, Mark, and Albert Bigelow Paine. Mark Twain's Notebook. [2nd ed. St. Clair Shores, Mich.: Scholarly, 1971.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0024",
			        "name": "Neil Gaiman",
			        "rawQuote": "So be wise, because the world needs more wisdom, and if you cannot be wise, pretend to be someone who is wise, and then just behave like they would.",
			        "source": "Gaiman, Neil. \"Make Good Art.\" Keynote Speech, 134th Commencement from The University of the Arts in Philadelphia, Philadelphia, Pennsylvania, May 17, 2012.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0015",
			        "name": "Octavia Butler",
			        "rawQuote": "Intelligence is ongoing, individual adaptability.",
			        "source": "Butler, Octavia E. Parable of the Sower. A Four Walls Eight Windows 1st ed. New York: Four Walls Eight Windows, 1993.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0016",
			        "name": "Octavia Butler",
			        "rawQuote": "We are born Not with purpose, But with potential.",
			        "source": "Butler, Octavia E. Parable of the Talents: A Novel. A Seven Stories Press 1st ed. New York: Seven Stories, 1998.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0028",
			        "name": "Oscar Wilde",
			        "rawQuote": "After a good dinner one can forgive anybody, even one's own relations.",
			        "source": "Phrases and philosophies for the use of the young. Oscar Wilde.Published 1907 by A.R. Keller in London, N.Y.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "PO0001",
			        "name": "President Barack Hussein Obama",
			        "rawQuote": "On this day, we gather because we have chosen hope over fear, unity of purpose over conflict and discord.",
			        "source": "Inaugural Speech of the 44th President of the United States of America President Barack Hussein Obama. January 20, 2009",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0017",
			        "name": "Salma Al-Khadra' al-Jayyusi",
			        "rawQuote": "My cup has many cracks yet the wine always kissed the brim.",
			        "source": "Boullata, Kamal. Women of the Fertile Crescent: An Anthology of Modern Poetry by Arab Women. Washington: Three Continents, 1978.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0018",
			        "name": "Sappho of Lesbos",
			        "rawQuote": "You came when I was longing for you, and to my heart suffering in passion's fire you were delicious ice.",
			        "source": "Barnstone, Willis. Sappho Poems: A New Version. Los Angeles: Sun & Moon, 1998.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "PH0001",
			        "name": "Tenzin Gyatso 14th Dalai Lama ",
			        "rawQuote": "Reason well from the beginning and then there will never be any need to look back with confusion and doubt.",
			        "source": "Lama, Dalai and Mullin, Glenn H., The Path to Enlightenment. Ithaca, N.Y.: Snow Lion Publications, 1995",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0019",
			        "name": "Tom Robbins",
			        "rawQuote": "To achieve the impossible, it is precisely the unthinkable that must be thought.",
			        "source": "Robbins, Tom. Jitterbug Perfume. Toronto: Bantam, 1984.",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0021",
			        "name": "Wislawa Szymborska",
			        "rawQuote": "Any knowledge that doesn't lead to new questions quickly dies out.",
			        "source": "\"Wislawa Szymborska - Nobel Lecture: The Poet and the World\". Nobelprize.org.Nobel Media AB 2014. Web. <http://www.nobelprize.org/nobel_prizes/literature/laureates/1996/szymborska-lecture.html>",
			        "difficulty": "Hard"
			    },
			    {
			        "id": "LT0020",
			        "name": "Wislawa Szymborska",
			        "rawQuote": "Whatever inspiration is, it's born from a continuous \"I don't know.\"",
			        "source": "\"Wislawa Szymborska - Nobel Lecture: The Poet and the World\". Nobelprize.org. Nobel Media AB 2014. <>",
			        "difficulty": "Hard"
			    }
			];
		}
	}
	
	function shuffle(array) {
		var counter = array.length, temp, index;
	
		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			index = (Math.random() * counter--) | 0;
	
			// And swap the last element with it
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
	}
	
})();