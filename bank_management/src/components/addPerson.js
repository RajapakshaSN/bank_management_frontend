import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from 'react-select';
function Editprofile() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [NIC, setNIC] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const actions = [
    { label: "BOC", value: 1 },
    { label: "People's Bank", value: 2 },
    { label: "HNB", value: 3 },
  ];
  
  const submit = () => {
    Axios.post("http://localhost:8080/addPerson", {
      first_name: FirstName,
      last_name: LastName,
      dob: DOB,
      phoneNo: PhoneNo,
      nic: NIC,
      gender: Gender,
      address: Address,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="editprofile">
      {/* <h1>Hello world</h1> */}
      <form>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            paddingBottom: 30,
          }}
        >
          <h2 style={{ textAlign: "center" }}>Add Person</h2>

          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>First Name</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>Last Name</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>Date of Birth</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>Phone Number</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              type="text"
            ></input>
          </div>

          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>NIC</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setNIC(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>Gender</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>Address</p>
            <input
              style={{
                width: "97.5%",
                backgroundColor: "#CBD5E0",
                height: 30,
                border: "none",
                borderRadius: 10,
              }}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}>
            <p>Bank Name</p>          
                      
                <Select options={actions} />
                    
            
            
          </div>

          <div
            style={{
              marginTop: 20,
              width: "59%",
              display: "table",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <button
              style={{
                backgroundColor: "#ffb907",
                border: "none",
                padding: 10,
                width: "100%",
                borderRadius: 5,
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  // value= {detailList.map((val) => {return(<h1>MovieName: {val.First_name}</h1>); })}
}
export default Editprofile;
