// // Image Variables for HTML
var twitter = document.getElementById('twitter');
twitter.src = 'twitter.jpg';

var linkedin = document.getElementById('linkedin');
linkedin.src = 'linkedin.gif';

var github = document.getElementById('github');
github.src = 'github.jpg';

var seattle = document.getElementById('seattle');
seattle.src = 'seattle.jpg';

// Greeting to User

var userName = prompt('Hey there!  Welcome to my neato page.  What\'s your name?');
alert('Nice to meet you, ' + userName + ' . I\'m going to ask you some questions.  Hope you\'re ready for a game!');
console.log('The user said their name is ' + userName);
var score = 0;

// Variables and arrays for the For Loop

var score = 0;
var questions = ['Do I have any pets?', 'Do I have more brothers or sisters?', 'Do I own more watches or pairs of shoes?', 'What kind of phone do I own, iPhone or Android?', 'Coke or Pepsi?'];
var correctAns = ['no', 'sisters', 'watches', 'android', 'coke'];
var numberOfQuestions = 5;
var correctResponses = ['You are correct, ' + userName + '. No pets here!', 'Yup!  6 in total.  Crazy, right?', 'Watches it is!  I kind of have a problem...', 'Yup!  Customization is the best.', 'Phew.  Thought you might say Pepsi there...'];
var incorrectResponses = ['Actually, I don\'t, but I do want a dog someday!', 'Nope!  I actually have 6 sisters!', 'I like watches better.  Have 7 total!', 'Ew gross.  No.', 'Pepsi is WAAAY too sweet.  Prefer Coke much more.'];

 //For Loop for the above

for (var i = 0; i < numberOfQuestions; i++) {
  var answer = prompt(questions[i]);
  if (answer === correctAns[i]) {
    alert(correctResponses[i]);
    score += 1;
  } else if (answer !== correctAns[i]) {
    alert(incorrectResponses[i][0] + userName + incorrectResponses[i][1]);
  }
}
// Question 6 - My Jersey # in Basketball

var correctAns = 8;
var counter6 = 0;

for (var i = 0; i < 4; i++) {
  var response6 = parseInt(prompt('So I played basketball when I was in High School.  Can you guess what number I wore?'));
  if (response6 === correctAns) {
    alert('Yup!  That\'s the number I used, ' + userName + '!');
    score += 1;
    i = 6;
  }
  else if (response6 > correctAns) {
    alert('Nope, not quite.  Lower');
    counter6 += 1;
  }
  else if (response6 < correctAns) {
    alert('Nope, not quite.  Higher.');
    counter6 += 1;
  }
};

// Question 7 - Where have I traveled

var myCountries = ['japan', 'korea', 'germany', 'canada'];
var counter7 = 6;

while (counter7 > 0) {
  var response7 = prompt('I\'ve traveled quite a bit. Can you guess one of the other countries I\'ve been to?').toLowerCase;
  if (response7 === myCountries[0] || response7 === myCountries[1] || response7 === myCountries[2] || response7 === myCountries[3]) {
    alert('Yes I\'ve been to ' + response7 + '. I\'ve been to ' + myCountries);
    score += 1;
    counter7 = 0;
  }
  else {
    --counter7;
    alert('Sorry ' + userName + ' That\'s incorrect. You have ' + counter7 + ' tries remaining.');
  }
}
alert('Thanks for finishing! Your score was ' + score + ' out of 7.');
