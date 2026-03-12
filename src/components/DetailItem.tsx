import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DetailItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  label: {
    fontSize: 12,
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: '#2D3748',
    fontWeight: '500',
  },
});

export default DetailItem;
