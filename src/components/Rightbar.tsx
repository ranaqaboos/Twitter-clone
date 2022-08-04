import '../style/rightbar.css'

export default function Rightbar() {
    return (
        <div className="widgets">
        <div className="widgets__input">
          <span className="material-icons widgets__searchIcon"> search </span>
          <input type="text" placeholder="Search Twitter" />
        </div>
  
        <div className="widgets__widgetContainer">
          <h2>What's happening?</h2>
          <blockquote className="twitter-tweet">
            <p lang="ar" dir="rtl">
            هلا بالرهيبين والرهيبات🔥
نزلنا تحديث جديد لخطة بمميزات انتم طلبتوها🤍
بالإضافة لتحسينات وحل مشاكل وصلتنا منكم🙌🏻

باقي ماحدثت أو جربت خطة؟⬇️
https://khotta.bio.link

في هذا الثريد بنضيف مميزات خطة حق كل تحديث جديد بينزل👇🏻
              <a href="https://twitter.com/axendateam?lang=ar">@axendateam</a>.
              <a href="https://khotta.bio.link/"></a>
              <a href="https://twitter.com/AxendaTeam"></a>
              <a href="https://twitter.com/AxendaTeam">pic.twitter.com/YuKy2rcjyU</a>
            </p>
            &mdash; (@axendateam)
            <a href="https://twitter.com/AxendaTeam/status/1495061824609427460?s=20&t=gi4BwTcpSDVj7SvqLfrE0w">May 5, 2020</a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
         
    );
}
