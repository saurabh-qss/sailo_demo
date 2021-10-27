import React from 'react';
import './App.css';
import './styles/form.scss';
import {useStore, listContext} from './dashboard/store';
import Sailo from "./dashboard/Sailo";

function App() {
    const store = useStore();
  return (
    <div className="App main">
        <listContext.Provider value = {store}>
            <Sailo/>
        </listContext.Provider>
    </div>
  );
}

export default App;
