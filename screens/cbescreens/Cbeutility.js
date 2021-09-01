import * as React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Cbeaddiswaterbill from './utilities/Cbeaddiswaterbill';
import Cbeallinone from './utilities/Cbeallinone';
import Cbedstvadditionalpayment from './utilities/Cbedstvadditionalpayment';
import Cbedstvpayment from './utilities/Cbedstvpayment';
import Cbeelectricutility from './utilities/Cbeelectricutility';
import {Button} from 'react-native-paper';
import Cbeethiopostpaid from './utilities/Cbeethiopostpaid';
import Cbeguzogopayment from './utilities/Cbeguzogopayment';
import Cbeministryoftradeandindustry from './utilities/Cbeministryoftradeandindustry';
import Cbewebirr from './utilities/Cbewebirr';
import {createStackNavigator} from '@react-navigation/stack';

const utilStack = createStackNavigator();

let i;
function utilitystack({navigation, route}) {
  useFocusEffect(() => {
    i = 0;
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    subcontent: {
      marginBottom: '40%',
    },

    btn: {
      width: '100%',
      height: '9%',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 0,
      marginBottom: '1%',
    },
    labelstyle: {
      fontSize: 16,
    },
    contentStyle: {
      justifyContent: 'flex-start',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.subcontent}>
          <Button
            // icon="transfer"
            mode="outlined"
            uppercase={false}
            labelStyle={styles.labelstyle}
            color="#000"
            contentStyle={styles.contentStyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeethiopostpaid', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            Ethio - Telecom Post - Paid
          </Button>
          <Button
            mode="outlined"
            uppercase={false}
            labelStyle={styles.labelstyle}
            color="#000"
            contentStyle={styles.contentStyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeelectricutility', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            Ethiopian Electric Utility
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            uppercase={false}
            color="#000"
            contentStyle={styles.contentStyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeallinone', {
                    id: 2,
                    type: route.params.type,
                  });
                }
              });
            }}>
            Ethiopian Airlines Ticket
          </Button>
          <Button
            mode="outlined"
            uppercase={false}
            labelStyle={styles.labelstyle}
            color="#000"
            style={styles.btn}
            contentStyle={styles.contentStyle}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeaddiswaterbill');
                }
              });
            }}>
            Addis Ababa Water Bill Payment
          </Button>
          <Button
            mode="outlined"
            uppercase={false}
            labelStyle={styles.labelstyle}
            color="#000"
            style={styles.btn}
            contentStyle={styles.contentStyle}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeguzogopayment', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            GuzoGo Payment
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#000"
            uppercase={false}
            style={styles.btn}
            contentStyle={styles.contentStyle}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeallinone', {
                    id: 9,
                    type: route.params.type,
                  });
                }
              });
            }}>
            New Passport Payment
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#000"
            contentStyle={styles.contentStyle}
            style={styles.btn}
            uppercase={false}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeministryoftradeandindustry', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            Minister of Trade and Industry
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#000"
            contentStyle={styles.contentStyle}
            style={styles.btn}
            uppercase={false}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbeallinone', {
                    id: 1,
                    type: route.params.type,
                  });
                }
              });
            }}>
            Flomart
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#000"
            uppercase={false}
            contentStyle={styles.contentStyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbedstvpayment', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            DStv Payment
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#000"
            uppercase={false}
            contentStyle={styles.contentStyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbedstvadditionalpayment', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            DStv Additional Payment
          </Button>
          <Button
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#000"
            uppercase={false}
            contentStyle={styles.contentStyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                if (i == 0) {
                  i++;
                  navigation.navigate('Cbewebirr', {
                    type: route.params.type,
                  });
                }
              });
            }}>
            WeBirr
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Cbeutility({route}) {
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
        initialParams={{type: route.params.type}}
        component={utilitystack}
      />
      <utilStack.Screen
        options={{title: 'A.A Water Bill Payment'}}
        name="Cbeaddiswaterbill"
        initialParams={{type: route.params.type}}
        component={Cbeaddiswaterbill}
      />
      <utilStack.Screen
        name="Cbeallinone"
        initialParams={{type: route.params.type}}
        component={Cbeallinone}
      />
      <utilStack.Screen
        options={{title: 'DsTv Additional Payment'}}
        name="Cbedstvadditionalpayment"
        initialParams={{type: route.params.type}}
        component={Cbedstvadditionalpayment}
      />
      <utilStack.Screen
        initialParams={{type: route.params.type}}
        options={{title: 'Ethiopian Electric Utility'}}
        name="Cbeelectricutility"
        component={Cbeelectricutility}
      />
      <utilStack.Screen
        options={{title: 'EthioTelecom Post Paid'}}
        name="Cbeethiopostpaid"
        initialParams={{type: route.params.type}}
        component={Cbeethiopostpaid}
      />
      <utilStack.Screen
        initialParams={{type: route.params.type}}
        options={{title: 'GuzoGO payment'}}
        name="Cbeguzogopayment"
        component={Cbeguzogopayment}
      />
      <utilStack.Screen
        initialParams={{type: route.params.type}}
        options={{title: 'Minister of Trade And Industry'}}
        name="Cbeministryoftradeandindustry"
        component={Cbeministryoftradeandindustry}
      />
      <utilStack.Screen
        initialParams={{type: route.params.type}}
        options={{title: 'Webirr'}}
        name="Cbewebirr"
        component={Cbewebirr}
      />
      <utilStack.Screen
        initialParams={{type: route.params.type}}
        options={{title: 'DsTv Payment'}}
        name="Cbedstvpayment"
        component={Cbedstvpayment}
      />
    </utilStack.Navigator>
  );
}

export default Cbeutility;
