import React, {Component} from 'react';


class LogOut extends Component {

    render() {
        return (
            <div>
                <button onClick={()=>this.props.actions.logout()}>Logout</button>
            </div>
        )
    }

}

export default LogOut;




