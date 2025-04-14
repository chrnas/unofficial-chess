import BasePiece from "./pieces/BasePiece";
import PlayerColor from "./PlayerColors";
import SquareType from "./SquareTypes";

class Board {
    squares: BasePiece[][];

    constructor(squares: BasePiece[][]){
        this.squares = squares;
    }

    printSquares() {
        console.log(this.squares)
    }

    movePiece(startPosition: number[], endPosition: number[]){
        const startPiece = this.squares[startPosition[0]][startPosition[1]];
        const endPiece = this.squares[endPosition[0]][endPosition[1]];
        this.squares[startPosition[0]][startPosition[1]] = endPiece;
        this.squares[endPosition[0]][endPosition[1]] = startPiece;
    }


    findPosition(player: PlayerColor, type: SquareType){
        for(let y = 0; y < this.squares.length; y++){
            for(let x = 0; x < this.squares.length; x++){
                const square = this.squares[x][y];
                if(square.player == player && square.type == type){
                    return [x,y];
                }
            }
        }
        return [-1,-1];
    }

    isChecked(piecePosition: number[]){
        for(let y = 0; y < this.squares.length; y++){
            for(let x = 0; x < this.squares.length; x++){
                const moves = this.squares[x][y].getMoves([x, y], this.squares)
                if(moves.some(move => move === piecePosition)){
                    return true;
                }
            }
        }
        return false;
    }

    isCheckMate(player: PlayerColor) {
        const kingPosition: number[] = this.findPosition(player, SquareType.King);
        const king: BasePiece = this.squares[kingPosition[0]][kingPosition[1]];
        const moves: number[][] = king.getMoves(kingPosition, this.squares);
    
        // If the king has available moves
        if (moves && moves.length > 0) {
            for (const move of moves) {
                // Calculate the new position after applying the move
                const newPosition = this.getNewPosition(kingPosition, move);
                
                // Check if the king is in check after moving to this position
                if (!this.isChecked(newPosition)) {
                    // If any move results in not being in check, it's not checkmate
                    return false;
                }
            }
        }
    
        // If no valid moves prevent check, it's checkmate
        return true;
    }

    // A helper function to get the new position after a move
    getNewPosition(kingPosition: number[], move: number[]): number[] {
        const rows = 8;  // Number of rows on the chess board
        const row = kingPosition[0];
        const col = kingPosition[1];

        // Calculate the new position based on the king's position and the move
        const newRow = Math.floor(move[0] / rows) + row;  // Apply the row offset
        const newCol = (move[1] % rows) + col;           // Apply the column offset

        return [newRow, newCol];  // Return the new position
    }
}

export default Board;