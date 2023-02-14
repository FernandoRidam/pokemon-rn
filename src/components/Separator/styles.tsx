import {
  StyleSheet,
} from "react-native";

import {
  THEME,
} from "../../theme";

export const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
    marginBottom: 16,
  },

  title: {
    fontSize: 14,
    fontWeight: '300',
    color: THEME.COLORS.CAPTION_400,
    marginRight: 16,
  },

  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.CAPTION_400,
    marginTop: 4,
  },
});
