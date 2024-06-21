import React, { useState } from 'react'
import './blog.css'
import { Link } from 'react-router-dom';

export default function Blog() {

    const [posts, setPosts] = useState([]);

    // Fetching data from the API 
    async function getData() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        setPosts(data)
    };

    if (posts.length === 0) {
        getData(() => console.log("Data Loaded"));
    }

    return (
        <div>
            <nav>
                <h1 className="title">MyLife</h1>
                <ul>
                    <li><a href="#posts">Posts</a></li>
                    <li><a href="/allposts">New Post</a></li>
                    <li><a href="#randcheck">randcheck</a></li>
                </ul>
            </nav>
            <section id="posts">
                <ul className="cards">
                    {posts && posts.map((post, index) => (
                        <li key={index}>
                            <Link to='/post'>
                                <img src="https://source.unsplash.com/random" alt="" />
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <a href="" className="button">Read More</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
