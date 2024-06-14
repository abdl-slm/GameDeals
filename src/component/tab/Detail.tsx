import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import { Deal } from '../../model/deals';
import { AppText } from '../text/AppText';
import { saveSingleData } from '../../zustand/store/DealStore';

export default function Detail({navigation}) {
  
  // const deal: Deal = useSelector(state => state.singleDealReducer.deal);
  const deal: Deal = saveSingleData().data

  return (
    <View>
      <AppText text={deal.title} />
    </View>
  );
}
