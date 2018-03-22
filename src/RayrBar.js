import React from 'react';
import {propTypes, defaultProps} from './barTypes';
import PropTypes from 'prop-types';

class RayrBar extends React.Component {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props)
        console.log(props)
    }

    initStyle() {
        const {percent, strokeWidth, backWidth, backColor, strokeColor, strokeLinecap} = this.props;
        const center = strokeWidth / 2;
        const pathD =
            `M ${strokeLinecap === 'round' ? center : 0},${center}
           L ${strokeLinecap === 'round' ? (100 - (strokeWidth / 2)) : 100},${center}`;
        const totalLength = strokeLinecap === 'round' ? (100 - strokeWidth) : 100;
        const strokeLineMainStyle = {
            strokeWidth: strokeWidth,
            strokeLinecap: strokeLinecap,
            strokeDasharray: `${totalLength} ${totalLength}`,
            strokeDashoffset: `${(totalLength - percent * (totalLength / 100))}`,
            transition: 'stroke-dashoffset 1s ease , stroke-width .05s ease',
            stroke: strokeColor,
        };
        const backLineMainStyle = {
            strokeLinecap: strokeLinecap,
            strokeWidth: backWidth,
            stroke: backColor,
        }
        const textMainStyle = {
            fontSize:10,
            fill: 'red',
            textAnchor: 'middle',
            dominantBaseline: 'middle'
        }
        return {strokeLineMainStyle, backLineMainStyle, textMainStyle, pathD};
    }

    render() {
        const {
            classPrefix, textContent, style, textStyle, percent,strokeWidth
        } = this.props;
        const {strokeLineMainStyle, backLineMainStyle, textMainStyle, pathD} = this.initStyle();
        {
            console.log(percent)
        }

        return (
            <div className="rayr-bar">
                <svg viewBox={`0 0 100 ${strokeWidth}`} style={style} className={`${classPrefix}-wrap`}>
                    <path fill='none'  className={`${classPrefix}-back-line`}
                          style={backLineMainStyle} d={pathD}/>
                    <path fill='none'  className={`${classPrefix}-stroke-line`}
                          style={strokeLineMainStyle} d={pathD}/>
                    <text x="50" y={strokeWidth/2} style={{...textMainStyle, ...textStyle}}
                          className={`${classPrefix}-text`}>{textContent}{percent}%
                    </text>

                </svg>
            </div>
        );
    }
}

RayrBar.defaultProps = {
    ...defaultProps,
};

export default RayrBar;
