import React, { Component } from "react";
import {
    Card, CardBody
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

export default class Registration extends Component {

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row  justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-5">
                        <Card className="card-1">

                            {/* <CardImg top width="100%" src="/assets/images/codepth-text.png" alt="Card image cap" /> */}
                            <CardBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <h3 className="text-center">Helsinki Registration</h3>

                                    <div className="form-group">
                                        <label>Name</label>
                                        {/* <input type="text" className="form-control" placeholder="First name" /> */}
                                        <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Roll No.</label>
                                        {/* <input type="text" className="form-control" placeholder="First name" /> */}
                                        <Control.text model=".roll" id="roll" name="roll"
                                            placeholder="Roll No."
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>State</label>
                                        {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                                        <Control.text model=".state" id="state" name="state"
                                            placeholder="State"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Profile Photo</label>
                                        {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                                        <Control.text model=".pro_photo" id="pro_photo" name="pro_photo"
                                            placeholder="Profile photo"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Photo 1</label>
                                        {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                                        <Control.text model=".h1_photo" id="h1_photo" name="h1_photo"
                                            placeholder="Photo"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Photo 2</label>
                                        {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                                        <Control.text model=".h2_photo" id="h2_photo" name="h2_photo"
                                            placeholder="Photo"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Photo 3</label>
                                        {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                                        <Control.text model=".h3_photo" id="h3_photo" name="h3_photo"
                                            placeholder="Photo"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>About</label>
                                        {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                                        <Control.textarea model=".about_p" id="about_p" name="about_p"
                                            placeholder="About"
                                            className="form-control"
                                        />
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block btncustom">Sign Up</button>
                                    <p className="forgot-password text-right">
                                        Already registered <a href="#">sign in?</a>
                                    </p>
                                </LocalForm>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}