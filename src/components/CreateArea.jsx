import React from "react";

function CreateArea(){
    return <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." />
        <button>Add</button>
        </form>
}

export default CreateArea;
