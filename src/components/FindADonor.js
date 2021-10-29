import React, { useState } from "react";
import { Button, Form, Label } from "reactstrap";
import registerimg from "../register.png"
import Select from "react-select";
import {countryOptions, stateOptions, districtOptions, cityOptions} from "./options";
import { toast } from 'react-toastify'; 
import axios from "axios";

function FindADonor() {

    const [country, setCountry] = useState({});
    const [region, setRegion] = useState({});
    const [district, setDistrict] = useState({});
    const [city, setCity] = useState({});

  
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
        if(country && region && district && city){
            const user = {
                country : country.value,
                state : region.value,
                district : district.value,
                city : city.value
            }
            console.log(user)
            axios.post("http://localhost:9000/findaDonor",user)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
        }else{
            toast.error("Please Enter All Details")
        }
    }
    
    
    
    return(
        <div>
        <div className="container" style={{backgroundColor:"#C42522", padding:"60px", borderRadius:"10px", marginBottom:"80px"}}>
            <Form>
                <h3 style={{color:"white", fontSize:"25px"}}>Find a Blood Donor</h3><br></br>
                <Label style={{color:"white", fontSize:"20px", marginRight:"50px"}}>Country</Label>
                <Select
                    value={country}
                    onChange={val => selectCountry(val)}
                    options={countryOptions}
                /><br></br>
                <Label style={{color:"white", fontSize:"20px", marginRight:"50px"}}>State</Label>
                <Select
                    value={region}
                    onChange={val => selectRegion(val)}
                    options={stateOptions}
                /><br></br>
                <Label style={{color:"white", fontSize:"20px", marginRight:"50px"}}>District</Label>
                <Select
                    value={district}
                    onChange={val => selectDistrict(val)}   
                    options={districtOptions}
                /><br></br>
                <Label style={{color:"white", fontSize:"20px", marginRight:"50px"}}>City</Label>
                <Select
                    value={city}
                    onChange={val => selectCity(val)}
                    options={cityOptions}
                /><br></br>
                
                <Button style={{float:"right"}} onClick={handleSubmit}>Submit</Button>
            </Form>

        </div>
        <a href="/register"><img src={registerimg} alt="register" style={{marginLeft:"20px"}}/></a>
        </div>
        
    )
    
}

export default FindADonor;