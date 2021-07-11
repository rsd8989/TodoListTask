import React,{useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


function AddModal({showAddingModal,addNewData,setAddingModalState}) {
    const [formData,setFormData]=useState({title:"",description:"",status:"pending"})
    const [emptyField,setEmptyField]=useState(false)
   // console.log(showEditableModal)
    const [modal, setModal] = useState(showAddingModal);
    const toggle = () => setModal(!modal);

    const addNewRecord=()=>{
        console.log(formData)
        if(formData.title && formData.description){
            setEmptyField(false)
            addNewData(formData)
            setFormData({title:"",description:"",status:"pending"})

        }else{
            setEmptyField(true)
        }
    }
    const modalToggler=()=>{
        toggle();
        setAddingModalState(!modal)
        setFormData({title:"",description:"",status:"pending"})
        setEmptyField(false)
    }
    useEffect(()=>{
        setModal(showAddingModal)
        //setFormData(editableData)
    },[showAddingModal,addNewData])

    return (
        <div>
         <Modal backdrop='static' isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={()=>modalToggler()}>Modal title</ModalHeader>
                <ModalBody>
                {emptyField && <p style={{color:'red'}}>Please fill all the fields</p>}
                <Form>
                    <FormGroup>
                        <Label for="Title">Title</Label>
                        <Input onChange={(e)=>setFormData({...formData,title:e.target.value})} value={formData?.title} type="text" name="Title" id="Title" placeholder="write the title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Description">Description</Label>
                        <Input onChange={(e)=>setFormData({...formData,description:e.target.value})} value={formData?.description} type="text" name="description" id="Description" placeholder="write the description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">status</Label>
                        <Input onChange={(e)=>setFormData({...formData,status:e.target.value})} type="select" name="select" id="status">
                        <option>pending</option>
                        <option>completed</option>
                        <option>inProgress</option>
                        
                        </Input>
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={addNewRecord}>Add</Button>{' '}
                </ModalFooter>
            </Modal>     
        </div>
    )
}

export default AddModal
