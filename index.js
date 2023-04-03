import cipher from './cipher.js';

// Calling variables from html

const message = document.getElementById('message');
const offset = document.getElementById('offset');
const codeBtn = document.getElementById('code');
const decodeBtn = document.getElementById('decode');
const result = document.getElementById('output');
const copyBtn = document.getElementById('copy-text-btn');

codeBtn.addEventListener('click', () => {
  if(message.value.length === 0 || offset.value.length === 0) {
    result.style.color = 'red';
    result.innerHTML = "Try again! Don't forget to enter your message and offset."
    
  } else {
    result.style.color = 'var(--main-light-blue)';
    result.innerHTML = cipher.encode(offset.value, message.value);
    setTimeout(() => {
      message.value = '';
      offset.value = '';
    }, "3000")
  }
})

decodeBtn.addEventListener('click', () => {
  if(message.value.length === 0 || offset.value.length === 0) {
    result.style.color = 'red';
    result.innerHTML = "Try again! Don't forget to enter your message and offset."
    
  } else {
    result.style.color = 'var(--main-light-blue)';
    result.innerHTML = cipher.decode(offset.value, message.value);
    setTimeout(() => {
      message.value = '';
      offset.value = '';
    }, "3000")
  }
})

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(result.textContent);
})
