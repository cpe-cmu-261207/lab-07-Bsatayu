import {useEffect} from 'react';
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <link href="post">
        <button>goto post page</button>
      </link>
      <link href="GPA Cal">
        <button>GPA Calculator</button>
      </link>
      <link href="Home">
        <button>Home</button>
      </link>
      </>
  )
}

export default Home