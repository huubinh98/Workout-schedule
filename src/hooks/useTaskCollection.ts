import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>("tasks", {
    "MON ": [
      {
        id: uuidv4(),
        column: ColumnType.MON,
        title: "Task 1",
        color: "blue.300",
      },
    ],
    TUE: [
      {
        id: uuidv4(),
        column: ColumnType.TUE,
        title: "Task 2",
        color: "yellow.300",
      },
    ],
    WED: [
      {
        id: uuidv4(),
        column: ColumnType.WED,
        title: "Task 3",
        color: "red.300",
      },
    ],
    THU: [
      {
        id: uuidv4(),
        column: ColumnType.THU,
        title: "Task 4",
        color: "green.300",
      },
    ],
    FIR: [
      {
        id: uuidv4(),
        column: ColumnType.FIR,
        title: "Task 3",
        color: "red.300",
      },
    ],
    SAT: [
      {
        id: uuidv4(),
        column: ColumnType.SAT,
        title: "Task 4",
        color: "green.300",
      },
    ],
    SUN: [
      {
        id: uuidv4(),
        column: ColumnType.SUN,
        title: "Task 3",
        color: "red.300",
      },
    ],
  });
}

export default useTaskCollection;
