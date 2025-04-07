"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
document.addEventListener('DOMContentLoaded', function () {
  var ROWS = 6;
  var COLS = 7;
  var board = document.getElementById('board');
  var gameInfo = document.getElementById('game-info');
  var resetButton = document.getElementById('reset');
  var gameBoard = Array(ROWS).fill().map(function () {
    return Array(COLS).fill(0);
  });
  var currentPlayer = 1;
  var gameActive = true;

  
  function createBoard() {
    board.innerHTML = '';
    var _loop = function _loop(col) {
      var column = document.createElement('div');
      column.className = 'column';
      column.dataset.col = col;
      for (var row = 0; row < ROWS; row++) {
        var cell = document.createElement('div');
        cell.className = 'cell empty';
        cell.dataset.row = row;
        cell.dataset.col = col;
        column.appendChild(cell);
      }
      column.addEventListener('click', function () {
        return makeMove(col);
      });
      board.appendChild(column);
    };
    for (var col = 0; col < COLS; col++) {
      _loop(col);
    }
    updateBoard();
  }

  
  function updateBoard() {
    for (var row = 0; row < ROWS; row++) {
      for (var col = 0; col < COLS; col++) {
        var cell = document.querySelector(".cell[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]"));
        cell.classList.remove('player1', 'player2', 'empty', 'winning-cell');
        if (gameBoard[row][col] === 0) {
          cell.classList.add('empty');
        } else if (gameBoard[row][col] === 1) {
          cell.classList.add('player1');
        } else if (gameBoard[row][col] === 2) {
          cell.classList.add('player2');
        }
      }
    }
  }

  
  function makeMove(col) {
    if (!gameActive) return;

    
    for (var row = 0; row < ROWS; row++) {
      if (gameBoard[row][col] === 0) {
        gameBoard[row][col] = currentPlayer;
        updateBoard();

        
        if (checkWin(row, col)) {
          gameInfo.textContent = "Le Joueur ".concat(currentPlayer, " (").concat(currentPlayer === 1 ? 'Rouge' : 'Jaune', ") a gagn\xE9 !");
          gameActive = false;
          highlightWinningCells();
          return;
        }

        
        if (checkDraw()) {
          gameInfo.textContent = "Match nul !";
          gameActive = false;
          return;
        }

        
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        gameInfo.textContent = "Au tour du Joueur ".concat(currentPlayer, " (").concat(currentPlayer === 1 ? 'Rouge' : 'Jaune', ")");
        return;
      }
    }
  }

  function checkWin(row, col) {
    var directions = [[0, 1],
    
    [1, 0],
    
    [1, 1],
    
    [1, -1] 
    ];
    for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
      var _directions$_i = _slicedToArray(_directions[_i], 2),
        dx = _directions$_i[0],
        dy = _directions$_i[1];
      var count = 1;
      var winningCells = [[row, col]];

      
      for (var i = 1; i < 4; i++) {
        var newRow = row + i * dx;
        var newCol = col + i * dy;
        if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && gameBoard[newRow][newCol] === currentPlayer) {
          count++;
          winningCells.push([newRow, newCol]);
        } else {
          break;
        }
      }

      
      for (var _i2 = 1; _i2 < 4; _i2++) {
        var _newRow = row - _i2 * dx;
        var _newCol = col - _i2 * dy;
        if (_newRow >= 0 && _newRow < ROWS && _newCol >= 0 && _newCol < COLS && gameBoard[_newRow][_newCol] === currentPlayer) {
          count++;
          winningCells.push([_newRow, _newCol]);
        } else {
          break;
        }
      }
      if (count >= 4) {
        window.winningCells = winningCells;
        return true;
      }
    }
    return false;
  }

  

  
  function checkDraw() {
    return gameBoard.every(function (row) {
      return row.every(function (cell) {
        return cell !== 0;
      });
    });
  }

  
  function resetGame() {
    gameBoard = Array(ROWS).fill().map(function () {
      return Array(COLS).fill(0);
    });
    currentPlayer = 1;
    gameActive = true;
    gameInfo.textContent = "Au tour du Joueur 1 (Rouge)";
    window.winningCells = null;
    updateBoard();
  }
  resetButton.addEventListener('click', resetGame);

  
  createBoard();
});