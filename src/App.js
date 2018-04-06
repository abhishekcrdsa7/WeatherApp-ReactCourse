import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
export default class App extends Component {
  render() {
    return (
      <div>
     <Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
      </div>
    );
  }
}
