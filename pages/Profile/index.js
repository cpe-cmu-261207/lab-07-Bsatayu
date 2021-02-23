const Home = () => { 
    return (
        <div style={{padding:20}}>
            <h2 align ="center">My Profile</h2>
            <div id ='block'>  
                
                <h3>Satayu Settakit</h3>
                <h4>Student at CMU</h4>
                <p>satayu_s@cmu.ac.th</p>

                <p><b>Nickname:</b> Boat</p>
                <p><b>Date of Birth:</b> 3 may 2001</p>
                <p><b>Blood Group:</b> A</p>
                <p><b>Faculty:</b> Engineering</p>
            </div>
            <p align = "center">
                    <a style={{padding:20}}href="/Profile/Gallery">Gallery</a>   
                    <a style={{padding:20}}href="/Profile/Contact">Contact</a>
                    <a style={{padding:20}}href="/">HomePage</a> 
            </p>
        </div>
    )
}

export default  Home