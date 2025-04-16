import {
  MdForest,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';
import { SiRetropie } from 'react-icons/si';

export const Themes = [
  { name: 'Dark', value: 'dark', icon: <MdOutlineDarkMode size={20} /> },
  { name: 'Light', value: 'light', icon: <MdOutlineLightMode size={20} /> },
  { name: 'Retro', value: 'retro', icon: <SiRetropie size={20} /> },
  { name: 'Forest', value: 'forest', icon: <MdForest size={20} /> },
];
