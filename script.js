const input = document.getElementById("input");
const paragraph = document.getElementById("Paragraph");

function updateParagraph(text) {
  paragraph.textContent = text;
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleInput = debounce((event) => {
  updateParagraph(event.target.value);
}, 300);

input.addEventListener("input", handleInput);
