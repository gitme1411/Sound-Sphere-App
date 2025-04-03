import {Dimensions, Platform} from 'react-native';

// Lấy kích thước thực tế của thiết bị
const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

// Nếu trên Android, ưu tiên 'screen', còn iOS dùng 'window'
const DEVICE_WIDTH = Platform.OS === 'android' ? SCREEN_WIDTH : WINDOW_WIDTH;
const DEVICE_HEIGHT = Platform.OS === 'android' ? SCREEN_HEIGHT : WINDOW_HEIGHT;

// Kích thước thiết kế chuẩn (Figma, Sketch, Adobe XD)
const BASE_WIDTH = 375; // iPhone 11 Pro (chuẩn phổ biến)
const BASE_HEIGHT = 812; // iPhone 11 Pro

// Tính toán tỷ lệ scale
const scaleWidth = DEVICE_WIDTH / BASE_WIDTH;
const scaleHeight = DEVICE_HEIGHT / BASE_HEIGHT;
const scale = Math.min(scaleWidth, scaleHeight);

// ✅ Scale kích thước theo chiều rộng và chiều cao
const getWidth = (size: number) => Math.ceil(size * scaleWidth);
const getHeight = (size: number) => Math.ceil(size * scaleHeight);

// ✅ Scale font chữ nhưng không để quá nhỏ
const getFontSize = (size: number) => {
  const scaledSize = size * scale;
  return Math.max(scaledSize, size * 0.85); // Không nhỏ hơn 85% kích thước gốc
};

// ✅ Scale borderRadius để bo góc không quá nhỏ
const getRadius = (size: number) => Math.ceil(size * scale);

// ✅ Scale độ dày viền, không để viền quá mỏng
const getBorderWidth = (size: number) => Math.max(1, size * scale);

export const responsive = {
  getWidth,
  getHeight,
  getFontSize,
  getRadius,
  getBorderWidth,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
};
