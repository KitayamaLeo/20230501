let time = 60; // 初期タイマーの値（秒）
let prize = 0; // 初期賞金の値
let prizeIncrease = 10; // 賞金の増加量

function startTimer() {
  time = parseInt(document.getElementById("time").value);
  prizeIncrease = parseInt(document.getElementById("prize").value);

  let timer = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = formatTime(time);

    if (time % 1 === 0) {
      prize += prizeIncrease;
      document.getElementById("prize-display").innerHTML = "$" + prize;
    }

    if (time === 0) {
      clearInterval(timer);
      alert("Time's up! You won $" + prize + "!");
    }
  }, 1000);
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  return minutes.toString().padStart(2, "0") + ":" + remainderSeconds.toString().padStart(2, "0");
}
