import React from 'react';

class EyesOnMe extends React.Component {
  goodLog = () => (console.log('Good!'));
  eyesOnLog = () => (console.log('Hey! Eyes on me!'));

  render() {
    return (
      <button onFocus={this.goodLog} onBlur={this.eyesOnLog}>BUTTON</button>
    );
  }
}

export default EyesOnMe;
