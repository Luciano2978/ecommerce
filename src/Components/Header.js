import { useContext, useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import Contexto from "../Context/Contexto";


export default function Header(props){

    const {desconectar,user,actualizarEstado} = useContext(Contexto);

    const desconectarseUser = async (e) =>{
        e.preventDefault();
        if (user) {
            const estado = false;
            const email = user.email;
            console.log("conectado " + user.email)
            await actualizarEstado(email,estado,);
            desconectar();
        }
    }
    



    return(
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><i className="fa-brands fa-shopify"></i>{' '}Autoservicio Libertad</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark " placeholder="Buscar Producto..." aria-label="Buscar"/>
                            </form>
                            
                            </Nav>
                            <Nav>
                                {user ? ( 
                                    <Nav.Link href="/" ><i className="fa-solid fa-house"></i>{" "}{user.email}</Nav.Link>
                                ) : (
                                    <Nav.Link href="#addCuentaModal" className="btn btn-success" data-toggle="modal"><i className="fa-regular fa-user"></i>{'   '}Mi Cuenta</Nav.Link>
                                )}
                               
                                <Nav.Link href="/"><i className="fa-solid fa-cart-shopping"></i>{'   '}Carrito</Nav.Link>
                                <Nav.Link href="/"><i className="fa-solid fa-headset"></i>{'   '}Soporte</Nav.Link>
                                {user ? (
                                    <Nav.Link href="/" onClick={desconectarseUser}><i className="fa-solid fa-right-from-bracket"></i>{'   '}Logout</Nav.Link>
                                ) : (
                                    <p>{""}</p>
                                )}
                            </Nav>
                            <Nav>
                                {/* <!-- Añadir cuenta --> */}
                                <div id="addCuentaModal" className="modal fade">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div>
                                                <div className="modal-header">						
                                                    <h5 className="modal-title">¡Bienvenido a Autoservicio Libertad!</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>
                                                <div className="modal-body mt-2 mb-2 text-center">
                                                    <p className="text-dark"><strong>Escoja una opcion para iniciar su Compra</strong></p>		
                                                    <div className="form-group">
                                                        <label>¿Todavia no tienes una Cuenta? </label>
                                                        <Nav.Link href="/Registro"><input type="submit" className="btn btn-dark" value="Registrarse"/></Nav.Link>
                                                        <label>¿Tienes una Cuenta? </label>
                                                        <Nav.Link href="/Login"><input type="submit" className="btn btn-dark" value="Ingresar/Logearse"/></Nav.Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )

}