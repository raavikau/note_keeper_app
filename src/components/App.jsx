import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addContent(newNote) {
        setNotes(
            (previousNotes) => {
                return [...previousNotes, newNote];
            }
        );
    }

    function deleteNote(noteId) {
        setNotes(
            (previousNotes) => {
                return previousNotes.filter((notes, index) => {
                    return index !== noteId;
                });
            }
        );
    }

    return (
        <div>
            <Header />
            <CreateArea onAddContent={addContent} />
            { notes.map(
                (noteItem, index) => {
                    return ( <Note 
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDeleteItem={deleteNote}
                        />
                    );
                }
            )}
            <Footer />
        </div>
    );
}

export default App;
