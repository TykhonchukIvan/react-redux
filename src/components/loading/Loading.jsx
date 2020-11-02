import React from 'react';
import './loading.less';

const Loading = () => (
  <div className="loading__content">
    <div className="loading">
      <div className="preloader">
        <div className="preloader_content">
          <div className="preloader_first" />
          <div className="preloader_second" />
          <div className="preloader_third" />
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
