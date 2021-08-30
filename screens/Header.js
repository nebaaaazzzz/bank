import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation, title}) => {
  return (
    <View styles={styles.header}>
      <MaterialIcon
        name="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight: '100',
    color: '#fff',
    marginLeft: '50%',
    textAlign: 'center',
    letterSpacing: 1,
  },
  icon: {
    color: '#fff',
    position: 'absolute',
    top: '-10%',
  },
});
export default Header;
