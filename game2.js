

let timer;

function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemList = document.getElementById("itemList");
  const newItem = itemInput.value;

  if (newItem.trim() !== "") {
    if (itemList.children.length < 10) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(newItem));
      const deleteButton = document.createElement("span");
      deleteButton.innerHTML = "❌";
      deleteButton.className = "deleteButton";
      deleteButton.onclick = function () {
        itemList.removeChild(li);
      };
      li.appendChild(deleteButton);
      itemList.appendChild(li);
      itemInput.value = "";
    } else {
      alert("Max 10");
    }
  } else {
    alert("Mag niet");
  }
}

function selectRandomItem() {
  const itemList = document.getElementById("itemList");
  const items = itemList.getElementsByTagName("li");
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];
  const randomItemDisplay = document.getElementById("randomItemDisplay");
  randomItemDisplay.textContent = randomItem.textContent;
}

function startCustomTimer() {
  const timerDuration = document.getElementById("timerDuration").value;
  startTimer(timerDuration); // Start timer with specified duration
}

function startTimer(duration) {
  let timerDisplay = document.getElementById("timerDisplay");
  let timerSeconds = duration;
  timer = setInterval(function () {
    timerDisplay.textContent = "Timer: " + timerSeconds + "s";
    timerSeconds--;
    if (timerSeconds < 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Timer: 0s";
      openPopup(); // Call function to display popup when timer ends
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  let timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.textContent = "Timer: 0s";
}

function openPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}
