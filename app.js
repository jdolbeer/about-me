// //Greeting to User
//
var userName = prompt('Hey there!  Welcome to my neato page.  What\'s your name?');
alert('Nice to meet you, ' + userName + ' . I\'m going to ask you some questions.  Hope you\'re ready for a game!');
console.log('The user said their name is ' + userName);
var score = 0;

// Calling all the game functions

questionYesNo1();
questionYesNo2();
questionYesNo3();
questionYesNo4();
questionYesNo5();

// Question 1
function questionYesNo1() {

  var response1 = prompt('Do I have any pets?').toLowerCase();
  var answer1 = 'no';

  if (response1 === answer1 || response1 === answer1[0]) {
    alert('You are correct, ' + userName + '. No pets here!');
    ++score;
  } else {
    alert('Nope!  Sorry, ' + userName + '.  No pets here!');
  }
  console.log('The user answered with ' + response1);
}

 // Question 2

function questionYesNo2() {
  var response2 = parseInt(prompt('How many sisters do you think I have?'));
  var answer2 = 6;
  console.log('The user thought I have ' + response2 + ' sisters');

  if (response2 === answer2) {
    alert('Correct!  Kind of crazy, right ' + userName + '!');
    ++score;
  } else if (response2 < answer2) {
    alert('Nope!  I have more.  7.  I know, it\'s hard to believe...');
  } else {
    alert('Whoa, that would be a LOT!');
  }
}

// Question 3

function questionYesNo3() {
  var response3 = parseInt(prompt('How many watches do I own?'));
  var answer3 = 7;
  console.log('The user thinks I have ' + response3 + ' watches');

  if (response3 === answer3) {
    alert('Yup!  Totally right.  I kind of have a problem...');
    ++score;
  } else if (response3 > 4 && response3 < 7) {
    alert('Not quite, but so close!  I actually have 7.');
  } else if (response3 < 5) {
    alert('Not even close, ' + userName + '.  I actually have 7!');
  } else if (response3 > 7) {
    alert('Whoa now. I don\'t have THAT many... Only 7...');
  }
}

alert('A little over halfway done!  2 more to go :D');

// Question 4

function questionYesNo4() {
  var response4 = prompt('What kind of phone do I own, iPhone or Android?').toLowerCase();
  var answer4 = 'android';
  console.log('The user has an ' + response4);

  if (response4 === answer4) {
    alert('Yup!  Android for life!');
    ++score;
  } else {
    alert('Ew gross. Never.  You\'re not an Apple person, are you, ' + userName + '?');
  }
}

// Question 5

function questionYesNo5() {
  var response5 = prompt('Coke or Pepsi?').toLowerCase();
  console.log('The user said they preferred ' + response5);
  if (response5 === 'coke'){
    alert('Me too!  Pepsi is way too sweet to me.');
    ++score;
  } else if (response5 === 'pepsi') {
    alert('I think Pepsi is WAAAY too sweet.  Just not my thing...');
  } else {
    alert('Don\'t like either then?  I can respect that, ' + userName + '.');
  }
}

// Question 6 - My Jersey # in Basketball

var correctAns = 8;
var counter6 = 0;

for (var i = 0; i < 4; i++) {
  var response6 = parseInt(prompt('So I played basketball when I was in High School.  Can you guess what number I wore?'));
  if (response6 === correctAns) {
    alert('Yup!  That\'s the number I used, ' + userName + '!');
    ++score;
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

var myCountries = ['Japan', 'Korea', 'Germany', 'Canada'];
var counter7 = 6;

while (counter7 > 0) {
  var response7 = prompt('I\'ve traveled quite a bit. Can you guess one of the other countries I\'ve been to?');
  if (response7 === myCountries[0] || response7 === myCountries[1] || response7 === myCountries[2] || response7 === myCountries[3]) {
    alert('Yes I\'ve been to ' + response7 + '. I\'ve been to ' + myCountries);
    ++score;
    counter7 = 0;
  }
  else {
    --counter7;
    alert('Sorry ' + userName + ' That\'s incorrect. You have ' + counter7 + ' tries remaining.');
  }
}

alert('Thanks for finishing! Your score was ' + score + ' out of 7.');

var userName = 'Jlksdh';
// Variables and arrays for the For Loop
var correct = 0;
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
    correct += 1;
  } else if (answer !== correctAns[i]) {
    alert(incorrectResponses[i][0] + userName + incorrectResponses[i][1]);
  }
}
