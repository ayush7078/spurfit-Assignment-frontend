import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Resizable } from 're-resizable';

const DraggableBox = ({ id, index, content, distance }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Resizable
          className="mb-2 cursor-pointer shadow-md"
          handleClasses={{ right: 'handle-right' }} // Optional: Customize handles if needed
        >
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} // This makes the entire box draggable
            className="bg-gray-200 p-4 rounded-lg flex items-center justify-between"
          >
            <span>{content}</span>
          </div>
        </Resizable>
      )}
    </Draggable>
  );
};

export default DraggableBox;
