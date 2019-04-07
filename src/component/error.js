import React,{Component} from 'react';
class ErrorLimit extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      // console.log(error);
      this.setState({ hasError: true });
      
      
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>please enter the correct expression.</h1>;
      }
      return this.props.children;
    }
  }
  export default ErrorLimit;