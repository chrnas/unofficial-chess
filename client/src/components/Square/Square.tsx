import { useDraggable, useDroppable } from "@dnd-kit/core";
import getImageSrc from "../../chess/utils/get-image-src";
import Piece from "../../chess/pieces/Piece";
import './Square.css';

interface SquareProps {
  initPiece: Piece;
  index: number;
  row: number;
  col: number;
}

function Square({ initPiece, index, row, col }: SquareProps) {
  const { attributes, listeners, setNodeRef: setDragRef, isDragging } = useDraggable({
    id: `${row}-${col}`, // Unique identifier for each square
    data: { piece: initPiece, row, col }, // Attach piece data
  });

   // Set up the droppable component
   const { setNodeRef: droppableRef } = useDroppable({
    id: `${row}-${col}`, // Same id for the droppable target
    data: { piece: initPiece, row, col }, // Attach piece data
  });

  return (
    <div
      ref={(node) => { setDragRef(node); droppableRef(node); }}
      className={`square ${index % 2 === 0 ? "light" : "dark"}`}
      {...listeners}
      {...attributes}
      style={{ cursor: "move", visibility: isDragging ? "hidden" : "visible"}}
    >
      <img src={getImageSrc(initPiece)} alt="Chess Piece" />
    </div>
  );
}

export default Square;
