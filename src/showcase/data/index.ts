import { formComponents } from './form';
import { displayComponents } from './display';
import type { ComponentInfo } from '../types';

export const componentsData: ComponentInfo[] = [
  ...formComponents,
  ...displayComponents,
];

export { categoriesData } from './categories';
