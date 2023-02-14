import {
  View,
  Text,
} from 'react-native';

import {
  styles,
} from './styles';

export interface SeparatorProps {
  title: string;
};

export const Separator: React.FC<SeparatorProps> = ({
  title,
}) => {
  return (
    <View style={ styles.separator }>
      <Text style={ styles.title }>{ title }</Text>

      <View style={ styles.line } />
    </View>
  );
};
