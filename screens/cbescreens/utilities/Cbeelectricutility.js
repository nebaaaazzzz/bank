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
  account: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Cbeelectricutility() {
  const [pin, setPin] = useState();
  const [account, setAccount] = useState();
  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            account,
          },
          {
            abortEarly: false,
          },
        )
        .then(({account, pin}) => {})
        .catch(err => {
          err.errors.forEach(element => {
            if (element.includes('account')) {
              setErr1(true);
            } else if (element.includes('pin')) {
              setErr2(true);
            } else {
              PermissionsAndroid.check('android.permission.CALL_PHONE')
                .then(bool => {
                  if (bool) {
                    try {
                    } catch (e) {}
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*1*2*${account}*1#`,
                    );
                    // RNImmediatePhoneCall.immediatePhoneCall(
                    //   `*889*1*${pin}*4*5*1*2*${account}*1#`,
                    // );
                  } else {
                    PermissionsAndroid.request(
                      'android.permission.CALL_PHONE',
                    ).then(status => {
                      if (status === 'granted') {
                        RNImmediatePhoneCall.immediatePhoneCall(
                          `*889*1*${pin}*5*1*2*${account}*1#`,
                        );
                        // RNImmediatePhoneCall.immediatePhoneCall(
                        //   `*889*1*${pin}*4*5*1*2*${account}*1#`,
                        // );
                      }
                    });
                  }
                })
                .catch(err => {
                  throw err;
                });
            }
          });
        });
    });
  };

  const [isFocused1, setFocused1] = useState(false);
  const [isFocused2, setFocused2] = useState(false);
  const [text, setText] = React.useState('');
  function changeText(newText) {
    setText(newText);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text>{text}</Text>
        </View>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <TextInput
            mode="outlined"
            dense={true}
            label="Account Number"
            error={isErr1}
            placeholder={isFocused1 ? '' : 'Account number'}
            placeholderTextColor="#9b9b9b"
            value={account}
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            onChangeText={text => {
              setErr1(false);
              setAccount(text.replace(/[^0-9]/g, ''));
            }}
            style={styles.input}
          />

          <TextInput
            placeholder={isFocused2 ? '' : 'PIN'}
            maxLength={4}
            label="PIN"
            dense={true}
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

export default Cbeelectricutility;
