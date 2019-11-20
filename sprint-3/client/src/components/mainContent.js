import Header from "./Header";
import VideoDesc from "./VideoDesc";
import Comments from "./Comments";
import ListVideos from "./ListVideos";
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
      // console.log(response);
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
   
    if (this.props.match.params.id !== prevProps.match.params.id) {
      console.log(this.props.match.params.id)
      axios.get(`http://localhost:5000/videos/${this.props.match.params.id}`).then(res => {
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
          <VideoDesc data={this.state.mainVideo} />
          {this.state.sideVideos.length > 0 ? (
            <div className="desktop-container">
              <Comments commentProp={this.state}/>
              <ListVideos videoProp={this.state}/>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      </div>
    );
  }
}
