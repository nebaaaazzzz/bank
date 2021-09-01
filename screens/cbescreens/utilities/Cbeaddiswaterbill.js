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
import styles from './../styles/style';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
const useState = React.useState;
import * as yup from 'yup';
let schema = yup.object().shape({
  key: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Cbeaddiswaterbill({route}) {
  const [pin, setPin] = useState();
  const [key, setKey] = useState();
  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const onSubmit = () => {
    console.log('addis abeba water');
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            key,
          },
          {
            abortEarly: false,
          },
        )
        .then(({key, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  if (route.params.type == 1) {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*1*4*${key}*1#`,
                    );
                  } else {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*4*5*1*4*${key}*1#`,
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
                          `*889*1*${pin}*5*1*4*${key}*1#`,
                        );
                      } else {
                        RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*4*5*1*4*${key}*1#`,
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
            if (element.includes('key')) {
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
  const pattern = /^\d+$/;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <TextInput
            placeholder={isFocused1 ? '' : 'Customer Key'}
            error={isErr1}
            dense={true}
            label="Customer Key"
            mode="outlined"
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            value={key}
            onChangeText={text => {
              setErr1(false);
              setKey(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#9b9b9b"
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

export default Cbeaddiswaterbill;
