import React, {Component} from "react";
import SidenavHeader from "./SidenavHeader";
import SidenavMenu from "./SidenavMenu";

class Sidenav extends Component {
    render() {
        return (
            <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
                <SidenavHeader {...this.props}/>
                <SidenavMenu {...this.props}/>
            </div>

        )
    }
}

export default Sidenav