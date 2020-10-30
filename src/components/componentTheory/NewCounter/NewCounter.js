import React from 'react';
import {ClickedContext} from '../Cars/Cars';

export default props => {
  return (

    <div style={{
      border: '1px solid #ccc',
      width: '200px',
      margin: '10px auto'
    }}>
      <h3>New Counter</h3>
      <ClickedContext.Consumer>
        {clicked => clicked ? <p>Clicked</p> : null}
      </ClickedContext.Consumer>

    </div>

  )
}