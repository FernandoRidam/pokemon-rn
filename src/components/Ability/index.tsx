import {
  Text,
  View,
} from "react-native";

import {
  styles,
} from "./styles";

export interface AbilityProps {
  ability: string;
  color: string;
};

export const Ability: React.FC<AbilityProps> = ({
  ability,
  color,
}) => {
  return (
    <View style={[
      styles.abilityView,
      { backgroundColor: color }
    ]}>
      <Text style={ styles.abilityName }>{ ability }</Text>
    </View>
  );
};
