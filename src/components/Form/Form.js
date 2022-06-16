import React, { useState, useRef } from 'react'
import './Form.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ticket1 from '../../images/Assets/senja/ticket1.jpeg'
import ticket2 from '../../images/Assets/senja/ticket2.jpeg'
import ticket3 from '../../images/Assets/senja/ticket3.jpeg'
import ticket4 from '../../images/Assets/senja/ticket4.jpeg'
import { FaWhatsappSquare } from 'react-icons/fa'
import data from '../Data/data'
import emailjs from '@emailjs/browser';


const Forms = () => {
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }  
        setValidated(true);
    };

    const {ticket} = data;

    const form = useRef(); 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jzkb91v', 'template_t1zgemn', form.current, 'gfWYIL2GC3vJ6UBpy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert("Email Send");
      };



   
    
    return (
        <>
            <div className="form-ticket">
                <h2 className='formTitle'>Form Pemesanan Ticket</h2>
                <Row className="GridForm" >
                    <Col>
                        <Form onSubmit={sendEmail} ref={form} className="Form-Control  text-white" noValidate validated={validated} onInput={handleSubmit}>

                            <Row className="Form">
                                <Form.Group className="mb-3" controlId="validationCustom01">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control
                                        required
                                        type="name"
                                        placeholder="Masukkan Nama Lengkap"
                                        name="user_name"
                                
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationCustom02">
                                    <Form.Label>Alamat Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Example@gmail.com"
                                        name="user_email"
                                      
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationCustom02">
                                    <Form.Label>No. Handphone</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="+62XXXXXX"
                                        name="user_phone"
                                       
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="validationCustom02">
                                    <Form.Label>No. Identitas</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="No. Identitas / NIK.KTP"
                                        name="user_identitas"
                                       
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Pilih Ticket</Form.Label>
                                    <InputGroup hasValidation >
                                        <Form.Select aria-label="Default select example" name="jenis_ticket">
                                            <option value='BRONZE'>BRONZE IDR 40.000</option>
                                            <option value="SILVER">SILVER IDR 50.000</option>
                                            <option value="GOLD">GOLD IDR 70.000</option>
                                            <option value="PLATINUM">PLATINUM IDR 90.000</option>
                                        </Form.Select>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Jumlah Ticket</Form.Label>
                                    <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="1"
                                        name="jumlah_ticket"
                                    />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group  className="mb-3" as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Total Harga</Form.Label>
                                    <Form.Control
                                        required
                                        placeholder="40.000"
                                        name="total_harga"
                                    />
                                </Form.Group>
                            </Row>
                            <Button type="submit" >Submit form</Button>
                        </Form>
                    </Col>
                    <Col className="ticketLinks">
                        <div className="gridTicket">
                            <img src={ticket1} alt="ticket senja" />
                            <img src={ticket2} alt="ticket senja" />
                            <img src={ticket3} alt="ticket senja" />
                            <img src={ticket4} alt="ticket senja" />
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=6281910573272&text=Nama%20Lengkap%20%3A%0AAlamat%20Email%20%3A%0ANIK%20KTP%20%3A%0AJumlah%20Ticket%20%3A%0APilih%20Ticket%20%3A%20BRONZE%20%2C%20SILVER%2C%20GOLD%2C%20PLATINUM%0A"><Button type="button">Order Via <FaWhatsappSquare size={25} /></Button></a>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default Forms