import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className="post-container">
      <div className="post">
        <h2>Post Title</h2>
        <p>Post content goes here.</p>
      </div>
      <footer>
        {/* <p>
          &copy; 2024 MyLife
        </p> */}
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/archive">Archive</a></li>
        </ul>
      </footer>
    </div>
  );
}