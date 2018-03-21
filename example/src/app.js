import 'react-rayr-pie/src/RayrPie.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrPie} from 'react-rayr-pie';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percent: 0

        }
    }

    render() {
        return (
            <div>
                <RayrPie percent={this.state.percent}/>
                <button onClick={() => {
                    this.setState({
                        percent: this.state.percent - 10
                    })

                }}>sub
                </button>
                <button onClick={() => {
                    this.setState({
                        percent: this.state.percent + 10
                    })

                }}>add
                </button>
                <button onClick={() => {
                    this.setState({
                        percent: 0
                    })

                }}>reset
                </button>

            </div>
        )
    }
}


const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
