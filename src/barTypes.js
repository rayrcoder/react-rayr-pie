import PropTypes from 'prop-types';

export const defaultProps = {
    textStyle:{fill:'black',display:'none'},
    textContent:'文字',
    percent: 0,
    classPrefix: 'rayr-pie',
    strokeColor: 'red',
    strokeLinecap: 'round',
    strokeWidth: 10,
    style: {},
    backColor: '#D9D9D9',
    backWidth: 5,
};

export const propTypes = {
    textContent: PropTypes.string,
    className: PropTypes.string,
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    classPrefix: PropTypes.string,
    strokeColor: PropTypes.string,
    strokeLinecap: PropTypes.oneOf(['butt', 'round', 'square']),
    strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    textStyle: PropTypes.object,
    backColor: PropTypes.string,
    backWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
