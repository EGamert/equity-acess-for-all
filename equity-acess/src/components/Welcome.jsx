import './Welcome.css'

import { Link } from 'react-router-dom';

const Welcome = ()=>{
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

                    

                </div>
            </div>
        </>
    )
}

export default Welcome