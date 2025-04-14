import Bishop from "../pieces/Bishop";
import Rook from "../pieces/Rook";
import Knight from "../pieces/Knight";
import Queen from "../pieces/Queen";
import King from "../pieces/King";
import Pawn from "../pieces/Pawn";
import PlayerColor from "../PlayerColors";
import BasePiece from "../pieces/BasePiece";
import EmptySquare from "../pieces/EmptySquare";

export default function initialiseChessBoard() {
  const squares: BasePiece[][] = [
    [
      new Rook(PlayerColor.Black),
      new Knight(PlayerColor.Black),
      new Bishop(PlayerColor.Black),
      new Queen(PlayerColor.Black),
      new King(PlayerColor.Black),
      new Bishop(PlayerColor.Black),
      new Knight(PlayerColor.Black),
      new Rook(PlayerColor.Black),
    ],
    [
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
      new Pawn(PlayerColor.Black),
    ],
    [
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
    ],
    [
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
    ],
    [
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
    ],
    [
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
      new EmptySquare(),
    ],
    [
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
      new Pawn(PlayerColor.White),
    ],
    [
      new Rook(PlayerColor.White),
      new Knight(PlayerColor.White),
      new Bishop(PlayerColor.White),
      new Queen(PlayerColor.White),
      new King(PlayerColor.White),
      new Bishop(PlayerColor.White),
      new Knight(PlayerColor.White),
      new Rook(PlayerColor.White),
    ],
  ];

  return squares;
}
