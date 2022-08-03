import { Navbar } from "../components/Navbar";
import { Posts } from "../components/Posts";
import { Profile } from "../components/Profile";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

export function Profilepage() {

    
	return(<>
    <div className="home-page">
      <Sidebar/>
       <Profile/>
       <Rightbar/>
    </div>
    </>
    )
}