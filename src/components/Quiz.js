import React,{ useContext , useEffect, useState} from 'react'
import QuestionMath from '../data/QuestionMath'
import { DataContext } from '../App';


function Quiz() {
    const {appState, setAppState} = useContext(DataContext)
    const {appScore, setAppScore} = useContext(DataContext)
    const[current, setCurrent] = useState(0);
    const[select, setSelect] = useState('');

    useEffect(()=>{
        checkAnswer()
        // eslint-disable-next-line

    },[select])

    const checkAnswer = () => {
        if(select !==''){
            if(select === QuestionMath[current].answer){
                setAppScore(appScore + 1)
                nextQuestion();
            }else{
                nextQuestion();
            }
        }
    }

    const nextQuestion = () =>{
        setSelect('')
        if(current === QuestionMath.length - 1){
            setAppState('Score')
           
        }else {
            setCurrent(current + 1)
        }
    }

    return (
        <div>
            <h2 className='text-quizs'>{QuestionMath[current].question}</h2>
            <div className="btn-quiz">
                <button onClick={()=> setSelect('A')}>{QuestionMath[current].A}</button>  
                <button onClick={()=> setSelect('B')}>{QuestionMath[current].B}</button>  
                <button onClick={()=> setSelect('C')}>{QuestionMath[current].C}</button>  
                <button onClick={()=> setSelect('D')}>{QuestionMath[current].D}</button> 
            </div> 
            <p className='text'>{current + 1}/{QuestionMath.length}</p>
        </div>
    )
}

export default Quiz