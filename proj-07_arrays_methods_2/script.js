// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});
console.log(isAdult);
// console.log({isAdult})

// Same output, less code:
const isAdultNicer = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isAdultNicer);

// Array.prototype.every() // is everyone 19 or older?
const isEveryAdult = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isEveryAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// using arrow functions:
const codeID = comments.find((comment) => comment.id === 823423);
console.log(codeID);

// Array.prototype.findIndex()
// 1.) Find the comment with this ID
// 2.) delete the comment with the ID of 823423
const index = comments.findIndex((kodMaskinen) => kodMaskinen.id === 823423);
console.log("find in index:", index);

// comments.splice(index, 1);
console.table(comments);

// or the ES6 way:
const newCommentsArray = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1),
];
console.table(newCommentsArray);
