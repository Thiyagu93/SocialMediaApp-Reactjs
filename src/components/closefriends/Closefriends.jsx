import "./closefriends.css"

const Closefriends = ({user}) => {
  return (
        <li className="sidebarfriend">
            <img className='sidebarfriendimage' src={user.profilePicture} alt='friends' />
            <span className="sidebarfriendname">{user.username}</span>
        </li>
  )
}

export default Closefriends