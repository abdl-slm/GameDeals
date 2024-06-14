import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../text/AppText';
import {PRIMARY_ACCENT, TERTIARY_ACCENT, WHITE} from '../../utils/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RN from 'react-native';
import {NEXA_BOLD, NEXA_LIGHT} from '../../utils/fonts';

const SCREEN_HEIGHT = RN.Dimensions.get('window').height;

type CardViewProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onClick: () => void;
};

export function CardView({title, subtitle, onClick, imageUrl}: CardViewProps) {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => onClick()}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.imageThumbnail}
            source={{
              uri: imageUrl,
            }}
          />
          <View>
            <AppText text={title} color={WHITE} fontFamily={NEXA_BOLD} />
            <AppText text={subtitle} color={WHITE} fontFamily={NEXA_LIGHT} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageThumbnail: {
    resizeMode: 'cover',
    width: SCREEN_HEIGHT * 0.05,
    height: SCREEN_HEIGHT * 0.05,
    borderRadius: (SCREEN_HEIGHT * 0.15) / 2,
    marginEnd: 20
  },
  cardContainer: {
    backgroundColor: TERTIARY_ACCENT,
    padding: 20,
    margin: 10,
    borderRadius: 6,
    elevation: 2,
    shadowOffset: {width: 2, height: 6},
    shadowRadius: 4,
    shadowOpacity: 0.2
  },
});
