import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProfileInfoItemProps {
  label: string;
  value: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  isDefaultValue?: boolean;
}

const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({ label, value, icon, isDefaultValue }) => {
  return (
    <View style={styles.container} testID="profile-info-item">
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={icon} size={24} color="#4A5568" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, isDefaultValue && styles.defaultValue]}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F7FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#718096',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#2D3748',
    fontWeight: '600',
  },
  defaultValue: {
    color: '#A0AEC0',
    fontStyle: 'italic',
    fontWeight: '400',
  },
});

export default ProfileInfoItem;
