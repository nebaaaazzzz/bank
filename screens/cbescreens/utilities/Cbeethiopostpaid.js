import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {RadioButton} from 'react-native-paper';
import {TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
let schema = yup.object().shape({
  phnacc: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});

const useState = React.useState;

function Cbeethiopiapostpaid() {
  const [pin, setPin] = useState();
  const [phnacc, setPhnacc] = useState();
  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const [checked, setChecked] = React.useState();
  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            phnacc,
          },
          {
            abortEarly: false,
          },
        )
        .then(({phnacc, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  if (phnacc && pin && selected) {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*1*1*${checked}*${phoneacc}#`,
                    );
                    // RNImmediatePhoneCall.immediatePhoneCall(
                    //   `*889*1*${pin}*4*5*1*1*${checked}*${phoneacc}#`,
                    // );
                  }
                } catch (e) {
                  throw e;
                }
              } else {
                PermissionsAndroid.request(
                  'android.permission.CALL_PHONE',
                ).then(status => {
                  if (status === 'granted') {
                    try {
                      RNImmediatePhoneCall.immediatePhoneCall(
                        `*889*1*${pin}*5*1*1*${selected}*${phoneacc}#`,
                      );
                      // RNImmediatePhoneCall.immediatePhoneCall(
                      //   `*889*1*${pin}*4*5*1*1*${checked}*${phoneacc}#`,
                      // );
                    } catch (e) {
                      throw e;
                    }
                  }
                });
              }
            })
            .catch(err => {
              console.log('error');
            });
        })
        .catch(err => {
          err.errors.forEach(element => {
            if (element.includes('phnacc')) {
              setErr1(true);
            } else if (element.includes('pin')) {
              setErr2(true);
            } else {
            }
          });
        });
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    subcontainer: {
      marginTop: '5%',
      marginBottom: '2%',
    },
    input: {
      width: '95%',
      borderColor: '#2196F3',
      alignSelf: 'center',
      marginTop: '2%',
      marginBottom: '2%',
      color: '#4d4a4a',
      backgroundColor: '#fffff9',
      borderRadius: 15,
    },
    txt: {
      alignSelf: 'center',
      fontSize: 25,
      color: 'rgba(0,0,0,0.6)',
      fontWeight: 'bold',
      marginTop: '5%',
    },
    btn: {
      backgroundColor: '#2196F3',
      padding: '2%',
      width: '90%',
      borderRadius: 5,
      alignSelf: 'center',
      elevation: 5,
    },

    line: {
      width: '90%',
      alignSelf: 'center',
      height: '0.5%',
      backgroundColor: '#bbb6b6',
      marginTop: '3%',
      marginBottom: '3%',
    },
  });
  const [isFocused1, setFocused1] = useState(false);
  const [isFocused2, setFocused2] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <View style={{margin: 25, flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 18,
                color: 'rgba(0,0,0,.7)',
                top: '1.5%',
                left: '7%',
              }}>
              {'      Phone '}
            </Text>
            <RadioButton
              value="phone"
              color={'#2196F3'}
              status={checked === 'phone' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('phone')}
            />
            <Text
              style={{
                color: 'rgba(0,0,0,.7)',
                fontSize: 18,
                top: '1%',
                left: '7%',
              }}>
              {'        Account'}
            </Text>
            <RadioButton
              value="account"
              color={'#2196F3'}
              status={checked === 'account' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('account')}
            />
          </View>
          <TextInput
            placeholder={isFocused1 ? '' : 'Phone or Account'}
            error={isErr1}
            dense={true}
            label="Phone or Account"
            mode="outlined"
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            value={phnacc}
            onChangeText={text => {
              setErr1(false);
              setPhnacc(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#9b9b9b"
            style={styles.input}
          />
          <TextInput
            placeholder={isFocused2 ? '' : 'PIN'}
            maxLength={4}
            label="PIN"
            error={isErr2}
            secureTextEntry
            dense={true}
            right={<TextInput.Icon name="eye" />}
            mode="outlined"
            onFocus={() => {
              setFocused2(true);
            }}
            onBlur={() => {
              setFocused2(false);
            }}
            value={pin}
            onChangeText={text => {
              setErr2(false);
              setPin(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#925252"
            style={styles.input}
          />

          <View style={styles.line}></View>
          <Button
            onPress={onSubmit}
            color="#fff"
            mode="contained"
            dark={true}
            size={30}
            style={styles.btn}
            icon="phone">
            Continue
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: 100,
  },
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10,
    // padding: ,
    color: 'black',
    borderRadius: 40,
  },
});

export default Cbeethiopiapostpaid;
