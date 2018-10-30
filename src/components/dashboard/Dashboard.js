import React, {Component} from 'react';
import Header from "./navbar/Header";
import Sidenav from "./sidenav/Sidenav";
import Home from "./Home/Home";
import WeekMenu from "./WeekMenu/WeekMenu";

class Dashboard extends Component {

    renderChosenComponent(component='Home') {
        const component_map = {
            'Home': <Home {...this.props}/>,
            'WeekMenu': <WeekMenu {...this.props}/>
        };
        return component_map[this.props.current_tab]
    }

    render() {
        return (
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <Header {...this.props}/>
                <Sidenav {...this.props}/>
                {this.renderChosenComponent()}
            </div>
        )
    }
}

export default Dashboard