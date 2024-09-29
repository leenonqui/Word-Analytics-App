const textareaEl = document.querySelector(".textarea");
const charactersNumEl = document.querySelector(".stat__number--characters");
const xNumEl = document.querySelector(".stat__number--x");
const linkedInNumEl = document.querySelector(".stat__number--linkedin");
const wordsNumEl = document.querySelector(".stat__number--words");

function updateChars() {
  // determine new number
  const numberOfChar = textareaEl.value.length;

  // set new characters amount
  charactersNumEl.textContent = numberOfChar;
}

function updateX() {
  // determine new number of char used
  const numberOfChar = textareaEl.value.length;

  // calculate num of remaining chars
  const remainingChars = 280 - numberOfChar;

  // set new x amount
  xNumEl.textContent = remainingChars;

  //add visual indicator when limit is exceeded
  if (remainingChars < 0) {
    xNumEl.classList.add("stat__number--limit");
    //xNumEl.style.color = "red";
  } else {
    xNumEl.classList.remove("stat__number--limit");
    //xNumEl.style.color = "#4d5457";
  }
}

function updateLinkedIn() {
  // determine new number of char used
  const numberOfChar = textareaEl.value.length;

  // calculate num of remaining chars
  const remainingChars = 3000 - numberOfChar;

  // set new characters amount
  linkedInNumEl.textContent = remainingChars;

  //add visual indicator when limit is exceeded
  if (remainingChars < 0) {
    linkedInNumEl.classList.add("stat__number--limit");
    //linkedInNumEl.style.color = "red";
  } else {
    linkedInNumEl.classList.remove("stat__number--limit");
    //linkedInNumEl.style.color = "#4d5457";
  }
}

function updateWords() {
  // determine new number
  const numberOfChar = textareaEl.value.length;

  // set new characters amount
  wordsNumEl.textContent = numberOfChar;
}

textareaEl.addEventListener("input", function () {
  //update number of chars
  updateChars();

  //update number of chars
  updateX();

  //update number of chars
  updateLinkedIn();

  //update number of chars
  //updateWords();
});
