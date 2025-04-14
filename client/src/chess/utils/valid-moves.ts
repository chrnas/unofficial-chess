import SquareType from '../pieces/SquareType';
import PlayerColor from '../PlayerColors'

// Function to check if a position is within the bounds of the board
function isInBoard(row: number, col: number) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
}

// Function to check if a move is valid based on board state
export function isValidMove(board: SquareType[][], newRow: number, newCol: number, currentColor: PlayerColor) {
    const targetPiece = board[newRow][newCol];
    return isInBoard(newRow, newCol) && (!targetPiece || targetPiece.color !== currentColor); // Valid if empty or opponent piece
}