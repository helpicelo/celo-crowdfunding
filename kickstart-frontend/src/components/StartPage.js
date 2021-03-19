// Original Imports
import React, { Component } from 'react';
import Share from './Share';
import ReactPlayer from "react-player";
import classNames from "classnames";

// Core UI Changes
import { makeStyles } from "@material-ui/core/styles";
import Header from "./ui/Header/Header";
import HeaderLinks from "./ui/Header/HeaderLinks"
import Parallax from "./ui/Parallax/Parallax.js";
import styles from "./ui/jss/material-kit-react/views/landingPage.js";
import GridContainer from "./ui/Grid/GridContainer.js";
import GridItem from "./ui/Grid/GridItem.js";
import Button from "./ui/CustomButtons/Button.js";
import Card from "./ui/Card/Card.js";
import CardBody from "./ui/Card/CardBody.js";
import CardHeader from "./ui/Card/CardHeader.js"
import imagesStyles from "./ui/jss/material-kit-react/imagesStyles";
import { cardTitle } from "./ui/jss/material-kit-react.js";

// Artwork Assets
import crowdimg1 from "../images/2730.jpg"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function StartPage(props) {
  const classes = useStyles();

  return (
    <div className="start-page">

      {/* Header Section (Material UI) */}
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="helpi"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 1,
          color: "dark"
        }}
        // {...rest}
      />

      <Parallax filter image={require("../images/hero-kid-in-need.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1>Your Entrepreneurship Starts With Us</h1>
              <h2>Helpi, the first Enterprise-lead fundrasing platform to help immigrants in Latin America. Do you want to help someone? Back his business idea and start earning rewards</h2>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
                round
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card className={classes.textCenter} style={{width: "20rem"}}>
                    <img
                      style={{height: "200px", width: "100%", display: "block"}}
                      className={classes.imgCardTop}
                      src={crowdimg1}
                      alt="Card-img-cap"
                    />
                    <CardBody>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Button color="primary">Do something</Button>
                    </CardBody>
                  </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes.textCenter} style={{width: "20rem"}}>
                  <img
                    style={{height: "200px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={crowdimg1}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="primary">Do something</Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes.textCenter} style={{width: "20rem"}}>
                  <img
                    style={{height: "200px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={crowdimg1}
                    alt="Card-img-cap"
                  />
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="primary">Do something</Button>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      {/* OLD VIDEO INTRO HERO */}
      {/* <div style={{ paddingTop: 20}}>
        <div className='player-wrapper' style={{ margin: '0 auto'}}>
          <ReactPlayer
            className='react-player'
            url="https://www.youtube.com/watch?v=4CpDkyBAcE4"
            width='100%'
            height='100%'
          />
        </div>
      </div> */}
    </div>

  );
}

  

    


export default StartPage;