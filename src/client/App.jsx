import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Template from './ui/Template';
import NavBar from './ui/NavBar';

class App extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Query
        query={gql`
            query getPostById($id: ID!) {
              getPostById(id: $id) {
                title
              }
            }
          `}
        variables={{ id: 'Bh9Cr403AQFFImWOt9cR' }}
      >
        {({ data, loading, error }) => {
          if (loading || error) {
            return (
              <Template>
                {loading && <CircularProgress />}
                {error && <h2>error</h2>}
              </Template>
            );
          }

          return (
            <Template centered>
              <NavBar />

              | Remit |
              <div>
                <span>post title: </span>
                {data.getPostById.title}
              </div>

              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </Template>
          );
        }}

      </Query>
    );
  }
}

export default App;
