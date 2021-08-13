import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SurveyScreen from "./screens/SurveyScreen";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/survey' component={SurveyScreen} />
          <Route path='/register' component={RegisterScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

