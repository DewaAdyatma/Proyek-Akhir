import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
import awal from "../../public/Hello-logo.png";
import "../style/Awal.css";

function Awal() {
    console.log("Komponen Awal dirender");
    return (
        <div>
            <div className='Hello'>
                <Link to="/halaman-login"> {/* Perbaiki rute di sini */}
                    <img className="L" src={awal} alt="Hello" style={{ cursor: 'pointer' }} />
                </Link>
            </div>
        </div>
    );
}

export default Awal;
