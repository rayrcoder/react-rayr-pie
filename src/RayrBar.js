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
        const Percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;

        const strokeLineMainStyle = {
            strokeWidth: Percent === 0 ? 0 : strokeWidth,
            strokeDasharray: `${Percent} 100 `,
            transition: 'stroke-dasharray  1s ease , stroke-width .05s ease',
            stroke: strokeColor,
            strokeLinecap: strokeLinecap,
        };
        const backLineMainStyle = {
            strokeWidth: backWidth,
            stroke: backColor,
        }
        const textMainStyle = {
            fill: 'red',
            textAnchor: 'middle',
            dominantBaseline: 'middle'
        }
        return {strokeLineMainStyle, backLineMainStyle, textMainStyle, Percent};
    }

    render() {
        const {
            classPrefix, textContent, style, textStyle
        } = this.props;
        const {strokeLineMainStyle, backLineMainStyle, textMainStyle, Percent} = this.initStyle();
        {
            console.log(Percent)
        }

        return (
            <div className="rayr-bar">
                <svg viewBox="0 0 100 100" style={style} className={`${classPrefix}-wrap`}>
                    <path fill='none'
                          style={backLineMainStyle}/>
                    <path  fill='none'
                          style={strokeLineMainStyle}/>

                    <circle cx="50" cy="50" fill='none' style={backLineMainStyle}/>
                    <text x="50" y="50" style={{...textMainStyle, ...textStyle}}
                          className={`${classPrefix}-text`}>{textContent}{Percent}%
                    </text>
                    <circle cx="50" cy="50" fill='none' style={strokeLineMainStyle}
                            className={`${classPrefix}-stroke-circle`}/>
                </svg>
            </div>
        );
    }
}

RayrBar.defaultProps = {
    ...defaultProps,
};

export default RayrBar;
