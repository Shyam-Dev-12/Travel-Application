import React, { useState, useEffect } from "react";

        // Style & Image
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { toast } from 'react-toastify'

        // icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

        // React Router Dom
import { redirect, useNavigate, useLocation, Link } from "react-router-dom";

      // Redux
import { useSelector, useDispatch } from 'react-redux'

      // Slices
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'

export const LoginScreen = () => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate()
  const dispatch=useDispatch()

  const [login,{isLoading}]=useLoginMutation()

  const {userInfo}=useSelector((state)=>state.auth)

  const {search}=useLocation()    

  const sp=new URLSearchParams(search);
  const redirect=sp.get("redirect") || "/"

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      console.log(email, password);
      const res=await login({email,password}).unwrap()
      dispatch(setCredentials({...res}))
      toast.success("Login Successfull")
      navigate(redirect)
    }catch(error){
      toast.error(error?.data.message  || error.message || "Login Failed")
    }
  }

  return (

    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light" >
      
      <Row className="shadow-lg rounded overflow-hidden g-0" style={{ maxWidth: "900px", width: "90%", background: "#fff" }} >
            {/* image */}
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center p-0 order-1 order-md-2" >
          <img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771695899/login_idhjht.jpg" alt="Login Illustration" className="img-fluid w-100 h-100 object-fit-cover" style={{ minHeight: "100%" }} />
        </Col>

            {/* Form */}
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center p-4 order-2 order-md-1">
          <Card className="w-100 border-0 bg-transparent">
            <Card.Body>
              <Card.Title className=" text-center  fs-5 fw-medium d-flex justify-content-center gap-1 ">
                                    {["L", "O", "G", "I", "N"].map((char, index) => (
                <span key={index} className="border border-dark rounded px-2 py-1 bg-dark text-light" style={{ display: "inline-block", minWidth: "30px", textAlign: "center", fontWeight: "bold", }} >
                    {char.trim() === "" ? "\u00A0" : char}
                </span>
                ))}
              </Card.Title>
              <Card.Title className="fs-6 fst-italic fw-bold text-center mb-4 mt-4"> "Welcome Back, Traveler! <br/> Your next adventure awaits!" </Card.Title>

              <Form onSubmit={submitHandler}>
                
                              {/* Email */}
                <Form.Group className="mb-3" controlId="formGroupEmail" style={{ position: "relative" }}>
                  <MdEmail style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d", }} />
                 
                  <Form.Control style={{ paddingLeft: "35px" }}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                              {/* Password */}
                <Form.Group className="mb-4" controlId="formGroupPassword" style={{ position: "relative" }}>
                  <RiLockPasswordFill style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d", }} />
                    
                  <Form.Control style={{ paddingLeft: "35px" }}
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" variant="outline-dark" className="w-100"> Login </Button>
              </Form>

            </Card.Body>

              <p className='text-center fs-6 fw-semibold'>Don't have Account ? <Link to="/register" className='text-primary'>Sign Up</Link> </p>
              
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};
