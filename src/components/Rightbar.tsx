import '../style/rightbar.css'
import SearchIcon from "@material-ui/icons/Search";
export default function Rightbar() {
    return (
        <div className="right-bar">
            <div className="right-input">
                     <SearchIcon className="right-searchIcon"/>
                     <input placeholder="Search Twitter" type="text" />
             </div>

             <div className="right-Container">
                      <h2>What's happening</h2>
            </div>
         </div>
         
    );
}
