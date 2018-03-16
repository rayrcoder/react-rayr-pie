import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './RayrPie.scss';

class RayrPie extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'danger']),
        disabled: PropTypes.oneOf([true, false]),
        size: PropTypes.oneOf(['md', 'lg', 'sm'])
    };

    static defaultProps = {
        width : 440,
        thick : 40,
        value : 50,
        radius : 170,
        backColor : '#ccc',
        fontColor : 'red',
        perimeter : Math.PI * 2 * 170,
        percent : value / 100,
        durTime : '2s',
        calcMode : 'spline',
        linecap : 'round',
        type: 'default',
        disabled: false,
        size: 'md',
        className: ''
    };

    render() {
        let _classType =this.props.type !== 'default' ? `rayr-btn-${this.props.type}` : '',
            _classSize = this.props.type !== 'md' ? `rayr-btn-${this.props.size}` : '';

        let _class = `rayr-btn ${_classType} ${_classSize} ${this.props.className}`;
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
            //
            // <button
            //     onClick={this.props.onClick}
            //     disabled={this.props.disabled}
            //     className={_class}>{this.props.children}
            // </button>
            <div className="rayr-pie">
                <svg width={width} height={width} viewBox={`0 0 ${width} ${width}`}>
                    <circle id='circle' cx={width / 2} cy={width / 2} r={radius} strokeWidth={thick} stroke={backColor}
                            fill='none'></circle>
                    <circle cx={width / 2} cy={width / 2} r={radius} strokeWidth={thick} stroke={fontColor} fill='none'
                            strokeLinecap={linecap}
                            transform={`matrix(0,-1,1,0,0,${width})`} strokeDasharray={`0 ${perimeter}`}>
                    </circle>
                </svg>
            </div>
        );
    }
}

export default RayrPie;
