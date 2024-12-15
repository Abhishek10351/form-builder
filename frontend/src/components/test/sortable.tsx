// "use client";
// import React from "react";
// import {
//     useSortable,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import TextInput from "../forms/input/editable";

// import Item from "./shit";

// export function SortableItem(props: Item) {
//     const { attributes, listeners, setNodeRef, transform, transition } =
//         useSortable({
//             id: props.id,
//         });

//     const style: React.CSSProperties = {
//         transform: CSS.Transform.toString(transform),
//         transition,
//     };

//     return (
//         <div ref={setNodeRef} style={style} {...attributes} {...listeners} handle>
//             {/* ... Your component content here ... {props.id} */}
//             <p>lol</p>
//             <TextInput/>
//         </div>
//     );
// }
