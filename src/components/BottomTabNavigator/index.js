import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import TabItem from '../TabItem';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TabItem 
            key={index}
            isFocused={isFocused}
            label={label}
            onLongPress={onLongPress}
            onPress={onPress}
            />
          );
        })}
      </View>
    );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical : 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    }
})