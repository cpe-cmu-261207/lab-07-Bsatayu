import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const contact = () => {
    return(
    <body>


    <title>Contact</title>
    <style>
      body {background-color}:#FFF5D0;
     </style>
  


  <h1 style="background-color:MediumSeaGreen;">Contact Me</h1>

<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" placeholder="Enter First Name here"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" placeholder="Enter Last Name here"><br><br>
  <label for="email">Email address:</label><br>
  <input type="text" id="lname" name="lname" placeholder="Enter Email here"><br><br>
  <div>
  <label>Message:</label>
</div>
  <textarea></textarea>
  <div>
  <input type="submit" value="Submit">
  </div>
</form> 
<hr>
<h1>
  <a href="file:///C:/Users/ASUS/Documents/LabCpe/lab-02-Bsatayu/Web.html">Home</a> 
</h1>
<h1>
<a href="file:///C:/Users/ASUS/Documents/LabCpe/lab-02-Bsatayu/Gallery.html">My Gallery</a> 
</h1>
<h1>
  <a href="file:///C:/Users/ASUS/Documents/LabCpe/lab-02-Bsatayu/GPA Calculator.html">GPA Calculator</a> 
</h1>


</body>

        )
}
    
        

export default contact