import React, { useContext } from 'react'
import { DataContext } from '../App'

function Menu() {

    const {appState, setAppState} = useContext(DataContext)

    return (
            <div className="container">
                <h2><span style={{color: '#ffc849'}}>บ้าน</span><span style = {{color: '#5774cd'}}>คณิต</span><span style = {{color: '#ffc849'}}>ศาสตร์</span></h2>
                <button className='btn-start' onClick={()=>setAppState('quiz')}>เริ่มทำแบบทดสอบ</button>
            </div>
    
    )
}

export default Menu