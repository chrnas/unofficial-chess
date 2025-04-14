import BasePiece from './BasePiece.ts';
import PlayerColor from '../PlayerColors.ts';
import SquareType from '../SquareTypes.ts';

class Bishop extends BasePiece {
  
  type: SquareType = SquareType.Pawn;

  constructor(player: PlayerColor) {
    super(player);
  }

  getMoves(position: number[], squares: BasePiece[][]):number[][] {
    const [x, y] = position;
    const moves = [];
    const directions = [[1, 1], [-1, -1], [1, -1], [-1, 1]];

    for (const [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;

      while (this.isValidMove(squares, newX, newY)) {
        moves.push([newX, newY]);
        if (this.isEnemyPiece(squares[newX][newY])) break;
        newX += dx;
        newY += dy;
      }
    }
    return moves;
  }
}

export default Bishop;
