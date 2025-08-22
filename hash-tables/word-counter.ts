const text = "Hello my name name name is khasherdene";

const wordCounter = (text: string) => {
  const lowerText = text.toLowerCase();
  const words = lowerText.split(/\s+/);
  const wordMap: { [key: string]: number } = {};
  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }
  return wordMap;
};

console.log(wordCounter(text));
