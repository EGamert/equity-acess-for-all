import './Welcome.css'
import React from 'react'

import { FaEnvelope } from 'react-icons/fa'

import { Link } from 'react-router-dom';

const Welcome = ()=>{

    return(
        <>
            <div className="container">

                <center><h1><b>EQUITY AND ACCESS FOR ALL</b></h1></center>

                <Link to='/info'>
                    <button className='info'>
                        Get the info which you want
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Welcome