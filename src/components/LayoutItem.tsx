import * as React from 'react';
import { BaseProps } from '../models/BaseProps';

type ItemSize =
  'full' |
  'half' |
  'one-quarter' |
  'three-quarters' |
  'one-third' |
  'two-thirds' |
  'one-fifth' |
  'two-fifths' |
  'three-fifths' |
  'four-fifths';
const itemSizeStyleMap: Map<string, number> = new Map<string, number>();
itemSizeStyleMap.set('default', 0);
itemSizeStyleMap.set('full', 1);
itemSizeStyleMap.set('half', 1 / 2);
itemSizeStyleMap.set('one-quarter', 1 / 4);
itemSizeStyleMap.set('three-quarters', 3 / 4);
itemSizeStyleMap.set('one-third', 1 / 3);
itemSizeStyleMap.set('two-thirds', 2 / 3);
itemSizeStyleMap.set('one-fifth', 1 / 5);
itemSizeStyleMap.set('two-fifths', 2 / 5);
itemSizeStyleMap.set('three-fifths', 3 / 5);
itemSizeStyleMap.set('four-fifths', 4 / 5);

function createStyle(size: ItemSize, stretch: boolean): React.CSSProperties {
  return {
    flex: itemSizeStyleMap.get(size ?? 'default'),
    alignSelf: stretch ? 'stretch' : 'start'
  }
}

export interface LayoutItemProps extends BaseProps {
  size?: ItemSize;
  stretch?: boolean;
}

export const LayoutItem = ({ children, style, size, stretch }: LayoutItemProps): JSX.Element => {
  return <div style={Object.assign(createStyle(size, stretch), style ?? {})}>{children}</div>;
}

