import "./online.css"

const Online = ({user}) => {
  return (
        <li className="rightbarfriend">
            <div className="rightbarfriendimagecontainer">
              <img
                src={user.profilePicture}
                alt="friendimage"
                className="rightbarfriendimg"
              />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{user.username}</span>
          </li>
  )
}

export default Online;
