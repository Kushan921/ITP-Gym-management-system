// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
// import { Button, Card, CardContent, Grid, TextField,} from '@mui/material'


//     const UpdateInstructor = ({match}) => {
       
//         //console.log("de"+match);
//         //const id = match.params.id;
//         const id="";
    
//         let his = useNavigate();
//         const [instructor, setInstructor] = useState([]);
//         const [first_name,setFirst_name] = useState('');
//         const [last_name,setLast_name] = useState('');
//         const [age,setAge] = useState('');
//         const [gender,setGender] = useState('');
//         const [email,setEmail] = useState('');
//         const [contact,setContact] = useState('');
//         const [password,setPassword] = useState('');
//     const user_id=localStorage.getItem("update-instructor-id");
//         //get logged Reviewer
//         useEffect(() => {
//             // const loggedInUser = localStorage.getItem("user");
//             // console.log(loggedInUser);
//    // console.log(localStorage.getItem("update-instructor-id"))
//     setInstructor(JSON.parse(localStorage.getItem("update-instructor-id")))
//             function getInstructor() {
//                 axios.get("http://localhost:8020/instructor/get/" + id).then((res) => {
//                     setInstructor(res.data);
//                     console.log(res.data);
//                 }).catch((err) => {
                    
//                 })
//             }
    
//             getInstructor();
//         }, []);
    

//         const First_nameSetter = (e) => {
//             setFirst_name(e.target.value);
//         }
//         const Last_nameSetter = (e) => {
//             setLast_name(e.target.value);
//         }
//         const AgeSetter = (e) => {
//             setAge(e.target.value);
//         }
//         const GenderSetter = (e) => {
//             setGender(e.target.value);
//         }
//         const EmailSetter = (e) => {
//             setEmail(e.target.value);
//         }
        
//         const ContactSetter = (e) => {
//             setContact(e.target.value);
//         }
//         const PasswordSetter = (e) => {
//             setPassword(e.target.value);
//         }
    
//         const onSubmit = () => {
//             const InstructorUpdate = {
//                 first_name: first_name,
//                 last_name: last_name,
//                 age: age,
//                 gender: gender,
//                 email: email,
//                 contact: contact,
//                 password: password
//             };
//             his.push('/ViewInstructor');
//             // const loggedInUser = localStorage.getItem("user");
//             // console.log(loggedInUser);
//             axios.put('http://localhost:8020/instructor/updateOne/' + id, InstructorUpdate).then(() => {
    
//                 alert("Updated successfully!!!");
    
//             }).catch((err) => {
//                 alert(err);
//             })
//         }
    

//   return (
//     <section className="table-auto overflow-y-scroll h-screen pb-10">
//     <div className="w-full bg-gray-100 py-10 text-center">
//       <h1 className="text-2xl">Update Instructors</h1>
//     </div>
//     <Card style={{maxWidth:500,margin:"0 auto",padding:"20px 5px"}}>
//         <CardContent>
//             {instructor && <form>
//                 <Grid container spacing={1}>
//                     <Grid xs={12} item>
//                         <TextField label="First name" placeholder={JSON.stringify(localStorage.getItem("update-instructor-id")).first_name} onChange={First_nameSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <TextField label="Last name" placeholder={instructor.last_name} onChange={Last_nameSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <TextField label="Gender" placeholder={instructor.gender} onChange={GenderSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <TextField label="Age" placeholder={instructor.age} onChange={AgeSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <TextField type='email' label="Email" placeholder={instructor.email} onChange={EmailSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <TextField label="Contact" placeholder={instructor.contact} onChange={ContactSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <TextField type='password' label="Password" placeholder={instructor.password} onChange={PasswordSetter} variant='outlined' fullWidth required  />
//                     </Grid>
//                     <Grid xs={12} item>
//                         <Button type='submit' onClick={onSubmit} style={{marginTop:'15px'}} variant='contained' color='primary' fullWidth>Udpate</Button>
//                     </Grid>
//                 </Grid>
//             </form> }
            
//         </CardContent>
//     </Card>
   
//   </section>
//   )
// }

// export default UpdateInstructor
