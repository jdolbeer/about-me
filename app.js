// var userName = prompt('Hey there!  Welcome to my neato page.  What\'s your name?');
// alert('Nice to meet you, ' + userName + ' . I\'m going to ask you some questions.  Hope you\'re ready for a game!');
// console.log('The user said their name is ' + userName);
var userName = 'test';
// var response1 = prompt('Do I have any pets?').toLowerCase();
// var answer1 = 'no';

// }
// if (response1 === answer1 || response1 === answer1[0]){
//   alert('You are correct, ' + userName + '. No pets here!');
// } else {
//   alert('Nope!  Sorry, ' + userName + '.  No pets here!');
// }
var response2 = prompt('How many sisters do you think I have?');
var answer2 = 6;

if (response2 === 6) {
    alert('Correct!  Kind of crazy, right ' + userName + '!');
} else if (response2 < 6) {
    alert('Nope!  I have more.  I know, it\'s hard to believe...');
} else {
    alert('Whoa, that would be a LOT!');
}
