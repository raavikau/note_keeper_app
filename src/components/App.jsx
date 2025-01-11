import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [noteContent, setNote] = useState([]);

    function addContent(newNote) {
        setNote((previousval) => {
            return [...previousval, newNote];
        });
    }

    function deleteNote(noteId) {
        setNote ((previousval) => {
            return previousval.filter((noteContent, index) => {
                return index !== noteId;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAddContent={addContent} />
            {noteContent.map((noteItem, index) => {
                return (<Note 
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDeleteItem={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
