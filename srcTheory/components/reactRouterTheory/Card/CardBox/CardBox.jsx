import React from 'react';
import {withRouter} from 'react-router-dom';

const styles = {
  border: '1px solid black',
  minWidth: '500px',
  margin: '10px auto',
}

const CardBox = (props) => {
  return (
    <div
      style={styles}
      onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}>
      <p>{props.name}</p>
      <p>{props.year}</p>
    </div>
  )
}
export default withRouter(CardBox);