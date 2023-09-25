import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../../src/styles.css";

function App() {
  // created empty array using useState
  const [notes, setNotes] = useState([]); 

  function addNote(newNote) {
    // setNotes sets the value for const notes
    setNotes(prevNotes => {              
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
     // In setNotes we declared function in it, and that function have previous value as argument in it.
    setNotes(prevNotes => {             
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {/* Here map function will loop through the each item in notes array and will return Note component for each item in the array */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
