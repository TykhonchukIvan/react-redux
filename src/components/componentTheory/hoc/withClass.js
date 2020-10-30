import React from 'react';

const withClass = (Component, className, styles) => {
  return (props) => {
    return (
      <div className={className} style={styles}>
        <Component {...props}/>
      </div>
    )
  }
}
export default withClass