import React , {Component } from 'react';
import { Breadcrumb ,BreadcrumbItem , Button  ,Label  ,Col , Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control , Form , Errors , actions } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len); 
const minLength = (len) => (val) => (val) && (val.length >= len); 
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
// /^[a-zA-Z0-9._-]+:  Means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.
// [a-zA-Z0-9.-]+: After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-‘).
// \.: After the second group of characters there must be a period (‘.’). This is to separate domain and subdomain names.
// [a-zA-Z]{2,4}$/: Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed.
// {2,4} indicates the minimum and maximum number of characters. This will allow domain names with 2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz).

class Contact extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }
    
    handleSubmit(values){
        console.log("Current State is" + JSON.stringify(values));
        alert("Current State is" + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

    render(){
        
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to = '/home'> Home </Link></BreadcrumbItem>
                            <BreadcrumbItem active> Menu </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3> ContactUs </h3>
                            <hr />
                        </div>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" >
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className ="row row-content">
                    <div className ="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className ="col-12 col-md-9">
                        <Form model= "feedback" onSubmit = {(values) => this.handleSubmit( values )}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}> FirstName </Label>
                                <Col md={10}>
                                    <Control.text model= ".firstname" id="firstname" name="firstname" 
                                        placeholder ="First Name" 
                                        className ="form-control"
                                        validators ={{
                                            required , minLength: minLength(3), maxLength: maxLength(12)
                                        }}/>
                                          <Errors 
                                          className ="text-danger"
                                          model =".firstname"
                                          show ="touched"
                                          messages={{
                                              required: 'Required',
                                              minLength: 'length should be greater than 2 characters',
                                              maxLength:'length must be less than 15 characters',

                                          }} />                      
                                </Col>
                            </Row><br />
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}> LastName </Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" 
                                        placeholder ="Last Name" 
                                        className="form-control"
                                        validators ={{
                                            required , minLength: minLength(3), maxLength: maxLength(12)
                                        }}/>
                                          <Errors 
                                          className ="text-danger"
                                          model =".lastname"
                                          show ="touched"
                                          messages={{
                                              required: 'Required',
                                              minLength: 'length should be greater than 2 characters',
                                              maxLength:'length must be less than 15 characters',
                                          }} />                                  
                                </Col>
                           </Row><br />
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}> Contact No. </Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" 
                                        placeholder ="Tel. Number" 
                                        className="form-control"   
                                    // <FormFeedback>{errors.telnum}</FormFeedback> 
                                        validators ={{
                                            required , minLength: minLength(3), maxLength: maxLength(12) ,isNumber
                                        }}/>
                                          <Errors 
                                          className ="text-danger"
                                          model =".telnum"
                                          show ="touched"
                                          messages={{
                                              required: 'Required',
                                              minLength: 'length should be greater than 2 numbers',
                                              maxLength: 'length must be less than 10 numbers',
                                              isNumber: 'must be a number'
                                          }} />            
                                </Col>
                            </Row><br />
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}> Email </Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" 
                                        placeholder ="Email" 
                                        className=" form-control " 
                                        //  <FormFeedback>{errors.email}</FormFeedback>  
                                        validators ={{
                                            required ,validEmail
                                        }} />
                                        <Errors 
                                          className ="text-danger"
                                          model =".email"
                                          show ="touched"
                                          messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                          }} />            
                                    
                                    
                                </Col>
                            </Row><br />
                            <Row className="form-group">
                                <Col md={{size:6 , offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" 
                                            className= " form-check-input" /> {' '}
                                            <strong>May We Contact You?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                    className =" form-control ">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                        <option>Contact No.</option>
                                    </Control.select>
                                </Col>
                            </Row><br />
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}> Your Feedback </Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="12"
                                    className="form-control" />                                    
                                </Col>
                            </Row><br />
                            <Row className="form-group">
                                <Col md={{size:10 , offset:2}}>
                                  <Button type="submit" color="primary">
                                      Send Feedback
                                  </Button>
                                </Col>
                            </Row><br />
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
    


export default Contact;