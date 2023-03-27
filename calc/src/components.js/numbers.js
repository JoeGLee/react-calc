import { useState, useEffect } from "react";
import Display from "./display";
import calc from "./functions";

const Number = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [equ,setEqu] = useState('');
    const [equOn,setEquOn] = useState(false);
    
    


    const onNumberClicked = (e) => {
        if(equOn === false){ 
         setNum1(num1.concat(e.target.className));
        }
        else{
            setNum2(num2.concat(e.target.className))
        }
      
    }

    const onEquClicked = (e) => {
        if(equOn === false){
            setEqu(equ.concat(e.target.className));
            setEquOn(true);
        }
        else{
            return
        }
    }

    const onEqualClicked = () =>{
        if(equOn === true){

            const total = calc(num1,num2,equ);
            setNum1(total);
            setNum2('');
            setEqu('');
            setEquOn(false);
            

        }
        else{
            return
        }
    }

    const onClearClicked = () =>{
        setNum1('');
        setNum2('');
        setEqu('');
        setEquOn(false);
        
    }

    return(
        <div>
            <Display displayNum1={num1} displayEqu={equ} displayNum2={num2}/>
           <button className='1' onClick={onNumberClicked}>1</button>
           <button className='2' onClick={onNumberClicked}>2</button>
           <button className='3' onClick={onNumberClicked}>3</button>
           <button className='4' onClick={onNumberClicked}>4</button>
           <button className='5' onClick={onNumberClicked}>5</button>
           <button className='6' onClick={onNumberClicked}>6</button>
           <button className='7' onClick={onNumberClicked}>7</button>
           <button className='8' onClick={onNumberClicked}>8</button>
           <button className='9' onClick={onNumberClicked}>9</button>
           <button className='0' onClick={onNumberClicked}>0</button>
           <button className="." onClick={onNumberClicked}>.</button>
           <button className="+" onClick={onEquClicked}>+</button>
           <button className="-" onClick={onEquClicked}>-</button>
           <button className="*" onClick={onEquClicked}>x</button>
           <button className="/" onClick={onEquClicked}>/</button>
           <button className="=" onClick={onEqualClicked}>=</button>
           <button className="clear" onClick={onClearClicked}>Clear</button>
        </div>
    )
}

export default Number