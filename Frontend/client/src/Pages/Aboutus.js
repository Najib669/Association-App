import React, { useState } from "react";
import "./Aboutus.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Actions/authuserActions";
import { login } from "../Actions/authuserActions";
import rabeb from "../img/rabeb.jpg" 

const About = () => {
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
    <div className="carousel">
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
              alt="First slide"
              style={{ height: "100vh" }}
            />

            <Carousel.Caption>
              <h5>Who we are ?</h5>
              <p className="pp">
                When an association values differences and creates a welcoming
                environment one that is comfortable{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg"
              alt="Second slide"
              style={{ height: "100vh" }}
            />
            <Carousel.Caption>
              <h5>Our Vision</h5>
              <p className="pp">
                NAFAS aim to protect the environment and biodiversity, minimize
                risks to human health, and promote the transition to a circular
                economy{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/775417/pexels-photo-775417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
              style={{ height: "100vh" }}
            />
            <Carousel.Caption>
              <h5>Join NAFAS</h5>
              <p className="pp">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="about">
          <div className=" page_intro ">
            <h5 className="abtitle">
              Environmental strategies and actions plans{" "}
            </h5>
            <div className="first_intro">
              <div>
                <div className="P">
                  <p className="text-center">
                    NAFAS is defined as the creation of a sense of belonging and
                    connectedness that engages individuals in an authentic
                    manner in which uniqueness is valued, respected and
                    supported through opportunities and interaction.
                  </p>
                </div>

                <Button className="Login" onClick={handleShow}>
                  Join us{" "}
                </Button>
              </div>
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
            </div>
          </div>
        </div>

        <div>
          <div className="p2">
            <h1 className="abtitle">Vision</h1>
            <br />

            <p class="text-center">
              When an association values differences and creates a welcoming
              environment one that is comfortable, inclusive, and empowering it
              opens the door for innovation, increased participation and an
              elevated sense of community and belonging for all. We envision a
              thriving world where everyone has access to clean water and
              renewable energy. That’s why we’re building a movement based on
              partnership, participation, and collective impact. With our
              partners—across all sectors of society—we’re creating solutions
              that restore balance between people, nature, and business.
            </p>
          </div>
          <Button>Donnation</Button>
          <h1 className="abtitle">Our Team</h1>
          <div class="griddert ">
						<div id="awsm-member-90-1404" class="awsm-grid-list awsm-grid-card awsm-team-item awsm-scale-anm awsm-all" data-griddercontent="#awsm-grid-content-1404">
					<span class="awsm-team-link-control awsm-grid-list-item awsm-grid-list-item-1404">
						<figure>
						<img width="200" height="200"           src={rabeb}
 alt="" decoding="async"/>							<figcaption>
								<div class="awsm-personal-info"><span>DEV FULLSTUCK</span><h3>RABEB ELKOTEL</h3></div>							</figcaption>
						</figure>
					</span>
				</div>
							<div id="awsm-member-90-594" class="awsm-grid-list awsm-grid-card awsm-team-item awsm-scale-anm awsm-all" data-griddercontent="#awsm-grid-content-594">
					<span class="awsm-team-link-control awsm-grid-list-item awsm-grid-list-item-594">
						<figure>
						<img width="200" height="200"           src="https://2022.intunis.net/wp-content/uploads/2022/05/Sans-titEAEAZEre-3.jpg"
 alt="" decoding="async" loading="lazy"/>							<figcaption>
								<div class="awsm-personal-info"><span>DEV FULSTUCK</span><h3>OUAFA BENAMOR</h3></div>							</figcaption>
						</figure>
					</span>
				</div>
							<div id="awsm-member-90-91" class="awsm-grid-list awsm-grid-card awsm-team-item awsm-scale-anm awsm-all" data-griddercontent="#awsm-grid-content-91">
					<span class="awsm-team-link-control awsm-grid-list-item awsm-grid-list-item-91">
						<figure>
						<img width="200" height="200"           src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/347088974_201621336066663_6724047983281445558_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JjsUz-VA4-wAX8-3tiO&_nc_ht=scontent.ftun16-1.fna&oh=00_AfD2hzyEH-SsSiRhUbAzPdbOEBrJqg7QpwokQwj3JsPOyg&oe=6479A7C2"
 alt="" decoding="async" loading="lazy"/>							<figcaption>
								<div class="awsm-personal-info"><span>DEV FULLSTUCK</span><h3>NAJIB BOHLI</h3></div>							</figcaption>
						</figure>
					</span>
				</div>
							<div id="awsm-member-90-1830" class="awsm-grid-list awsm-grid-card awsm-team-item awsm-scale-anm awsm-all" data-griddercontent="#awsm-grid-content-1830">
					<span class="awsm-team-link-control awsm-grid-list-item awsm-grid-list-item-1830">
						
				
	

					</span>
				</div>
					</div>
        </div>

        <div className="p2">
          <h3 class="text-center">
            This text briefly introduces visitors to your main services.
          </h3>
        </div>

        <div className=" lg:flex  mt-20 items-center justify-between py-3">
          <div className="mx-5"></div>
          <div className="flex lg:flex-row flex-col mt-5 mb-0 items-center">
            <p className="adress">123-456-7890 |,TUNISIA, SOUSSE 4051| </p>
          </div>
        </div>
      </div>

      <div class="slider_outer">
        <img
          src="https://www.acpenvironnement.org/images/partenaires/filet-drom.jpg"
          alt="Filet Drom"
        />
        <img
          src="https://www.acpenvironnement.org/images/partenaires/unite-caribbean.jpg"
          alt="Unite Caribbean"
        />
      </div>
    </div>
  );
};

export default About;
