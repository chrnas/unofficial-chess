import BasePiece from './BasePiece.ts';
import PlayerColor from '../PlayerColors.ts';
import SquareType from '../SquareTypes.ts';

export default class Pawn extends BasePiece {

  type: SquareType.Pawn = SquareType.Pawn;

  constructor(player: PlayerColor) {
    super(player);
  }

  getMoves(position: number[], squares: BasePiece[][]):number[][]{
    const [x, y] = position;
    const moves = [];
    const directions = [];
    if (PlayerColor.White){
      directions.push([0,-1])
      if (y == 1){
        directions.push([0,-2]);
      }
    }
    else {
      directions.push([0,1])
      if(y == 1) {
        directions.push([0,2])
      }
    }
    for (const [dx, dy] of directions){
      const newRow = x + dx;
      const newCol = y + dy;

      if (this.isValidMove(squares, newRow, newCol)){
        moves.push([newRow, newCol])
      }
    }
    return moves;
  }
}
