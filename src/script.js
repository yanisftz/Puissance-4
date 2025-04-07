document.addEventListener('DOMContentLoaded', () => {
    const ROWS = 6;
    const COLS = 7;
    const board = document.getElementById('board'); 
    const gameInfo = document.getElementById('game-info');
    const resetButton = document.getElementById('reset');
    
    let gameBoard = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    let currentPlayer = 1;
    let gameActive = true;
    
    function createBoard() {
        board.innerHTML = '';
        for (let col = 0; col < COLS; col++) {
            const column = document.createElement('div');
            column.className = 'column';
            column.dataset.col = col;
            
            for (let row = 0; row < ROWS; row++) {
                const cell = document.createElement('div');
                cell.className = 'cell empty';
                cell.dataset.row = row;
                cell.dataset.col = col;
                column.appendChild(cell);
            }
            
            column.addEventListener('click', () => makeMove(col));
            board.appendChild(column);
        }
        
        updateBoard();
    }
    
    
    function updateBoard() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
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
        
        
        for (let row = 0; row < ROWS; row++) {
            if (gameBoard[row][col] === 0) {
                gameBoard[row][col] = currentPlayer;
                updateBoard();
                
              
                if (checkWin(row, col)) {
                    gameInfo.textContent = `Le Joueur ${currentPlayer} (${currentPlayer === 1 ? 'Rouge' : 'Jaune'}) a gagné !`;
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
                gameInfo.textContent = `Au tour du Joueur ${currentPlayer} (${currentPlayer === 1 ? 'Rouge' : 'Jaune'})`;
                return;
            }
        }
    }
    
 function checkWin(row, col) {
        const directions = [
            [0, 1],  // horizontal
            [1, 0],  // vertical
            [1, 1],  // diagonal /
            [1, -1]  // diagonal \
        ];
        
        for (const [dx, dy] of directions) {
            let count = 1;
            let winningCells = [[row, col]];
            
            
            for (let i = 1; i < 4; i++) {
                const newRow = row + i * dx;
                const newCol = col + i * dy;
                
                if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && 
                    gameBoard[newRow][newCol] === currentPlayer) {
                    count++;
                    winningCells.push([newRow, newCol]);
                } else {
                    break;
                }
            }
            

            for (let i = 1; i < 4; i++) {
                const newRow = row - i * dx;
                const newCol = col - i * dy;
                
                if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && 
                    gameBoard[newRow][newCol] === currentPlayer) {
                    count++;
                    winningCells.push([newRow, newCol]);
                } else {
                    break;
                }
            }
            
           
        }
        
        return false;
    }
    
   
    function highlightWinningCells() {
        if (window.winningCells) {
            for (const [row, col] of window.winningCells) {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                cell.classList.add('winning-cell');
            }
        }
    }
    
    
    function checkDraw() {
        return gameBoard.every(row => row.every(cell => cell !== 0));
    }
    
   
    function resetGame() {
        gameBoard = Array(ROWS).fill().map(() => Array(COLS).fill(0));
        currentPlayer = 1;
        gameActive = true;
        gameInfo.textContent = `Au tour du Joueur 1 (Rouge)`;
        window.winningCells = null;
        updateBoard();
    }
    
    resetButton.addEventListener('click', resetGame);
    
   
    createBoard();
});

