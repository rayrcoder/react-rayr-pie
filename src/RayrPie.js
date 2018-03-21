import React from 'react';
import {propTypes, defaultProps} from './pieTypes';
import PropTypes from 'prop-types';

class RayrPie extends React.Component {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props)
        console.log(props)
    }

    initStyle() {
        const {percent, strokeWidth, backWidth, backColor, strokeColor, strokeLinecap} = this.props;
        const Percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
        const radius = 50 - (strokeWidth / 2);
        const perimeter = Math.PI * 2 * radius;
        const strokeCirMainStyle = {
            r: radius,
            strokeWidth: Percent === 0 ? 0 : strokeWidth,
            transform: `matrix(0,-1,1,0,0,100)`,
            strokeDasharray: `${Percent / 100 * perimeter} ${perimeter}`,
            transition: 'stroke-dasharray 1s ease , stroke-width .05s ease',
            stroke: strokeColor,
            strokeLinecap: strokeLinecap,
        };
        const backCirMainStyle = {
            strokeWidth: backWidth,
            r: radius,
            stroke: backColor,
        }
        const textMainStyle = {
            fill: 'red',
            textAnchor: 'middle',
            dominantBaseline: 'middle'
        }
        return {strokeCirMainStyle, backCirMainStyle, textMainStyle, Percent};
    }

    render() {
        const {
            classPrefix, textContent, style, textStyle
        } = this.props;
        const {strokeCirMainStyle, backCirMainStyle, textMainStyle, Percent} = this.initStyle();
        {
            console.log(Percent)
        }

        return (
            <div className="rayr-pie">
                <svg viewBox="0 0 100 100" style={style} className={`${classPrefix}-wrap`}>
                    <circle cx="50" cy="50" fill='none' style={backCirMainStyle}/>
                    <text x="50" y="50" style={{...textMainStyle, ...textStyle}}
                          className={`${classPrefix}-text`}>{textContent}{Percent}%
                    </text>
                    <circle cx="50" cy="50" fill='none' style={strokeCirMainStyle}
                            className={`${classPrefix}-stroke-circle`}/>
                </svg>
            </div>
        );
    }
}

RayrPie.defaultProps = {
    ...defaultProps,
};

export default RayrPie;
