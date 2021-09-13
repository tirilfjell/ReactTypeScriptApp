import React from "react";
import { Child } from "./Child";

interface ParentProps {}

export const Parent: React.FC<ParentProps> = ({}) => {
  return <Child color="red" onClick={() => console.log("Clicked")} />;
};
