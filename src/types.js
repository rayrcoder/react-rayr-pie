import PropTypes from 'prop-types';

export const defaultProps = {
    textContent:'文字',
    percent: 50,
    prefixCls: 'rc-progress',
    strokeColor: 'red',
    strokeLinecap: 'round',
    strokeWidth: 10,
    style: {},
    backColor: '#D9D9D9',
    backWidth: 10,
};

export const propTypes = {
    textContent: PropTypes.string,
    className: PropTypes.string,
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    prefixCls: PropTypes.string,
    strokeColor: PropTypes.string,
    strokeLinecap: PropTypes.oneOf(['butt', 'round', 'square']),
    strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    backColor: PropTypes.string,
    backWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
