import EmptySquare from "../pieces/EmptySquare";
import Board from "../board";
import BasePiece from "../pieces/BasePiece";
import SquareType from "../SquareTypes";
import PlayerColor from "../PlayerColors";
import Pawn from "../pieces/Pawn";
import Rook from "../pieces/Rook";
import King from "../pieces/King";
import Bishop from "../pieces/Bishop";
import Queen from "../pieces/Queen";
import Knight from "../pieces/Knight";

function createPiece(type: SquareType, player: PlayerColor): BasePiece{
    switch (type) {
        case SquareType.Pawn:
            return new Pawn(player);
        case SquareType.Rook:
            return new Rook(player);
        case SquareType.Knight:
            return new Knight(player);
        case SquareType.Bishop:
            return new Bishop(player);
        case SquareType.Queen:
            return new Queen(player);
        case SquareType.King:
            return new King(player);
        default:
            return new EmptySquare(); // Empty square
    }
}

export function fenToBoard(fen: string): BasePiece[][] {
    const [piecePlacement] = fen.split(" "); // Extract piece placement part of FEN
    const rows = piecePlacement.split("/");
    const board: (BasePiece)[][] = [];

    for (const row of rows) {
        const boardRow: (BasePiece)[] = [];
        for (const char of row) {
            if (isNaN(Number(char))) {
                // Determine player color
                const player = char === char.toUpperCase() ? PlayerColor.White : PlayerColor.Black;
                // Determine square type and create piece using the factory
                const type = getSquareTypeByLetter(char.toLowerCase());
                boardRow.push(createPiece(type, player));
            } else {
                // Add nulls for empty squares
                const emptySquares = parseInt(char, 10);
                for (let i = 0; i < emptySquares; i++) {
                    boardRow.push(new EmptySquare());
                }
            }
        }
        board.push(boardRow);
    }

    return board;
}

function getSquareTypeByLetter(letter: string): SquareType {
    switch (letter) {
        case "k": return SquareType.King;
        case "q": return SquareType.Queen;
        case "b": return SquareType.Bishop;
        case "r": return SquareType.Rook;
        case "n": return SquareType.Knight;
        case "p": return SquareType.Pawn;
        default: return SquareType.Empty;
    }
}

function getLetterByPiece(type: SquareType){
    switch(type){
        case SquareType.Empty: return "";
        case SquareType.King: return "k";
        case SquareType.Queen: return "q";
        case SquareType.Bishop: return "b";
        case SquareType.Rook: return "r";
        case SquareType.Knight: return "n";
        case SquareType.Pawn: return "p";
        default: return "";
    }
}

function getLetterByColor(fenLetter: string, player: PlayerColor){
    if (player == PlayerColor.White){
        return fenLetter.toUpperCase();
    }
    return fenLetter;
}

function stringConverter(type: SquareType, player: PlayerColor): string{
    let fenLetter: string = getLetterByPiece(type);
    fenLetter = getLetterByColor(fenLetter, player)
    return fenLetter;
}

function arrayToFEN(squares: BasePiece[][], turn: string, castling: string, enPassant: string, halfMove: number, fullMove: number): string {
    let fenString = "";

    for (let row = 0; row < squares.length; row++) {
        let emptyCount = 0;

        for (let col = 0; col < squares[row].length; col++) {
            const piece = squares[row][col];

            if (piece === null) {
                // Count empty squares
                emptyCount++;
            } else {
                // Append empty squares count (if any) before the piece
                if (emptyCount > 0) {
                    fenString += emptyCount.toString();
                    emptyCount = 0; // Reset count
                }

                // Convert the piece to FEN notation
                fenString += stringConverter(piece.type, piece.player);
            }
        }

        // Append remaining empty squares in the row
        if (emptyCount > 0) {
            fenString += emptyCount.toString();
        }

        // Add a slash to separate rows (except the last row)
        if (row < squares.length - 1) {
            fenString += "/";
        }
    }

    // Combine the board with the other FEN components
    return `${fenString} ${turn} ${castling} ${enPassant} ${halfMove} ${fullMove}`;
}

export function testFen(){

    // Example usage:
    const board = new Board();
    const squares = board.squares;
    const turn = "w"; // White's turn to move
    const castling = "KQkq"; // Castling rights available for both sides
    const enPassant = "-"; // No en passant target square
    const halfMove = 0; // Halfmove clock
    const fullMove = 1; // Fullmove number (start of the game)

    const fenString = arrayToFEN(squares, turn, castling, enPassant, halfMove, fullMove);
    console.log(fenString); // Output: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

}

export function testCreateBoardFromFen(){
    // Example FEN string
    const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    const board = fenToBoard(fen);

    console.log(board);
    }