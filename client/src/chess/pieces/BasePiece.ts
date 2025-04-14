import PlayerColor from "../PlayerColors";
import SquareType from "../SquareTypes";
import Piece from './Piece'

abstract class BasePiece implements Piece {

  player: PlayerColor;
  abstract type: SquareType;

  constructor(player: PlayerColor) {
    this.player = player;
  }

  isInBoard(row: number, col: number) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }

  isEnemyPiece(piece: BasePiece){
    return piece.player !== this.player
  }


  isValidMove(board: BasePiece[][], newRow: number, newCol: number) {
    const targetPiece: BasePiece = board[newRow][newCol];
    return this.isInBoard(newRow, newCol) && (!targetPiece || this.isEnemyPiece(targetPiece)); // Valid if empty or opponent piece
  }

  abstract getMoves(position: number[], squares: BasePiece[][]): number[][]

  }

  export default BasePiece;