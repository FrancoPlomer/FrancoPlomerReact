import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CustomizedSwitches from './Switched';
import { useCart } from '../Context/CartContext';
import { Login, signUp, signUpWhitGoogle, updateLogOut, updateUserName } from '../Hooks/PromiseHook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function SimpleModal() {
    const [show, setShow] = useState(false);
    const [Slide, setSlide] = useState(true);
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Pass, setPass] = useState("")
    const [HaveAccount, setHaveAccount] = useState(false)
    const [DontHaveAccount, setDontHaveAccount] = useState(false)
    const [Choice, setChoice] = useState(false)
    const {AddBuyer, User, setUser, setLogged} = useCart()

    useEffect(() => {
        if (User !== "")
        {
            console.log("Esto es el usuario ",User,"Esto es el email", Email)
            AddBuyer(User, Email);
        }
        else{
            setLogged(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [User])

    const handleClose = () => {
        setShow(false)
        setSlide(false)
        setChoice(false)
        setHaveAccount(false)
        setDontHaveAccount(false)
    };

    const handleShow = () => {
        setShow(true)
        setSlide(true)
    }; 

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmitDontHaveAccount = async (e) => {
        e.preventDefault();
        await Login(Email, Pass);
        await updateUserName(Name ,setUser);
        handleClose();
    }
    
    const handleSubmitHaveAccount = async (e) => {
        e.preventDefault();
        await signUp(Email, Pass, setUser);
        handleClose();
    }

    
    const handleGoogleSign = async () => 
    {
        await signUpWhitGoogle(setUser, setEmail);
        await updateUserName(Name ,setUser);
        handleClose();
    }


    const HandleHaveAccount = () => 
    {
        setHaveAccount(true);
        setChoice(true);
    }
    const DontHandleHaveAccount = () => 
    {
        setDontHaveAccount(true);
        setChoice(true);
    }


    const handleLogOut = () =>
    {
        updateLogOut(setUser);
    }


    return (
    <>
            {
                (User === "")
                ?
                <div onClick={handleShow}>
                    <CustomizedSwitches show={Slide}/>
                </div>
                :
                <div>
                    <strong>{User}</strong>
                    <ExitToAppIcon id="logOut" onClick={handleLogOut}/>
                </div>
            }
            <Modal show={show} onHide={handleClose} className="ModalLogIn">
            <Modal.Header closeButton>
                <Modal.Title id="loginTittle">Ingrese sus datos para la compra</Modal.Title>
            </Modal.Header>
            {!Choice 
            &&
                <>
                    <div className="logginButton">
                        <Button type="primary" onClick={HandleHaveAccount}>
                            Ya tengo cuenta
                        </Button>
                        <Button type="primary" onClick={DontHandleHaveAccount}>
                            Quiero registrarme
                        </Button>
                    </div>
                </>
            }
            {
                DontHaveAccount && 
                <form onSubmit={handleSubmitDontHaveAccount}>
                    <Modal.Body>
                        <input type="text"  className="form-control" placeholder="Nombre" onChange={handleChangeName} required />
                        <input type="email"  className="form-control" placeholder="email" onChange={handleChangeEmail} required />
                        <input type="password" className="form-control" placeholder="contraseña"  onChange={handlePass} required />
                    </Modal.Body>
                    <Modal.Footer className="footerModal">
                        <Button variant="danger" className="buttonLog" onClick={handleClose}>
                        Cancelar
                        </Button>
                        <Button type="submit" className="buttonLog" variant="success">
                            Registrarme
                        </Button>
                        <Button className="googleLog buttonLog" onClick={handleGoogleSign}>
                            Loguearse con  Google
                        </Button>
                    </Modal.Footer>
                </form>
            }

            {
                HaveAccount &&
                <form onSubmit={handleSubmitHaveAccount}>
                    <Modal.Body>
                        <input type="email"  className="form-control" placeholder="email" onChange={handleChangeEmail} required />
                        <input type="password" className="form-control" placeholder="contraseña"  onChange={handlePass} required />
                    </Modal.Body>
                    <Modal.Footer className="footerModal">
                        <Button variant="danger" className="buttonLog" onClick={handleClose}>
                        Cancelar
                        </Button>
                        <Button type="submit" className="buttonLog" variant="success">
                            Loguearse
                        </Button>
                        <Button className="googleLog buttonLog" onClick={handleGoogleSign}>
                            Loguearse con  Google

                        </Button>
                    </Modal.Footer>
                </form>
            }
            </Modal>
    </>
    );
}
