import React from 'react';

const ColorBox = ({opacity}) => {
  
    return (
      <div className="color-box" style={{opacity }}>
        {opacity >= 0.2? <ColorBox opacity={opacity - 0.1} /> : null}
      </div>
    )
  
}

export default ColorBox;