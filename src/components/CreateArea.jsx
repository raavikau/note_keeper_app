import React, { useState } from "react";

function CreateArea(props) {
    const [note, addNote] = useState({ title: "", content: "" });
    const [expand, isExpanded] = useState(false);

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

    function clickChange(){
        isExpanded(true);
    }

    return (
        <form>
            { expand && ( <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> )}
            <textarea onChange={handleChange} onClick={clickChange} name="content" placeholder="Take a note..."  rows={expand ? 3 : 1} value={note.content} />
            { expand && ( <button onClick={submitNote}>Add</button> )}
        </form>
    ); 
}

export default CreateArea;
