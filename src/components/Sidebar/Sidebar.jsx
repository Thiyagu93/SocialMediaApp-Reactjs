import React from 'react'
import "./Sidebar.css"
import {RssFeed, Chat, PlayCircle, Groups2, Bookmark, Help, Work, Event, School}  from '@mui/icons-material';
// import ChatIcon from '@mui/icons-material/Chat';
import {Users} from "../../data"
import Closefriends from '../closefriends/Closefriends';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeed />
            <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <Chat />
            <span className="sidebarlistitemtext">Chats</span>
          </li>
          <li className="sidebarlistitem">
            <PlayCircle />
            <span className="sidebarlistitemtext">Videos</span>
          </li>
          <li className="sidebarlistitem">
            <Groups2/>
            <span className="sidebarlistitemtext">Groups</span>
          </li>
          <li className="sidebarlistitem">
            <Bookmark />
            <span className="sidebarlistitemtext">BookMarks</span>
          </li>
          <li className="sidebarlistitem">
            <Help/>
            <span className="sidebarlistitemtext">Questions</span>
          </li>
          <li className="sidebarlistitem">
            <Work />
            <span className="sidebarlistitemtext">Jobs</span>
          </li>
          <li className="sidebarlistitem">
            <Event/>
            <span className="sidebarlistitemtext">Events</span>
          </li>
          <li className="sidebarlistitem">
            <School/>  
            <span className="sidebarlistitemtext">Course</span>
          </li>
        </ul>
        <button className='sidebarbutton'>Show More</button>
        <hr className='sidebarhr' />
        <ul className="sidebarfriendlist">
          {Users.map((u)=>(
            <Closefriends user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar