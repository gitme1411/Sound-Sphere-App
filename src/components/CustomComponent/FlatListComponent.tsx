import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
  View,
  Text,
  StyleSheet,
  ListRenderItem,
} from 'react-native';

interface FlatListComponentProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  loading?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  ListEmptyMessage?: string;
  contentContainerStyle?: any;
  showsVerticalScrollIndicator?: boolean;
}

function FlatListComponent<T>({
  data,
  renderItem,
  keyExtractor,
  loading = false,
  refreshing = false,
  onRefresh,
  onEndReached,
  ListEmptyMessage = 'Không có dữ liệu',
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
}: FlatListComponentProps<T>) {
  const renderFooter = () =>
    loading ? (
      <View style={styles.footer}>
        <ActivityIndicator size="small" />
      </View>
    ) : null;

  const renderEmpty = () =>
    !loading && data.length === 0 ? (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>{ListEmptyMessage}</Text>
      </View>
    ) : null;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  empty: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    color: '#999',
    fontSize: 14,
  },
});

export default FlatListComponent;
