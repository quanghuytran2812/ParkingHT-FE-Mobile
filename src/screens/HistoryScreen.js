// ParkingHistoryPage.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Display } from '../utils';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors, Images } from "../contants";

const HistoryScreen = ({navigation}) => {
  return (
    <>
      <View style={{ position: 'absolute', paddingTop: 55, flexDirection: 'row', alignItems: 'center', zIndex: 999 }}>
        <Ionicons
          name="arrow-back-outline" size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ paddingLeft: 10, fontSize: 20, fontWeight: 700 }}>Lịch sử thanh toán</Text>
      </View>
      <View style={styles.wrapperParking}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.containerArea}>
            <TouchableOpacity style={styles.AreaName}>
              <Text style={styles.TextAreaName}>
                đang diễn ra
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Completed')}
            style={styles.AreaName}>
              <Text style={styles.TextAreaName}>
                hoàn thành
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Canceled')}
            style={styles.AreaName}>
              <Text style={styles.TextAreaName}>
                đã hủy bỏ
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.MainCont}>
          <View style={styles.durationBox}>
            <View style={styles.durationTextContainer}>
              <View>
                <Image
                style={{borderRadius:10}}
                source={Images.BENXE1}
                />
              </View>

              <View style={{ paddingLeft: 15 }}>
                <Text style={styles.selectedDateTime}>
                  Bến xe Trung Tâm Đà Nẵng
                </Text>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.selectedDateTime}>
                    Vị trí đổ : A09
                  </Text>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.selectedDateTime}>
                    34.000 VND / 2 hour
                  </Text>
                  <View>
                    <Text style={{ color: 'blue', paddingLeft: 20 }}>
                     đang hoạt động
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.MainCont}>
          <View style={styles.durationBox}>
            <View style={styles.durationTextContainer}>
              <View>
              <Image
                style={{borderRadius:10}}
                source={Images.BENXE1}
                />
              </View>

              <View style={{ paddingLeft: 15 }}>
                <Text style={styles.selectedDateTime}>
                  Bến xe Trung Tâm Đà Nẵng
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.selectedDateTime}>
                    Vị trí đổ : A07
                  </Text>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.selectedDateTime}>
                    17.000 VND / 1 hour
                  </Text>
                  <View>
                    <Text style={{ color: Colors.DEFAULT_GREEN, paddingLeft: 50 }}>
                      đã trả xe
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    paddingLeft: 15
  },
  containerArea: {
    flexDirection: 'row',
  },
  AreaName: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginBottom: 12,
    paddingLeft: 20,
    paddingRight: 20
  },
  TextAreaName: {
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
    color: "#000",
    fontWeight: "bold",
  },
  MainCont: {
    flex: 1,
    padding: 8,
  },
  durationBox: {
    flexDirection: 'row',
    backgroundColor: Colors.DEFAULT_GREY,
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 16,
    marginBottom: 25,
    elevation: 5,
  },
  durationTextContainer: {
    flexDirection: 'row',
  },
  wrapperParking:{
    marginTop:80
  }
});

export default HistoryScreen;
