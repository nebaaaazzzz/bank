import * as React from 'react';
import {
  Pressable,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {createStackNavigator} from '@react-navigation/stack';
import Cbeaccounttransfer from './transfer/Cbeaccounttransfer';
import Cbebirrwallet from './transfer/Cbebirrwallet';
import Cbetransfertotelebirr from './transfer/Cbetransfertotelebirr';
import Cbetransfertoanotherbank from './transfer/Cbetransfertoanotherbank';

import Cbedonation from './transfer/Cbedonation';
let i = 0;
const useState = React.useState;
function CbetransferStack({navigation, route}) {
  useFocusEffect(() => {
    i = 0;
  });

  const [isPressed1, setPressed1] = useState(false);
  const [isPressed2, setPressed2] = useState(false);
  const [isPressed3, setPressed3] = useState(false);
  const [isPressed4, setPressed4] = useState(false);
  const [isPressed5, setPressed5] = useState(false);
  const [isPressed6, setPressed6] = useState(false);
  const [isPressed7, setPressed7] = useState(false);
  const [isPressed8, setPressed8] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.content}>
        <View style={styles.subcontent}>
          <Pressable
            onPressIn={() => setPressed1(true)}
            onPressOut={() => setPressed1(false)}
            style={isPressed1 ? pressStyle.btn : styles.btn}
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbeaccounttransfer', {
                  // type: route.params.type,
                });
              }
            }}>
            <Text style={styles.txt}>Transfer to Any CBE Account</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbebirrwallet', {type: route.params.type});
              }
            }}
            onPressIn={() => setPressed2(true)}
            onPressOut={() => setPressed2(false)}
            style={isPressed2 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Transfer to CBEBirr Wallet</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbeutility', {
                  screen: 'Cbeallinone',
                  params: {
                    id: 5,
                    type: route.params.type,
                  },
                });
              }
            }}
            onPressIn={() => setPressed3(true)}
            onPressOut={() => setPressed3(false)}
            style={isPressed3 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Make Payment to Beneficiary</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbeutility', {
                  screen: 'Cbeallinone',
                  params: {
                    id: 4,
                    type: route.params.type,
                  },
                });
              }
            }}
            onPressIn={() => setPressed4(true)}
            onPressOut={() => setPressed4(false)}
            style={isPressed4 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Own Account Transfer</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbeutility', {
                  screen: 'Cbeallinone',
                  params: {
                    id: 3,
                    type: route.params.type,
                  },
                });
              }
            }}
            onPressIn={() => setPressed5(true)}
            onPressOut={() => setPressed5(false)}
            style={isPressed5 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Local Money Transfer</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>

          <Pressable
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbetransfertotelebirr', {
                  type: route.params.type,
                });
              }
            }}
            onPressIn={() => setPressed6(true)}
            onPressOut={() => setPressed6(false)}
            style={isPressed6 ? pressStyle.btn : styles.btn}
            onPress={() => navigation.navigate('Cbetransfertotelebirr')}>
            <Text style={styles.txt}>Transfer to Telebirr Wallet</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbetransfertoanotherbank', {
                  type: route.params.type,
                });
              }
            }}
            onPressIn={() => setPressed7(true)}
            onPressOut={() => setPressed7(false)}
            style={isPressed7 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Transfer to Other Banks</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPress={() => {
              if (i == 0) {
                navigation.navigate('Cbedonation', {type: route.params.type});
              }
            }}
            onPressIn={() => setPressed8(true)}
            onPressOut={() => setPressed8(false)}
            style={isPressed8 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Donation</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();
function Cbetransfer({navigation, route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2196F3'},
      }}>
      <Stack.Screen
        name="CbetransferStack"
        initialParams={route}
        options={{title: 'Transfer'}}
        component={CbetransferStack}
      />
      <Stack.Screen
        initialParams={route}
        name="Cbeaccounttransfer"
        options={{title: 'Account Transfer'}}
        component={Cbeaccounttransfer}
      />
      <Stack.Screen
        options={{title: 'CBEBirr Wallet'}}
        name="Cbebirrwallet"
        component={Cbebirrwallet}
        initialParams={route}
      />
      <Stack.Screen
        options={{title: 'Transfer To TeleBirr'}}
        name="Cbetransfertotelebirr"
        initialParams={route}
        component={Cbetransfertotelebirr}
      />
      <Stack.Screen
        options={{title: 'Transfer To Another Bank'}}
        name="Cbetransfertoanotherbank"
        initialParams={route}
        component={Cbetransfertoanotherbank}
      />

      <Stack.Screen
        name="Cbedonation"
        initialParams={route}
        options={{title: 'Donation'}}
        component={Cbedonation}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontent: {
    marginBottom: '5%',
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    margin: 0.5,
    backgroundColor: '#fff',
    height: '45%',
    borderBottomWidth: 1.2,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    alignSelf: 'center',
    width: '100%',
    padding: '5%',
  },
  txt: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 17,
    marginLeft: '2%',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 'auto',
  },
});
const pressStyle = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: 'row',
    margin: 0.5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: '45%',
    borderBottomWidth: 1.2,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    alignSelf: 'center',
    width: '100%',
    padding: '5%',
  },
  txt: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 17,
    marginLeft: '2%',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 'auto',
  },
});
export default Cbetransfer;
