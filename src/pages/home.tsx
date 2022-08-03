import { Navbar } from "../components/Navbar";
import { Posts } from "../components/Posts";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

export function Homepage() {

    
	return(<>
    <div className="home-page">
        
      <Sidebar/>
       <Posts/>
       <Rightbar/>
    </div>
    </>
    )}