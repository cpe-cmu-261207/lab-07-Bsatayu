import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link';
import Home from '.';
const baseURL = 'https://dummyapi.io/data/api'
const homepage = () => {
    return(
        <body>
            <table style = {{width:" 100%;", padding: "20px", margin:"5px"}}>
            <tr align="center">
                        <td><Link href={"/homepage"}>Home</Link></td>
                        <td><Link href={"/gallery"}>Gallery</Link></td>
                        <td><Link href={"/contact"}>Contact</Link></td>
                        <td><Link href={"/gpa"}>GPACalc</Link></td>
                        <td><Link href={"/post"}>Post</Link></td>
                        </tr>
                        <table>
          <tr>
            <td align="center">
              <img class="portrait" src="download.jfif" alt="Grad" width="200px" height="200px"/>
      </td>
              <td>
                      <p>มัธยมต้นจาก โรงเรียนยุพราชวิทยาลัยเชียงใหม่<p>
                      <p>มัธยมปลายจาก โรงเรียนยุพราชวิทยาลัยเชียงใหม่<p>
                      <h4>2012-2018</h4>
                      <p>ปัจจุบันเป็นนักศึกษาคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
                      <hr>
                  </td>
                 
          </tr>
          <td><h2>ประสบการณ์</h2></td>
  <td>
          <tr>
            <td align="center">
              <img class="portrait" src="download (1).jfif" alt="Exp" width="200px" height="200px"/>
      </td>
              <td>
                      <h4>สามารถเขียนโค้ดภาษา C++,Java,HTMLได้</h4>
                      
                      <hr>
                  </td>
          </tr>
          <td><h2>งานอดิเรก</h2></td>
          <td>
                  <tr>
                    <td align="center">
                      <img class="portrait" src="images.jfif" alt="Activity" width="200px" height="200px"/>
              </td>
                      <td>
                              <h4>ชอบดูหนัง,เล่นเกม,วาดรูป</h4>
                              
                              <hr>
                          </td>
                  </tr>
        )
}

export default homepage