import Image from "next/image";
import {
  Buttons,
  Input,
  Board_comp,
  Container_first,
  Container_second,
  Input_container,
  Filter_container,
  Task_container,
} from "@/components";
import { Task } from "@/components/Task";

export default function Home() {
  return (
    <Board_comp>
      <Container_first>
        <Container_second>
          <h6 className="text-black">To-Do list</h6>
          <Input_container>
            <Input />
            <Buttons className={"h-[40px]"} text={"Add"} />
          </Input_container>
          <Filter_container>
            <Buttons text={"All"} />
            <Buttons text={"Active"} />
            <Buttons text={"Completed"} />
          </Filter_container>
        </Container_second>
        {/* <h6>No tasks yet. Add one above!</h6> */}
        <Task_container>
          <Task task_text={"todo1"} />
        </Task_container>
      </Container_first>
      <footer>
        <h6>Powered by Pinecone academy</h6>{" "}
      </footer>
    </Board_comp>
  );
}
