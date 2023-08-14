function palindromeCheck(word: string): boolean {
  const wordList = word.toLowerCase().split('');

  if (wordList.length == 1) {
    return true;
  }

  let firstChar = wordList.shift();
  let lastChar = wordList.pop();

  while (firstChar === lastChar) {
    firstChar = wordList.shift();
    lastChar = wordList.pop();

    if ([firstChar, lastChar].includes(undefined)) {
      return true;
    }
  }

  return false;
}

const interestWord = 'racecar'; // Type a word

const isPalindrome = palindromeCheck(interestWord);

if (isPalindrome) {
  console.log(`${interestWord} is palindrome`);
} else {
  console.log(`${interestWord} is not palindrome`);
}