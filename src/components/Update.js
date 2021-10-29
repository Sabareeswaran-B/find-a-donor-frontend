import React, { useState } from "react";
import { Button, Container, Form, Input, Label, Row } from "reactstrap";
import Select from "react-select"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {countryOptions, stateOptions, districtOptions, cityOptions, availableOptions} from "./options";
import { toast } from 'react-toastify';
import axios from "axios";


function Register(props) {
    const [name, setName] = useState('');
    const [bloodgroup, setBloodGroup] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [availability, setAvailability] = useState('');
    const userID = localStorage.getItem('id');


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlebloodgroup = (e) => {
        setBloodGroup(e.target.value)
    }
    const handleAvailability = (val) => {
        setAvailability(val)
    }
  
    const selectCountry = (val) => {
        setCountry( val );
    }
    
    const selectRegion = (val) => {
        setRegion( val );
    }

    const selectDistrict = (val) => {
        setDistrict(val)
    }

    const selectCity = (val) => {
        setCity(val)
    }
    const handleSubmit = () => {
        if(name && country && region && district && city && availability) {
            const user = {
                name : name,
                country : country.value,
                state : region.value,
                district : district.value,
                city : city.value,
                avilability : availability.value
            }

            console.log(user)
            axios.post(`http://localhost:9000/update/${userID}`,user)
            .then(res => {
                localStorage.setItem("name", user.name);
                toast.success(res.data.message,{position: "top-center"})
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
        } else {
            toast.error("Please Enter All Details")
        }
    }
    const FormData = (props) => {
        return(
            <Row style={{marginTop:"15px"}}>
                <div className="col-lg-3">
                <h5>{props.lable}</h5>
                </div>
                <div className="col-lg-9">
                {props.children}
                </div>
            </Row>
        )
    }

    if(!userID){
        return(
            <Container style={{marginTop:"230px",marginBottom:"200px"}}>
                <h3 style={{textAlign:"center",color:"#C42522"}}><b>Please Login!</b></h3>
                <h5 style={{textAlign:"center",color:"#C42522"}}>Login to your accout to view your profile</h5>
                <p style={{textAlign:"center",color:"#C42522"}}>If you dont't have an account register now</p>
            </Container>
        )
    }
    
    return(
        <div className="container-fluid" style={{marginTop:"-50px", marginBottom:"-100px"}}>
            <Row>
                <div className="col-lg-3 col-md-3 col-sm-3" style={{backgroundColor:"lightblue", paddingTop:"50px", paddingBottom:"100px"}}>
                <h5><i class="fa fa-play" aria-hidden="true" style={{fontSize:"20px"}}></i>About US</h5>
                <h5><i class="fa fa-play" aria-hidden="true" style={{fontSize:"20px"}}></i>About US</h5>
                <h5><i class="fa fa-play" aria-hidden="true" style={{fontSize:"20px"}}></i>About US</h5>                    
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9" style={{padding:"50px 30px 100px 30px"}}>
                    <Form>
                        <FormData lable = "Name"><Input type="text" name="name" placeholder="Enter Your Name"  onChange={handleName} value={name} /></FormData>

                        <FormData lable = "Blood Group"><Input type="text" name="bloodGroup" placeholder="Enter Your Blood Group"  onChange={handlebloodgroup} value={bloodgroup} /></FormData>

                        <FormData lable = "Country">
                        <Select
                            value={country}
                            onChange={val => selectCountry(val)}
                            options={countryOptions}
                        /></FormData>

                        <FormData lable = "State">
                        <Select
                            value={region}
                            onChange={val => selectRegion(val)}
                            options={stateOptions}
                        /></FormData>
                        <FormData lable = "District">
                        <Select
                            value={district}
                            onChange={val => selectDistrict(val)}   
                            options={districtOptions}
                        /></FormData>                        
                        <FormData lable = "City">
                        <Select
                            value={city}
                            onChange={val => selectCity(val)}
                            options={cityOptions}
                        /></FormData>
                        <FormData lable = "Availability">
                        <Select
                            value={availability}
                            onChange={val => handleAvailability(val)}
                            options={availableOptions}
                        />
                        </FormData>
                        <a><Button style={{float:"right", marginTop:"80px"}} onClick={handleSubmit}>Update</Button></a>
                    </Form>
                    
                </div>
            </Row>            
        </div>
    )
}

export default Register;