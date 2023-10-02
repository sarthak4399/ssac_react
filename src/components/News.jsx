import { NewsCard} from "./NewsCard.jsx"
import "./News.css"

export const News = () => {
    return(
        <div className="news">
            <h1>Latest News</h1>
            <p>Here you will find the latest News related to Studying abroad</p>
            <div><NewsCard title="This is title" desc="This is description" imageUrl="news1.png"/>
            <NewsCard imageUrl="news1.png"/>
            <NewsCard imageUrl="news1.png"/>
        </div></div>
    )
};