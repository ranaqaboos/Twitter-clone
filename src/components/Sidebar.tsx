
import { Link } from 'react-router-dom';
import '../style/sidebar.css'


function Sidebar() {
  return (
    <div className="sidebar">
    <i className="fab fa-twitter"></i>
    <div className="sidebarOption active">
      <span className="material-icons"> home </span>
     <h2> <Link className='links' to={'/home'}>Home</Link></h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> search </span>
      <h2>Explore</h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> notifications_none </span>
      <h2>Notifications</h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> mail_outline </span>
      <h2>Messages</h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> bookmark_border </span>
      <h2>Bookmarks</h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> list_alt </span>
      <h2>Lists</h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> perm_identity </span>
     <h2> <Link className='links' to={'/profile'}>Profile</Link></h2>
    </div>

    <div className="sidebarOption">
      <span className="material-icons"> more_horiz </span>
      <h2>More</h2>
    </div>
    <button className="sidebar__tweet">Tweet</button>
  </div>
  );
}

export default Sidebar;
