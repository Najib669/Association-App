import Button from "react-bootstrap/Button";
import "./Home.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { registerUser } from "../Actions/authuserActions";
import { login } from "../Actions/authuserActions";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../img/colors.jpg";

const Home = () => {
  const token = useSelector((state) => state.authReducer.token);

  console.log("token", token);
  const { user } = useSelector((state) => state.authReducer);
  console.log("user", user);

  const dispatch = useDispatch();
  const [inputRegister, setInputRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    birthDay: "",
    gender: "",
    phoneNumber: "",
    adress: "",
    city: "",
    country: "",
  });
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (token) navigate("/profile");
  // }, [token]);
  const handleChangeRegister = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };
  const handleChangeLogin = (e) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    dispatch(registerUser(inputRegister));
  };
  const handleLogin = () => {
    dispatch(login(inputLogin));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showTwo, setShowTwo] = useState(false);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);
  return (
    <div className="home">
      {/* {   
 token ? 
 <Navigate to="/profile" />
 :   */}

      <div>
        <Button type="submit" className="Login" onClick={handleShow}>
          {token ? "Welcome To Nafas" : "Join Our Community"}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalitem">
              <Form.Label> Email Adress </Form.Label>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                name="email"
                onChange={handleChangeLogin}
              />
            </div>
            <div className="modalitem">
              <Form.Label>Password </Form.Label>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                name="password"
                onChange={handleChangeLogin}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                handleLogin();
              }}
            >
              Sign in
            </Button>
            <Button variant="secondary" onClick={handleShowTwo}>
              Sign up
            </Button>

            <Modal show={showTwo} onHide={handleCloseTwo}>
              <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modalitem">
                  <Form.Label> Full Name </Form.Label>
                  <Form.Control
                    placeholder="FullName"
                    name="fullName"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="modalitem">
                  <Form.Label> BirthDate</Form.Label>
                  <Form.Control
                    placeholder="BirthDate"
                    aria-label="BirthDate"
                    name="birthDay"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="modalitem">
                  <Form.Label> Email Adress </Form.Label>
                  <Form.Control
                    placeholder="Email"
                    name="email"
                    onChange={handleChangeRegister}
                  />
                </div>

                <div className="modalitem">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    placeholder="Password"
                    name="password"
                    onChange={handleChangeRegister}
                  />
                </div>

                <div className="modalitem">
                  <label>Gender</label>
                  <Form.Select
                    className="form-control mt-1"
                    name="gender"
                    onChange={handleChangeRegister}
                  >
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </div>
                <div className="modalitem">
                  <label>Phone Number</label>
                  <input
                    type="Phone Number"
                    className="form-control mt-1"
                    placeholder="+216"
                    name="phoneNumber"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="modalitem">
                  <label>Adress</label>
                  <input
                    type="Adress"
                    className="form-control mt-1"
                    placeholder="Adress"
                    name="adress"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="modalitem">
                  <label>City</label>
                  <input
                    type="city"
                    className="form-control mt-1"
                    placeholder="City"
                    name="city"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="modalitem">
                  <label>Country</label>
                  <input
                    type="Country"
                    className="form-control mt-1"
                    placeholder="County"
                    name="country"
                    onChange={handleChangeRegister}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTwo}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleCloseTwo();
                    handleRegister();
                  }}
                >
                  Sign Up
                </Button>
              </Modal.Footer>
            </Modal>
          </Modal.Footer>
        </Modal>
        <Link to="/contact">
          <span className="cbtn"> Contact US</span>
        </Link>
        <img
          className="d-block w-100"
          src={Colors}
          alt="image"
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default Home;
