import BasePiece from './BasePiece.ts';
import PlayerColor from '../PlayerColors.ts';
import SquareType from '../SquareTypes.ts';

export default class Knight extends BasePiece {

  type: SquareType = SquareType.Knight;

  constructor(player: PlayerColor) {
    super(player);
  }

  getMoves(position: number[], squares: BasePiece[][]):number[][] {
    const [x, y] = position; // Current position (row, column)
    const moves = [];
    const directions = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];

    for (const [dx, dy] of directions) {
        const newRow = x + dx;
        const newCol = y + dy;

        // Check if valid move based on boundaries and board state
        if (this.isValidMove(squares, newRow, newCol)) {
            moves.push([newRow, newCol]);
        }
    }

    return moves;
  }
}
