import React from 'react';

class Container extends React.Component {
  render () {
    return (
      <div id="content">
        {this.props.children}
      </div>
    )
  }
}

module.exports = Container;