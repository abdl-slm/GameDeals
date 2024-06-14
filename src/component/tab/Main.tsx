import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-virtualized-view';
import {useFocusEffect} from '@react-navigation/native';
import {fetchDeals, setSingleDeal} from '../../actions/dealsAction';
import {FloatingActionButton} from '../button/FloatingActionButton';
import {BLUE, PRIMARY, PRIMARY_ACCENT} from '../../utils/colors';
import { CardView } from '../list/CardView';
import { Deal } from '../../model/deals';
import { DETAIL } from '../../utils/routes';

type DealProps = {
  deal: Deal;
};

export default function Main({navigation}) {
  // Accessing quotes data from the Redux store
  const dealsData = useSelector(state => state.dealsReducer.deals);

  // Dispatch function to trigger the fetchQuotes action
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchDeals());
    }, []),
  );

  const navigateToDetails = (deal: Deal) =>{
    dispatch(setSingleDeal(deal));
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>
        {dealsData.length > 0 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              keyExtractor={item => item.dealID}
              data={dealsData}
              renderItem={({item}) => (
                <CardView title={item.title} subtitle={item.salePrice} imageUrl={item.thumb} onClick={()=> {
                  navigateToDetails(item);
                }}/>
              )}
            />
          </ScrollView>
        )}
        <FloatingActionButton
          backgroundColor={PRIMARY}
          onClick={() => {
            navigation.navigate('Detail');
          }}></FloatingActionButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: PRIMARY_ACCENT,
  },
  mainSubContainer: {
    marginHorizontal: 10
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6750A4',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    margin: 10,
    borderRadius: 6,
    elevation: 3,
  },
  quoteTitle: {
    fontSize: 18,
    color: '#454343',
  },
  quoteAuthor: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#6750A4',
  },
});
