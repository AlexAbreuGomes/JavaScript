document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    let isBlackTurn = true;
    let selectedPiece = null;

    function createSquare(row, col) {
        const square = document.createElement('div');
        square.classList.add('square', (row + col) % 2 === 0 ? 'light' : 'dark');
        square.dataset.row = row;
        square.dataset.col = col;
        square.addEventListener('click', handleSquareClick);
        return square;
    }

    function createPiece(color) {
        const piece = document.createElement('div');
        piece.classList.add('piece', color === 'black' ? 'black-piece' : 'red-piece');
        piece.dataset.color = color;
        piece.addEventListener('click', handlePieceClick);
        return piece;
    }

    function initializeBoard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = createSquare(row, col);
                if ((row + col) % 2 !== 0 && row < 3) {
                    const piece = createPiece('black');
                    square.appendChild(piece);
                } else if ((row + col) % 2 !== 0 && row > 4) {
                    const piece = createPiece('red');
                    square.appendChild(piece);
                }
                board.appendChild(square);
            }
        }
    }

    function handlePieceClick(event) {
        const piece = event.target;
        if (selectedPiece) {
            selectedPiece.classList.remove('selected');
        }
        selectedPiece = piece;
        selectedPiece.classList.add('selected');
    }

    function handleSquareClick(event) {
        const square = event.target;
        const rowDiff = Math.abs(square.dataset.row - selectedPiece.parentElement.dataset.row);
        const colDiff = Math.abs(square.dataset.col - selectedPiece.parentElement.dataset.col);

        if (selectedPiece && isMoveValid(rowDiff, colDiff)) {
            square.appendChild(selectedPiece);
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
            isBlackTurn = !isBlackTurn;
        }
    }

    function isMoveValid(rowDiff, colDiff) {
        const isBlackPiece = selectedPiece.dataset.color === 'black';
        const isRedPiece = selectedPiece.dataset.color === 'red';

        if (rowDiff === 1 && colDiff === 1) {
            return true; // Movimento simples
        } else if (rowDiff === 2 && colDiff === 2) {
            const targetRow = parseInt(selectedPiece.parentElement.dataset.row) + parseInt((event.target.dataset.row - selectedPiece.parentElement.dataset.row) / 2);
            const targetCol = parseInt(selectedPiece.parentElement.dataset.col) + parseInt((event.target.dataset.col - selectedPiece.parentElement.dataset.col) / 2);
            const middleSquare = document.querySelector(`.square[data-row="${targetRow}"][data-col="${targetCol}"]`);
            const middlePiece = middleSquare.querySelector('.piece');

            if (isBlackPiece && middlePiece && middlePiece.dataset.color === 'red') {
                middlePiece.parentElement.removeChild(middlePiece);
                return true; // Captura simples para peças pretas
            } else if (isRedPiece && middlePiece && middlePiece.dataset.color === 'black') {
                middlePiece.parentElement.removeChild(middlePiece);
                return true; // Captura simples para peças vermelhas
            }
        }

        return false;
    }

    initializeBoard();
});
