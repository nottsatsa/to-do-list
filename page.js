"use client";
import Image from "next/image";
import { Buttons, Task_container, Input } from "@/components";
import { Add_button } from "@/components/Add_button";
import { useState } from "react";

export default function Home() {
  const [task_name_input, setTask_name_input] = useState("");

  const handleOnChange = (event) => {
    setTask_name_input(event.target.value);
  };

  const [tasks, setTasks] = useState([]);
  const addDAta = () => {
    setTasks([...tasks, { title: task_name_input }]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[40px] border-solid border-black bg-[#ffffff] w-[377px] py-[24px] px-[16px] rounded-[6px]">
      <div className="flex flex-col w-[345px] gap-[32px] items-center justify-center">
        <div className="flex flex-col w-[345px] gap-[20px] items-center justify-center">
          <h6 className="text-black">To-Do list</h6>
          <div className="flex flex-row gap-[6px]">
            <Input task_name={handleOnChange} />
            <Buttons className={"h-[40px]"} text={"Add"} onClick={addDAta} />
            <Add_button />
          </div>
          <div className="w-[345px] flex flex-row justify-start gap-[6px] ">
            <Buttons text={"All"} />
            <Buttons text={"Active"} />
            <Buttons text={"Completed"} />
          </div>
        </div>
        {/* <h6>No tasks yet. Add one above!</h6> */}

        {tasks.map((value, i) => {
          return <Task_container key={i} check_name={`${value.title}`} />;
        })}
      </div>
      <footer>
        <h6>Powered by Pinecone academy</h6>{" "}
      </footer>
    </div>
  );
}
