import React from 'react';
import 'react-native-gesture-handler';

import AppNavigator from './navigation';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return <AppNavigator />;
};

export default App;
