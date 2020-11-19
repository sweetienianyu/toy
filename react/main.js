import {createElement, Component, render} from './toy-react'

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(<MyComponent id="a" class="c">
  <div>abc</div>
  <div>hello</div>
  <div>world</div>
</MyComponent>, document.body)