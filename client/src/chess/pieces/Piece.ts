import PlayerColor from "../PlayerColors";
import SquareType from "../SquareTypes";
import BasePiece from "./BasePiece";

interface Piece {
    player: PlayerColor;
    type: SquareType;
    getMoves(position: number[], squares: BasePiece[][]): number[][];
    isInBoard(row: number, col: number): boolean;
    isEnemyPiece(piece: BasePiece): boolean;
    isValidMove(board: BasePiece[][], newRow: number, newCol: number): boolean;
}

export default Piece;