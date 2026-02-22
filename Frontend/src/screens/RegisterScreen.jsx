      // REACT
import { useState, useEffect } from "react";

      // style & IMAGE
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { toast } from 'react-toastify'

      // ICONS
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

      // SLICES
import { useRegisterMutation} from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";

      // REACT-ROUTER
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

      // REACT-REDUX
import { useSelector, useDispatch } from "react-redux";

export const RegisterScreen = () => {

  const[name,setName]=useState("");
  const [email, setEmail] = useState("");
  const[phone,setPhone]=useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [register,{isLoading}]=useRegisterMutation()

  const {userInfo}=useSelector((state)=>state.auth)

  const {search}=useLocation()     
  const sp=new URLSearchParams(search);
  const redirect=sp.get("redirect") || "/login"

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      const res=await register({ name, email, phone, password }).unwrap()
      toast.success("Register Successfully")
      // dispatch(setCredentials({...res}))
      // navigate(redirect)        
      navigate('/login')                                             
    }catch(error){
        toast.error(error?.data.message  || error.message)
    }
  }


  return (

    <Container fluid className=" vh-100 d-flex justify-content-center align-items-center bg-light ">
      
      <Row className="shadow-lg rounded overflow-hidden g-0" style={{ maxWidth: "900px", width: "90%", background: "#fff" }}>
       
          {/* IMAGE */}
        <Col xs={12} md={6} className=" order-1 order-md-2 d-flex justify-content-center align-items-center p-0 ">
          <img src="https://res.cloudinary.com/dlyxya9am/image/upload/v1771696013/register_g2nh02.jpg" alt="Sign Up Illustration" className="img-fluid w-100 h-100 object-fit-cover" style={{ minHeight: "100%" }} />
        </Col>

          {/* FORM */}
        <Col xs={12} md={6} className=" order-2 order-md-1 d-flex justify-content-center align-items-center p-4 ">
          <Card className="w-100 border-0 bg-transparent">
            <Card.Body>
              <Card.Title className="text-center  fs-5 fw-medium d-flex justify-content-center gap-1">
                          {["S", "I", "G", "N", "U", "P"].map((char, index) => (
                <span key={index} className="border border-dark rounded px-2 py-1 bg-dark text-light" style={{ display: "inline-block", minWidth: "35px", }} >
                    {char.trim() === "" ? "\u00A0" : char}
                </span>
                ))}
              </Card.Title>
              <Card.Subtitle className="fs-6 fst-italic mt-3 fw-bold text-center mb-4"> "Adventure Begins with a Single Click" <br/> "-- Sign Up Today!--" </Card.Subtitle>

              <Form onSubmit={submitHandler}>

                            {/* NAME */}
                <Form.Group className="mb-3" controlId="formGroupName" style={{ position: "relative" }}>
                  <FaUser style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d", }} />
                  <Form.Control style={{ paddingLeft: "35px" }}
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  /> 
                </Form.Group>

                          {/* EMAIL */}
                <Form.Group className="mb-3" controlId="formGroupEmail" style={{ position: "relative" }}>
                  <MdEmail style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d", }} />
                  <Form.Control style={{ paddingLeft: "35px" }}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                          {/* PHONE */}
                <Form.Group className="mb-3" controlId="formGroupPhone" style={{ position: "relative" }}>
                  <FaPhoneAlt style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d", }} />
                  <Form.Control style={{ paddingLeft: "35px" }}
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  /> 
                </Form.Group>

                          {/* PASSWORD */}
                <Form.Group className="mb-4" controlId="formGroupPassword" style={{ position: "relative" }}>
                  <RiLockPasswordFill style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#6c757d", }} />
                  <Form.Control style={{ paddingLeft: "35px" }}
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
              </Form.Group>

                          {/* SUBMIT - Button */}
                <Button type="submit" variant="outline-dark" className="w-100"> Register </Button>

              </Form>
            </Card.Body>
            <p className='text-center mb-4 fs-6 fw-semibold'> Already have Account ? <Link to="/login" className='text-primary'>Login</Link> </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// <Col>
      //       New Customer?
      //       </Col> <Link to={redirect ? `/register?redirect=${redirect}`:"/register"} > Register</Link>
        
      // </Row>