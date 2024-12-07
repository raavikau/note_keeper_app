import React from "react";
import Header from "./Header";
import Notes from "./Notes";
import Footer from "./Footer";
import note from "../notes";

function App(){
    return <div>
        <Header />
        <Notes title={note[0].title} content={note[0].content} />
        <Notes title={note[1].title} content={note[1].content} />
        <Notes title={note[2].title} content={note[2].content} />
        <Notes title={note[3].title} content={note[3].content} />
        <Notes title={note[4].title} content={note[4].content} />
        <Footer />
    </div>
}

export default App;
