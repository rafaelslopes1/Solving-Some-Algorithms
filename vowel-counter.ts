function countVowels(phrase: string): number {
  const checkIfVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char);

  const phraseList = phrase.split('');
  const onlyVowels = phraseList.filter(char => checkIfVowel(char));
  const numberOfVowels = onlyVowels.length;

  return numberOfVowels;
}

const phrase = 'Create a function that counts the number of vowels in a string.' // Type a phrase to count the number of vowels

const numberOfVowels = countVowels(phrase);

console.log(numberOfVowels);