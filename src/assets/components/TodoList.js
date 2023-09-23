import React, { useState } from "react";
import { Item } from "./Item";

export const TodoList = ({ items, onDeleteTask, onToggleTask, onClearAllTask, onClearDoneTask, onEditTask }) => {
  const [sortBy, setSortBy] = useState("all");

  let sortedItems;

  if (sortBy === "all") {
    sortedItems = items;
  }

  if (sortBy === "done") {
    sortedItems = items.slice().sort((a, b) => b.complete - a.complete);
  }

  if (sortBy === "todo") {
    sortedItems = items.slice().sort((a, b) => a.complete - b.complete);
  }
  return (
    <>
      <div>
        <button className="bg-[#16a3b5] hover:bg-[#1b8593] w-[16rem] h-[2.3rem] rounded-lg text-white max-[429px]:w-[7rem] max-[429px]:h-[1.9rem]" value="all" onClick={(e) => setSortBy(e.target.value)}>
          All
        </button>
        <button className="bg-[#16a3b5] hover:bg-[#1b8593] w-[16rem] h-[2.3rem] rounded-lg text-white mx-4 max-[429px]:w-[7rem] max-[429px]:h-[1.9rem]" value="done" onClick={(e) => setSortBy(e.target.value)}>
          Done
        </button>
        <button className="bg-[#16a3b5] hover:bg-[#1b8593] w-[16rem] h-[2.3rem] rounded-lg text-white max-[429px]:w-[7rem] max-[429px]:h-[1.9rem]" value="todo" onClick={(e) => setSortBy(e.target.value)}>
          Todo
        </button>
      </div>
      <div className="flex flex-col max-h-[45vh] overflow-y-scroll overflow-x-hidden my-[1rem] max-[429px]:my-[0.5rem]">
        <ul className="flex flex-col">
          {sortedItems.map((item) => (
            <Item item={item} key={item} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} onEditTask={onEditTask} />
          ))}
        </ul>
      </div>
      <div className="flex justify-between pb-[1rem] max-[429px]:gap-[1.5rem]">
        <button className="bg-[#E80606] hover:bg-[#B10000] w-[24rem] h-[2.3rem] rounded-lg text-white max-[429px]:w-[20rem] max-[429px]:h-[1.9rem]" onClick={onClearDoneTask}>
          Delete Done Task
        </button>
        <button className="bg-[#E80606] hover:bg-[#B10000] w-[24rem] h-[2.3rem] rounded-lg text-white max-[429px]:w-[20rem] max-[429px]:h-[1.9rem]" onClick={onClearAllTask}>
          Delete All Tasks
        </button>
      </div>
    </>
  );
};
