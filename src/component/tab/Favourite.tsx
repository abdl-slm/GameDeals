import {FlatList, ScrollView, View} from 'react-native';
import useFuncGetData, {saveSingleData, useGetData} from '../../zustand/store/DealStore';
import {useEffect} from 'react';
import {CardView} from '../list/CardView';
import {singleDealData} from '../../zustand/store/SingleDealStore';
import {Deal} from '../../model/deals';

export function Favorite({navigation}) {
  const getData: unknown = useGetData();
  const saveData: unknown = saveSingleData();

  const { loading, success, error, data, errorData, execute } = useFuncGetData();

  useEffect(() => {
    execute();
  }, []);

  const navigateToDetails = (deal: Deal) => {
    saveData.execute(deal);
    navigation.navigate('Detail');
  };

  return (
    <View>
      {data && data.length > 0 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            keyExtractor={item => item.dealID}
            data={data}
            renderItem={({item}) => (
              <CardView
                title={item.title}
                subtitle={item.salePrice}
                imageUrl={item.thumb}
                onClick={() => {
                  navigateToDetails(item);
                }}
              />
            )}
          />
        </ScrollView>
      )}
    </View>
  );
}
