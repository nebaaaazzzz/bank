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
import Cbeaddiswaterbill from './utilities/Cbeaddiswaterbill';
import Cbeallinone from './utilities/Cbeallinone';
import Cbedstvadditionalpayment from './utilities/Cbedstvadditionalpayment';
import Cbedstvpayment from './utilities/Cbedstvpayment';
import Cbeelectricutility from './utilities/Cbeelectricutility';
import Cbeethiopostpaid from './utilities/Cbeethiopostpaid';
import Cbeguzogopayment from './utilities/Cbeguzogopayment';
import Cbeministryoftradeandindustry from './utilities/Cbeministryoftradeandindustry';
import Cbewebirr from './utilities/Cbewebirr';
import Entypo from 'react-native-vector-icons/Entypo';
import {createStackNavigator} from '@react-navigation/stack';
const useState = React.useState;
const utilStack = createStackNavigator();

let i;
function utilitystack({navigation}) {
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
  const [isPressed9, setPressed9] = useState(false);
  const [isPressed10, setPressed10] = useState(false);
  const [isPressed11, setPressed11] = useState(false);
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
                navigation.navigate('Cbeethiopostpaid');
              }
            }}>
            <Text style={styles.txt}>Ethio - Telecom Post - Paid</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPressIn={() => setPressed2(true)}
            onPressOut={() => setPressed2(false)}
            style={isPressed2 ? pressStyle.btn : styles.btn}
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbeelectricutility');
              }
            }}>
            <Text style={styles.txt}>Ethiopian Electric Utility</Text>
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
                navigation.navigate('Cbeallinone', {id: 2});
              }
            }}
            onPressIn={() => setPressed3(true)}
            onPressOut={() => setPressed3(false)}
            style={isPressed3 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Ethiopian Airlines Ticket</Text>
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
                navigation.navigate('Cbeaddiswaterbill');
              }
            }}
            onPressIn={() => setPressed4(true)}
            onPressOut={() => setPressed4(false)}
            style={isPressed4 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Addis Ababa Water Bill Payment</Text>
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
                navigation.navigate('Cbeguzogopayment');
              }
            }}
            onPressIn={() => setPressed5(true)}
            onPressOut={() => setPressed5(false)}
            style={isPressed5 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>GuzoGo Payment</Text>
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
                navigation.navigate('Cbeallinone', {
                  id: 9,
                });
              }
            }}
            onPressIn={() => setPressed6(true)}
            onPressOut={() => setPressed6(false)}
            style={isPressed6 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>New Passport Payment</Text>
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
                navigation.navigate('Cbeministryoftradeandindustry');
              }
            }}
            onPressIn={() => setPressed7(true)}
            onPressOut={() => setPressed7(false)}
            style={isPressed7 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Minister of Trade and Industry</Text>
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
                navigation.navigate('Cbeallinone', {
                  id: 1,
                });
              }
            }}
            onPressIn={() => setPressed8(true)}
            onPressOut={() => setPressed8(false)}
            style={isPressed8 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Flomart</Text>
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
                navigation.navigate('Cbedstvpayment');
              }
            }}
            onPressIn={() => setPressed9(true)}
            onPressOut={() => setPressed9(false)}
            style={isPressed9 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>DStv Payment</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#2196F3"
            />
          </Pressable>
          <Pressable
            onPressIn={() => setPressed10(true)}
            onPressOut={() => setPressed10(false)}
            style={isPressed10 ? pressStyle.btn : styles.btn}
            onPress={() => {
              if (i == 0) {
                i++;
                navigation.navigate('Cbedstvadditionalpayment');
              }
            }}>
            <Text style={styles.txt}>DStv Additional Payment</Text>
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
                navigation.navigate('Cbewebirr');
              }
            }}
            onPressIn={() => setPressed11(true)}
            onPressOut={() => setPressed11(false)}
            style={isPressed11 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>WeBirr</Text>
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

function Cbeutility() {
  return (
    <utilStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        detachInactiveScreens: true,
        headerStyle: {backgroundColor: '#2196F3'},
      }}>
      <utilStack.Screen
        options={{title: 'Utility'}}
        name="Cbeutilitystack"
        component={utilitystack}
      />
      <utilStack.Screen
        options={{title: 'A.A Water Bill Payment'}}
        name="Cbeaddiswaterbill"
        component={Cbeaddiswaterbill}
      />
      <utilStack.Screen name="Cbeallinone" component={Cbeallinone} />
      <utilStack.Screen
        options={{title: 'DsTv Additional Payment'}}
        name="Cbedstvadditionalpayment"
        component={Cbedstvadditionalpayment}
      />
      <utilStack.Screen
        options={{title: 'Ethiopian Electric Utility'}}
        name="Cbeelectricutility"
        component={Cbeelectricutility}
      />
      <utilStack.Screen
        options={{title: 'EthioTelecom Post Paid'}}
        name="Cbeethiopostpaid"
        component={Cbeethiopostpaid}
      />
      <utilStack.Screen
        options={{title: 'GuzoGO payment'}}
        name="Cbeguzogopayment"
        component={Cbeguzogopayment}
      />
      <utilStack.Screen
        options={{title: 'Minister of Trade And Industry'}}
        name="Cbeministryoftradeandindustry"
        component={Cbeministryoftradeandindustry}
      />
      <utilStack.Screen
        options={{title: 'Webirr'}}
        name="Cbewebirr"
        component={Cbewebirr}
      />
      <utilStack.Screen
        options={{title: 'DsTv Payment'}}
        name="Cbedstvpayment"
        component={Cbedstvpayment}
      />
    </utilStack.Navigator>
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
export default Cbeutility;
