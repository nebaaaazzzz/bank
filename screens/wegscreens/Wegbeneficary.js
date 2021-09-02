import * as React from 'react';
import {
  Pressable,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
const useState = React.useState;

function Wegbeneficary({navigation}) {
  const [isPressed1, setPressed1] = useState(false);
  const [isPressed2, setPressed2] = useState(false);
  const [isPressed3, setPressed3] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.content}>
        <View style={styles.subcontent}>
          <Text style={styles.uptext}>Select</Text>
          <Pressable
            onPressIn={() => setPressed1(true)}
            onPress={() =>
              navigation.navigate('Wegutility', {
                screen: 'Wegallinone',
                params: {
                  id: 6,
                },
              })
            }
            onPressOut={() => setPressed1(false)}
            style={styles.btn}>
            <Text style={styles.txt}>List Beneficiaries</Text>
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
              navigation.navigate('Wegutility', {
                screen: 'Wegallinone',
                params: {
                  id: 7,
                },
              })
            }
            style={styles.btn}>
            <Text style={styles.txt}>Delete Beneficiaries</Text>
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
                  id: 8,
                },
              })
            }
            onPressIn={() => setPressed3(true)}
            onPressOut={() => setPressed3(false)}
            style={styles.btn}>
            <Text style={styles.txt}>Add New Beneficiary</Text>
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
    color: 'rgba(0,0,0,0.6)',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
});

export default Wegbeneficary;
