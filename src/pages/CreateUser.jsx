import React,{ useRef } from 'react'
import{ Container,Form, Label,Input,Button, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export default function CreateForm(){
    const title = useRef()
    const body = useRef()
    const navigate = useNavigate()
    

    function handleSubmit(e){
        e.preventDefault()
        const data = {
            title:title.current.value,
            body:body.current.value
        }
        axios.post('https://dummyjson.com/products', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              console.log('Post created:', response.data);
              navigate('/');
            })
            .catch(error => {
              console.error('Error creating post:', error);
            });
    }

    
    return(
        <Container className='mt-5'>
            <h1>Create a User</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label
                for="title"
                hidden
                >
                Title
                </Label>
                <Input
                id="title"
                name="title"
                placeholder="title"
                type='text'
                innerRef={title}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="body"
                hidden
                >
                Body
                </Label>
                <Input
                id="body"
                name="body"
                placeholder="Body"
                type="textarea"
                innerRef={body}
                />
            </FormGroup>
            {' '}
            <Button>
                Submit
            </Button>
            </Form>
            <Button className='mt-3' color="primary">
                <Link style={{ color: 'white', textDecoration:'none' }} to="/">Back</Link>
            </Button>
        </Container>
    )
}
