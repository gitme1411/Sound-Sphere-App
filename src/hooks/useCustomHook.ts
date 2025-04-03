import {useEffect, useRef, useCallback} from 'react';
import {BackHandler, useColorScheme, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useBackHandler = (handler: () => boolean) => {
  const navigation = useNavigation();

  useEffect(() => {
    // ✅ Android: Lắng nghe nút back vật lý
    if (Platform.OS === 'android') {
      const backAction = () => handler();
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }

    // ✅ iOS: Lắng nghe sự kiện điều hướng
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      const shouldPrevent = handler();
      if (shouldPrevent) e.preventDefault();
    });

    return unsubscribe;
  }, [handler, navigation]);
};

/** 🔹 useDebounce - Trì hoãn cập nhật giá trị */
export const useDebounce = <T>(value: T, delay = 500): T => {
  const debouncedValue = useRef<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedValue.current = value;
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue.current;
};

/** 🔹 useFocusEffect - Chạy callback khi màn hình focus */
export const useFocusEffect = (callback: () => void) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', callback);
    return unsubscribe;
  }, [navigation, callback]);
};

/** 🔹 useTheme - Chuyển đổi Dark/Light mode */
export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDarkModeRef = useRef(colorScheme === 'dark');

  const toggleTheme = useCallback(() => {
    isDarkModeRef.current = !isDarkModeRef.current;
  }, []);

  return {
    isDarkMode: isDarkModeRef.current,
    toggleTheme,
  };
};
