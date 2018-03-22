# RayrProgress ⭕️ 

## Features 
* Simple process circle && bar by svg

## Environment Support

* Modern browsers and Internet Explorer 9+ (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))
* Server-side Rendering
* [Electron](http://electron.atom.io/)

## Install

```bash
npm install react-rayr-cli -g
```

## Usage

```jsx
import { RayrPie,RayrBar } from 'rayr';
ReactDOM.render(<RayrPie />, mountNode);
```

And import style manually:

```jsx
import 'rayr/rayrPie.scss'
```

## Development

```bash
$ git clone https://github.com/rayrcoder/react-rayr-cli.git
$ npm install
$ npm start
```

## Params 
*textContent: PropTypes.string,
*className: PropTypes.string,
*percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
*classPrefix: PropTypes.string,
*strokeColor: PropTypes.string,
*strokeLinecap: PropTypes.oneOf(['butt', 'round', 'square']),
*strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
*style: PropTypes.object,
*textStyle: PropTypes.object,
*backColor: PropTypes.string,
*backWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),


