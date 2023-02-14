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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatListContainer: {
    paddingHorizontal: 16,
  },

  footerFlatList: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 8,
  },

  footerFlatListText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.COLORS.CAPTION_500,
  },
});
