import * as React from 'react';
import { Classes } from '../contants/Classes';
import { GridProps } from '../models/PropTypes';

export const Grid = ({ children, style }: GridProps): JSX.Element => {
  return <div className={Classes.Grid} style={style}>{children}</div>;
}