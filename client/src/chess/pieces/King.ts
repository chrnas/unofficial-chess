import BasePiece from './BasePiece.ts';
import PlayerColor from '../PlayerColors.ts';
import SquareType from '../SquareTypes.ts';

class King extends BasePiece {

  type: SquareType = SquareType.King;

  constructor(player: PlayerColor) {
    super(player);
  }

  getMoves(position: number[], squares: BasePiece[][]):number[][] {
    const [x, y] = position;
    const moves = [];
    const directions = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [1, 1], [-1, -1], [1, -1], [-1, 1]
    ];

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (this.isValidMove(squares, newX, newY)) {
        moves.push([newX, newY]);
      }
    }
    return moves;
  }
}

export default King;
