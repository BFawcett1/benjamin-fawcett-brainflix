import Header from "./components/Header";
import Hero from "./components/Hero";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Video0 from "./assets/Images/video-list-1.jpg";
import Video1 from "./assets/Images/video-list-2.jpg";
import Video2 from "./assets/Images/video-list-3.jpg";
import Video3 from "./assets/Images/video-list-4.jpg";
import Video4 from "./assets/Images/video-list-5.jpg";
import Video5 from "./assets/Images/video-list-6.jpg";
import Video6 from "./assets/Images/video-list-7.jpg";
import Video7 from "./assets/Images/video-list-8.jpg";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    videos: [
      {
        videoImg: Video0,
        headline: "Become a Travel Pro in One Easy Lesson...",
        author: "Bernice Lambert"
      },
      {
        videoImg: Video1,
        headline: "Les Houches The Hidden Gem Of The...",
        author: "Bernard Patrick"
      },
      {
        videoImg: Video2,
        headline: "Travel Health Useful Medical Information...",
        author: "Lizzie Burton"
      },
      {
        videoImg: Video3,
        headline: "Cheap Airline Tickets Great Ways To Save",
        author: "Emily Harper"
      },
      {
        videoImg: Video4,
        headline: "Take A Romantic Break In A Boutique Hotel",
        author: "Ethan Oven"
      },
      {
        videoImg: Video5,
        headline: "Choose The Perfect Accomodations",
        author: "Lydia Perez"
      },
      {
        videoImg: Video6,
        headline: "Crusing Destination Ideas",
        author: "Timothy Austin"
      },
      {
        videoImg: Video7,
        headline: "Train Travel On Track For Safety",
        author: "Scotty Cranmer"
      }
    ],
    comments: [
      {
        firstName: "Michael Lyons",
        date: "12/18/2018",
        commentText:
          "They BLEW the ROOF of at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
      },
      {
        firstName: "Gary Wong",
        date: "12/18/2018",
        commentText:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
      },
      {
        firstName: "Thodore Duncan",
        date: "12/18/2018",
        commentText:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!"
      }
    ]
  };

  render() {
    return (
      <div>
        <>
          <Header />
          <Hero />
          <div className="desktop-container">
            <Comments commentProp={this.state.comments} someInt={10} />
            <Footer videoProp={this.state.videos} someInt={9} />
          </div>
        </>
      </div>
    );
  }
}
