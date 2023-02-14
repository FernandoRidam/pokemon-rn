import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  styles,
} from './styles';

import {
  THEME,
} from "../../theme";
import { Type } from '../Type';
import { Statistic } from '../Statistic';

export interface PokeCardProps extends Pokemon {
  marginSide: 'left' | 'right';
  isGridList: boolean;
  handleClick: () => void;
};

export const PokeCard: React.FC<PokeCardProps> = ({
  name,
  types,
  stats,
  imageUrl,
  marginSide,
  isGridList,
  handleClick,
}) => {
  const mainType = types.find(( type ) => type.id === 1 )?.name;

  interface CardProps {
    children: React.ReactNode;
    style?: Array<StyleProp<ViewStyle>>;
  };

  const Card: React.FC<CardProps> = ({
    children,
    style = [],
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={ .9 }
        onPress={ handleClick }
        style={[
          ...style,
          styles.card,
          { backgroundColor: mainType && THEME.TYPES[ mainType ].main },
        ]}
      >{ children }</TouchableOpacity>
    );
  };

  return isGridList
    ? (
        <Card
          style={[
            marginSide === 'left'
              ? styles.marginLeftSide
              : styles.marginRightSide
          ]}
        >
          <View style={ styles.column }>
            <View style={ styles.row }>
              <Image
                style={ styles.pokeImageSmall }
                source={{
                  uri: imageUrl,
                  cache: "force-cache",
                }}
              />

              <View style={ styles.types }>
                {
                  types.map(( type ) =>
                    <Type
                      key={ type.id }
                      size="small"
                      { ...type }
                    />
                  )
                }
              </View>
            </View>

            <Text style={ styles.pokeName }>{ name }</Text>
          </View>
        </Card>
      )
    : (
        <Card>
          <View style={ styles.row }>
            <Image
              style={ styles.pokeImageLarge }
              source={{
                uri: imageUrl,
                cache: "force-cache",
              }}
            />

            <View style={ styles.column }>
              <Text style={ styles.pokeName }>{ name }</Text>

              <View style={ styles.row }>
                <View
                  style={[
                    styles.types,
                    { marginTop: 8 }
                  ]}
                >
                  {
                    types.map(( type ) =>
                      <Type
                        key={ type.id }
                        size="small"
                        { ...type }
                      />
                    )
                  }
                </View>

                <View
                  style={[
                    styles.column,
                    {
                      alignSelf: 'flex-end',
                      maxWidth: 127,
                      marginLeft: 8,
                    }
                  ]}
                >
                  {
                    stats
                      .filter(( stattistic ) => ['HP', 'ATTACK', 'DEFENSE'].includes( stattistic.name ))
                      .map(( stattistic ) => (
                        <Statistic
                          key={ stattistic.name }
                          size="small"
                          mainType={ mainType as PokeType }
                          name={ stattistic.name }
                          value={ stattistic.value }
                        />
                      ))
                  }
                </View>
              </View>
            </View>
          </View>
        </Card>
      )
  ;
};
