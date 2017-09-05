const liri = require('./liriCode.js')
const inquirer = require('inquirer');


var question = [{
		type: 'input',
		name: 'your_name',
		message: 'Hello , my name is Liri , What\'s your  name'

	}



];

inquirer.prompt(question).then(function(answer) {

	function mainMenue() {

		inquirer.prompt([{
			type: 'list',
			message: `${answer.your_name}, What you want to do?`,
			name: 'commands',
			choices: [
				new inquirer.Separator(' <---Choices---> '), {
					name: 'Look Seans\' tweets'
				}, {
					name: 'Find Tweets on any topic'
				}, {
					name: 'Find the Song'
				}, {
					name: 'Find the movie'
				}, {
					name: 'Do a random'
				}, {
					name: 'Exit'
				}


			],



		}]).then(function(answers) {


			console.log(answers.commands)

			if (answers.commands === 'Look Seans\' tweets') {

				liri.FindSolution('my-tweets')


				setTimeout(mainMenue, 3000)
			};
			if (answers.commands === 'Find Tweets on any topic') {


				const TweetTopic = {

					type: 'input',
					name: 'your_tweet',
					message: 'Looking tweet abot what?'

				}


				inquirer.prompt(TweetTopic).then(function(tweet) {

					liri.FindSolution(`tweets ${tweet.your_tweet}`)

					setTimeout(mainMenue, 3000)

				})



			};

			if (answers.commands === 'Find the Song') {


				const SongTopic = {

					type: 'input',
					name: 'your_song',
					message: 'What song are you looking for?'

				}


				inquirer.prompt(SongTopic).then(function(song) {

					liri.FindSolution(`spotify-this-song  ${song.your_song}`)

					setTimeout(mainMenue, 3000)

				});

			}

			if (answers.commands === 'Find the movie') {


				const MovieTopic = {

					type: 'input',
					name: 'your_movie',
					message: 'What movie are you looking for?'

				}


				inquirer.prompt(MovieTopic).then(function(movie) {

					liri.FindSolution(`movie-this  ${movie.your_movie}`)

					setTimeout(mainMenue, 3000)

				});

			}


			if (answers.commands === 'Do a random') {

				liri.FindSolution('do-what-it-says')
				setTimeout(mainMenue, 3000)

			}

			if (answers.commands === 'Exit') {

				liri.FindSolution('do-what-it-says')

					process.exit()
			}


		});
	}
	mainMenue()

});