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
import styles from './../styles/style';
import * as yup from 'yup';
const useState = React.useState;

let schema = yup.object().shape({
  ref: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Cbeministryoftradeandindustry({route}) {
  const [pin, setPin] = useState();
  const [ref, setRef] = useState();

  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const onSubmit = ({ref, pin}) => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            ref,
          },
          {
            abortEarly: false,
          },
        )
        .then(({ref, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  if (route.params.type == 1) {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*1*5*3${ref}#`,
                    );
                  } else {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*4*5*1*5*3${ref}#`,
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
                          `*889*1*${pin}*5*1*5*3${ref}#`,
                        );
                      } else {
                        RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*4*5*1*5*3${ref}#`,
                        );
                      }
                    } catch (e) {
                      throw e;
                    }
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
            if (element.includes('ref')) {
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
            placeholder={isFocused1 ? '' : 'Customer Reference Number'}
            error={isErr1}
            label="Customer Reference Number"
            mode="outlined"
            dense={true}
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            value={ref}
            onChangeText={text => {
              setErr2(false);
              setRef(text.replace(/[^0-9]/g, ''));
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

export default Cbeministryoftradeandindustry;
