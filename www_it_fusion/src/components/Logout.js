import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Auth from '../helpers/auth';


class Logout extends Component {

  componentWillMount() {
    //this.props.dispatch(authActionCreators.logout())
    Auth.logout();
    this.props.router.replace('/')
  }

  render() {
    return null
  }
}
Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
}

export default connect()(withRouter(Logout))
