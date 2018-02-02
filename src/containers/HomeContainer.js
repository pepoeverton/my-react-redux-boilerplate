import { connect } from 'react-redux';

import Home from '../screens/Home';

function mapStateToProps(state) {
  return {
    message: state.home.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
