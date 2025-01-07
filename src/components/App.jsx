import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function createNote(){
    return  (<Note 
        key={1}
        title="Note title" 
        content="Note Content"
    /> );
}
function App(){
    return <div>
        <Header />
        {createNote()}
        <Footer />
    </div>
}

export default App;
