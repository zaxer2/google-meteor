import React from 'react';
import { Image, Grid, Container, Input, Label } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
        <Container className="midthing">
          <Grid centered verticalAlign="middle" >
            <Grid.Row>
              <Grid.Column >
                <Image centered size="medium"
                       src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></Image>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Input fluid icon='microphone'/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column textAlign="right">
                <Label size="medium" color="gray">Google Search</Label>
              </Grid.Column>
              <Grid.Column textAlign="left">
                <Label size="medium" color="gray">I'm Feeling Lucky</Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                Google AI: <a href = "http://reddit.com/r/diabetes">Helping doctors prevent blindness in diabetics</a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>


    );
  }
}
