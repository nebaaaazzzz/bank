import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import styles from './../styles/style';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import * as yup from 'yup';
const useState = React.useState;
let schema = yup.object().shape({
  refno: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Cbeguzogopayment({route}) {
  const [pin, setPin] = useState();
  const [refno, setRefno] = useState();
  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            refno,
          },
          {
            abortEarly: false,
          },
        )
        .then(({refno, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  if (route.params.type == 1) {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*1*5*1*${refno}#`,
                    );
                  } else {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*4*5*1*5*1*${refno}#`,
                    );
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
                      if (route.params.type == 1) {
                        RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*1*5*1*${refno}#`,
                        );
                      } else {
                        RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*4*5*1*5*1*${refno}#`,
                        );
                      }
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
            if (element.includes('refno')) {
              setErr1(true);
            } else if (element.includes('pin')) {
              setErr2(true);
            } else {
            }
          });
        });
    });
  };

  const [isFocused1, setFocused1] = useState(false);
  const [isFocused2, setFocused2] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <TextInput
            placeholder={isFocused1 ? '' : 'Passenger Reference Number'}
            placeholderTextColor="#9b9b9b"
            error={isErr1}
            label="Passenger Reference Number"
            mode="outlined"
            dense={true}
            value={refno}
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            maxLength={15}
            onChangeText={text => {
              setErr1(false);
              setRefno(text.replace(/[^0-9]/g, ''));
            }}
            style={styles.input}
          />

          <TextInput
            placeholder={isFocused2 ? '' : 'PIN'}
            maxLength={4}
            dense={true}
            label="PIN"
            error={isErr2}
            secureTextEntry
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

export default Cbeguzogopayment;
