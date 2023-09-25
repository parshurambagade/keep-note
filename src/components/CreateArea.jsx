import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpand, setIsExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // Here even.target object is destructured 
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        // Here we used spread operator to spread all the previous objects in the array
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandTitle() {
    setIsExpand(true);

  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          id="title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          onClick={expandTitle}
          id="content"
        />

        {/* Zoom is the component from the material ui that animates the child elements. It only works if the "in" attribute is passed a true as a value*/}
        <Zoom in={isExpand}>

        {/* Fab is another component from material ui. It is the circular button */}
          <Fab onClick={submitNote}>
          {/* AddIcon is the ADD Icon from the material ui icon library */}
            <AddIcon /> 
          </Fab>
          
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
