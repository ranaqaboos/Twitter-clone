
import { Post } from "../components/Post";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import '../style/home.css'
import '../index.css'
import '../style/feed.css'
import { Posts } from "../components/Posts";
import { Feed } from "../components/feed";
export function Homepage() {

    
	return(<>
    <div className="home-page">
        
      <Sidebar/>
      <div className='feed'>
      <Feed/>
       <Posts/>
      </div>
       <Rightbar/>
    </div>
    </>
    )}