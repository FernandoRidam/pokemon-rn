import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  IconButton,
  PokeCard,
} from '../../components';

import {
  getPokeList,
} from '../../services';

import {
  THEME,
} from '../../theme';

import {
  styles,
} from './styles';

const buttons = [
  'view-grid',
  'view-agenda',
];

export const Home = () => {
  const navigation = useNavigation();

  const [ layoutList, setLayoutList ] = useState<string>('view-grid');

  const [ total, setTotal ] = useState<number>( 0 );
  const [ page, setPage ] = useState<number>( 1 );

  const [ loading, setLoading ] = useState<boolean>( false );

  const [ pokemonList, setPokemonList ] = useState<Array<Pokemon>>([]);

  const handleClick = ( pokemon: Pokemon ) => navigation.navigate('details', pokemon );

  const loadPokeList = useCallback(async ( page: number ) => {
    if( pokemonList.length === 0 || pokemonList.length < total ) {
      setLoading( true );

      const { status, data, message, total } = await getPokeList( page );

      if( status ) {
        setPokemonList(( value ) => [ ...value, ...data ]);

        setTotal( total );
      }

      setLoading( false );
    }
  }, [ total, pokemonList ]);

  useEffect(() => {
    loadPokeList( page );
  }, [ page ]);

  return (
    <SafeAreaView
      style={ styles.container }
    >
      <View
        style={ styles.top }
      >
        {
          buttons.map(( button ) => (
            <IconButton
              key={ button }
              name={ button }
              selected={ layoutList === button }
              handleClick={() => setLayoutList( button )}
            />
          ))
        }
      </View>

      {
        loading && total === 0
          ? <View style={ styles.loading }>
              <ActivityIndicator
                size={ 64 }
                color={ THEME.COLORS.PRIMARY }
              />
            </View>
          : <FlatList
              key={ layoutList }
              contentContainerStyle={ styles.flatListContainer }
              data={ pokemonList }
              keyExtractor={({ id }, index ) => `#${ id }_${ index }`}
              renderItem={({ item, index }) => (
                <PokeCard
                  key={ item.id }
                  marginSide={ index % 2 === 0 ? 'right' : 'left'}
                  isGridList={ layoutList === 'view-grid'}
                  handleClick={() => handleClick( item )}
                  { ...item }
                />
              )}
              numColumns={ layoutList === 'view-grid' ? 2 : 1 }
              scrollEnabled={ true }
              onEndReached={() => { if( !loading ) setPage(( value ) => value + 1 )}}
              initialNumToRender={ 10 }
              windowSize={ 5 }
              maxToRenderPerBatch={ 5 }
              updateCellsBatchingPeriod={ 30 }
              removeClippedSubviews={ false }
              onEndReachedThreshold={ 0.1 }
              ListFooterComponent={() => (
                <View style={ styles.footerFlatList }>
                  {
                    pokemonList.length === total
                      ? (
                        <Text style={ styles.footerFlatListText }>FIM DA LISTA...</Text>
                      )
                      : <>
                          {
                            loading &&
                              <ActivityIndicator
                                size={ 24 }
                                color={ THEME.COLORS.PRIMARY }
                              />
                          }
                        </>
                  }
                </View>
              )}
            />
      }
    </SafeAreaView>
  );
};
