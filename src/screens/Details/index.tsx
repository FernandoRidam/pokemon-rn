import {
  useState,
  useEffect,
} from "react";

import {
  SafeAreaView,
  StatusBar,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Text,
} from "react-native";

import {
  useRoute,
} from '@react-navigation/native';

import {
  Ability,
  Separator,
  Statistic,
  Type,
} from "../../components";

import {
  THEME,
} from "../../theme";

import pokeball from '../../assets/pokeball.png';

import {
  styles,
} from "./styles";

export const Details = () => {
  const route = useRoute();

  const pokemon = route.params as Pokemon;

  const mainType = pokemon.types.find(( type ) => type.id === 1 )?.name as PokeType;

  return (
    <SafeAreaView
      style={ styles.container }
    >
      <StatusBar
        backgroundColor={ THEME.TYPES[ mainType ].main }
      />

      <ImageBackground
        source={ pokeball }
        style={[
          styles.top,
          { backgroundColor: THEME.TYPES[ mainType ].main }
        ]}
      >
        <Image
          source={{ uri: pokemon.imageUrl }}
          style={ styles.pokemon }
        />
      </ImageBackground>

      <Text style={ styles.name }>{ pokemon.name }</Text>

      <ScrollView style={ styles.pokeInfo }>
        <Separator
          title="Stats"
        />

        <View style={ styles.column }>
          <View style={ styles.rowBetween }>
            {
              pokemon.stats
                .filter(( statistic ) => ['HP', 'SPEED'].includes( statistic.name ))
                .map(( statistic ) => (
                  <Statistic
                    key={ statistic.name }
                    size="large"
                    mainType={ mainType as PokeType }
                    name={ statistic.name }
                    value={ statistic.value }
                  />
                ))
            }
          </View>

          <View style={ styles.rowBetween }>
            {
              pokemon.stats
                .filter(( statistic ) => ['ATTACK', 'DEFENSE'].includes( statistic.name ))
                .map(( statistic ) => (
                  <Statistic
                    key={ statistic.name }
                    size="large"
                    mainType={ mainType as PokeType }
                    name={ statistic.name }
                    value={ statistic.value }
                  />
                ))
            }
          </View>

          <View style={ styles.rowBetween }>
            {
              pokemon.stats
                .filter(( statistic ) => ['SPECIAL ATTACK', 'SPECIAL DEFENSE'].includes( statistic.name ))
                .map(( statistic ) => (
                  <Statistic
                    key={ statistic.name }
                    size="large"
                    mainType={ mainType as PokeType }
                    name={ statistic.name }
                    value={ statistic.value }
                  />
                ))
            }
          </View>
        </View>

        <Separator
          title="Types"
        />

        <View style={ styles.row }>
          {
            pokemon.types.map(( type ) => (
              <Type
                key={ type.id }
                size="large"
                { ...type }
              />
            ))
          }
        </View>

        <Separator
          title="Abilities"
        />

        <View style={ styles.rowBetween }>
          {
            pokemon.abilities.map(( ability ) => (
              <Ability
                key={ ability.id }
                ability={ ability.name }
                color={ THEME.TYPES[ mainType ].main }
              />
            ))
          }
        </View>

        <View style={ styles.rowBetween }>
          {
            pokemon.hiddenAbilities.map(( ability ) => (
              <Ability
                key={ ability.id }
                ability={ ability.name }
                color={ THEME.TYPES[ mainType ].dark }
              />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
