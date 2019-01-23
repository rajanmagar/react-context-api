import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// make new context
const MyContext = React.createContext();

// then create a provider component
class MyProvider extends React.Component {
  state = {
    name: "Rajan Magar",
    age: 26,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAge: () => this.setState(() => ({ age: this.state.age + 1 }))
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class Person extends React.Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAge}>Cake Murder</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <h1>Hello React Context</h1>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
