import React, { useState } from "react";
import { Header } from "../assets/components/Header";
import { Form } from "../assets/components/Form";
import { HeaderItem } from "../assets/components/HeaderItem";
import { TodoList } from "../assets/components/TodoList";

const todoDatas = [
  {
    id: 1,
    task: "Pinjam seratus :)",
    complete: false,
  },
  {
    id: 2,
    task: "Memberi makan kucing",
    complete: true,
  },
  {
    id: 3,
    task: "Olahraga 10 menit",
    complete: false,
  },
  {
    id: 4,
    task: "Menghina eMYu",
    complete: false,
  },
  {
    id: 5,
    task: "Belanja harian",
    complete: false,
  },
  {
    id: 6,
    task: "Ngeprint tugas",
    complete: true,
  },
  {
    id: 7,
    task: "Bayar tagihan bulanan",
    complete: true,
  },
  {
    id: 8,
    task: "Berangkat kuliah",
    complete: false,
  },
  {
    id: 9,
    task: "Les bahasa Inggris",
    complete: true,
  },
  {
    id: 10,
    task: "Ke rumah Sabrina",
    complete: false,
  },
];

export const App = () => {
  const [items, setItems] = useState(todoDatas);
  const [searchItems] = useState(todoDatas);

  //function untuk menghadnle apabila ada task baru
  const handleAddTask = (addTask) => {
    setItems([...items, addTask]);
  };

  // funtion untuk menghandle apabila task di delete
  const handleDeleteTask = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //   function untuk menghandle coret task
  const handleToggleTask = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, complete: !item.complete } : item)));
  };

  //   Function untuk handle clear all task
  const handleClearAllTask = () => {
    const confirmation = window.confirm("Kamu yakin mau hapus semua task milikmu?");

    if (confirmation) {
      setItems([]);
    }
  };

  //   Function untuk handle clear done task
  const handleClearDoneTask = () => {
    const confirmation = window.confirm("Kamu yakin mau hapus task yang sudah kamu kerjakan?");

    if (confirmation) {
      setItems((items) => items.filter((item) => item.complete !== true));
    }
  };

  //Function untuk handle edit data task pada function Item
  const handleEditTask = (id, editedTask) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, task: editedTask } : item)));
  };

  // Function untuk handle Fitur Search
  const handleSearchTask = (dataSearch) => {
    // Jika ada data pencarian, filter data tampilan sesuai dengan pencarian
    setItems(searchItems.filter((item) => item.task.toLowerCase().includes(dataSearch)));
  };

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 w-screen h-[100vh] flex flex-col items-center max-[429px]:overflow-hidden">
      {/* Ini form Header */}
      <Header />
      <div className="md:w-[50rem] md:h-[10rem] flex border-[0.15rem] border-gray-300 rounded-md md:bg-transparent max-[429px]:w-[23rem] max-[429px]:h-[11rem] max-[429px]:flex-col ">
        <Form onAddTask={handleAddTask} onSearchTask={handleSearchTask} />
      </div>
      {/* Ini blok List Todo */}
      <HeaderItem />
      <div className="TodoList w-[50rem] flex flex-col max-[429px]:w-[23rem]">
        <TodoList items={items} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} onClearAllTask={handleClearAllTask} onClearDoneTask={handleClearDoneTask} onEditTask={handleEditTask} />
      </div>
    </div>
  );
};
