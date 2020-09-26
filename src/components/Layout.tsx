import * as React from 'react';
import { BaseProps } from '../models/BaseProps';

const baseStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  alignItems: 'flex-start',
  alignContent: 'flex-start'
}

export interface LayoutProps extends BaseProps {
  direction: 'column' | 'row'
}

function createStyle(direction: string): React.CSSProperties {
  return {
    ...baseStyle,
    flexDirection: direction === 'row' ? 'column' : 'row'
  }
}

export const Layout = ({ direction, children, style }: LayoutProps): JSX.Element => {
  return <div style={Object.assign(createStyle(direction), style ?? {})}>{children}</div>;
}