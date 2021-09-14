import React from "react";

interface EventComponentProps {}

export const EventComponent: React.FC<EventComponentProps> = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div>
        <h1 draggable onDragStart={onDragStart}>
          Drag me!
        </h1>
      </div>
    </div>
  );
};
