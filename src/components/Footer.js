import React from "react";
import { Row } from "reactstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../css/Footer.css"


function Footer() {
    return(
        <footer className="jumbotron">
            <Row>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <Row>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                    <br></br>
                    <h4>Follow Us</h4>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    </div>
                    </Row>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                <Row>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                    <br></br>
                    <h4>Download App</h4>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                    <a href="#" class="fa fa-android"></a>
                    <a href="#" class="fa fa-apple"></a>
                    <a href="#" class="fa fa-windows"></a>
                    </div>
                    </Row>                                    
                </div>
            </Row>
        </footer>
    )
    
}

export default Footer;