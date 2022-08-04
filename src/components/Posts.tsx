import { posts } from "../data";
import { Post } from "./Post";



export function Posts(){
const postnew = posts.map((post) => <Post post={post}/>);
return <div>
    {postnew}
   
</div>

}
  