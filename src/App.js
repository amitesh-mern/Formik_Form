import { useFormik } from "formik";
import React from 'react';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const validate = values => {
    const errors = {};
    if (!values.emailField) errors.email = "Field Required"
    else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.email = "Username should be an email";
    }
    if (!values.pswField) {
      errors.password = "Field Required";
    }  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))  
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label for="emailField">Email : </label><br></br>
        <input id="emailField" onChange={formik.handleChange} value={formik.values.emailField}></input>
        {formik.errors.email ? <div id="emailError" style={{color:"red"}}>{formik.errors.email}</div> : null }
        <br></br>
        <label for="pswField">Password : </label><br></br>
        <input id="pswField" onChange={formik.handleChange} value={formik.values.pswField}></input>
        {formik.errors.password ? <div id="pswError" style={{color:"red"}}>{formik.errors.password}</div> : null }
        <br></br><br></br>
        <button id="submitBtn">Submit</button>
      </form> 
    </div>
  );
}

export default App;
