import React from 'react';
import { ActivityIndicator } from 'react-native';

type Props = {
  size?: 'small' | 'large';
};

export const LoadingSpinner = ({ size }: Props) => <ActivityIndicator size={size} />;
