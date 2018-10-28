import React, {Component} from 'react';
import '../App.css';
import Connection from "./landing_page/Connection";
import Dashboard from "../containers/Dashboard";

class App extends Component {
    render() {
        if (this.props.is_connected) {
            return (<div>
                <Dashboard {...this.props}/>
            </div>);
        } else {
            return (<div>
                <div>
                    <Connection {...this.props}/>
                </div>
            </div>);

        }

    }
}

export default App;
