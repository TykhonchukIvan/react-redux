import React from 'react';
import RoutTheory from './components/reactRouterTheory/index'

  export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('1', this.props)
    return (
      <>
        <RoutTheory {...this.props}/>
      </>
    )
  }
}
