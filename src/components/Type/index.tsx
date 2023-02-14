import {
  Text,
  View,
} from "react-native";

import {
  THEME
} from "../../theme";

export interface TypeProps extends Type {
  size: 'small' | 'large';
};

export const Type: React.FC<TypeProps> = ({
  size,
  name,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: size === 'small' ? 65 : 85,
        height: size === 'small' ? 22 : 35,
        marginBottom: size === 'small' ? 8 : 0,
        marginRight: size === 'small' ? 0 : 16,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 2,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        backgroundColor: THEME.TYPES[ name ].dark
      }}
    >
      <Text style={{
        fontSize: size === 'small' ? 12 : 14,
        fontWeight: '600',
        color: '#FFF',
      }}>
        { name.toLocaleUpperCase()}
      </Text>
    </View>
  );
};
