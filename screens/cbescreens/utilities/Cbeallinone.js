import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import * as yup from 'yup';
const useState = React.useState;
let schema = yup.object().shape({
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Cbeallinone({navigation, route}) {
  const {params} = route;
  const [pin, setPin] = useState();
  const [isErr1, setErr1] = useState(false);
  params.id == 1
    ? navigation.setOptions({
        title: 'Flomart',
      })
    : params.id == 2
    ? navigation.setOptions({
        title: 'Airline Ticket',
      })
    : params.id == 3
    ? navigation.setOptions({
        title: 'Local Money Transfer',
      })
    : params.id == 4
    ? navigation.setOptions({
        title: 'Own Account Transfer',
      })
    : params.id == 5
    ? navigation.setOptions({
        title: 'Make Payment to Beneficiary',
      })
    : params.id == 6
    ? navigation.setOptions({
        title: 'List Beneficiary',
      })
    : params.id == 7
    ? navigation.setOptions({
        title: 'Delete Beneficiary',
      })
    : params.id == 8
    ? navigation.setOptions({
        title: 'Add Beneficiary',
      })
    : params.id == 9
    ? navigation.setOptions({title: 'New Passport Payment'})
    : params.id == 10
    ? navigation.setOptions({title: 'Recent'})
    : params.id == 11
    ? navigation.setOptions({title: 'Desubscribe'})
    : '';

  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
          },
          {
            abortEarly: false,
          },
        )
        .then(({pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  if (pin) {
                    params.id == 1
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*1*5*4#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*5*1*5*4#`,
                      //   )
                      params.id == 2
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*1*3#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*5*1*3#`,
                      //   )
                      params.id == 3
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*5*1*1#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*2*1#`,
                      //   )
                      params.id == 4
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*3#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*5*5*1#`,
                      //   )
                      params.id == 5
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*2#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*3#`,
                      //   )
                      params.id == 6
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*5*3*1#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*3*1#`,
                      //   )
                      params.id == 7
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*5*3*2#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*3*2#`,
                      //   )
                      params.id == 8
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*5**3*3#`,
                        )
                      : // RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*3*3#`,
                      //   )
                      params.id == 9
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*1*5*2#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*4*5*1*5*2#`,
                      //   )
                      params.id == 10
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*5*5*4*1#`,
                        )
                      : //  RNImmediatePhoneCall.immediatePhoneCall(
                      //     `*889*1*${pin}*5*5*5*4*1#`,
                      //   )
                      params.id == 11
                      ? RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*5*5*5*3#`,
                        )
                      : // ? RNImmediatePhoneCall.immediatePhoneCall(
                        //     `*889*1*${pin}*4*5*5*5*3#`,
                        //   )
                        '';
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
                        `*889*1*${pin}*5*1*3#`,
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
            if (element.includes('pin')) {
              setErr1(true);
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <TextInput
            placeholder={isFocused1 ? '' : 'PIN'}
            maxLength={4}
            dense={true}
            label="PIN"
            error={isErr1}
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
            mode="outlined"
            onFocus={() => {
              setFocused1(true);
            }}
            onBlur={() => {
              setFocused1(false);
            }}
            value={pin}
            onChangeText={text => {
              setErr1(false);
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

export default Cbeallinone;
