function isPalindrome(arr) {
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
      if (arr[left] != arr[right]) {
        return false;
      }
      left ++;
      right --;
    }
    return true;
  }

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", () => {
  let inputValue = textInput.value.trim();

  if (inputValue === "") {
    alert('Please input a value');
    return;
  }

  const cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const inputArray = cleanedInput.split("");

  const palindromeResult = isPalindrome(inputArray);

  if (palindromeResult) {
    resultDiv.textContent = `${inputValue} is a palindrome.`;
  } else {
    resultDiv.textContent = `${inputValue} is not a palindrome.`;
  }
});