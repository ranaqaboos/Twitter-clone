
import { Post } from "../components/Post";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import '../style/home.css'
import '../index.css'
export function Homepage() {

    
	return(<>
    <div className="home-page">
        
      <Sidebar/>
       <Post/>
       <Rightbar/>
    </div>
    </>
    )}