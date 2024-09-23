import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [price, setPrice] = useState(141800);
  const [quantity, setQuantity] = useState(1);
  const hanldeCalPrice = () => {
    return price * quantity;
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    if (quantity == 1) {
      alert('Quantity không thể nhỏ hơn');
      setQuantity(1);
    } else setQuantity(quantity - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Image style={styles.image} source={require('./assets/anh3.png')} />
        </View>
        <View
          style={{
            flex: 1.8,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.title_header}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.title2_header}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>141.800 đ</Text>
            <Text style={styles.price_discount}>141.800 đ</Text>
          </View>
          <View style={{ flex: 0.3, flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.buttonTangGiam}
              onPress={handleDecreaseQuantity}>
              <Text style={styles.buttonTextTangGiam}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.countText, { marginLeft: '10%' }]}>
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={handleIncreaseQuantity}
              style={[styles.buttonTangGiam, { marginLeft: '10%' }]}>
              <Text style={styles.buttonTextTangGiam}>+</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.txtQuaTang,
                { marginLeft: '20%', color: '#134FEC' },
              ]}>
              Mua sau
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, { flex: 0.2, justifyContent: 'none' }]}>
        <Text>Mã giảm giá đã lưu</Text>
        <Text
          style={[styles.txtQuaTang, { marginLeft: '10%', color: '#134FEC' }]}>
          Xem tại đây
        </Text>
      </View>
      <View style={styles.viewMaGG}>
        <View style={styles.khungMaGiamGia}>
          <View style={styles.item1MaGiamGia}></View>
          <Text style={[styles.buttonText, { marginLeft: 20, color: 'black' }]}>
            Mã giảm giá
          </Text>
        </View>
        <View
          style={{
            width: 99,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: '#0A5EB7',
                width: 99,
                height: 45,
                borderRadius: 0,
                marginLeft: '30%',
              },
            ]}>
            <Text style={styles.buttonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.1, backgroundColor: '#C4C4C4' }}></View>
      <View style={styles.style_ttinh_ttien}>
        <Text style={styles.txtQuaTang}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={[styles.txtQuaTang, { color: '#134FEC', marginLeft: '7%' }]}>
          Nhập tại đây?
        </Text>
      </View>
      <View style={{ flex: 0.1, backgroundColor: '#C4C4C4' }}></View>
      <View style={styles.style_ttinh_ttien}>
        <Text style={[styles.txtQuaTang, { fontSize: 18 }]}>Tạm tính:</Text>
        <Text style={styles.price}>{hanldeCalPrice()}đ</Text>
      </View>

      <View style={{ flex: 1.5, backgroundColor: '#C4C4C4' }}></View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={styles.style_ttinh_ttien}>
          <Text style={[styles.txtQuaTang, { fontSize: 18, color: 'gray' }]}>
            Thành tiền
          </Text>
          <Text style={styles.price}>{hanldeCalPrice()}đ</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#E53935' }]}>
            <Text style={styles.buttonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 2,
    paddingRight: 2,
    flex: 1,
    marginTop: 20,
  },
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 331,
    borderRadius: 5,
  },
  viewMaGG: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: '7%',
    marginRight: '7%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width: 104,
    height: 127,
  },
  header: {
    marginLeft: '7%',
    marginRight: '7%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title_header: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
  },
  title2_header: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
  },
  price: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    color: '#EE0D0D',
  },
  price_discount: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  txtQuaTang: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
  },
  style_ttinh_ttien: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '7%',
    marginRight: '7%',
  },
  buttonTangGiam: {
    width: 14.22,
    height: 16,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonTextTangGiam: {
    width: 2.18,
    height: 8,
    fontWeight: 'bold',
    color: 'black',
    top: -7,
    left: -2,
  },

  countText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
  },

  khungMaGiamGia: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 45,
    borderWidth: 1,
  },

  item1MaGiamGia: {
    marginLeft: 20,
    backgroundColor: '#F2DD1B',
    width: 32,
    height: 16,
  },
});
