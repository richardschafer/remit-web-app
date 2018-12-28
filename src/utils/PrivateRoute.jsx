import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import {
  Route, withRouter,
} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Template from '../client/ui/Template';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
    };
  }

  async componentDidMount() {
    const idToken = localStorage.getItem('googleIdToken');
    const { mutate } = this.props;

    if (idToken && mutate) {
      const res = await mutate({ variables: { idToken } });

      if (res.data && res.data.checkSession && res.data.checkSession.user) {
        this.setState({
          loading: false,
          user: res.data.checkSession.user,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { loading, user } = this.state;
    const { history } = this.props;

    if (loading) {
      return <Template centered><CircularProgress /></Template>;
    }

    if (!loading && !user) {
      history.push('/login');
    }

    return (
      <Route {...this.props} />
    );
  }
}

const ConnectedPrivateRoute = graphql(gql`
  mutation checkSession($idToken: String!) {
    checkSession(idToken: $idToken) {
      user {
        email
        user_id
        name
        exp
        picture
      }
    }
  }
`)(withRouter(PrivateRoute));

export default ConnectedPrivateRoute;
