function splitWords(text) {
  //The split command isnt efficient for memory usage.  maybe a regex could be a better solution to get the words.
  return text ? text.toLowerCase().replace(/(\n|\r|[^a-zA-Z0-9'])/g,' ').split(' ').filter(item => item) : [];
}

//This could be done with reduce which is a more functional way of writing code.
//I find it easier to debug when I write code imperatively.  If this was inside a redux reducer, I would write this in a functional style.
function countWords(words) {
  let counts = {};
  for (const word of words) {
    if (counts[word]) {
      counts[word] = counts[word] + 1;
    } else {
      counts[word] = 1;
    }
  }
  
  return Object.entries(counts).sort(([key1, value1], [key2, value2]) => value2 - value1)
}

function top3Words(words) {
  const formattedWords = splitWords(words);
  const counts = countWords(formattedWords);
  return counts.splice(0,3).map(c => c[0]);
}

module.exports = {splitWords, countWords, top3Words}