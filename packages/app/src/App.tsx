import React from 'react';
import { Image, ImageSourcePropType, Platform, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AsyncStorageExample } from './AsyncStorageExample';
import { subplatform } from './config';
import LogoSrc from './logo.png';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
  environment: `${Platform.OS}-${subplatform ? `${subplatform}-` : ''}${__DEV__ ? 'development' : 'production'}`,
  autoSessionTracking: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
});

const App = (): JSX.Element => {
  const platformValue = subplatform ? `${Platform.OS} (${subplatform})` : Platform.OS;
  return (
    <SafeAreaView style={styles.root}>
      {/* On React Native for Web builds coming from CRA, TypeScript 
          complains about the image type, so we cast it as a workaround  */}
      <Image style={styles.logo} source={LogoSrc as ImageSourcePropType} />
      <Text style={styles.text}>Hello from React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{platformValue}</Text>
        </View>
      </View>
      <AsyncStorageExample />
      <Button
        onPress={() => {
          throw new Error('My first Sentry error!');
        }}
        title="Throw JS Error"
      />
      <Button onPress={() => Sentry.nativeCrash()} title="Throw Native Error" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
  platformRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  platformBackground: {
    backgroundColor: '#ececec',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d4d4d4',
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
});

export default Sentry.wrap(Sentry.withTouchEventBoundary(App, {}));
