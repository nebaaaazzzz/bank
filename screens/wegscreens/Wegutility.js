import * as React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Wegaddiswaterbill from './utilities/Wegaddiswaterbill';
import Wegallinone from './utilities/Wegallinone';
import Wegdstvadditionalpayment from './utilities/Wegdstvadditionalpayment';
import Wegdstvpayment from './utilities/Wegdstvpayment';
import Wegelectricutility from './utilities/Wegelectricutility';
import {Button} from 'react-native-paper';
import Wegethiopostpaid from './utilities/Wegethiopostpaid';
import Wegguzogopayment from './utilities/Wegguzogopayment';
import Wegministryoftradeandindustry from './utilities/Wegministryoftradeandindustry';
import Wegwebirr from './utilities/Wegwebirr';
import {createStackNavigator} from '@react-navigation/stack';

const utilStack = createStackNavigator();

let i;
function utilitystack({navigation}) {
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
                  navigation.navigate('Wegethiopostpaid', {});
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
                  navigation.navigate('Wegelectricutility', {});
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
                  navigation.navigate('Wegallinone', {
                    id: 2,
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
                  navigation.navigate('Wegaddiswaterbill');
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
                  navigation.navigate('Wegguzogopayment', {});
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
                  navigation.navigate('Wegallinone', {
                    id: 9,
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
                  navigation.navigate('Wegministryoftradeandindustry', {});
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
                  navigation.navigate('Wegallinone', {
                    id: 1,
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
                  navigation.navigate('Wegdstvpayment', {});
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
                  navigation.navigate('Wegdstvadditionalpayment', {});
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
                  navigation.navigate('Wegwebirr', {});
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

function Wegutility() {
  return (
    <utilStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        detachInactiveScreens: true,
        headerStyle: {backgroundColor: '#2196F3'},
      }}>
      <utilStack.Screen
        options={{title: 'Utility'}}
        name="Wegutilitystack"
        component={utilitystack}
      />
      <utilStack.Screen
        options={{title: 'A.A Water Bill Payment'}}
        name="Wegaddiswaterbill"
        component={Wegaddiswaterbill}
      />
      <utilStack.Screen name="Wegallinone" component={Wegallinone} />
      <utilStack.Screen
        options={{title: 'DsTv Additional Payment'}}
        name="Wegdstvadditionalpayment"
        component={Wegdstvadditionalpayment}
      />
      <utilStack.Screen
        options={{title: 'Ethiopian Electric Utility'}}
        name="Wegelectricutility"
        component={Wegelectricutility}
      />
      <utilStack.Screen
        options={{title: 'EthioTelecom Post Paid'}}
        name="Wegethiopostpaid"
        component={Wegethiopostpaid}
      />
      <utilStack.Screen
        options={{title: 'GuzoGO payment'}}
        name="Wegguzogopayment"
        component={Wegguzogopayment}
      />
      <utilStack.Screen
        options={{title: 'Minister of Trade And Industry'}}
        name="Wegministryoftradeandindustry"
        component={Wegministryoftradeandindustry}
      />
      <utilStack.Screen
        options={{title: 'Webirr'}}
        name="Wegwebirr"
        component={Wegwebirr}
      />
      <utilStack.Screen
        options={{title: 'DsTv Payment'}}
        name="Wegdstvpayment"
        component={Wegdstvpayment}
      />
    </utilStack.Navigator>
  );
}

export default Wegutility;
