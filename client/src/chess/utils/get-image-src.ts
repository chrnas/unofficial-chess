import Piece from "../pieces/Piece";
import PlayerColor from "../PlayerColors";
import SquareType from "../SquareTypes";

function getImageSrc(piece: Piece): string{
    if(piece.player === PlayerColor.White){
        switch(piece.type){
            case SquareType.Empty: return "./images/transparent.png";
            case SquareType.Bishop: return "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
            case SquareType.King: return "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";
            case SquareType.Queen: return "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
            case SquareType.Knight: return "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
            case SquareType.Rook: return "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
            case SquareType.Pawn: return "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
        }
    }
    else if(piece.player === PlayerColor.Black){
        switch(piece.type){
            case SquareType.Empty: return "./images/transparent.png";
            case SquareType.Bishop: return "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
            case SquareType.King: return "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
            case SquareType.Queen: return "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
            case SquareType.Knight: return "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
            case SquareType.Rook: return "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
            case SquareType.Pawn: return "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
        }
    }
    else {
        return "./public/images/transparent.png";
    }
}

export default getImageSrc;