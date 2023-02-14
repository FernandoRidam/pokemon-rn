import {
  StyleSheet,
} from "react-native";

export const styles = StyleSheet.create({
  statsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: 24,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  statsLabelView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 8,
  },

  statsValueView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingRight: 8,
    paddingLeft: 12,
  },

  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFF',
  },
});
