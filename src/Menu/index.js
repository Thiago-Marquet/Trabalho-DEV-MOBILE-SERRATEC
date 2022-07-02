import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MenuMain = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Menu
            style={{}}
            statusBarHeight={10}
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu} style={{backgroundColor: 'red'}}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MenuMain;