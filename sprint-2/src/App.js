import Header from "./components/Header";
import VideoDesc from "./components/VideoDesc";
// import Footer from "./components/Footer";
import UploadPage from "./components/UploadPage";
import MainContent from "./components/mainContent";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <VideoDesc />
      <Switch>
        {/* <Redirect from="/" to="/nextvideo/1af0jruup5gu" component={MainContent}/> */}
        <Route exact path="/" component={MainContent} />
        <Route
          path="/nextvideo/:id"
          render={props => {
            return <MainContent {...props} />;
          }}
        />
        <Route path="/uploadpage" component={UploadPage} />
      </Switch>
      {/* <Footer/>  */}
    </div>
  );
}
