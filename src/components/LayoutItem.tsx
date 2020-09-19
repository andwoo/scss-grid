import * as React from 'react';
import { BaseProps } from '../models/BaseProps';

type ItemSize =
  'full' |
  'one-quarter' |
  'one-third' |
  'half' |
  'two-thirds' |
  'three-quarters' |
  'four-fifths' |
  'three-fifths' |
  'two-fifths' |
  'one-fifth';
const itemSizeStyleMap: Map<string, number> = new Map<string, number>();
itemSizeStyleMap.set('default', 0);
itemSizeStyleMap.set('full', 1);
itemSizeStyleMap.set('one-quarter', 1 / 4);
itemSizeStyleMap.set('one-third', 1 / 3);
itemSizeStyleMap.set('half', 1 / 2);
itemSizeStyleMap.set('two-thirds', 2 / 3);
itemSizeStyleMap.set('three-quarters', 3 / 4);
itemSizeStyleMap.set('four-fifths', 4 / 5);
itemSizeStyleMap.set('three-fifths', 3 / 5);
itemSizeStyleMap.set('two-fifths', 2 / 5);
itemSizeStyleMap.set('one-fifth', 1 / 5);

function itemSizeToStyle(size: ItemSize): React.CSSProperties {
  return {
    flex: itemSizeStyleMap.get(size ?? 'default')
  }
}

export interface LayoutItemProps extends BaseProps {
  size?: ItemSize
}

export const LayoutItem = ({ children, style, size }: LayoutItemProps): JSX.Element => {
  return <div style={Object.assign(itemSizeToStyle(size), style ?? {})}>{children}</div>;
}

