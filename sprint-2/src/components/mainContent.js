import Header from "./Header";
import Hero from "./VideoDesc";
import Comments from "./Comments";
import Footer from "./ListVideos";
import axios from "axios";
import React, { Component } from "react";
// import { identifier } from "@babel/types";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideVideos: [],
      mainVideo: {},
      videoId: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=10934c5d-effc-4243-b61d-ddf2f239d3e7`
      )
      .then(response => {
        this.setState({
          sideVideos: response.data
        });

        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=10934c5d-effc-4243-b61d-ddf2f239d3e7`
          )
          .then(res => {
            this.setState({
              mainVideo: res.data
            });
          });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.match.params.id);
    let id = this.props.match.params.id;
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=10934c5d-effc-4243-b61d-ddf2f239d3e7`
        )
        .then(res => {
          this.setState({
            mainVideo: res.data,
            videoId: res.data.id
          });
        });
    }
  }
  render() {
    // console.log(this.state); 
    return (
      <div>
        <>
          <Hero data={this.state.mainVideo} />
          {this.state.sideVideos.length > 0 ? (
            <div className="desktop-container">
              <Comments commentProp={this.state} someInt={10} />
              <Footer videoProp={this.state} someInt={9} />
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      </div>
    );
  }
}
