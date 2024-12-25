let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      cheakWin();
      cheakDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0";
  }
}


// Select the audio and mute button elements
let backgroundMusic = document.querySelector("#background-music");
let muteButton = document.querySelector("#mute-toggle");

// Play background music on page load
backgroundMusic.volume = 0.5; // Set initial volume
backgroundMusic.play();

// Add event listener for the mute button
muteButton.addEventListener("click", () => {
  if (backgroundMusic.muted) {
    // If muted, unmute the music and update button text
    backgroundMusic.muted = false;
    muteButton.innerHTML = "Mute Music";
  } else {
    // If not muted, mute the music and update button text
    backgroundMusic.muted = true;
    muteButton.innerHTML = "Unmute Music";
  }
});

let xWins = 0;
let oWins = 0;

// Update the scoreboard
function updateScoreboard() {
  document.getElementById("x-wins").innerText = xWins;
  document.getElementById("o-wins").innerText = oWins;
}


function cheakWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true; // Corrected variable name
      document.querySelector("#results").innerHTML = turn + " wins"; // Updated message
      document.querySelector("#play-again").style.display = "inline";

       // Update win counters
       if (turn === "X") {
        xWins++;
      } else {
        oWins++;
      }

      // Update the scoreboard
      updateScoreboard();

      for (let j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
        boxes[winConditions[i][j]].style.color = "#000";
      }
      return; // Exit loop once a win is detected
    }
  }
}

// Reset the scoreboard on page reload
window.addEventListener("load", () => {
  xWins = 0;
  oWins = 0;
  updateScoreboard();
});


function cheakDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });

    if (isDraw) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = "Draw";
      document.querySelector("#play-again").style.display = "inline";
    }
  }
}

document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  document.querySelector("#results").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
  });
  
  
});
