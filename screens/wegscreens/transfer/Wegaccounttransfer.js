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
import styles from '../styles/style';
import {TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
const useState = React.useState;

let schema = yup.object().shape({
  account: yup.number().required().positive().integer(),
  amount: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});

function Cbeaccounttransfer({route}) {
  const [pin, setPin] = useState();
  const [account, setAccount] = useState();
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
            account,
            amount,
          },
          {
            abortEarly: false,
          },
        )
        .then(({account, amount, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  RNImmediatePhoneCall.immediatePhoneCall(
                    `*889*1*${pin}*2*1*${account}*1*${amount}#`,
                  );
                } catch (e) {
                  throw e;
                }
              } else {
                PermissionsAndroid.request(
                  'android.permission.CALL_PHONE',
                ).then(status => {
                  if (status === 'granted') {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*2*1*${account}*1*${amount}#`,
                    );
                  } else {
                    throw new Error('not Granted');
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
            if (element.includes('account')) {
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
              mode="outlined"
              label="Account Number"
              error={isErr1}
              dense={true}
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
            dense={true}
            error={isErr3}
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
            size={50}
            style={styles.btn}
            icon="phone">
            Continue
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cbeaccounttransfer;
