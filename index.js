function changeImageSrc() {
  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");

  var dice1Score = Math.floor(Math.random() * 6) + 1;
  var dice2Score = Math.floor(Math.random() * 6) + 1;
  console.log(dice1Score + " " + dice2Score);

  image1.src = "images/dice" + dice1Score + ".png";
  image2.src = "images/dice" + dice2Score + ".png";

  if (dice1Score > dice2Score) {
    document.querySelector("h1").innerHTML = " <span>🥳</span> Player 1 Wins!";
  } else if (dice1Score < dice2Score) {
    document.querySelector("h1").innerHTML = " <span>🥳</span> Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = " <span>😂</span> Draw";
  }

  changeImageSrc = function () {};
}

changeImageSrc();
