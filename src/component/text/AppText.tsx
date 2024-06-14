import {Text, View} from 'react-native';

type AppTextProps = {
    text?: string;
    color?: string,
    fontFamily?: string
};

export function AppText({text, color, fontFamily}: AppTextProps) {

  return <View>
    <Text style={{color: color, fontFamily: fontFamily}}>
        {text}
    </Text>
  </View>;
}