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
    axios.get(`http://localhost:5000/videos`).then(response => {
      console.log(response);
      this.setState({
        sideVideos: response.data
      });

      axios.get(`http://localhost:5000/videos/1af0jruup5gu`).then(res => {
        this.setState({
          mainVideo: res.data[0]
        });
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.match.params.id);
    let id = this.props.match.params.id;
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios.get(`http://localhost:5000/videos/${id}`).then(res => {
        this.setState({
          mainVideo: res.data[0],
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
