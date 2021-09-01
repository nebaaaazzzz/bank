import * as React from 'react';
import {ScrollView, SafeAreaView, View, StyleSheet} from 'react-native';
i;
import {SliderBox} from 'react-native-image-slider-box';
import {Button} from 'react-native-paper';
const images = [
  require('./../../src/cbescreenshoot/1.jpg'),
  require('./../../src/cbescreenshoot/2.jpg'),
  require('./../../src/cbescreenshoot/3.jpg'),
];
function Cbeslideshow({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    subcontainer: {
      flex: 1,
      flexDirection: 'row',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginBottom: '60%'}}>
          <View style={{alignContent: 'center', marginTop: 10}}>
            <SliderBox
              autoplay
              circleLoop
              images={images}
              activeOpacity={0.5}
              ImageComponentStyle={{
                borderRadius: 15,
                width: '87%',
                marginTop: 5,
              }}
            />
            <Button
              icon="camera"
              mode="contained"
              style={{
                width: '87%',
                height: '17%',
                borderRadius: 0,
                alignSelf: 'center',
                margin: 5,
              }}
              onPress={() => navigation.navigate('Cbehome')}>
              Press me
            </Button>
          </View>
          <View style={{alignContent: 'center'}}>
            <SliderBox
              autoplay
              circleLoop
              images={images}
              activeOpacity={0.5}
              ImageComponentStyle={{
                borderRadius: 15,
                width: '87%',
                marginTop: 5,
              }}
            />
            <Button
              icon="camera"
              mode="contained"
              style={{
                width: '87%',
                height: '17%',
                borderRadius: 0,
                margin: 5,
                alignSelf: 'center',
              }}
              onPress={() => navigation.navigate('Cbehome')}>
              Press me
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cbeslideshow;
