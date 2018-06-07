import { Module } from "cerebral";
import * as sequences from "./sequences";
import { id } from "./providers";

export default Module({
  state: {
    todos: {
      0: { text: "This is a test", completed: false, category: "today" },
      1: { text: "I already did this one", completed: true, category: "today" },
      2: { text: "Did this too", completed: true, category: "someday" },
      3: { text: "Didn't do this", completed: false, category: "done" }
    }
  },
  signals: {
    incremented: sequences.increment,
    decremented: sequences.decrement,
    toggleCompleted: sequences.toggleCompleted
  },
  providers: {
    id
  }
});
