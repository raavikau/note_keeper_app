import React from "react";
import Header from "./Header";
import Notes from "./Notes";
import Footer from "./Footer";
import notes from "../notes";

function createNote(note){
    return  (<Notes 
        key={note.key}
        title={note.title} 
        content={note.content} 
    /> );
}
function App(){
    return <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>
}

export default App;
