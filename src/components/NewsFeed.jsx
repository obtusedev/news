import NewsCard from "./NewsCard.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import "dotenv/config";

export default function NewsFeed() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPosts(res.data);
        })
    });
    return (
        <div>
            {posts.map(post => {
                return <NewsCard key={post.id} title={post.title} body={post.body} />
            })}
        </div>
    )
}
