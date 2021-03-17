import React, { Component } from 'react';
// import Header from "../containers/Header";

// Core UI Changes
import Header from "./ui/Header/Header";
import HeaderLinks from "./ui/Header/HeaderLinks"

const dashboardRoutes = [];

class AboutUs extends Component {
  render(){
    return(
      <div className="panel-about-us">
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="helpi"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          // {...rest}
        />
        <div className="container-text">
          <h3 className="title" style={{fontSize: 30, color: "#fff"}}>About Us</h3>
          <p style={{color:"#fff"}}>Originating from cryptocurrencies, blockchain technologies offer access to an innite range of applications benefitting to sharing economies. The aim of DeBactria is to offer a solution that addresses the inefficiencies of the crowdfunding market and addresses them by combining smart contracts with smart property (via projects) in a trustless decentralized application build on Binance Smart Chain.</p> 
          <p style={{color:"#fff"}}>The potential of blockchain-based services provided by crowdfunding intermediaries in order to analyze their implementation on blockchains and to deploy our dApp. </p>
          <p style={{color:"#fff"}}>In DeBactria we point out the potential of crowdfunding decentralized applications to lower market inefficiencies by bypassing third parties and easing trades on secondary markets. This project outlines the perspectives of BEP20 Smart Contract through the description of a pilot, namely the process of implementing a blockchain-based application within the crowdfunding economy.</p>

        </div>
      </div>
    );
  }
}

export default AboutUs;