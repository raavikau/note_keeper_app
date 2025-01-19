import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

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
        <form className="create-note">
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
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    ); 
}

export default CreateArea;
