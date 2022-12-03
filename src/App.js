import { createContext, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';

export const DataContext = createContext();
    function App() {
       const [appState, setAppState] = useState('Score');
       const [appScore, setAppScore] = useState(0);
        return (
            <DataContext.Provider value = {{appState,setAppState,appScore,setAppScore}}>
                <div className="container">
                    <h1>แบบทดสอบคณิตศาสตร์เบื้องต้น</h1>
                    <div className="App">
                        {appState === 'menu' && <Menu/>}
                        {appState === 'quiz' && <Quiz/>}
                        {appState === 'Score' && <Score/>}
                    </div>
                </div>
            </DataContext.Provider>

        );
    }

export default App;


