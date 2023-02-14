import {
  StyleSheet,
} from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    padding: 8,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  types: {
    flexDirection: 'column',
  },

  statsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: 127,
    marginTop: 6,
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
    paddingVertical: 6,
    paddingLeft: 8,
  },

  statsValueView: {
    paddingVertical: 6,
    paddingRight: 8,
    paddingLeft: 12,
  },

  marginLeftSide: {
    marginLeft: 8,
  },

  marginRightSide: {
    marginRight: 8,
  },

  pokeImageSmall: {
    width: 90,
    height: 90,
  },

  pokeImageLarge: {
    width: 134,
    height: 134,
  },

  pokeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
