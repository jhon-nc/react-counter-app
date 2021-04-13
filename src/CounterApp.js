// "imr" para importar react rapidamente

/// "rafcp" para crear un functional component con propTypes

import React,{useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({saludo,value}) => {
    
    const [counter, setCounter] = useState(value) // [] arreglos

    //handleAdd
    const handleAdd=()=>{
        setCounter (counter+1);
        //setCounter( (c)=> c+1 );
    }

    const handleSub=()=>{
        setCounter (counter-1);
        //setCounter( (c)=> c+1 );
    }

    const handleReset=()=>{
        setCounter (value);
        //setCounter( (c)=> c+1 );
    }

    return (
    <>
        <h1>{saludo}</h1>
        <p>{counter}</p>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleSub}>-1</button>
    </>
    );
}

CounterApp.propTypes ={
    saludo: PropTypes.string.isRequired,
    value: PropTypes.number
}

export default CounterApp;