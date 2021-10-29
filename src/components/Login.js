import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, Row, Input, Button} from "reactstrap";

function Login(props) {
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState('');
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = () => {
        if(phone && password){
        const user = {
            phone : phone,
            password : password
        }
        axios.post('http://localhost:9000/login', user)
            .then(res => {
                localStorage.setItem("token", res.data.Token);
                localStorage.setItem("name", res.data.name);
                localStorage.setItem("id", res.data.id);
                toast.success(`Welcome back ${res.data.name} !`,{position: "top-center"});
            })
            .catch(err => {
                var errorMassage = err.response.data.error
                toast.error(errorMassage)
            });
        props.history.push('/donor/find')
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
                    <FormData lable = "Phone"><Input type="tel" name="phone" placeholder="Enter Your phone nmumber" value={phone} onChange={handlePhone} /></FormData>
                    <FormData lable = "Password"><Input type="password" name="password" placeholder="Enter Your password" value={password} onChange={handlePassword} /></FormData>
                    <a><Button style={{float:"right", marginTop:"80px"}} onClick={handleSubmit}>Submit</Button></a>
                    </Form>
                </div>
            </Row>
        </div> 
    )
    
}

export default Login;