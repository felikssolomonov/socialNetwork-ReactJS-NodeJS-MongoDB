import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                {this.props.login}
            </div>
        );
    }
}

export default Header;
