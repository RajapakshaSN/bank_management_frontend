import React, {useState,useEffect} from 'react';
import Axios from 'axios';
// import "./bank.css";

function Editprofile(){
   
    const [bankName,setBankName] = useState('');
   

      const submit = (e) => {
        e.preventDefault();
        console.log(this.state.bankName);
          
        fetch('http://localhost:8080/registerbank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bankName:bankName})
    })
        .then(response => response.json())
        .then();




    };

    

 



        return(
            <div className="editprofile">
                {/* <h1>Hello world</h1> */}
                <form>
                    <div style={{width:'70%',marginLeft:'15%',marginRight:'15%',paddingBottom:30}}>
                        <h2 style={{textAlign:'center'}}>Add Bank</h2>
                       
                     
                        <div style={{width:'60%',marginLeft:'20%',marginRight:'20%'}}>
                            <p>Bank Name</p>
                            <input style={{width:'97.5%',backgroundColor:'#CBD5E0',height:30,border:'none',borderRadius:10}}   onChange={val => setBankName(val)}  type="text" ></input>
                        </div>

                        <div style={{marginTop:20,width:'59%',display:'table',marginLeft:'20%',marginRight:'20%'}}>
                            <button style={{backgroundColor:'#ffb907',border:'none',padding:10,width:'100%',borderRadius:5}} onClick={submit}  type='submit'>Submit</button>
                        </div>
                    </div>
                </form>

               
            </div>
        )
        // value= {detailList.map((val) => {return(<h1>MovieName: {val.First_name}</h1>); })}
}
export default Editprofile;
