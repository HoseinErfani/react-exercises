import React, { Component } from "react";
import Card from "./Card";
import Loader from "react-loader-spinner";
import getInfo from "../service/getIpInfo"

export default class IpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    getInfo().then((data) => {
      console.log(data);
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }
 
  render() {
      console.log('render');
    return (
      <>
        {this.state.isLoading ? (
          <Loader
            className="loader"
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          ""
        )}

        <div className="container">
          {!this.state.isLoading && (
            <Card
              bg="bg-light"
              header={this.state.info.ip}
              title={this.state.info.city}
              text={this.state.info.country}
              src={this.state.info.country_flag}
            
              />
          )}
        </div>
      </>
    );
  }
}
