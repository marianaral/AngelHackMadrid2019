import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import aws_exports from './aws-exports';
import Amplify, { XR } from 'aws-amplify';
import scene_config from './sumerian_exports';
import { withAuthenticator, SumerianScene } from 'aws-amplify-react';

XR.configure({ // XR category configuration
  SumerianProvider: { // Sumerian-specific configuration
    region: 'us-west-2', // Sumerian scene region
    scenes: {
      "SumerianAmplify": {   // Friendly scene name
        sceneConfig: scene_config // Scene JSON configuration
      },
    }
  }
});

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div style={{height: '600px'}}>
        <SumerianScene sceneName='SumerianAmplify' />
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });