import React, { useState } from "react";

function CreateArea(){
    const [note, addNote] = useState({title:"",content:""});
    function handleChange(event) {
        const {name, value} = event.target;
        addNote((previousval) => {
            return {
                ...previousval,
                [name] : value
            }
        });
    }
    return <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..."  value={note.content} />
        <button>Add</button>
        </form>
}

export default CreateArea;
