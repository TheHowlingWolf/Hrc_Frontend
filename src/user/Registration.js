import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signup } from "./helper/userapicalls";

const Registration = () => {
  const [values, setValues] = useState({
    name: "",
    roll: "",
    state: "",
    pro_photo: "",
    about_p: "",
    h1_photo: "",
    h2_photo: "",
    h3_photo: "",
    error: "",
    success: false,
    formData: "",
  });

  const preload = () => {
    //console.log(data);
    setValues({ ...values, formData: new FormData() });
  };

  //We have to call these preload in useEffect() by react Hooks
  useEffect(() => {
    preload();
  }, []);

  //To access above use values.name values.email or destructure it
  const { name, roll, state, error, success, formData } = values;

  const handleChange = (name) => (event) => {
    const value =
      name === "pro_photo"
        ? event.target.files[0]
        : name === "about_p"
        ? event.target.files[0]
        : name === "h1_photo"
        ? event.target.files[0]
        : name === "h2_photo"
        ? event.target.files[0]
        : name === "h3_photo"
        ? event.target.files[0]
        : event.target.value;
    var files = event.target.files;
    console.log(files);
    console.log(name);
    //it means we will have a value which is equal to acc to the equality of key condition and if is photo then we will get
    //the name of the file by target.files else we will find the value and save it
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "" });
    signup(formData) //calling signup backend call from auth helper
      .then((data) => {
        console.log("hi");
        if (data.error) {
          // if there is as error show it
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            // if not reset the form to empty fields
            ...values,
            name: "",
            roll: "",
            state: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => {
        console.log("Error in Signup");
      });
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New Account was successfully. Please{" "}
        <Link to="/signin">Login here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          {successMessage()}
          {errorMessage()}
          <form action="">
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id=""
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Roll</label>
              <input
                className="form-control"
                type="number"
                name="roll"
                id=""
                onChange={handleChange("roll")}
                value={roll}
              />
            </div>
            <div className="form-group">
              <label className="text-light">state</label>
              <input
                className="form-control"
                type="text"
                name="state"
                id=""
                onChange={handleChange("state")}
                value={state}
              />
            </div>
            <div className="form-group">
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("pro_photo")}
                  type="file"
                  name="pro_photo"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("about_p")}
                  type="file"
                  name="about_p"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("h1_photo")}
                  type="file"
                  name="h1_photo"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("h2_photo")}
                  type="file"
                  name="h2_photo"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <div className="form-group">
              <label className="btn btn-block btn-success">
                <input
                  onChange={handleChange("h3_photo")}
                  type="file"
                  name="h3_photo"
                  accept="image"
                  placeholder="choose a file"
                />
              </label>
            </div>
            <button className="btn btn-success btn-block" onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="signup">
      {signUpForm()}

      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </div>
  );
};

export default Registration;
