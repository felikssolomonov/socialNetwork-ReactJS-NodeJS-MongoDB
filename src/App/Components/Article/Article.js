import React, { Component } from "react";

import {addMenuItem, refreshText} from './../../redux/reducers/menu_reducer.js';

class Article extends Component {
    render() {
        let textMenu = this.props.textMenu;

        let newPostEl = React.createRef();

        let send = () => {
          this.props.dispatch(addMenuItem());
        }

        let onChanged = () => {
          let text = newPostEl.current.value;
          this.props.dispatch(refreshText(text));
        }

        return (
            <div>
                <h1>Article!</h1>
                <div>
                    <textarea onChange={onChanged}
                              ref={newPostEl}
                              value={textMenu}
                              />
                </div>
                <p>{textMenu}</p>
                <div>
                    <button onClick={send}>
                        обычная функция
                    </button>
                </div>
            </div>
        );
    }
}

export default Article;
