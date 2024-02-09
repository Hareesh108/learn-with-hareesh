import { Component } from 'react';
import Timer from './Timer';

class MyComponent extends Component {
//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

  render() {
    return <div>Hello, world!
        <Timer/>
    </div>;
  }
}

export default MyComponent;