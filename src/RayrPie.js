import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrPie extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        console.log(props)

    }
    render() {
        const {
            width = 440,
            thick = 40,
            value = 50,
            radius = 170,
            backColor = '#ccc',
            fontColor = 'red',
            perimeter = Math.PI * 2 * 170,
            percent = value / 100,
            durTime = '2s',
            calcMode = 'spline',
            linecap = 'round'
        } = this.props;

        return (
            <div className="rayr-pie">
                <svg width={width} height={width} viewBox={`0 0 ${width} ${width}`}>
                    <circle id='circle' cx={width / 2} cy={width / 2} r={radius} strokeWidth={thick} stroke={backColor}
                            fill='none'></circle>
                    <circle cx={width / 2} cy={width / 2} r={radius} strokeWidth={thick} stroke={fontColor} fill='none'
                            strokeLinecap={linecap}
                            transform={`matrix(0,-1,1,0,0,${width})`} strokeDasharray={`0 ${perimeter}`}>
                        <animate attributeName="stroke-dasharray"
                                 dur={durTime} by={perimeter * percent}
                                 keyTimes="0;1" calcMode={calcMode} keySplines=".5 0 .5 1"
                                 fill="freeze"/>
                    </circle>
                </svg>
            </div>
        );
    }
}

export default RayrPie;
