const {top3Words} = require('./wordCounts');


const txt1 = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance 
in the lance-rack, an old buckler, a lean hack, and a greyhound for 
coursing. An olla of rather more beef than mutton, a salad on most 
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra 
on Sundays, made away with three-quarters of his income.`;

const txt2 = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e;'

const txt3 = " //wont won't won't";

console.log(top3Words(txt1));
console.log(top3Words(txt2));
console.log(top3Words(txt3));