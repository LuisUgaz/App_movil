import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getBadgeStyle = () => {
    switch (status.toLowerCase()) {
      case 'activo':
      case 'en producción':
        return styles.activeBadge;
      case 'en pausa':
      case 'detenido':
        return styles.pausedBadge;
      case 'en desarrollo':
        return styles.developmentBadge;
      default:
        return styles.defaultBadge;
    }
  };

  const getTextStyle = () => {
    switch (status.toLowerCase()) {
      case 'activo':
      case 'en producción':
        return styles.activeText;
      case 'en pausa':
      case 'detenido':
        return styles.pausedText;
      case 'en desarrollo':
        return styles.developmentText;
      default:
        return styles.defaultText;
    }
  };

  return (
    <View style={[styles.container, getBadgeStyle()]} testID="status-badge">
      <Text style={[styles.text, getTextStyle()]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  activeBadge: {
    backgroundColor: '#E6FFFA',
    borderWidth: 1,
    borderColor: '#38B2AC',
  },
  activeText: {
    color: '#2C7A7B',
  },
  pausedBadge: {
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#FC8181',
  },
  pausedText: {
    color: '#C53030',
  },
  developmentBadge: {
    backgroundColor: '#EBF8FF',
    borderWidth: 1,
    borderColor: '#4299E1',
  },
  developmentText: {
    color: '#2B6CB0',
  },
  defaultBadge: {
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E0',
  },
  defaultText: {
    color: '#4A5568',
  },
});

export default StatusBadge;
