import {
  StatusBar,
} from 'react-native';

import {
  Routes,
} from './src/routes';
import { THEME } from './src/theme';

export const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={ THEME.COLORS.PRIMARY }
      />

      <Routes />
    </>
  );
};
