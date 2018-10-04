import React, {Component} from 'react';
import '../App.css';
import ReactDOM from "react-dom";
import store from "../store";
import Connection from "../containers/Connection";

class App extends Component {
    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

ReactDOM.render(<Connection store={store}/>, document.getElementById('connection'));

export default App;
