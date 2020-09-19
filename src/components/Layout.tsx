import * as React from 'react';
import { BaseProps } from '../models/BaseProps';

const baseStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  justifyContent: 'start',
  width: '100%',
  height: '100%'
}

export interface LayoutProps extends BaseProps {
  direction: 'column' | 'row'
}

export const Layout = ({ direction, children, style }: LayoutProps): JSX.Element => {
  style = Object.assign({ flexDirection: direction === 'column' ? 'row' : 'column' }, style);
  return <div style={Object.assign({ ...baseStyle }, style ?? {})}>{children}</div >;
}