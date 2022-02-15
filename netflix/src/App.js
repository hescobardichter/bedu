import './App.css';
import "@fontsource/roboto";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const useStyles = makeStyles((theme) => ({
  fluid: {
    padding: "30px",
    minHeight: '86vh',
  },
}));

function App() {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Container maxWidth={false} className={classes.fluid}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </>
  );

}

export default App;
