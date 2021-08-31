import * as React from 'react';
import {
  Pressable,
  Image,
  View,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CbeStack from './cbescreens/Cbe';
import {Button} from 'react-native-paper';
import Header from './Header';
const useState = React.useState;

const Stack = createStackNavigator();
function List({navigation}) {
  let {height, width} = useWindowDimensions();
  function calcWidth(percent) {
    let per = percent / 100;
    return Number(width * per);
  }
  function calcHeight(percent) {
    let per = percent / 100;
    return per * height;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cont: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 190,
    },
    btn: {
      width: calcWidth(28),
      height: calcHeight(15),
      marginTop: calcHeight(5),
      marginLeft: calcWidth(4),
      borderColor: '#2196F3',
      elevation: 10,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderRadius: 15,
      alignSelf: 'center',
    },
    btnweg: {
      height: calcHeight(15),
      marginTop: calcHeight(2.5),
      marginLeft: calcWidth(4),
      borderColor: '#2196F3',
      elevation: 10,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderRadius: 15,
      marginBottom: calcHeight(10),
    },
    imgcbe: {
      width: calcWidth(28),
      height: calcHeight(14.5),
    },
    btntext: {
      textAlign: 'center',
      color: '#2196F3',
      marginTop: calcHeight(0.5),
    },
    imgabs: {
      width: calcWidth(26.5),
      height: calcHeight(14.3),
      borderRadius: 15,
    },
    text: {
      color: 'red',
      fontSize: 18,
      textAlign: 'center',
    },
  });
  const pressStyle = StyleSheet.create({
    btn: {
      width: calcWidth(28.4),
      height: calcHeight(15.4),
      marginTop: calcHeight(4.6),
      marginLeft: calcWidth(3.6),
      borderColor: '#2196F3',
      elevation: 20,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderRadius: 15,
      alignSelf: 'center',
    },
    btnweg: {
      width: calcWidth(28.2),
      height: calcHeight(15.4),
      marginTop: calcHeight(2.5),
      marginLeft: calcWidth(3.6),
      borderColor: 'rgba(0 , 0,0,0.5)',
      elevation: 10,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderRadius: 15,
      marginBottom: calcHeight(10),
    },

    imgcbe: {
      width: calcWidth(28),
      height: calcHeight(15.4),
      marginTop: -1.8,
    },
    imgabs: {
      width: calcWidth(26.9),
      height: calcHeight(14.75),
      borderRadius: 15,
      // mar
    },
    text: {
      textAlign: 'center',
      color: 'rgba(0 , 0,0,0.5)',
      fontSize: 16,
      marginTop: calcHeight(0.6),
    },
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cont}>
          <View style={isPressed1 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPress={() => {
                navigation.navigate('Cbestack');
              }}
              onPressIn={() => setPressed1(true)}
              onPressOut={() => setPressed1(false)}>
              <Image
                style={isPressed1 ? pressStyle.imgcbe : styles.imgcbe}
                source={require('./../src/img/cbe.png')}
              />
            </Pressable>
            <Text style={isPressed1 ? pressStyle.text : styles.btntext}>
              CBE
            </Text>
          </View>
          <View style={isPressed2 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed2(true)}
              onPressOut={() => setPressed2(false)}>
              <Image
                style={isPressed2 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/abyssinia.png')}
              />
            </Pressable>
            <Text style={isPressed2 ? pressStyle.text : styles.btntext}>
              Abyssinia
            </Text>
          </View>
          <View style={isPressed3 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed3(true)}
              onPressOut={() => setPressed3(false)}>
              <Image
                style={isPressed3 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/abay.png')}
              />
            </Pressable>
            <Text style={isPressed3 ? pressStyle.text : styles.btntext}>
              Abay
            </Text>
          </View>
          <View style={isPressed4 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed4(true)}
              onPressOut={() => setPressed4(false)}>
              <Image
                style={isPressed4 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/awash.png')}
              />
            </Pressable>
            <Text style={isPressed4 ? pressStyle.text : styles.btntext}>
              Awash
            </Text>
          </View>
          <View style={isPressed5 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed5(true)}
              onPressOut={() => setPressed5(false)}>
              <Image
                style={isPressed5 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/birhan.png')}
              />
            </Pressable>
            <Text style={isPressed5 ? pressStyle.text : styles.btntext}>
              Birhan
            </Text>
          </View>
          <View style={isPressed6 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed6(true)}
              onPressOut={() => setPressed6(false)}>
              <Image
                style={isPressed6 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/coop.png')}
              />
            </Pressable>
            <Text style={isPressed6 ? pressStyle.text : styles.btntext}>
              COOP
            </Text>
          </View>
          <View style={isPressed7 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed7(true)}
              onPressOut={() => setPressed7(false)}>
              <Image
                style={isPressed7 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/dashen.png')}
              />
            </Pressable>
            <Text style={isPressed7 ? pressStyle.text : styles.btntext}>
              Dashen
            </Text>
          </View>
          <View style={isPressed8 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed8(true)}
              onPressOut={() => setPressed8(false)}>
              <Image
                style={isPressed8 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/hibret.jpg')}
              />
            </Pressable>
            <Text style={isPressed8 ? pressStyle.text : styles.btntext}>
              Hibret
            </Text>
          </View>
          <View style={isPressed9 ? pressStyle.btn : styles.btn}>
            <Pressable
              onPressIn={() => setPressed9(true)}
              onPressOut={() => setPressed9(false)}>
              <Image
                style={isPressed9 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/oromia.png')}
              />
            </Pressable>
            <Text style={isPressed9 ? pressStyle.text : styles.btntext}>
              Oromia
            </Text>
          </View>
          <View style={isPressed10 ? pressStyle.btnweg : styles.btnweg}>
            <Pressable
              onPressIn={() => setPressed10(true)}
              onPressOut={() => setPressed10(false)}>
              <Image
                style={isPressed10 ? pressStyle.imgabs : styles.imgabs}
                source={require('./../src/img/wegagen.png')}
              />
            </Pressable>
            <Text style={isPressed10 ? pressStyle.text : styles.btntext}>
              Wegagen
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function HomeScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#2196F3'}}}>
      <Stack.Screen
        name="List"
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation} title="Banks" />,
        })}
        component={List}
      />
      <Stack.Screen
        name="Cbestack"
        options={{headerShown: false}}
        component={CbeStack}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
