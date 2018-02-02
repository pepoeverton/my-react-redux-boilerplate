import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { message } = this.props;

    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string,
}

export default Home;
