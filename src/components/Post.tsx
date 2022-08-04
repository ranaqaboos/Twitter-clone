

import '../style/Post.css'

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


export function Post(){

   
    return (
      <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <div className="tweetBox">
        <form>
          <div className="tweetbox__input">
            <img
              src="https://pbs.twimg.com/profile_images/1533811878576652290/E3L9qI4x_400x400.jpg"
              alt=""
            />
            <input type="text" placeholder="What's happening?" />
          </div>
          <button className="tweetBox__tweetButton">Tweet</button>
        </form>
      </div>
    
      <div className="post">
        <div className="post__avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1533811878576652290/E3L9qI4x_400x400.jpg"
            alt=""
          />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              Tuwaiq Academy | أكاديمية طويق
                <span className="post__headerSpecial"
                  ><span className="material-icons post__badge"> verified </span>@TuwaiqAcademy</span>
              </h3>
            </div>
            <div className="post__headerDescription">
            <p lang="ar" dir="rtl">تعرّف على آلية بناء الابتكارات الرقمية، واكتشف احتياجات العملاء وأكثر الفرص جاذبية، <br /> وذلك من خلال دورة "الابتكار الرقمي" من <a href="">#أكاديمية_طويق</a>.
</p>
            </div>
          </div>
          <img
            src="https://pbs.twimg.com/media/FZQRtcLWQAEE8T1?format=jpg&name=large"
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
  
      <div className="post">
        <div className="post__avatar">
          <img
            src="https://pbs.twimg.com/profile_images/1351852829108015112/hR7fuFKQ_400x400.jpg"
            alt=""
          />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              أخبار السعودية

                <span className="post__headerSpecial"
                  ><span className="material-icons post__badge"> verified </span>@SaudiNews50</span>
              </h3>
            </div>
            <div className="post__headerDescription">
            <p lang="ar" dir="rtl">رسميًا: <br />

إتاحة الفرصة للطالب للحصول على أكثر من شهادة بكالوريوس.</p>
            </div>
          </div>
        
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