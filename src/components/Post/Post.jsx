import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Post.css"
import { Users } from '../../data';

const Post = ({post}) => {
    const [count , setCounter ] = useState(post.like)
    const  [like, setIsLike] = useState(false)
    
    const handleSubmit = () =>{
        setCounter(like ? count - 1 : count + 1)
        setIsLike(!like)
    }
    return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img className='postprofileimage' src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt='personpoast' />
                    <span className="postusername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="posttopright">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{post.desc}</span>
                <img className='postimage' src={post.photo}alt='postimg' />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img className='postlikeimage' src='assets/heart.png' alt='postheartimg' onClick={handleSubmit} />
                    <img className='postlikeimage' src='assets/like.png' alt='postlikeimage' onClick={handleSubmit}/>
                    <span className="postlikecounter">{count} people like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post