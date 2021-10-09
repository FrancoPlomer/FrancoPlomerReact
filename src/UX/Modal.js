import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CustomizedSwitches from './Switched';
export default function SimpleModal() {
    const [show, setShow] = useState(false);
    const [Slide, setSlide] = useState(true);
    const handleClose = () => {
        setShow(false)
        setSlide(false)
    };
    const handleShow = () => {
        setShow(true)
        setSlide(true)
    };
    return (
    <>
            <div onClick={handleShow}>
                <CustomizedSwitches show={Slide}/>
            </div>
    
            <Modal show={show} onHide={handleClose} className="ModalLogIn">
            <Modal.Header closeButton>
                <Modal.Title>Ingrese sus datos para loguearse</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body>
                        <input type="email"  className="form-control" placeholder="email" required />
                        <input type="password"  className="form-control" placeholder="Password" required/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                    Cancelar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                    Loguearse
                    </Button>
                </Modal.Footer>
            </form>
            </Modal>
    </>
    );
}
