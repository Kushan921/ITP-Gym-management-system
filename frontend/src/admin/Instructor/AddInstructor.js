import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';


function AddInstructor() {

const [first_name,setFirst_name] = useState('');
const [last_name,setLast_name] = useState('');
const [age,setAge] = useState('');
const [gender,setGender] = useState('');
const [email,setEmail] = useState('');
const [contact,setContact] = useState('');
const [password,setPassword] = useState('');


const First_nameSetter = (e) => {
    setFirst_name(e.target.value);
}
const Last_nameSetter = (e) => {
    setLast_name(e.target.value);
}
const AgeSetter = (e) => {
    setAge(e.target.value);
}
const GenderSetter = (e) => {
    setGender(e.target.value);
}
const EmailSetter = (e) => {
    setEmail(e.target.value);
}

const ContactSetter = (e) => {
    setContact(e.target.value);
}
const PasswordSetter = (e) => {
    setPassword(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    const newInstructor = {
        first_name: first_name,
        last_name: last_name,
        age: age,
        gender: gender,
        email: email,
        contact: contact,
        password: password
    };
    axios.post('http://localhost:8020/instructor/add', newInstructor).then(() => {
        alert("newInstructor added");
        window.location.reload();
    }).catch((err) => {
        alert(err);
    })
}

  return (
    <div className='container-fluid'>
      <Typography gutterBottom variant='h3' align='center'>
        Add Instructors
      </Typography>
      <Card style={{maxWidth:500,margin:"0 auto",padding:"20px 5px"}}>
        <CardContent>
            <form>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField label="First name" placeholder='Enter you first name' variant='outlined' fullWidth required onChange={First_nameSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Last name" placeholder='Enter you last name' variant='outlined' fullWidth required onChange={Last_nameSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Gender" placeholder='Enter your gender' variant='outlined' fullWidth required onChange={GenderSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Age" placeholder='Enter your age' variant='outlined' fullWidth required onChange={AgeSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField type='email' label="Email" placeholder='Enter your email' variant='outlined' fullWidth required onChange={EmailSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Contact" placeholder='Enter your contact' variant='outlined' fullWidth required onChange={ContactSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField type='password' label="Password" placeholder='Enter your password' variant='outlined' fullWidth required onChange={PasswordSetter} />
                    </Grid>
                    <Grid xs={12} item>
                        <Button type='submit' onClick={onSubmit} style={{marginTop:'15px'}} variant='contained' color='primary' fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddInstructor
