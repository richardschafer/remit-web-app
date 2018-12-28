import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Template from './ui/Template';

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
      <Template>
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
            if (loading) { return <CircularProgress />; }

            if (error) { return <div>error</div>; }

            return (
              <div>
                | Remit |
                <div>
                  <span>post title: </span>
                  {data.getPostById.title}

                  <Button variant="contained" color="primary">
                    Hello World
                  </Button>
                </div>
              </div>
            );
          }}

        </Query>
      </Template>
    );
  }
}

export default App;
