import React, {Component} from 'react';
import Header from "./Header";
import Sidenav from "./Sidenav";


class Dashboard extends Component {
    render() {
        console.log(this);
        return (
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <Header {...this.props}/>
                <Sidenav {...this.props}/>
            </div>
        )
    }
}

export default Dashboard