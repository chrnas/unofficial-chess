import Board from "../../chess/board";
import initialiseChessBoard from "../../chess/utils/board-initializer";
import Game from "../../components/Game/Game";

function GamePage() {

    const initBoard = new Board(initialiseChessBoard());

    return (
        <>
        <h1>Game Page</h1>
        <Game initialBoard={initBoard}/>
        </>
    );
}

export default GamePage;