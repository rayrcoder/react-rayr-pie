#RayrPie ⭕️

## Features 
* A simple process circle by svg

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
import { RayrPie } from 'rayr';
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
* width:<length>
* thick:<length>
* value:<length>
* radius:<number-optional-number>
* backColor:<color>
* fontColor:<color>
* perimeter = Math.PI * 2 * 170,
* durTime:<clock-value> | indefinite
* calcMode:discrete | linear | paced | spline
* linecap:butt | round | square | inherit
