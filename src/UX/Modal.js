import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CustomizedSwitches from './Switched';
import { useCart } from '../Context/CartContext';

export default function SimpleModal() {
    const [show, setShow] = useState(false);
    const [Slide, setSlide] = useState(true);
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState()
    const {AddBuyer} = useCart()

    const handleClose = () => {
        setShow(false)
        setSlide(false)
    };

    const handleShow = () => {
        setShow(true)
        setSlide(true)
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AddBuyer(Name, Phone, Email)
        handleClose();
    }

    return (
    <>
            <div onClick={handleShow}>
                <CustomizedSwitches show={Slide}/>
            </div>
    
            <Modal show={show} onHide={handleClose} className="ModalLogIn">
            <Modal.Header closeButton>
                <Modal.Title>Ingrese sus datos para la compra</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                        <input type="text"  className="form-control" placeholder="Nombre..." onChange={handleChangeName} required/>
                        <input type="email"  className="form-control" placeholder="email" onChange={handleChangeEmail} required />
                        <input type="tel" className="form-control" placeholder="Telefono"  onChange={handlePhone} required />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                    Cancelar
                    </Button>
                    <Button type="submit" variant="success">
                        Loguearse
                    </Button>
                </Modal.Footer>
            </form>
            </Modal>
    </>
    );
}
