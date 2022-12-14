import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "15/04/2021",
    },
    {
        id: nanoid(),
        text: "this is my second note!",
        date: "16/04/2021",
      },
      {
        id: nanoid(),
        text: "this is my third note!",
        date: "17/04/2021",
      },
      {
        id: nanoid(),
        text: "this is my fourth note!",
        date: "18/04/2021",
      },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};
export default App;
