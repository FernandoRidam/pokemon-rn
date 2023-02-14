import {
  StyleSheet,
} from "react-native";

import {
  THEME,
} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  top: {
    alignItems: 'center',
    width: '100%',
    height: 170,
  },

  pokemon: {
    width: 165,
    height: 165,
    marginTop: 40,
  },

  pokeInfo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: THEME.COLORS.CAPTION_500,
    marginTop: 34,
  },

  column: {
    flexDirection: 'column',
    width: '100%',
  },

  row: {
    flexDirection: 'row',
    width: '100%',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
});
