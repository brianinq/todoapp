import { v4 as uuidv4 } from "uuid";
const instructions = [
  {
    id: uuidv4(),
    content: "To add an item to your list please type it out above",
    done: false,
  },
  {
    id: uuidv4(),
    content: "To mark a task as complete click on the check mark",
    done: true,
  },
  {
    id: uuidv4(),
    content: "To remove an item click on the delete button",
    done: false,
  },
];

export default instructions;
