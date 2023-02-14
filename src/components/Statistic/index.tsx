import {
  Text,
  View,
} from "react-native";

import {
  THEME,
} from "../../theme";

import {
  styles,
} from "./styles";

export interface Statistic {
  size: 'small' | 'large';
  mainType: PokeType;
  name: string;
  value: number;
};

export const Statistic: React.FC<Statistic> = ({
  size,
  mainType,
  name,
  value,
}) => {
  return (
    <View
      style={[
        styles.statsView, {
          flex: size === 'small' ? 0 : 1,
          maxWidth: size === 'small' ? 'auto' : 171,
          marginTop: size === 'small' ? 6 : 0,
          backgroundColor: mainType && THEME.TYPES[ mainType ].main,
        }
      ]}
    >
      <View style={ styles.statsLabelView }>
        <Text style={ styles.text }>{ name }</Text>
      </View>

      <View
        style={[
          styles.statsValueView,
          { backgroundColor: mainType && THEME.TYPES[ mainType ].dark }
        ]}
      >
        <Text style={ styles.text }>{ value }</Text>
      </View>
    </View>
  );
};
