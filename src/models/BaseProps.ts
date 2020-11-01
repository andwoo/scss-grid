import { ReactNode, CSSProperties } from 'react';

export interface BaseProps {
  children?: ReactNode,
  style?: CSSProperties,
  className?: string
}