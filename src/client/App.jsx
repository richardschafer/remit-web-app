import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const App = () => (
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
      if (loading) { return <div>loading</div>; }

      if (error) { return <div>error</div>; }

      return (
        <div>
          | Remit |
          <div>
            <span>post title: </span>
            {data.getPostById.title}
          </div>
        </div>
      );
    }}

  </Query>

);

export default App;
