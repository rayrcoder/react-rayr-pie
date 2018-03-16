import 'react-rayr-pie/src/RayrPie.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrPie} from 'react-rayr-pie';

function App() {
    return (
        <div>
            <RayrPie fontColor='yellow' durTime={'1s'}/>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
