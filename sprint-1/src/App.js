import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

function App() {
  const videos = [
    {
      headline: "Become a Travel Pro in One Easy Lesson...",
      author: "Scotty Cranmer"
    },
    {
      headline: "Les Houches The Hidden Gem Of The...",
      author: "Scotty Cranmer"
    },
    {
      headline: "Travel Health Useful Medical Information...",
      author: "Scotty Cranmer"
    },
    {
      headline: "Cheap Airline Tickets Great Ways To Save",
      author: "Emily Harper"
    },
    {
      headline: "Take A Romantic Break In A Boutique Hotel",
      author: "Ethan Oven"
    },
    {
      headline: "Choose The Perfect Accomodations",
      author: "Lydia Perez"
    },
    {
      headline: "Crusing Destination Ideas",
      author: "Timothy Austin"
    },
    {
      headline: "Train Travel On Track For Safety",
      author: "Scotty Cranmer"
    }
  ];

  const comments = [
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
        "They BLEW the ROOF of at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    },
    {
      firstName: "Thodore Duncan",
      date: "12/18/2018",
      commentText:
        "How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!"
    }
  ];
  return (
    <>
      <Header />
      <Hero />
      <Comments commentProp={comments} someInt={10} />
      <Footer videoProp={videos} someInt={9} />
    </>
  );
}

export default App;
