import React, { useContext } from 'react'
import { DataContext } from '../App'
import QuestionMath from '../data/QuestionMath';
function Score() {
    const {appScore,setAppScore} = useContext(DataContext);
    const {appState,setAppState} = useContext(DataContext);
    return (
        <div className='score-page'>
            <h2 className='texts-score'>สรุปผลคะแนน</h2>
            <p className='text-score'>{appScore}/{QuestionMath.length}</p>
            <button className='btn-start' onClick={()=>setAppState('menu')}>กลับไปหน้าแรก</button>
        </div>
    )
}

export default Score