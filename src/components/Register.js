import React, { useState } from "react";
import { Button, Form, Input, Label, Row } from "reactstrap";
import Select from "react-select"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {countryOptions, stateOptions, districtOptions, cityOptions, availableOptions} from "./options";
import { toast } from 'react-toastify';
import axios from "axios";


function Register(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bloodgroup, setBloodGroup] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [availability, setAvailability] = useState('');


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleCPassword = (e) => {
        setConfirmPassword(e.target.value)
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
        if(name && phone && email && password && confirmPassword && country && region && district && city && availability) {
            const user = {
                name : name,
                phone : phone,
                email : email,
                password : password,
                confirmPassword : confirmPassword,
                country : country.value,
                state : region.value,
                district : district.value,
                city : city.value,
                avilability : availability.value,
                bloodgroup : bloodgroup
            }

            console.log(user)
            axios.post("http://localhost:9000/register",user)
            .then(res => {
                toast.success(res.data.message,{position: "top-center"})
                props.history.push('/login')
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

                        <FormData lable = "Phone"><Input type="tel" name="phone" placeholder="Enter Your phone nmumber"  onChange={handlePhone} value={phone}/></FormData>

                        <FormData lable = "Email-ID"><Input type="email" name="email" placeholder="Enter Your email id" onChange={handleEmail}  value={email} /></FormData>

                        <FormData lable = "Password"><Input type="password" name="password" placeholder="Enter Your password" onChange={handlePassword} value={password} /></FormData>

                        <FormData lable = "Confirm Password"><Input type="password" name="confirmPassword" placeholder="Confirm your Password" onChange={handleCPassword}  value={confirmPassword}/></FormData>

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
                        <a><Button style={{float:"right", marginTop:"80px"}} onClick={handleSubmit}>Subbmit</Button></a>
                    </Form>
                    
                </div>
            </Row>            
        </div>
    )
}

export default Register;