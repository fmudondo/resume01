import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div className="rounded-lg">
        <div className="w-56 h-56 mx-auto overflow-hidden rounded-full border-4 flex items-center justify-center mt-12">
          <img src={'/images/me.jpg'} alt="prosper" />
        </div>
      </div>
    </div>
  );
};

export default Header;
