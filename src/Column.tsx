import * as React from 'react';

export class Column extends React.Component {
  render(): JSX.Element {
    return <div className="scss-grid--column">{this.props?.children}</div>;
  }
}
