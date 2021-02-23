import {useEffect} from 'react';
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <div align='center'>
    <h1>This is home page</h1>
    <a href='/Post' style={{padding:20}}>Post</a>
    <a href='/Calcuate GPA' style={{padding:20}}>GPA Calculator</a>
    <a href='/Profile' style={{padding:20}}>My Profile</a>
  </div>
  )
}

export default Home