import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Header from './components/Header';
import DraggableBox from './components/DraggableBox';

const initialBlocks = [
  { id: 'warmup', content: 'Warm Up', distance: '2' },
  { id: 'mainset', content: 'Main Set', distance: '5' },
  { id: 'cooldown', content: 'Cool Down', distance: '1' },
];

function App() {
  const [blocks, setBlocks] = useState([]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    // Handle moving items from the draggable blocks to the workout builder
    if (source.droppableId === 'draggableBlocks' && destination.droppableId === 'workoutBuilder') {
      const newBlock = initialBlocks[source.index]; // Grab the new block from initialBlocks
      setBlocks((prev) => [...prev, newBlock]); // Add the new block to the workout builder
    }

    // Handle reordering items within the workout builder
    if (source.droppableId === 'workoutBuilder' && destination.droppableId === 'workoutBuilder') {
      const reorderedBlocks = Array.from(blocks);
      const [removed] = reorderedBlocks.splice(source.index, 1);
      reorderedBlocks.splice(destination.index, 0, removed);
      setBlocks(reorderedBlocks);
    }
  };

  const handleSaveWorkout = () => {
    console.log("Workout Saved:", blocks);
    // Save to a server or local storage here if needed.
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSave={handleSaveWorkout} />
      <main className="p-6 flex justify-center items-start space-x-4">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="draggableBlocks">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/4 bg-white p-4 rounded-lg shadow-md"
              >
                {initialBlocks.map((item, index) => (
                  <DraggableBox key={item.id} id={item.id} index={index} content={item.content} distance={item.distance} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

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
                    <DraggableBox key={block.id} id={block.id} index={index} content={block.content} distance={block.distance} />
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </main>
    </div>
  );
}

export default App;
