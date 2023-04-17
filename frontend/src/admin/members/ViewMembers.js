import { Button, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  Input,
  ModalBody,
  Card,
  CardBody,
  CardHeader,
  ModalHeader,
} from "reactstrap";
import { toast } from "react-toastify";
import Modals from "../../sharedComponent/Modal";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required Name"),
  age: Yup.number().required("Required Age"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(/^0\d{9}$/, {
      message: "Phone number must start with 0 and have exactly 10 digits",
    })
    .required("Phone number is required"),
  password: Yup.string().required("Required Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});
export default function Members() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  //Variable to store Data to Update
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [UpdateModal, setUpdateModal] = useState(false);
  const [UpdateItem, setUpdateItem] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  //Update Modal Open/Close
  const updateToggle = (item) => {
    setUpdateModal(!UpdateModal);
    if (item) {
      setUpdateItem(item._id);
      setName(item.name);
      setGender(item.gender);
      setAge(item.age);
      setEmail(item.email);
      setContact(item.contact);
      setPassword(item.password);
    }
  };

  //update Record
  const updateRecord = () => {
    if (name == null || name == "" || name == undefined) {
      toast.error("Please Enter Name !!");
    } else if (gender == null || gender == "" || gender == undefined) {
      toast.error("Please Enter Gender !!");
    } else if (age == null || age == "" || age == undefined) {
      toast.error("Please Enter age  !!");
    } else if (email == null || email == "" || email == undefined) {
      toast.error("Please Enter email  !!");
    } else if (contact == null || contact == "" || contact == undefined) {
      toast.error("Please Enter Contact Number  !!");
    } else if (password == null || password == "" || password == undefined) {
      toast.error("Please Select password !!");
    } else {
      const modal = {
        name: name,
        gender: gender,
        age: age,
        email: email,
        contact: contact,
        password: password,
      };
      axios
        .put("http://localhost:8020/user/update/" + UpdateItem, modal)
        .then((response) => {
          if (response.status == 200) {
            toast.success("Successfully Updated Data !!");
            getData();
            updateToggle(!UpdateModal);
          }
        });
    }
  };

  const getData = () => {
    axios
      .get("http://localhost:8020/user/")
      .then((response) => {
        if (response) {
          setMembers(response.data);
        } else {
          toast.error("Error While Fetching Data!!");
        }
      })
      .catch((error) => toast.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteMember = (id) => {
    axios
      .delete("http://localhost:8020/user/delete/" + id)
      .then(() => {
        alert("Member details deleted successfully!!");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="table-auto overflow-y-scroll h-screen pb-10">
      <div className="w-full bg-gray-100 py-10 text-center">
        <h1 className="text-2xl">Members Details</h1>
      </div>

      <div className=" px-10 mt-10 ">
        <div class=" shadow-md sm:rounded-lg ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Age
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Password
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((members) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {members.name}
                  </th>
                  <td class="px-6 py-4">{members.gender}</td>
                  <td class="px-6 py-4">{members.age}</td>
                  <td class="px-6 py-4">{members.email}</td>
                  <td class="px-6 py-4">{members.contact}</td>
                  <td class="px-6 py-4">{members.password}</td>
                  <td class="px-1 py-4 text-left">
                    {/* <a
                     href="#"
                     class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                   >
                     Update&nbsp;&nbsp;&nbsp;&nbsp;
                   </a> */}
                    <Button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      Update
                    </Button>
                    {/* <Link  to={`UpdateInstructor/${members._id}`}>
                      Update&nbsp;&nbsp;&nbsp;&nbsp;
                   </Link> */}
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this Member ?"
                          )
                        ) {
                          deleteMember(members._id);
                        }
                      }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          {" "}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={updateRecord}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Name</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name="name"
                      value={name}
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="name"
                  />
                </div>
                <div className="flex-col w-full">
                  <div className="ll">
                    <p className="font-semibold">Gender</p>
                  </div>
                  <div className="ll">
                    <select
                      className="w-full outline-2 border p-3"
                      value={gender}
                      onChange={(event) => {
                        setGender(event.target.value);
                      }}
                    >
                       <option className="p-3" value="male">
                        select
                      </option>
                      <option className="p-3" value="male">
                        Male
                      </option>
                      <option className="p-3" value="female">
                        Female
                      </option>
                    </select>
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="gender"
                  />
                </div>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Age</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="age"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="age"
                  />
                </div>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Email</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="email"
                      name="email"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="email"
                  />
                </div>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Phone Number</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="phone"
                      name="phone"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="phone"
                  />
                </div>

                <div className="flex-col">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Password</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1 rounded-md w-full"
                      type="password"
                      name="password"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs italic"
                    name="password"
                  />
                </div>

                <div className="w-full flex gap-2">
                  <button
                    className="bg-red-800 w-1/2 text-white py-3 hover:bg-red-500"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    close
                  </button>
                  <button
                    className="bg-green-800 w-1/2 text-white py-3 hover:bg-green-500"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Update
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      {/* <Modal isOpen={UpdateModal}>
        <ModalHeader>
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <a
                onClick={() => {
                  updateToggle();
                }}
              >
                Update
              </a>
            </div>
          </div>
        </ModalHeader>
        <ModalBody style={{ padding: "25px" }}>
          <div className="row">
            <div className="col-md-3"></div>
        <div className="col-md-6">
            <Card>
              <CardHeader>Update Employee</CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Name</label>
                      <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Gender</label>
                      <Input
                        type="text"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Age</label>
                      <Input
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Email</label>
                      <Input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Contact</label>
                      <Input
                        type="text"
                        placeholder="Contact"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-10">
                        <Button
                          color="success"
                          onClick={() => {
                            updateRecord();
                          }}
                        >
                          Update Record
                        </Button>
                      </div>
                      <div className="col-md-1"></div>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </CardBody>
            </Card>
            </div>
        <div className="col-md-3"></div>
          </div>
        </ModalBody>
      </Modal> */}
    </section>
  );
}
