import cipher from './cipher.js';

// Calling variables from html

const message = document.getElementById('message');
const offset = document.getElementById('offset');
const codeBtn = document.getElementById('code');
const decodeBtn = document.getElementById('decode');
const result = document.getElementById('result');

codeBtn.addEventListener('click', () => {
  result.innerHTML = cipher.encode(offset.value, message.value);
})

decodeBtn.addEventListener('click', () => {
  result.innerHTML = cipher.decode(offset.value, message.value);
})