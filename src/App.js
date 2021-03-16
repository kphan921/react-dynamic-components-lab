import React from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

const App = () => {
  
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
}

export default App;
