import "./Topbar.css"
import {Search ,Person, Chat, Notifications} from '@mui/icons-material';


const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">faceNote</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search className="searchIcon" />
                <input placeholder="Search here" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconsItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconsItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconsItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="assets/person/1.jpeg" alt="" className="topbarImage" />
        </div>
    </div>
  )
}

export default Topbar