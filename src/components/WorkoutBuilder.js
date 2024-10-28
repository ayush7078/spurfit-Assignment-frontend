import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const WorkoutBuilder = ({ blocks }) => {
  return (
    <Droppable droppableId="workoutBuilder">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-3/4 bg-gray-100 p-6 rounded-lg shadow-md h-96 flex flex-col items-center justify-start"
        >
          {blocks.length === 0 ? (
            <p className="text-gray-500 text-center mb-4">
              No blocks added yet. Drag and drop to build your workout!
            </p>
          ) : (
            blocks.map((block, index) => (
              <div
                key={block.id}
                className="bg-blue-50 p-4 rounded-lg mb-2 shadow-md w-3/4 flex justify-between"
              >
                <span className="font-semibold">{block.content}</span>
                <span>{block.distance} KMS</span>
              </div>
            ))
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default WorkoutBuilder;
