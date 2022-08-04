import '../style/feed.css'
export function Feed() {
	return (
<div>

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
 </div>
      
    )
    }