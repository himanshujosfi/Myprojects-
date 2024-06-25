import React from 'react'
import Todo from './Component/pages/Todo'
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "./index.css"

const App = () => {
  return (
    <div >{<Todo />}</div>
  )
}

export default App