import React, { Component } from "react";

class Dialog extends Component {
    render() {
        let www = this.props.mess.map(item =>
          <p>
              {item.message}
          </p>
        );
        return (
            <div className="article">
                {www}
            </div>
        );
    }
}

export default Dialog;
