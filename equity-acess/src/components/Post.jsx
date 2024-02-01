import { useState } from 'react'
import Service from '../appwrite/config'
import { useNavigate } from "react-router-dom";

import './Post.css'

const Post = ()=>{

    const navigate = useNavigate();

    const [post, setPost] = useState('')

    const handlesubmit = async (e)=>{
        e.preventDefault()

        try{

            const dbPost = await Service.createRequest({
                post
            })

            if(dbPost){
                navigate(`/`)
            }

        }catch(error){

        }
    }

    return(
        <div className="post-form">
            <form onSubmit={handlesubmit}>
                <textarea className="textarea" value={post} onChange={e=>setPost(e.target.value)}>
                </textarea><br></br>

                <button type='submit' className='button'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Post