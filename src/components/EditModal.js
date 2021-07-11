import React,{useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

function EditModal({editableData,onDataEdit,showEditableModal,setEditableModalState}) {
    const [formData,setFormData]=useState(editableData)
    const [emptyField,setEmptyField]=useState(false)
    // console.log(editableData)
   // console.log(showEditableModal)
    const [modal, setModal] = useState(showEditableModal);
    const toggle = () => setModal(!modal);

    const onDataUpdate=()=>{
        //alert('jjj')
        console.log(formData)
        if(formData.title && formData.description){
            setEmptyField(false)
            toggle();
            onDataEdit(formData);
            //alert('ooo')
            return;
        }else{
            setEmptyField(true)
        }
        
    }
    const modalToggler=()=>{
        toggle();
        setEditableModalState(!modal)
        setEmptyField(false)
    }

    useEffect(()=>{
        setModal(showEditableModal)
        setFormData(editableData)
    },[editableData,showEditableModal,onDataEdit])

    return (
        <div>
           {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal  backdrop='static' isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={modalToggler}>Modal title</ModalHeader>
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
                        <Input value={formData.status} onChange={(e)=>setFormData({...formData,status:e.target.value})} type="select" name="select" id="status">
                        <option>pending</option>
                        <option>completed</option>
                        <option>inProgress</option>
                        
                        </Input>
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={onDataUpdate}>Update</Button>{' '}
                </ModalFooter>
            </Modal>  
        </div>
    )
}

export default EditModal
