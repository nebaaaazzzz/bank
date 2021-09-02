import * as React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {TextInput, Button} from 'react-native-paper';
import styles from '../styles/style';
import SelectDropdown from 'react-native-select-dropdown';
import * as yup from 'yup';
const useState = React.useState;
let schema = yup.object().shape({
  cardno: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
function Wegdstvpayment({route}) {
  const [pin, setPin] = useState();
  const [cardno, setCardno] = useState();
  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);
  const Banks = [
    'Pay CUrrent Package',
    'PREMIUM',
    'MEDIA PLUS',
    'MEDA',
    'BETESEB',
    'GOJO',
    'FRENCH TOUCH ADD-ON',
    'FRENCH PLUS ADD-ON',
    'ASIA ADD-ON',
    'ASIA STANDALONE',
    'PREMIUM plus ASIA',
    'HDPVR',
  ];
  const [item, setItem] = useState();
  const onSubmit = () => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            cardno,
          },
          {
            abortEarly: false,
          },
        )
        .then(({cardno, pin}) => {
          PermissionsAndroid.check('android.permission.CALL_PHONE')
            .then(bool => {
              if (bool) {
                try {
                  RNImmediatePhoneCall.immediatePhoneCall(
                    `*889*1*${pin}*4*5*1*5*5*${
                      item >= 7 ? '7*' + (item - 6) : item
                    }*${cardno}#`,
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
                      `*889*1*${pin}*4*5*1*5*5*${
                        item >= 7 ? '7*' + (item - 6) : item
                      }*${cardno}#`,
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
            if (element.includes('cardno')) {
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
            onSelect={(selectedItem, index) => {
              setItem(index + 1);
            }}
          />
          <TextInput
            placeholder={isFocused1 ? '' : 'DSTV Smartcard Number'}
            error={isErr1}
            dense={true}
            label="DSTV Smartcard Number"
            mode="outlined"
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            value={cardno}
            onChangeText={text => {
              setErr1(false);
              setCardno(text.replace(/[^0-9]/g, ''));
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

export default Wegdstvpayment;
