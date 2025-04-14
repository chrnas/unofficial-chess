import { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import Square from "../Square/Square";
import Board from "../../chess/board";
import getImageSrc from "../../chess/utils/get-image-src";
import BasePiece from "../../chess/pieces/BasePiece";
import Piece from "../../chess/pieces/Piece";
import "./Game.css";
import EmptySquare from "../../chess/pieces/EmptySquare";

interface GameProps {
  initialBoard: Board;
}

function Game({ initialBoard }: GameProps) {
  const [board, setBoard] = useState<Board>(initialBoard); // State for the board
  const [activeId, setActiveId] = useState<string | null>(null); // Track the active draggable item
  const [draggedPiece, setDraggedPiece] = useState<Piece>(); // Store the dragged piece

  // Handle the drag start event
  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id); // Set the active id to track the dragged item
    const piece = board.squares[active.data.current.row][active.data.current.col];
    setDraggedPiece(piece); // Set the dragged piece data
  };

  // Handle the drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(event);
    if (active && over) {
      console.log("Dropped piece from:", active.id);
      console.log("Dropped on square:", over.id);
    }
    const updatedBoard = new Board(board.squares);
    updatedBoard.squares[over.data.current.row][over.data.current.col] = active.data.current.piece;
    updatedBoard.squares[active.data.current.row][active.data.current.col] = new EmptySquare(); // Remove the piece from its original position
    setBoard(updatedBoard); // Update the state
    setActiveId(null); // Reset active drag state after drop
    setDraggedPiece(new EmptySquare()); // Reset dragged piece state
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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

      {/* DragOverlay to show when a piece is being dragged */}
      <DragOverlay>
        {activeId && draggedPiece ? (
          <div className="dragging-overlay">
            {/* Display dragged piece */}
            <img
              src={getImageSrc(draggedPiece)} // Get image source for the piece
              alt="Dragged Piece"
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Game;
