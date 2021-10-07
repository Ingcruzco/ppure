import React  from 'react';
import '../styles/footer.css'
const Footer = props => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Servicios</h3>
                            <ul>
                                <li><a href="#">pestopepure050@gmail.com</a></li>
                                <li><a href="#">+57 3182808015</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Sobre Nosotros</h3>
                            <ul>
                                <li><a href="#">Quienes Somos</a></li>
                                <li><a href="#">Ubicaciones</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Ppure</h3>
                            <p>Mujeres de diferentes territorios, renaciendo para transmitir la cultura del cultivo a la ciudad, para generar salud, bienestar y esperanza a la sociedad.</p>
                        </div>
                       </div>
                    <p className="copyright">P'pure' © 2021</p>
                </div>
            </footer>
        </div>  
    );
};

export default Footer;