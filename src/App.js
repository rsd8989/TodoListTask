import React from 'react';
import {DataContext} from './context/DataContext';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const dataList=[
    {title:"first record",description:"this is the first record description ",status:"pending"},
    {title:"second record",description:"this is the second record description  ",status:"pending"},
    {title:"third record",description:"this is the third record description ",status:"pending"},
    {title:"fourth record",description:"this is the fourth record description ",status:"pending"},
    {title:"fifth record",description:"this is the fifth record description  ",status:"pending"},
    {title:"sixth record",description:"this is the sixth record description ",status:"pending"}
  ]
  return (
    <DataContext.Provider value={dataList}>
        <ToDoList/>
    </DataContext.Provider>
 
  );
}

export default App;
