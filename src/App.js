import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Training from './containers/Training/Training'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Training/>
        </Layout>
      </div>
    );
  }
}

export default App;
