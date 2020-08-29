import * as React from 'react';

interface BaseProps extends React.Props<void> {
  style?: React.CSSProperties
}

export type GridProps = BaseProps;

export type ColumnProps = BaseProps