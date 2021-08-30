import * as React from 'react';
import {Text, SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import SelectDropdown from 'react-native-select-dropdown';
import {TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
let schema = yup.object().shape({
  amount: yup.number().required().positive().integer(),
  pin: yup.number().required().positive().integer().min(1000).max(9999),
});
const useState = React.useState;
function Cbedonation() {
  const [pin, setPin] = useState();
  const [amount, setAmount] = useState();

  const [isErr1, setErr1] = useState(false);
  const [isErr2, setErr2] = useState(false);

  const Banks = ['COvid-19 Donation', 'Olympic Team Donation'];
  const [item, setItem] = useState();
  const onSubmit = ({amount, pin}) => {
    requestAnimationFrame(() => {
      schema
        .validate(
          {
            pin,
            amount,
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
                    `*889*1*${pin}*5*5*${item}*${account}#`,
                  );
                  // RNImmediatePhoneCall.immediatePhoneCall(
                  //   `*889*1*${pin}*4*5*3*${item}*${account}#`,
                  // );
                } catch (e) {
                  throw e;
                }
              } else {
                PermissionsAndroid.request(
                  'android.permission.CALL_PHONE',
                ).then(status => {
                  if (status === 'granted') {
                    RNImmediatePhoneCall.immediatePhoneCall(
                      `*889*1*${pin}*5*5*${item}*${account}#`,
                    );
                  } else {
                    Alert.alert('pls allow');
                  }
                });
              }
            })
            .catch(err => {
              console.log('error');
            });
        })
        .catch(err => {
          err.errors.forEach(element => {
            console.log(element);
            if (element.includes('amount')) {
              setErr1(true);
            } else if (element.includes('pin')) {
              setErr2(true);
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
            placeholder={isFocused1 ? '' : 'Amount'}
            value={amount}
            mode="outlined"
            label="Amount"
            dense={true}
            error={isErr1}
            onFocus={() => setFocused1(true)}
            onBlur={() => setFocused1(false)}
            onChangeText={text => {
              setErr1(false);
              setAmount(text.replace(/[^0-9]/g, ''));
            }}
            placeholderTextColor="#9b9b9b"
            style={styles.input}
          />
          <TextInput
            placeholder={isFocused2 ? '' : 'PIN'}
            maxLength={4}
            label="PIN"
            error={isErr2}
            secureTextEntry
            dense={true}
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

export default Cbedonation;
