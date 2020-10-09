function splitWords(text) {
  //the split command isnt efficient for memory usage.  maybe a regex could be a better solution to get the words.
  return text ? text.toLowerCase().replace(/(\n|\r|[^a-zA-Z0-9'])/g,' ').split(' ') : [];
}

//this could be done with reduce, but I find it easier to debug when I write code imperatively
function countWords(words) {
  let counts = {};
  for (const word of words) {
    if (word.trim()) {
      if (counts[word]) {
        counts[word] = counts[word] + 1;
      } else {
        counts[word] = 1;
      }
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