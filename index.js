// add solution here

function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (var i = 0; i < musicians.length; i++) {
    allMusicians.push(musicians[i]+" plays "+instruments[i]);
  }
  return allMusicians;
}

<<<<<<< HEAD
function johnLennonFacts(facts){
  var newFacts = [];
=======
function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  ]
  var newFacts = []
>>>>>>> 7178992960c9597d7fea62b3fb61ea57d9f95696
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i]+"!!!");
    i ++;
  }
  return newFacts;
<<<<<<< HEAD
}

function iLoveTheBeatles(num){
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}
