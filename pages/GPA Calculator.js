import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const gpa = () => {
    return(
    <body>
              <head>
        <style>
            a{
                color: rgb(0, 38, 255);
            }
            a:hover{
                color: rgb(255, 60, 0);
            }
            .text{
                font-size: 21px;
            }
            .t1{
                border: 1px;
                background-color: rgba(20, 218, 46, 0.76);
                font-size: 20px;
                width: 65%;
                text-align:center
            }
            .t2{
                border:1px; 
                background-color: rgb(252, 236, 146);
                font-size: 20px;
                width: 65%;
                text-align:center
            }
            th{
                text-align:center;
                width: 35%;
            }
        </style>
        <script src = "javascript.js"></script>
    </head>
    <body>
        <h1>
            <a href="file:///C:/Users/ASUS/Documents/LabCpe/lab-02-Bsatayu/Web.html">Home</a> 
        </h1>
        <h1>
            <a href="file:///C:/Users/ASUS/Documents/LabCpe/lab-02-Bsatayu/Contact.html">Contact</a> 
        </h1>
        <h1>
            <a href="file:///C:/Users/ASUS/Documents/LabCpe/lab-02-Bsatayu/Gallery.html">Gallery</a> 
        </h1>
        </h2>
        <table style="width: 100%"  border :1px solid black; >
        <table style="width: 100%"  border :1px solid black; >
 
   </tr>
</table>
        <h2 style="text-align: center;background-color:#00FFFF;padding: 2%;">GPA Calculator</h2>  
        <form>
            <table style="font-size: 21px;" align="center">
                <tr>
                    <td>
                        <input type="text" class="text" placeholder="Course No.(206xxx,261xxx)" id="subID">
                        <select name="semester" class="text" id="semester">
                            <option value="1-2562">1/2562</option>
                            <option value="2-2562">2/2562</option>
                            <option value="1-2563">1/2563</option>
                            <option value="2-2563">2/2563</option>
                            <option value="1-2564">1/2564</option>
                            <option value="2-2564">2/2564</option>
                            <option value="1-2565">1/2565</option>
                            <option value="2-2565">2/2565</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" class="text" placeholder="weight(3,1)" id="weight">
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <select name="gpa" class="text" id="gpa">
                            <option value="4" >A
                            <option value="3.5" >B+
                            <option value="3" >B
                            <option value="2.5" >C+
                            <option value="2" >C
                            <option value="1.5" >D+
                            <option value="1" >D
                            <option value="0" >F
                        </select>
                        
                    </td>
                    <td>
                        <input type="submit" name="Add"></button>
                    </td>
                </tr>
                
                <tr> 
                    <table class="t1"  align="center">
                       <tr><td><th>1/2562</th></td></tr>
                        <tbody id = "1-2562">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td background-color="" rgb(102, 204, 0);><p id = "gpa1-2562">0.00</p></td>
                            <td><p id = "w1-2562">0</p></td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table class="t2"  align="center">
                        <tr><td><th>2/2562</th></td></tr>
                        <tbody id = "2-2562">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td><p id = "gpa2-2562">0.00</p></td>
                            <td><p id = "w2-2562">0</p></td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table class="t1"  align="center">
                        <tr><td><th>1/2563</th></td></tr>
                        <tbody  id = "1-2563">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td><p id = "gpa1-2563">0.00</p></td>
                            <td><p id = "w1-2563">0</p></td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table class="t2" align="center">
                        <tr><td><th>2/2563</th></td></tr>
                        <tbody id = "2-2563">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td><p id = "gpa2-2563">0.00</p></td>
                            <td><p id = "w2-2563">0</p></td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table  class="t1"  align="center">
                        <tr><td><th>1/2564</th></td></tr>
                        <tbody id = "1-2564">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td><p id= "gpa1-2564">0.00</p></t d>
                            <td><p id= "w1-2564">0</p></t d>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table class="t2" align="center">
                        <tr><td></td><th>2/2564</th></tr>
                        <tbody  id = "2-2564">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td><p id = "gpa2-2564">0.00</p></td>
                            <td><p id = "w2-2564">0</p></td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table class="t1"  align="center">
                        <tr><td><th>1/2565</th></td></tr>
                        <tbody id = "1-2565">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr >
                            <td>GPA : </td>
                            <td><p id = "gpa1-2565"> 0.00</p></td>
                            <td><p id = "w1-2565">0</p></td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <table class="t2"  align="center">
                        <tr><td><th>2/2565</th></td></tr>
                        <tbody id = "2-2565">
                            <tr>
                                <td>Course No.</td>
                                <td>Credit</td>
                                <td>Grade</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td>GPA : </td>
                            <td><p id = "gpa2-2565">0.00</p></td>
                            <td><p id = "w2-2565">0</p></td>
                        </tr>
                    </table>
                </tr>
                
                <thead align="center">
                    <td>GPAX : </td>
                    <td><p id="gpax">0.00</p></td>
                    <td><p id="wx">0</p></td>
                </tr>
                <tr align="center">
                    <td>GPA(CPE) : </td>
                    <td><p id="gpacpe">0.00</p></td>
                    <td><p id="wcpe">0</p></td>
                </tr>
            
            </table>
        </form>   
            </body>
    )
}

export default gpa