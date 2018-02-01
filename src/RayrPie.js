import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrPie extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    componentDidMount() {
        let value = 40
        var percent = value / 100, perimeter = Math.PI * 2 * 170, circle = document.querySelectorAll("circle")[1];
        console.log(circle)
        circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1 - percent));
    }

    render() {
        let width = 400, bgColor = 'red', thick = 10, value = 40, perimeter = Math.PI * 2 * 170, percent = value / 100

        return (
            <div className="rayr-pie">
                <svg width="440" height="440" viewBox="0 0 440 440">
                    <circle id='circle' cx="220" cy="220" r="170" strokeWidth="50" stroke="#D1D3D7" fill="none">
                    </circle>
                    <circle cx="220" cy="220" r="170" strokeWidth="50" stroke="#00A5E0" fill="none"
                            strokeLinecap="round"
                            transform="matrix(0,-1,1,0,0,440)" strokeDasharray="0 1069">
                        <animate attributeName="stroke-dasharray" dur="5s" from="0" to={perimeter * percent}
                                 calcMode="linear"/>
                    </circle>
                </svg>
            </div>
        );
    }
}

export default RayrPie;
