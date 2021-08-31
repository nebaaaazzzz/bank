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
import styles from '../styles/style';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import * as yup from 'yup';
let schema = yup.object().shape({
  phone: yup.number().required().positive().integer(),
  amount: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
const useState = React.useState;
function Cbebirrwallet(props) {
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
        .then(({phone, pin, amount}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  RNImmediatePhoneCall.immediatePhoneCall(
                    `*889*1*${pin}*4*1*${phone}*${amount}#`,
                  );
                  // RNImmediatePhoneCall.immediatePhoneCall(
                  //   `*889*1*${pin}*2*${phone}*${amount}#`,
                  // );
                } catch (e) {
                  throw err;
                }
              } else {
                PermissionsAndroid.request(
                  'android.permission.CALL_PHONE',
                ).then(status => {
                  if (status === 'granted') {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*4*1*${phone}*${amount}#`,
                    );
                    // RNImmediatePhoneCall.immediatePhoneCall(
                    //   `*889*1*${pin}*2*${phone}*${amount}#`,
                    // );
                  } else {
                    throw Error();
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

  const [isFocused1, setFocused1] = useState(false);
  const [isFocused2, setFocused2] = useState(false);
  const [isFocused3, setFocused3] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>Enter</Text>
        <View style={styles.subcontainer}>
          <View>
            <TextInput
              maxLength={10}
              dense={true}
              mode="outlined"
              label="phone number"
              placeholder={isFocused1 ? '' : 'Phone Number'}
              placeholderTextColor="#9b9b9b"
              value={phone}
              error={isErr1}
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
            placeholderTextColor="#9b9b9b"
            style={styles.input}
            value={amount}
            error={isErr2}
            dense={true}
            label="Amount"
            mode="outlined"
            onFocus={() => setFocused2(true)}
            onBlur={() => setFocused2(false)}
            onChangeText={text => {
              setErr2(false);
              setAmount(text.replace(/[^0-9]/g, ''));
            }}
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

export default Cbebirrwallet;
