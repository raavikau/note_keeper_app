import React, { useState } from "react";

function CreateArea(props) {
    const [note, addNote] = useState({ title: "", content: "" });
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        addNote((previousNote) => {
            return {
                ...previousNote,
                [name] : value,
            }
        });
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAddContent(note);
        addNote({ title: "", content: "" });
    }

    return (
        <form>
            { isExpanded && (
                <input onChange={handleChange}
                name="title"
                placeholder="Title"
                value={note.title}
                />
            )}
            <textarea
            onChange={handleChange}
            onClick={() => setIsExpanded(true)}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            value={note.content} 
            />
            { isExpanded && <button onClick={submitNote}>Add</button> }
        </form>
    ); 
}

export default CreateArea;
