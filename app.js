//Greeting to User
 var userName = prompt('Hey there!  Welcome to my neato page.  What\'s your name?');
 alert('Nice to meet you, ' + userName + ' . I\'m going to ask you some questions.  Hope you\'re ready for a game!');
 console.log('The user said their name is ' + userName);
//Variables and arrays for the For Loop
//  var correct = 0;
//  var questions = ['Do I have any pets?', 'Do I have more brothers or sisters?', 'Do I own more watches or pairs of shoes?', 'What kind of phone do I own, iPhone or Android?', 'Coke or Pepsi?'];
//  var correctAns = ['no', 'sisters', 'watches', 'android', 'coke'];
//  var numberOfQuestions = 5;
//  var correctResponses = ['You are correct, ' + userName + '. No pets here!', 'Yup!  6 in total.  Crazy, right?', 'Watches it is!  I kind of have a problem...', 'Yup!  Customization is the best.', 'Phew.  Thought you might say Pepsi there...'];
//  var incorrectResponses = ['Actually, I don\'t, but I do want a dog someday!', 'Nope!  I actually have 6 sisters!', 'I like watches better.  Have 7 total!', 'Ew gross.  No.', 'Pepsi is WAAAY too sweet.  Prefer Coke much more.'];
//
// //For Loop for the above
//  for (var i = 0; i < numberOfQuestions; i++) {
//    var answer = prompt(questions[i]);
//    if (answer === correctAns[i]) {
//      alert(correctResponses[i][0] + userName + correctResponses[i][1]);
//      correct += 1;
//    } else if (answer !== correctAns[i]) {
//      alert(incorrectResponses[i][0] + userName + incorrectResponses[i][1]);
//    }
//  }
 var response1 = prompt('Do I have any pets?').toLowerCase();
 var answer1 = 'no';

 if (response1 === answer1 || response1 === answer1[0]){
   alert('You are correct, ' + userName + '. No pets here!');
 } else {
   alert('Nope!  Sorry, ' + userName + '.  No pets here!');
 }
 console.log('The user answered with ' + response1);

 var response2 = prompt('How many sisters do you think I have?');
 var answer2 = 6;
 console.log('The user thought I have ' + response2 + ' sisters');

 if (response2 === 6) {
   alert('Correct!  Kind of crazy, right ' + userName + '!');
 } else if (response2 < 6) {
   alert('Nope!  I have more.  7.  I know, it\'s hard to believe...');
 } else {
   alert('Whoa, that would be a LOT!');
 }
 var response3 = prompt('How many watches do I own?');
 var answer3 = 7;
 console.log('The user thinks I have ' + response3 + ' watches');

 if (response3 === 7) {
   alert('Yup!  Totally right.  I kind of have a problem...');
 } else if (response3 > 4 && response3 < 7) {
   alert('Not quite, but so close!  I actually have 7.');
 } else if (response3 < 5) {
   alert('Not even close, ' + userName + '.  I actually have 7!');
 } else if (response3 > 7) {
   alert('Whoa now. I don\'t have THAT many... Only 7...');
 }

 alert('A little over halfway done!  2 more to go :D');

 var response4 = prompt('What kind of phone do I own, iPhone or Android?').toLowerCase();
 var answer4 = 'android';
 console.log('The user has an ' + response4);

 if (response4 === answer4) {
   alert('Yup!  Android for life!');
 } else {
   alert('Ew gross. Never.  You\'re not an Apple person, are you, ' + userName + '?');
 }
 var response5 = prompt('Coke or Pepsi?').toLowerCase();
 console.log('The user said they preferred ' + response5);
 if (response5 === 'coke'){
   alert('Me too!  Pepsi is way too sweet to me.');
 } else if (response5 === 'pepsi') {
   alert('I think Pepsi is WAAAY too sweet.  Just not my thing...');
 } else {
   alert('Don\'t like either then?  I can respect that, ' + userName + '.');
 }

//Question 6 - My Jersey # in Basketball

 var response6 = prompt('So I played basketball when I was in High School.  Can you guess what number I wore?');
 var counter = 0;
 var maxGuesses = 3;
 var correctAns = 8;

 for (var i = 0; i < 5; i++); {
   if (response6 === correctAns) {
     alert('Yup!  That\'s the number I used, ' + userName + '!');
     correct += 1;
   } else if (response6 > correctAns) {
     alert('Nope, not quite.  Lower');
     counter += 1;
   } else if (response6 < correctAns) {
     alert('Nope, not quite.  Higher.');
     counter += 1;
   } if (counter === 4) {
     alert('Sorry, it was 8.');
   }
 }
//Question 7 - Where have I traveled
 var response7 = prompt('I\'ve traveled quite a bit.  Can you guess one of the other countries I\'ve been to?');
 var maxGuesses1 = 6;
