import React, { Component } from "react";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import styles from './main.css';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <div id="root">
      <Header/>
      <Dashboard data={data}/>
    </div>
  )
}

export const query = graphql `
query getAllProjects {
  allContentfulProject {
    edges {
      node {
        id
        title
        shortDescription
        githubLink
        longDescription {
          longDescription
        }
        contributors {
          name
          githubProfile
        }
        features {
          featureDescription {
            featureDescription
          }
        }
      }
    }
  }
}

`
