import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: '',
 completed: false
 }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess}) 
        if(guess.length == state.word.length){ 
             if(guess == state.word){
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
            }else{
                if ((state.attempt == 1)) {
                console.log('Hint: what would do if you happy.')    
                }
                if ((state.attempt == 2)) {
                console.log('Hint:move some organe on your face.')
                
                }
                if ((state.attempt == 3)) {
                console.log('so close')
                }
                if ((state.attempt < 5)){
                console.log('reset,Please try again')
                setState({...state, guess: '', attempt: state.attempt + 1})
                }else if((state.attempt == 5)){
                    console.log('Game over')  
                }
            }
            
        }
    }

     return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/> 
                )
            }
        </div>
 );
}

