import { TouchableOpacity } from "react-native";


type FloatingActionButtonProps = {
    backgroundColor?: string;
    onClick: () => void;
  };

export function FloatingActionButton ({backgroundColor, onClick}: FloatingActionButtonProps){
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        height: 70,
        backgroundColor: backgroundColor,
        borderRadius: 100,
      }}>
      {/* <Icon name='plus' size={30} color='#01a699' /> */}
    </TouchableOpacity>
  );
}
