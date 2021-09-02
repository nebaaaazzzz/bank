import * as React from 'react';
import {
  Image,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import WegprofileStack from './Wegprofile';
import {createStackNavigator} from '@react-navigation/stack';
import Wegbeneficary from './Wegbeneficary';
import Wegutility from './Wegutility';
import Wegtransfer from './Wegtransfer';
import Wegtopup from './Wegtopup';
import {Button} from 'react-native-paper';

const Stack = createStackNavigator();
function Weg({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    subcontainer: {
      flex: 1,
      marginBottom: '75%',
    },
    image: {
      width: '60%',
      height: '60%',
      marginTop: '5%',
      alignSelf: 'center',
    },
    btn: {
      marginTop: '6%',
      width: '90%',
      justifyContent: 'center',
      height: '15%',
      backgroundColor: '#fff',
      elevation: 3,
      alignSelf: 'center',
    },

    labelstyle: {
      fontSize: 16,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subcontainer}>
          <Image
            source={require('./../../src/img/cbe.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Button
            icon="transfer"
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => navigation.navigate('Wegtransfer'));
            }}>
            Transfer
          </Button>

          <Button
            // icon="mobile"
            labelStyle={styles.labelstyle}
            mode="outlined"
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => navigation.navigate('Wegtopup'));
            }}>
            TopUp
          </Button>

          <Button
            // icon="person"
            labelStyle={styles.labelstyle}
            mode="outlined"
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() =>
                navigation.navigate('Wegbeneficary', {}),
              );
            }}>
            People
          </Button>

          <Button
            // icon="mobile"
            mode="outlined"
            color="#2196F3"
            labelStyle={styles.labelstyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() =>
                navigation.navigate('Wegutility', {}),
              );
            }}>
            Utilities
          </Button>

          <Button
            labelStyle={styles.labelstyle}
            // icon="mobile"
            mode="outlined"
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                navigation.navigate('Wegprofilestack', {});
              });
            }}>
            Profile
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function WegStack({route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2196F3'},
      }}>
      <Stack.Screen name="Weghome" options={{title: 'CBE'}} component={Weg} />
      <Stack.Screen
        name="Wegtopup"
        options={{title: 'CBE TopUp'}}
        component={Wegtopup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Wegtransfer"
        component={Wegtransfer}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Wegutility"
        component={Wegutility}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Wegprofilestack"
        component={WegprofileStack}
      />
      <Stack.Screen
        options={{title: 'Beneficiary'}}
        name="Wegbeneficary"
        component={Wegbeneficary}
      />
    </Stack.Navigator>
  );
}
export default WegStack;
