import * as React from 'react';
import { Classes } from '../contants/Classes';
import { ColumnProps } from '../models/PropTypes';

const lineBreakStyle = {
  flexBasis: '100%',
  height: 0
};

export const Column = ({ children, style }: ColumnProps): JSX.Element => {
  return <div className={Classes.Column} style={style}>{children}</div>;
}

export const ColumnLineBreak = (): JSX.Element => {
  return <div className={Classes.Column} style={lineBreakStyle} />
}