import './Welcome.css'
import React from 'react'

import { FaEnvelope } from 'react-icons/fa'

import { Link } from 'react-router-dom';

const Welcome = ()=>{

    const PointSection = ({icon, title, description, to})=>{
        <Link className='options-link' to={`/${to}`}>
            <div className='links'>
                <div className='option-icon'>
                    {icon}
                </div>
                <div className='info'>
                    <b>
                        <h1>
                            {title}
                        </h1>
                    </b>
                    <h3>
                        {description}
                    </h3>
                </div>
            </div>
        </Link>
    }

    return(
        <>
            <div className="container">
                <div className="image">    
                </div>

                <center><h1><b>EQUITY AND ACCESS FOR ALL</b></h1></center>

                <Link to='/signup'>
                    <button className='signup'>
                        GET STARTED
                    </button>
                </Link>

                <div className="options">

                    <PointSection 
                        title='Ask'
                        description='Ask your own problems or doubts'
                        icon={<FaEnvelope size={60} color='green' />}
                        to={'post'}
                    />

                </div>
            </div>
        </>
    )
}

export default Welcome