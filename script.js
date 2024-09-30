const textareaEl = document.querySelector(".textarea");
const charactersNumEl = document.querySelector(".stat__number--characters");
const xNumEl = document.querySelector(".stat__number--x");
const linkedInNumEl = document.querySelector(".stat__number--linkedin");
const wordsNumEl = document.querySelector(".stat__number--words");

const InputHandler = () => {
  // check for invalid / malicious content
  if (textareaEl.value.includes("<script>")) {
    alert("You can't use that");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  //update number of chars
  UpdateChars();

  //update number of chars
  UpdateX();

  //update number of chars
  UpdateLinkedIn();

  //update number of chars
  UpdateWords();
};

function UpdateChars() {
  // determine new number
  const numberOfChar = textareaEl.value.length;

  // set new characters amount
  charactersNumEl.textContent = numberOfChar;
}

function UpdateX() {
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

function UpdateLinkedIn() {
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

function UpdateWords() {
  // find number of words in string textarea
  const numberOfWords = WordCount(textareaEl.value);

  // set new characters amount
  wordsNumEl.textContent = numberOfWords;
}

function WordCount(str) {
  return str.split(" ").filter(function (n) {
    return n != "";
  }).length;
}

// main
textareaEl.addEventListener("input", InputHandler);
