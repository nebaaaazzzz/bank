import * as React from 'react';
import {
  Pressable,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WegchangePin from './profile/Wegchangepin';
import Entypo from 'react-native-vector-icons/Entypo';
const useState = React.useState;

function Wegprofile({navigation}) {
  const [isPressed1, setPressed1] = useState(false);
  const [isPressed2, setPressed2] = useState(false);
  const [isPressed3, setPressed3] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.content}>
        <View style={styles.subcontent}>
          <Text style={styles.uptext}>Enter</Text>
          <Pressable
            onPressIn={() => setPressed1(true)}
            onPress={() =>
              navigation.navigate('Wegutility', {
                screen: 'Wegallinone',
                params: {
                  id: 10,
                },
              })
            }
            onPressOut={() => setPressed1(false)}
            style={isPressed1 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Recent</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#fff"
            />
          </Pressable>
          <Pressable
            onPressIn={() => setPressed2(true)}
            onPressOut={() => setPressed2(false)}
            onPress={() =>
              navigation.navigate('WegchangePin', {type: route.params.type})
            }
            style={isPressed2 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Change PIN</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#fff"
            />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('Wegutility', {
                screen: 'Wegallinone',
                params: {
                  id: 11,
                },
              })
            }
            onPressIn={() => setPressed3(true)}
            onPressOut={() => setPressed3(false)}
            style={isPressed3 ? pressStyle.btn : styles.btn}>
            <Text style={styles.txt}>Desubscribe</Text>
            <Entypo
              style={styles.icon}
              name="chevron-small-right"
              size={20}
              color="#fff"
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const Stack = createStackNavigator();
function WegprofileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#2196F3'},
      }}>
      <Stack.Screen
        name="Wegprofile"
        options={{title: 'Profile'}}
        component={Wegprofile}
      />
      <Stack.Screen
        name="WegchangePin"
        options={{headerTintColor: '#fff', title: 'Change PIN'}}
        component={WegchangePin}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontent: {
    marginTop: '2%',
    marginBottom: '5%',
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    backgroundColor: '#fff',
    height: '45%',
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
  uptext: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'rgba(0,0,0,.6)',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
});
const pressStyle = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    backgroundColor: 'rgba(255,255,255,0.7)',
    height: '45%',
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
export default WegprofileStack;
