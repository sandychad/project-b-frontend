// React
import React, { Component, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// React Router
import { Switch, Route, Redirect } from 'react-router-dom';

// Local Components
import Survey from './Survey';
import Reports from './Reports';
import Users from './Users';
import * as paths from '../../utils/paths';

const redirectPath = (user) => {
  const { role } = user;
  if (role.includes('Location Security')) {
    return paths.SURVEY_PATH;
  } else if (role.includes('COVID Admin')) {
    return paths.REPORTS_PATH;
  } else {
    return paths.USER_MANAGEMENT_PATH;
  }
};

export class Core extends Component {
  static propTypes = {
    user: PropTypes.object,
  };
  render() {
    if (this.props.user) {
      return (
        <Fragment>
          <Switch>
            <Route path={paths.SURVEY_PATH} component={Survey} />
            <Route path={paths.REPORTS_PATH} component={Reports} />
            <Route path={paths.USER_MANAGEMENT_PATH} component={Users} />
          </Switch>
          <Redirect to={redirectPath(this.props.user)} />
        </Fragment>
      );
    } else {
      return <Redirect to={paths.LOGIN_PATH} />;
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Core);
