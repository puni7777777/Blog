import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Post from './components/Post';

function App() {
  return (
    <>
      <Blog />
      {/* <Routes>
        <Route path="/" component={<Blog />} />
        <Route path="/post" component={<Post />} />
      </Routes> */}
    </>
  );
}

export default App;
