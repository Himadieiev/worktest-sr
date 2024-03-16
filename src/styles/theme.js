import { BREAKPONTS } from '../constants/devices';

const theme = {
  screens: {
    mobMin: BREAKPONTS.MOB_START,
    mobMax: BREAKPONTS.MOB_END,
    tab: BREAKPONTS.TAB,
    desk: BREAKPONTS.DESK_START,
  },
  colors: {
    bg: {
      dark: '#181818',
      red: '#dc3b5a',
      grey: '#1e1e1e',
      semiTrDark: 'rgba(30, 30, 30, 0.1)',
      semiTrLight: 'rgba(255, 255, 255, 0.1)',
    },
    general: {
      dark: '#1e1e1e',
      white: '#fff',
      red: ' #dc3b5a',
    },
  },
  fonts: {
    first: 'Right Grotesk Compact',
    second: 'Messina Sans Mono Regular',
    third: 'Biro Script Plus Bold US',
    fourth: 'Messina Sans Mono SemiBold',
    sixth: 'Formular Regular',
    seventh: 'Biro Script Plus Bold',
    eighth: 'Formular Bold',
  },
  radius: {
    none: '0',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
  },
  transition: {
    hover: '250ms ease-in-out',
  },
};

export default theme;
