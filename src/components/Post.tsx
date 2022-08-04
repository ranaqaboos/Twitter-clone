

import '../style/Post.css'

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { IPost } from '../data';

interface PostProp{
  post: IPost
}

export function Post ({post}: PostProp){

   
    return (
      <div className="feed">
     
      <div className="post">
        <div className="post__avatar">
          <img
            src={post.userAvatarUrl}
            alt=""
          />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
             {post.name}
                <span className="post__headerSpecial"
                  ><span className="material-icons post__badge"> verified </span>{post.username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
            <p lang="ar" dir="rtl"> {post.description}</p>
            </div>
          </div>
          <img
            src={post.imageUrl}
            alt=""
          />
          <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
  
     
   
    </div>
    )
      
}




// import { IPost } from "../data"
// import '../style/Post.css'
// import { Avatar } from "@material-ui/core";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import PublishIcon from "@material-ui/icons/Publish";

// interface PostProp{
//     post: IPost
// }

// export function Postt({post}: PostProp){

   
//     return (
//         <div className="post" >
     
    
//         <div className="post__body">
//           <div className="post__header">
//           <div className="post__avatar">
//           <Avatar src={post.userAvatarUrl}/>
//         </div>
//             <div className="post__headerText">
//               <h3>
//              {post.username}
//                 <span className="post__headerSpecial">
//                   { <VerifiedUserIcon className="post__badge" />} @
//                 {post.username}
//                 </span>
//               </h3>
//             </div>
        
        
//           </div>
//           <div className="post__headerDescription">
//               <p>{post.description}</p>
//             </div>
//           <img src={post.imageUrl}/>
//           <div className="post__footer">
//             <ChatBubbleOutlineIcon fontSize="small" />
//             <RepeatIcon fontSize="small" />
//             <FavoriteBorderIcon fontSize="small" />
//             <PublishIcon fontSize="small" />
//           </div>
       
//         </div>
//     <hr />
    
//       </div>
      
// );
// }