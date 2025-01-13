import React, { useState } from "react";

function CreateArea(props) {
    const [note, addNote] = useState({ title: "", content: "" });

    function handleChange(event) {
        const {name, value} = event.target;
        addNote((previousval) => {
            return {
                ...previousval,
                [name] : value,
            }
        });
    }

    function submitNote(event) {
        props.onAddContent(note);
        addNote({ title: "", content: "" });
        event.preventDefault();
    }

    return (
        <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
            <textarea onChange={handleChange} name="content" placeholder="Take a note..."  value={note.content} />
            <button onClick={submitNote}>Add</button>
        </form>
    ); 
}

export default CreateArea;
