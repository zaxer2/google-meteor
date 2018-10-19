import React from 'react';
import { Container, Image, Menu, Label } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Menu.Item >About</Menu.Item>
            <Menu.Item >Store</Menu.Item>
            <Menu.Item position="right">Gmail</Menu.Item>
            <Menu.Item>Images</Menu.Item>
            <Menu.Item>
              <Image className="ui waffle image" src="https://2.bp.blogspot.com/-Yh4cJxF681U/V94jdCUSaSI/AAAAAAAAQMs/yqNhebQnNEUel6ZVDtbxRN_4Ia3oTVStwCLcB/s1600/Google%2BWaffle%2BIcon.png"></Image></Menu.Item>
            <Menu.Item><Label size="big" color="blue">Sign in</Label></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
