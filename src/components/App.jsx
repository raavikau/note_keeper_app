import React from "react";

function App(){
    const currentYear = new Date().getFullYear();
    return <div>
        <header>
            <h1>Note Keeper</h1>
        </header>
        <div className="note">
            <h1>This is the title</h1>
            <p>This is the note content</p>
        </div>
        <footer><p>Copyright @ {currentYear}</p></footer>
    </div>
}

export default App;