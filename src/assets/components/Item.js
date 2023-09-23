import React, { useState } from "react";
import iconTrash from "../image/trash.png";
import iconPencil from "../image/pencil.png";
import iconSave from "../image/save-as.png";

export const Item = ({ item, onDeleteTask, onToggleTask, onEditTask }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editTask, setEditTask] = useState(item.task);

  const handleSave = () => {
    onEditTask(item.id, editTask);

    setOnEdit(false);
  };

  return (
    <li className="flex justify-between border-[0.15rem] border-gray-300 rounded-md h-[3rem] mb-[0.3rem] mt-[0.3rem] max-[429px]:h-[2.5rem] max-[429px]:my-[0.2rem]" key={item.id}>
      <div className="Data flex w-[40rem] items-center max-[429px]:w-[17rem]">
        {onEdit ? (
          <input
            value={editTask}
            className="border ml-[0.5rem] pl-[0.5rem] font-medium w-[40rem] rounded-md max-[429px]:pl-[0.2rem] max-[429px]:ml-[0.2rem] max-[429px]:w-[17rem] "
            onChange={(e) => {
              setEditTask(e.target.value);
            }}
          />
        ) : (
          <span className="ml-[1rem] font-medium max-[429px]:ml-[0.5rem]" style={item.complete ? { textDecoration: "line-through", color: "red" } : {}}>
            {item.task}
          </span>
        )}
      </div>
      <div className="EditData flex items-center">
        <input type="checkbox" className=" accent-[#16a3b5]" checked={item.complete} onChange={() => onToggleTask(item.id)} />
        <button
          className=" ml-[0.6rem] mr-[0.4rem]"
          onClick={() => {
            if (onEdit) {
              handleSave();
            } else {
              setOnEdit(true);
            }
          }}
        >
          {onEdit ? <img src={iconSave} alt="" /> : <img src={iconPencil} alt="" />}
        </button>
        <button className="mr-[1rem] max-[429px]:mr-[0.5rem]" onClick={() => onDeleteTask(item.id)}>
          <img src={iconTrash} alt="" />
        </button>
      </div>
    </li>
  );
};
