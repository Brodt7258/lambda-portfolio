import React from 'react';
import './App.css';
import { Paper } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import img from './img/dbd5250c0e451f3cefc0bf05bd85a928.png';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: darkgray;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;

  & > * {
    margin: 1rem 0;
  }
`;

const Header = styled(Paper)`
  padding: 1rem;
  margin: 0 0 1rem 0;
`;

const ProjectCard = styled(Paper)`
  padding: 1rem;
  width: 100%;

  img {
    max-width: 100%;
    object-fit: contain !important;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .project-header {
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <div>
          <p>Tim Dill</p>
          <p>Full-stack javascript developer near Hartford, CT</p>
          <p>Skilled with: HTML, CSS, React, Express</p>
          <p>tbdill@gmail.com Github Linkedin</p>
        </div>
      </Header>
      <Main>
        <ProjectCard>
          <h2 className="project-header">
            Foodie Fun
          </h2>
          <img src={img} alt="there's some sort of img here. Project-related" />
          <p>
            This was the first project I created with Lambda.
            It&apos;s a landing page for a food review app.
            It was my first experience with animation, built with Javascript and Greensock
          </p>
          <div className="links">
            <p>Deployment</p>
            <p>GitHub</p>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Project Name 2</h2>
          <img src="" alt="there's some sort of img here. Project-related" />
          <p>A brief description of what I worked on, and what it does</p>
          <div>
            <p>Deployment</p>
            <p>GitHub</p>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Project Name 3</h2>
          <img src="" alt="there's some sort of img here. Project-related" />
          <p>A brief description of what I worked on, and what it does</p>
          <div>
            <p>Deployment</p>
            <p>GitHub</p>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Project Name 4</h2>
          <img src="" alt="there's some sort of img here. Project-related" />
          <p>A brief description of what I worked on, and what it does</p>
          <div>
            <p>Deployment</p>
            <p>GitHub</p>
          </div>
        </ProjectCard>
        <ProjectCard>
          <h2>Project Name 5</h2>
          <img src="" alt="there's some sort of img here. Project-related" />
          <p>A brief description of what I worked on, and what it does</p>
          <div>
            <p>Deployment</p>
            <p>GitHub</p>
          </div>
        </ProjectCard>
      </Main>
    </>
  );
}

export default App;
