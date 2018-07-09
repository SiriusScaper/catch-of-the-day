import React, { Component } from 'react';
import { getFunName } from '../helpers'

class StorePicker extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" defaultValue={getFunName} required placeholder='Store Name' />
          <button type='submit'>Visit Store</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker