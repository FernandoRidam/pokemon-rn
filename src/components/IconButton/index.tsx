import {
  TouchableOpacity,
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  THEME,
} from "../../theme";

export interface IconButtonProps {
  name: string;
  selected: boolean;
  handleClick: () => void;
};

export interface IconButtonProps {};

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  selected,
  handleClick
}) => {
  return (
    <TouchableOpacity
      onPress={ handleClick }
      style={{
        marginLeft: 16,
      }}
    >
      <Icon
        name={ name }
        size={ 24 }
        color={ selected ? THEME.COLORS.PRIMARY : THEME.COLORS.CAPTION_400 }
      />
    </TouchableOpacity>
  );
};
