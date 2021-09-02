import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import styles from '../styles/style';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {TextInput, Button} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import * as yup from 'yup';
let schema = yup.object().shape({
  account: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
const useState = React.useState;

function Wegtransfertoanotherbank({navigation, route}) {
  const [pin, setPin] = useState();
  const [account, setAccount] = useState();

  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const Banks = [
    'Berhan International Bank',
    'Bank of Abyssinia',
    'Cooperative Bank of Oromia',
    'Abay Bank',
    'Zemen Bank',
    'Wegagen Bank',
    'Awash International Bank',
  ];
  const [item, setItem] = useState();
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
        .then(({account, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  RNImmediatePhoneCall.immediatePhoneCall(
                    `*889*1*${pin}*4*5*5*3*1*${
                      item == 7 ? '7*1' : item
                    }*${account}#`,
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
                      `*889*1*${pin}*4*5*5*3*1*${
                        item == 7 ? '7*1' : item
                      }*${account}#`,
                    );
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
            if (element.includes('account')) {
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
          <SelectDropdown
            data={Banks}
            buttonStyle={{borderRadius: 5, width: '95%', alignSelf: 'center'}}
            style={{width: 9000}}
            onSelect={(selectedItem, index) => setItem(index + 1)}
          />

          <View>
            <TextInput
              placeholder={isFocused1 ? '' : 'Account'}
              placeholderTextColor="#9b9b9b"
              error={isErr1}
              label="Account"
              mode="outlined"
              dense={true}
              value={account}
              onFocus={() => setFocused1(true)}
              onBlur={() => setFocused1(false)}
              maxLength={15}
              onChangeText={text => {
                setErr1(false);
                setAccount(text.replace(/[^0-9]/g, ''));
              }}
              style={styles.input}
            />
          </View>

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

export default Wegtransfertoanotherbank;
