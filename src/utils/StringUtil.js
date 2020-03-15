export default {
  limitCharacters: (word, maxLength) => {
    if (word <= maxLength) return word;
    else {
      return `${word.substring(0, 20)}...`;
    }
  }
}