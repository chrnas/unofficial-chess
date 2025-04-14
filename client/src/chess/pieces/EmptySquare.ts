import PlayerColor from "../PlayerColors";
import BasePiece from "./BasePiece";
import SquareType from "../SquareTypes";

class EmptySquare extends BasePiece {

    type: SquareType = SquareType.Empty;

    constructor(){
        super(PlayerColor.Empty);
    }

    getMoves():number[][]{
        return [[]];
    }
}

export default EmptySquare;