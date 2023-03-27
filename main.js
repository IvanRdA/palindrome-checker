
// ELEMENTS FROM THE DOM 
let input = document.getElementById('string');
const button = document.getElementById('form-btn');
let box = document.getElementById('result-box');
let value = '';
let left;
let right;

button.addEventListener('click', (e) => {
    
    if(isPalindrome(value) === true){
        box.innerHTML = "<h3 class='success-msg'>" + value + " is a palindrome!</h3>";
    }else{
        box.innerHTML = "<h3 class='error-msg'>" + value + " is not a palindrom. Letter '" + left + "' from left don't match '" + right + "' from right</h3>";
    }
    e.preventDefault();
});

input.addEventListener('change', (e) => {
    value = e.target.value;
});

// ALGORITHM: RUNS IN O(n) TIME COMPLEXITY WHERE N = STRING LENGTH AND O(1) SPACE COMPLEXITY WHICH IS CONSTANT SPACE
function isPalindrome(string){
    let end = string.length - 1;
    let start = 0;
    
    while(start <= end){
        if(string.charAt(start) != string.charAt(end)){
            left = string.charAt(start);
            right = string.charAt(end);
            return false
        }
        start++;
        end--;
    }
    return true;
}