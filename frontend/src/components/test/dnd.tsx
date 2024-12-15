// "use client";
// import React, { useState } from "react";
// import {
//     DndContext,
//     closestCenter,
//     KeyboardSensor,
//     PointerSensor,
//     useSensor,
//     useSensors,
// } from "@dnd-kit/core";
// import {
//     arrayMove,
//     SortableContext,
//     sortableKeyboardCoordinates,
//     verticalListSortingStrategy,
// } from "@dnd-kit/sortable";

// import { DragEndEvent } from "@dnd-kit/core";
// import { SortableItem } from "./sortable"; 

// import Item from "./shit";

// function App() {
//     const [items, setItems] = useState<Item[]>([
//         { id: 1 },
//         { id: 2 },
//         { id: 3 },
//     ]);

//     const sensors = useSensors(
//         useSensor(PointerSensor),
//         useSensor(KeyboardSensor, {
//             coordinateGetter: sortableKeyboardCoordinates,
//         })
//     );

//     const handleDragEnd = (event: DragEndEvent) => {
//         // Use the specific DragEndEvent type
//         const { active, over } = event;

//         if (active.id !== over.id) {
//             setItems((items) => {
//                 const oldIndex = items.findIndex(
//                     (item) => item.id === active.id
//                 );
//                 const newIndex = items.findIndex((item) => item.id === over.id);

//                 return arrayMove(items, oldIndex, newIndex);
//             });
//         }
//     };

//     return (
//         <DndContext
//             sensors={sensors}
//             collisionDetection={closestCenter}
//             onDragEnd={handleDragEnd}
//         >
//             <SortableContext
//                 items={items}
//                 strategy={verticalListSortingStrategy}
//             >
//                 {items.map((item) => (
//                     <SortableItem key={item.id} id={item.id} />
//                 ))}
//             </SortableContext>
//         </DndContext>
//     );
// }

// export default App;