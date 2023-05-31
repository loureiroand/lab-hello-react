// import logo from './logo.svg';
import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import hamburgerMenu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

// const ironhackLogo =
//   'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png';

function App() {
  return (
    <div className="container-hero">
      <div className="App">
        <nav className="navbar">
          <img
            className="logo-ironhack"
            src={ironhackLogo}
            alt=" ironhack logo"
          />
          <img
            className="hamburger-menu"
            src={hamburgerMenu}
            alt="hamburger menu"
          />
        </nav>

        <h1>
          Say Hello to<br></br>ReactJS
        </h1>
        <p>
          {/* {' '} */}
          You will learn how to use<br></br> the most popular frontend library
          <br></br> and become a super ninja developer.
        </p>
        <div className="button-primary">
          <button>Awesome!</button>
        </div>
      </div>

      <div className="container-icons">
        <div className="icon-col">
          <img className="icon1" src={icon1} alt="icon 1" />
          <h4>Declarative</h4>
          <p>
            React makes it
            <br /> painless to create
            <br /> interative UIs.
          </p>
        </div>
        <div className="icon-col">
          <img className="icon2" src={icon2} alt="icon 2" />
          <h4>Components</h4>
          <p>
            Build encapsulated
            <br />
            components that
            <br />
            manage their state.
          </p>
        </div>
        <div className="icon-col">
          <img className="icon3" src={icon3} alt="icon 3" />
          <h4>Single-Way</h4>
          <p>
            A set of immutble
            <br />
            values are passed to
            <br />
            the component's.
          </p>
        </div>
        <div className="icon-col">
          <img className="icon4" src={icon4} alt="icon 4" />
          <h4>JSX</h4>
          <p>
            Statically-typed,
            <br />
            designed to run on
            <br />
            modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
