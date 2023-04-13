import { Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Instructor() {

  const [instructors,setInstructors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8020/instructor/")
      .then((response) => {setInstructors(response.data)})
      .catch((error) => console.error(error))
  },[]);

  const deleteInstructor = (id) =>{
    axios.delete('http://localhost:8020/instructor/delete/' + id).then(()=>{
        alert("Instructor details deleted successfully!!");
        window.location.reload();
    }).catch((err)=>{
        alert(err);
    })
  };

  return (
    <section className="table-auto overflow-y-scroll h-screen pb-10">
      <div className="w-full bg-gray-100 py-10 text-center">
        <h1 className="text-2xl">All Instructors</h1>
      </div>
      <div className="w-full flex flex-row-reverse px-10 mt-10">
        <a href="/add-instructor">
          <button
          type="button"
          class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          > Add New
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </a>
      
      </div>
      
      <div className=" px-10 mt-10 ">
        <div class=" shadow-md sm:rounded-lg ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  First name
                </th>
                <th scope="col" class="px-6 py-3">
                  Last name
                </th>
                <th scope="col" class="px-6 py-3">
                  Age
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Contact
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
              {instructors.map((instructors) => (
                 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 <th
                   scope="row"
                   class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                 >
                   {instructors.first_name}
                 </th>
                 <td class="px-6 py-4">{instructors.last_name}</td>
                 <td class="px-6 py-4">{instructors.age}</td>
                 <td class="px-6 py-4">{instructors.gender}</td>
                 <td class="px-6 py-4">{instructors.email}</td>
                 <td class="px-6 py-4">{instructors.contact}</td>
                 <td class="px-6 py-4">{instructors.password}</td>
                 <td class="px-3 py-4 text-right">
                   <a
                     href="#"
                     class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                   >
                     Update&nbsp;&nbsp;&nbsp;&nbsp;
                   </a>
                   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {
                      if(window.confirm("Are you sure you want to delete this Instructor ?")){
                        deleteInstructor(instructors._id);
                      }
                   }}>
                     Delete
                   </a>
                 </td>
               </tr>
              ))}
             
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
