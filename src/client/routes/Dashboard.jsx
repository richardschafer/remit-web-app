import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Typography } from '@material-ui/core';
import Template from '../ui/Template';
import NavBar from '../ui/NavBar';

function Dashboard() {
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
            <Template centered>
              {loading && <CircularProgress />}
              {error && <h2>error</h2>}
            </Template>
          );
        }

        return (
          <Template centered>
            <NavBar />

            <Typography variant="h3" gutterBottom>| Remit |</Typography>
            <Typography variant="subtitle1" gutterBottom align="center">
              Post from Firebase:
              <Typography variant="body1" align="center" color="primary">{data.getPostById.title}</Typography>
            </Typography>

            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </Template>
        );
      }}
    </Query>
  );
}

export default Dashboard;
