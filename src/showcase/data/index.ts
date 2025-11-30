import { formComponents } from './components/form';
import { displayComponents } from './components/display';
import type { ComponentInfo } from '../types';

export const componentsData: ComponentInfo[] = [
  ...formComponents,
  ...displayComponents,
];

export { categoriesData } from './components/categories';
