import React,{useState,useEffect,useContext} from 'react'
import {DataContext} from './../context/DataContext';
import { Table,Button } from 'reactstrap';
import EditModal from './EditModal';
import AddModal from './AddModal';
import Style from './../styles/TodoListStyle.module.css';

function ToDoList() {
    const [data,setData]=useState(useContext(DataContext))
    const [showEditableModal,setEditableModalState]=useState(false)
    const [showAddingModal,setAddingModalState]=useState(false)
    const [editableData,setEditableData]=useState("")
    const [currentEditableIndex,setCurrentEditableIndex]=useState(null)

    const onEditModal=(index)=>{
        setEditableData(data[index])
        setCurrentEditableIndex(index)
        setEditableModalState(true)
    }
    const onDataEdit=(updatedData)=>{
        // console.log(updatedData)
        // console.log(currentEditableIndex)
            const newData=[...data];
            newData[currentEditableIndex]=updatedData
            setData(newData)
            setEditableModalState(false);
    }
    const deleteRecord=(deletinEntry)=>{
        const newData=data.filter((value,index)=>{
            if(index==deletinEntry){
                return false;
            }
            return true;
        })

        setData(newData)
    }

    const onAddNewData=()=>{
            setAddingModalState(true)
    }
    const addNewData=(newData)=>{
        const anoterhData=[...data];
        anoterhData.push(newData)
        setData(anoterhData)
        setAddingModalState(false);


    }
    // useEffect(() => {
    //     setData(    // },[])
    const completedStyle={
        background:'green',
        color:'white'
    }
    return (
        <div>
            <div className={Style.navbar_container}>
                <h2>A basic to-do list</h2>
            </div>
            <div style={{textAlign:'center'}}>
                <button className={Style.add_button} onClick={()=>onAddNewData()}>Add record</button>
            </div>
            {<EditModal setEditableModalState={setEditableModalState} editableData={editableData} onDataEdit={onDataEdit} showEditableModal={showEditableModal}/>}
            {<AddModal setAddingModalState={setAddingModalState}  addNewData={addNewData} showAddingModal={showAddingModal} />}
            {data.length>0 && <Table>
                
                  <thead>
                    <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>status</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map((element,index)=>{
                           return (
                                <tr key={Date.now()+Math.random(0,100)} style={element.status=="completed"? completedStyle:{color:'black',background:'white'}}>
                                <th scope="row">{index}</th>
                                <td>{element.title}</td>
                                <td>{element.description}</td>
                                <td>{element.status}</td>
                                <td><Button onClick={()=>onEditModal(index)}  color="primary">edit</Button></td>
                                <td><Button onClick={()=>deleteRecord(index)}  color="danger">delete</Button></td>

                                </tr>
                           )
                       })
                   }
                    
                    
                </tbody>
            </Table>}
            {data.length<=0 && <h2 style={{textAlign:'center'}}>please add a record</h2>}
            
            
        </div>
    )
}

export default ToDoList
