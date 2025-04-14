import { useEffect, useState } from "react";
import { fenToBoard } from "../../chess/utils/fen";
import Board from "../../chess/board";
import initialiseChessBoard from "../../chess/utils/board-initializer";
import BasePiece from "../../chess/pieces/BasePiece";
import Square from "../Square/Square";

interface TVProps {
    url: string;
}

function Television({url}: TVProps){

    const [stream, setStream] = useState<string>("")
    const [board, setBoard] = useState<Board>(new Board(initialiseChessBoard()))

    useEffect(() => {
        const eventSource = new EventSource(url);
        eventSource.onmessage = (event) => {
            const fen = JSON.parse(event.data).d.fen.split(" ")[0]
            // console.log("New data:", JSON.parse(event.data).d.fen);
            setStream((prevStream) => prevStream + fen);
            const squares: BasePiece[][] = fenToBoard(fen);
            const board: Board = new Board(squares);
            setBoard(board);
    
        };
    
        eventSource.onerror = (error) => {
            console.error("Stream error:", error);
            eventSource.close();
        };
      })
    

    return (
        <div className="grid-container">
            {board.squares.map((row: BasePiece[], rowIndex: number) =>
            row.map((piece: BasePiece, colIndex: number) => (
                <Square
                key={`${rowIndex}-${colIndex}`}
                index={rowIndex + colIndex}
                initPiece={piece}
                row={rowIndex}
                col={colIndex}
                />
            ))
            )}
        </div>
    )
};

export default Television;