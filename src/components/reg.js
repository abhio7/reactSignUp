import React, { useState, useEffect } from 'react';
import img from './pro.png';
const Reg = () => {

    const initalValues = { email: "", pass: "", repass: "", username: "", phone: "" };
    const [formValue, setFormvalues] = useState(initalValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormvalues({ ...formValue, [name]: value });



    }
    const handleSubmit = (e) => {

        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);


        // const newRecord = { ...formValue, id: new Date().getTime().toString() SW
        // setrecords([...records, newRecord]);
    }
    useEffect(
        () => {
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log(formValue);
            }
        }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        ;
        // const reg = /^ [^\s@]+@[^\s@]+\-[\s@]{ 2,} $ / i;

        const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

        if (!values.username) {
            errors.username = "username is required";
        }
        if (!values.email) {
            errors.email = "email is required";
        } else if (!regx.test(values.email)) {
            errors.email = "Not a valid email";
        }
        if (!values.pass) {
            errors.pass = "password is required";
        } else if (values.pass.length < 4) {
            errors.pass = "password should be more then  4 characters ";

        }
        if (!values.repass) {
            errors.repass = "re password is required";
        } else if (values.pass != values.repass) {
            errors.repass = "password unmatched";

        }
        if (!values.phone) {
            errors.phone = "phone number is required";
        } else if (!values.phone.length == 10) {
            errors.phone = "phone number is not valid";

        }
        console.log(errors);
        return errors;
    }



    // const [formValue, setformValue] = useState({
    //     email: "",
    //     pass: "",
    //     repass: "",
    //     username: "",
    //     phone: ""
    // });





    // const [records, setrecords] = useState([]);


    return (
        <section className="vh-100">

            <div className="container h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">

                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-1"
                                        name="" id="img-div">
                                        {/* src={require('./images/project.png').default} */}
                                        <img className="row-lg-6 row-md-10" src={img}
                                            className="img-fluid" alt="Sample image" />
                                        <div className="row-lg-6" id="head-img">
                                            <h3>Choose a date range</h3>
                                            <p>you can write anyy=thing here.............</p>
                                        </div>

                                    </div>



                                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-2">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Account</p>

                                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">



                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form1">Your Email</label>

                                                    <input value={formValue.email} onChange={handleChange}
                                                        type="email" name="email" id="form1" className="form-control" />

                                                    <p>{formErrors.email}</p>
                                                </div>

                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form2">Password</label>

                                                    <input value={formValue.pass} onChange={handleChange} type="password"
                                                        name="pass" id="form2" className="form-control" />
                                                    <p>{formErrors.pass}</p>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form4">Repeat your password</label>
                                                    <input value={formValue.repass} onChange={handleChange} type="password" name="repass" id="form4" className="form-control" />
                                                    <p>{formErrors.repass}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form5">Your full name</label>

                                                    <input value={formValue.username} onChange={handleChange} type="text" name="username" id="form5" className="form-control" />
                                                    <p>{formErrors.username}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form6">Your phone number</label>

                                                    <input value={formValue.phone} onChange={handleChange} type="text" name="phone" id="form6" className="form-control" />

                                                    <p>{formErrors.phone}</p>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" name="check" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                                <p>{formErrors.tick}</p>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Create Account</button>
                                            </div>

                                        </form>

                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >


    )
}

export default Reg;


