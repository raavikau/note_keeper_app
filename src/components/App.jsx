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

    return (
        <div>
            <Header />
            <CreateArea onAddContent={addContent} />
            {noteContent.map((noteItem) => {
                return <Note 
                        key={1}
                        title={noteItem.title}
                        content={noteItem.content}
                    />
            })}
            <Footer />
        </div>
    );
}

export default App;
