import React from 'react';
import IconNotFound from '../../images/404.svg';
import './style.less';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Página não encontrada"
    };
  }

  render() {
    return (
      <div className="container container-empty">
        <img src={IconNotFound} className="icon not-found" alt="icon not found" />
        <h1 className="text-center">{this.state.message}</h1>
      </div>
    );
  }
}

export default NotFound;
