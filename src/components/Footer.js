import React  from 'react';
import {BsTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {BsInstagram} from 'react-icons/bs';
import '../styles/footer.css'
const Footer = props => {
    return (
        <footer>
            <p><GrMail size={30}/>  pestopepure050@gmail.com</p>
            <p><BsTelephoneFill size={30}/> +57 3182808015   +57 3105423013 +57 3012748603</p>
            <a href="https://www.instagram.com/pestopepure"><BsInstagram size={30}/> @pestopepure</a>
        </footer>
    );
};

export default Footer;