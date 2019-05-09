import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (<div className="main-header">
    <div className="logo-img">
    <ImageThumbnail />
    </div>
        <div className="post-content">
        <div className="post-title">
        <HeaderTitle />
        </div>
        <div className="post-engagement">  
        <HeaderContent />
        </div>
        </div>
    </div>);
};

export default HeaderContainer;