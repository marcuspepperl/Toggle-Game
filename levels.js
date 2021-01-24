class GameData {
  constructor() {
    this.colors = {
      background: "rgb(52, 86, 139)",
      off: "rgb(50, 50, 50)",
      on: "white",
      barrier: "rgb(134, 89, 45)",
      green: "green",
      red: "rgb(184, 0, 20)",
      black: "black"
    }

    this.mainBoards = [];
    this.toggleBoards = [];
    this.moveCounts = [];

    // Level 1
    this.mainBoards.push(
     [[0, 1, 1, 1],
       [1, 0, 1, 1],
       [1, 1, 0, 1],
       [1, 1, 1, 0]]);

    this.toggleBoards.push([[0, 0]]);
    this.moveCounts.push(1);

    // Level 2
    this.mainBoards.push(
    [[0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]]);

    this.toggleBoards.push([[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]]);
    this.moveCounts.push(4);

    // Level 3
    this.mainBoards.push(
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

    this.toggleBoards.push([[0, 0], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1],
                        [2, 0], [0, 2], [-2, 0], [0, -2]]);
    this.moveCounts.push(4);

    // Level 4
    this.mainBoards.push(
      [[0, 0, 0, -1, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0],
        [0, 0, 0,  0, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0]]);

    this.toggleBoards.push([[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]);
    this.moveCounts.push(3);

    // Level 5
    this.mainBoards.push(
      [[0, 0, 0, 0,  0,  0,  0,  0, 0, 0, 1],
        [0, 0, 0, 0,  0,  0,  0,  0, 0, 0, 1],
        [1, 1, 1, 1,  0,  0,  0,  0, 0, 0, 1],
        [1, 0, 0, 1, -1, -1,  0,  0, 0, 0, 1],
        [1, 0, 0, 0, -1, -1, -1, -1, 0, 0, 1],
        [1, 0, 0, 0, -1, -1, -1, -1, 0, 0, 1],
        [1, 0, 0, 0, -1, -1, -1,  0, 1, 1, 1],
        [1, 0, 0, 1,  0,  0,  0,  1, 0, 0, 0],
        [1, 0, 0, 1,  0,  0,  0,  1, 0, 0, 0],
        [1, 0, 0, 1,  0,  0,  0,  1, 0, 0, 0],
        [1, 0, 0, 1,  1,  1,  1,  1, 0, 0, 0]]);

    this.toggleBoards.push([[0, 0], [0, -1], [0, -2], [1, -2], [-1, -2], [0, 1], [0, 2], [1, 2], [-1, 2]]);
    this.moveCounts.push(1);

    // Level 6
    this.mainBoards.push(
      [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

    this.toggleBoards.push([[-1, -1], [1, 1], [-1, 1], [1, -1], [-2, -2], [-2, 2], [2, -2], [2, 2], [2, 0], [0, 2],
        [-2, 0], [0, -2]]);
    this.moveCounts.push(6);

    // Level 7
    this.mainBoards.push(
      [[ 1,  0,  0,  -1,  1,  0,  0,  0],
        [ 0, -1,  0,  0,  0, -1,  1,  0],
        [ 0, -1,  0, -1, -1, -1, -1,  0],
        [ 0, -1,  0, -1,  1,  0,  0,  0],
        [ 0, -1, -1, -1,  0, -1, -1, -1],
        [ 1,  0,  0, -1,  0,  0,  0,  1],
        [-1, -1,  0, -1, -1, -1, -1,  0],
        [ 0,  0,  1,  0,  0,  0,  0,  0]]);

    this.toggleBoards.push([[0, 0]]);
    this.moveCounts.push(17);

    // Level 8
    this.mainBoards.push(
      [[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]]);
    this.toggleBoards.push([[-2, -2], [-2, -1], [-2, 0], [-2, 1], [-2, 2], [-1, 2], [0, 2], [1, 2], [2, 2],
    [2, 1], [2, 0], [2, -1], [2, -2], [1, -2], [0, -2], [-1, -2]]);
    this.moveCounts.push(5);
  }

  getColor(color) {
    return this.colors[color];
  }

  getMainBoard(index) {
    return this.deepCopy(this.mainBoards[index]);
  }

  getToggleBoard(index) {
    return this.deepCopy(this.toggleBoards[index]);
  }

  getMoveCount(index) {
    return this.moveCounts[index];
  }

  getLevels() {
    return this.moveCounts.length;
  }

  deepCopy(matrix) {
    let newMatrix = [];
    for (let row of matrix) {
      let arr = [];
      for (let elem of row) {
        arr.push(elem);
      }
      newMatrix.push(arr);
    }
    return newMatrix;
  }
}

class Game {
  constructor() {
    let game = this;
    this.gameData = new GameData();
    this.level = 1;
    this.startLevel();
  }

  resetLevel() {
    console.log("reset");
    this.clearLevel();
    this.startLevel();
  }

  nextLevel() {
    console.log("next");
    this.clearLevel();
    this.level++;
    this.startLevel();
  }

  clearLevel() {
    this.removeAllChildren(document.getElementById("innerBoard"));
    this.removeAllChildren(document.getElementById("innerToggle"));
    document.getElementById("innerButton").style.display = "hidden";
  }

  startLevel() {
    this.addResetBoardButton();
    this.gameOver = false;
    this.mainNumber = this.gameData.getMainBoard(this.level - 1);
    this.toggleNumber = this.gameData.getToggleBoard(this.level - 1);
    this.movesRemaining = this.gameData.getMoveCount(this.level - 1);
    this.updateTitle();
    this.updateMovesRemaining();
    this.setUpMain();
    this.setUpToggle();
  }

  removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  setUpMain() {
    let game = this;
    let innerBoard = document.getElementById("innerBoard");
    let length = String(100 / this.mainNumber.length) + "%";
    this.mainElem = [];
    for (let i = 0; i < this.mainNumber.length; i++) {
      let arr = [];
      for (let j = 0; j < this.mainNumber.length; j++) {
        let div = this.createMainDiv(length, i, j);
        arr.push(div);
        innerBoard.appendChild(div);
      }
      this.mainElem.push(arr);
    }
    let endDiv = this.mainElem[0][this.mainElem.length - 1];
    let startDiv = this.mainElem[this.mainElem.length - 1][0];
    endDiv.style.borderTop = "2px solid red";
    endDiv.style.borderRight = "2px solid red";
    startDiv.style.borderLeft = "2px solid red";
    startDiv.style.borderBottom = "2px solid red";
  }

  createMainDiv(length, i, j) {
    let game = this;
    let div = document.createElement("div");
    div.style.height = length;
    div.style.width = length;
    div.style.float = "left";
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box";
    div.style.borderCollapse = "collapse";
    div.dataset.row = i;
    div.dataset.col = j;
    switch (this.mainNumber[i][j]) {
      case -1:
        div.style.backgroundColor = this.gameData.getColor("barrier");
        break;
      case 1:
        div.style.backgroundColor = this.gameData.getColor("on");
        break;
      default:
        div.style.backgroundColor = this.gameData.getColor("off");
      }
    div.addEventListener("click", function() { game.makeMove(div); });
    return div;
  }

  setUpToggle() {
    let toggleBoard = document.getElementById("innerToggle");
    let maxDistance = 0;
    for (let square of this.toggleNumber) {
      if (Math.abs(square[0]) > maxDistance) {
        maxDistance = Math.abs(square[0]);
      } else if (Math.abs(square[1]) > maxDistance) {
        maxDistance = Math.abs(square[1]);
      }
    }
    if (maxDistance == 0) {
      maxDistance = 1;
    }

    let length = String(100 / (2 * maxDistance + 1)) + "%";
    this.toggleElem = [];
    for (let i = -1 * maxDistance; i <= maxDistance; i++) {
      let arr = [];
      for (let j = -1 * maxDistance; j <= maxDistance; j++) {
        let div = this.createToggleDiv(length);
        toggleBoard.appendChild(div);
        arr.push(div);
      }
      this.toggleElem.push(arr);
    }
    for (let square of this.toggleNumber) {
      this.toggleElem[square[0] + maxDistance][square[1] + maxDistance].style.backgroundColor = this.gameData.getColor("green");
    }
    let centralDiv = this.toggleElem[maxDistance][maxDistance];
    if (centralDiv.style.backgroundColor == this.gameData.getColor("green")) {
      for (let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        div.style.height = "100%";
        div.style.width = "20%";
        div.style.float = "left";
        if (i % 2 == 0) {
          div.style.backgroundColor = this.gameData.getColor("green");
        } else {
          div.style.backgroundColor = this.gameData.getColor("red");
        }
        centralDiv.appendChild(div);
      }
    } else {
      centralDiv.style.backgroundColor = this.gameData.getColor("red");
    }
  }

  createToggleDiv(length) {
    let div = document.createElement("div");
    div.style.height = length;
    div.style.width = length;
    div.style.float = "left";
    div.style.backgroundColor = this.gameData.getColor("off");
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box";
    div.style.borderCollapse = "collapse";
    return div;
  }

  makeMove(div) {
    if (this.gameOver) {
      return;
    }
    this.movesRemaining--;
    this.updateMovesRemaining();
    this.toggle(div);
    let backTrack = this.checkPath();
    if (backTrack.length != 0) {
      this.gameOver = true;
      this.createPathAnimation(backTrack, backTrack.length - 1);
    } else if (this.movesRemaining == 0) {
      let game = this;
      this.gameOver = true;
    }
  }

  checkPath() {
    let visited = [];
    let parent = [];
    for (let i = 0; i < this.mainNumber.length; i++) {
      let visitedArr = [];
      let parentArr = [];
      for (let j = 0; j < this.mainNumber.length; j++) {
        if (this.mainNumber[i][j] != 1) {
          visitedArr.push(true);
        } else {
          visitedArr.push(false);
        }
        parentArr.push(-1);
      }
      visited.push(visitedArr);
      parent.push(parentArr);
    }
    if (visited[this.mainNumber.length - 1][0] || visited[0][this.mainNumber.length - 1]) {
      return [];
    }
    let offset = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let queue = [];
    let coordinates, newRow, newCol;
    let success = false;
    queue.push([this.mainNumber.length - 1, 0]);
    visited[this.mainNumber.length - 1][0] = true;
    while (queue.length != 0) {
      coordinates = queue.shift();
      if ((coordinates[0] == 0) && (coordinates[1] == this.mainNumber.length - 1)) {
        success = true;
        break;
      }
      for (let square of offset) {
        newRow = coordinates[0] + square[0];
        newCol = coordinates[1] + square[1];
          if (this.inBounds(newRow, newCol) && !visited[newRow][newCol]) {
            visited[newRow][newCol] = true;
            parent[newRow][newCol] = [coordinates[0], coordinates[1]];
            queue.push([newRow, newCol]);
          }
      }
    }
    if (!success) {
      return [];
    }
    let backTrack = [];
    coordinates = [0, this.mainNumber.length - 1];
    backTrack.push(coordinates);
    while (true) {
      if ((coordinates[0] == this.mainNumber.length - 1) && (coordinates[1] == 0)) {
        break;
      }
      coordinates = parent[coordinates[0]][coordinates[1]];
      backTrack.push(coordinates);
    }
    return backTrack;
  }

  createPathAnimation(backTrack, index) {
    if (index == -1) {
      let game = this;
      window.setTimeout(function() { game.addNextLevelButton(); }, 200);
      return;
    }
    let board = this;
    let coordinates = backTrack[index];
    this.mainElem[coordinates[0]][coordinates[1]].style.backgroundColor = this.gameData.getColor("green");
    window.setTimeout(function() { board.createPathAnimation(backTrack, index - 1); }, 75);
  }


  toggle(div) {
    let newRow, newCol;
    for (let square of this.toggleNumber) {
      newRow = Number(div.dataset.row) + square[0];
      newCol = Number(div.dataset.col) + square[1];
      if (!this.inBounds(newRow, newCol)) {
        continue;
      }
      if (this.mainNumber[newRow][newCol] == 1) {
        this.mainNumber[newRow][newCol] = 0;
        this.mainElem[newRow][newCol].style.backgroundColor = this.gameData.getColor("off");
      } else if (this.mainNumber[newRow][newCol] == 0){
        this.mainNumber[newRow][newCol] = 1;
        this.mainElem[newRow][newCol].style.backgroundColor = this.gameData.getColor("on");
      }
    }
  }

  updateMovesRemaining() {
    document.getElementById("innerMoves").innerHTML = "Moves Remaining: " + String(this.movesRemaining);
  }

  updateTitle() {
    document.getElementById("innerTitle").innerHTML = "Level " + numberToRoman(this.level);
  }

  inBounds(row, col) {
    return 0 <= row && row < this.mainNumber.length && 0 <= col && col < this.mainNumber.length;
  }

  addNextLevelButton() {
    let game = this;
    if (this.level == this.gameData.getLevels()) {
      game.endGame();
      return;
    }
    let btn = document.getElementById("innerButton");
    let newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.innerHTML = "Next Level";
    newBtn.style.display = "block";
    newBtn.addEventListener("click", function() {
        game.nextLevel(); });
    }

  addResetBoardButton() {
    let game = this;
    let btn = document.getElementById("innerButton");
    let newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.innerHTML = "Reset Board";
    newBtn.style.display = "block";
    newBtn.addEventListener("click", function() {
        game.resetLevel(); });
    }

  endGame() {
    this.removeAllChildren(document.body);
    let outerText = document.createElement("div");
    let innerText = document.createElement("div");

    outerText.style.position = "relative";
    outerText.style.width = "100%";
    outerText.style.height = "100%";

    innerText.style.position = "absolute";
    innerText.style.left = "50%";
    innerText.style.top = "50%";
    innerText.style.transform = "translate(-50%, -50%)";
    innerText.style.fontSize = "8vw";
    innerText.style.fontWeight = "bold";
    innerText.style.textAlign = "center";
    innerText.innerHTML = "Congratulations";

    outerText.appendChild(innerText);
    document.body.appendChild(outerText);
  }
}

function numberToRoman(num){
  // Valid up to 39
  let digit = num % 10;
  let tens = (num - digit) / 10;
  let stringResult = "";
  if (digit == 9) {
    stringResult += "IX";
  } else if (digit == 4) {
    stringResult += "IV";
  } else {
    if (digit >= 5) {
      stringResult += "V";
      digit -= 5;
    }
    for (let i = 0; i < digit; i++) {
      stringResult += "I";
    }
  }
  for (let i = 0; i < tens; i++) {
    stringResult = "X" + stringResult;
  }
  return stringResult;
}
