import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react';
const BASE_URL = "http://localhost:3005";


function App() {


  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   console.log(response.data);
  // }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }
  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }
  const deleteUserById = async (userId) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedUser);
  }



  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    return response.data.postId;
  }
  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data;
  }


  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);


  }



  useEffect(() => {
    // getAllUsers();
    // getUserById(2);
    //   const newUser = {
    //     "username": "bilal2651",
    //     "password": "zzz"
    //   }
    //   createUser(newUser);

    // updateUser("517f", {"username":"yakup","password": "5555"})

    // deleteUserById("1");
    getPost();
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
