import React, { useState } from "react";
import iconSearch from "../image/search.png";
import iconAdd from "../image/pencil-alt.png";

export const Form = ({ onAddTask, onSearchTask }) => {
  const [task, setTask] = useState("");
  const [searchTask, setSearchTask] = useState("");

  //untuk menghandle data yang di submit/ klik add todo
  const handleSubmit = (e) => {
    // untuk menjaga agar ketika add todo di klik/ disubmit tidak masuk ke data
    if (!task) return;
    // digunakan untuk mematikan fungsi default form/submit agar kita punya kendali
    e.preventDefault();

    const newTask = { task: task, complete: false, id: Date.now() };
    onAddTask(newTask);

    // untuk membersihkan inputan ketika sudah di submit
    setTask("");
  };

  // untuk handle data search, kirim ke onSearchTask
  const handleSearch = () => {
    onSearchTask(searchTask);
  };

  return (
    <>
      <div className="md:w-[25rem] flex justify-center items-center max-[429px]:w-[23rem]">
        <div className="flex flex-col m-auto max-[429px]:py-[0.5rem] ">
          <div className="flex mb-[1rem] max-[429px]:mb-[0.3rem]">
            <div className="bg-[#16a3b5] w-[3rem] h-[3rem] rounded-md flex items-center justify-center max-[429px]:h-[2rem] max-[429px]:w-[2rem]">
              <img src={iconSearch} alt=""></img>
            </div>
            <input
              placeholder="Search Todo"
              className="w-[20rem] pl-3 rounded-md border-s-gray-600 max-[429px]:w-[20rem]"
              onChange={(e) => {
                setSearchTask(e.target.value);
              }}
            />
          </div>
          <div className="flex">
            <button className="text-white bg-[#16a3b5] hover:bg-[#1b8593] rounded-lg w-[23rem] h-[2.3rem] max-[429px]:w-[22rem] max-[429px]:h-[1.9rem]" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-[25rem] flex justify-center items-center max-[429px]:w-[23rem]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-auto max-[429px]:py-[0.5rem]">
            <div className="flex mb-[1rem] max-[429px]:mb-[0.3rem]">
              <div className="bg-[#16a3b5] w-[3rem] h-[3rem] rounded-md flex items-center justify-center max-[429px]:h-[2rem] max-[429px]:w-[2rem]">
                <img src={iconAdd} alt=""></img>
              </div>
              <input placeholder="Add Todo" className="w-[20rem] pl-3 rounded-md border-s-gray-600 max-[429px]:w-[20rem]" value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className="flex">
              <button className="text-white bg-[#16a3b5] hover:bg-[#1b8593] rounded-lg w-[23rem] h-[2.3rem] max-[429px]:w-[22rem] max-[429px]:h-[1.9rem]">Add Todo</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
