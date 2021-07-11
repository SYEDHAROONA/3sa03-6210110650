import React from 'react';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "smile""happy""trust";
function App() {
    return (
        <div>
            Shuffle Game: Arrange the following words correctly.
             <WordCard value={word}/>
            }
        </div>
        );
       
}

export default App;