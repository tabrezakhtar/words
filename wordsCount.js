const txt = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made \away \with three-quarters of his \income.`

const txt2 = " //wont won't won't"
const txt3 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
const txt4 = ''
const txt5 = "hello testing testing"

//the split command isnt efficient for memory usage.  maybe a regex could be a better solution to get the words.
const result = txt5.toLowerCase().replace(/(\n|\r|[^a-zA-Z0-9'])/g,' ').split(' ');

//this could be done with reduce, but I find it easier to debug when I write code imperatively
let counts = {};
for (const word of result) {
  if (word.trim()) {
    if (counts[word]) {
      counts[word] = counts[word] + 1;
    } else {
      counts[word] = 1;
    }
  }
}

const sorted = Object.entries(counts).sort(([key1, value1], [key2, value2]) => value2 - value1)

console.log(sorted.splice(0,3))