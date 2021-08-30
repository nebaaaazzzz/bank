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
import {TextInput, Button} from 'react-native-paper';

import * as yup from 'yup';
const useState = React.useState;
let schema = yup.object().shape({
  account: yup.number().required().positive().integer(),
  amount: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Cbetransfertotelebirr() {
  const [pin, setPin] = useState();
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const [isErr3, setErr3] = useState(false);

  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            phone,
            amount,
          },
          {
            abortEarly: false,
          },
        )
        .then(({phone, amount, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  if (pin && phone && amount) {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*5*5*2*1*${phone}*${amount}#`,
                    );
                    // RNImmediatePhoneCall.immediatePhoneCall(
                    //   `*889*1*${pin}*4*5*5*2*1*${phone}*${amount}#`,
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
                        `*889*1*${pin}*5*5*5*2*1*${phone}*${amount}#`,
                      );
                    } catch (e) {
                      throw e;
                    }
                  } else {
                    throw new Error();
                  }
                });
              }
            })
            .catch(err => {
              throw err;
            });
        })
        .catch(err => {
          err.errors.forEach(element => {
            if (element.includes('phone')) {
              setErr1(true);
            } else if (element.includes('amount')) {
              setErr2(true);
            } else if (element.includes('pin')) {
              setErr3(true);
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
    subcontanier: {
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
  const [isFocused3, setFocused3] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontanier}>
          <View>
            <TextInput
              mode="outlined"
              dense={true}
              label="Phone Number"
              error={isErr1}
              placeholder={isFocused1 ? '' : 'Phone Number'}
              placeholderTextColor="#9b9b9b"
              value={phone}
              onFocus={() => setFocused1(true)}
              onBlur={() => setFocused1(false)}
              onChangeText={text => {
                setErr1(false);
                setPhone(text.replace(/[^0-9]/g, ''));
              }}
              style={styles.input}
            />
          </View>

          <TextInput
            placeholder={isFocused2 ? '' : 'Amount'}
            error={isErr2}
            label="Amount"
            dense={true}
            mode="outlined"
            onFocus={() => setFocused2(true)}
            onBlur={() => setFocused2(false)}
            value={amount}
            onChangeText={text => {
              setErr2(false);
              setAmount(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#9b9b9b"
            style={styles.input}
          />

          <TextInput
            placeholder={isFocused3 ? '' : 'PIN'}
            maxLength={4}
            label="PIN"
            error={isErr3}
            dense={true}
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
            mode="outlined"
            onFocus={() => {
              setFocused3(true);
            }}
            onBlur={() => {
              setFocused3(false);
            }}
            value={pin}
            onChangeText={text => {
              setErr3(false);
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

export default Cbetransfertotelebirr;
