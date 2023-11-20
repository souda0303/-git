import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews(233)
        </div>
      </div>
      <div className="descriptionbox-descrition">
        <p>Welcome to ElegantEnsemble - Where Style Meets Comfort! Discover the latest trends and timeless classics in fashion. Shop our curated collection for high-quality clothing that suits every occasion.</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
