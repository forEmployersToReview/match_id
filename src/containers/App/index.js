// Modules
import React, { Component } from 'react';
import axios from 'axios';

// Components
import Container from '../../components/Container/';
import H2 from '../../components/H2/';
import Input from '../../components/Input/';
import Button from '../../components/Button/';
import RenderValidation from '../../components/RenderValidation';
import Section from '../../components/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possible_id: '',
      validated_response: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { possible_id } = this.state;
    if (possible_id.length >= 6) {
      return axios
        .post('/api/validate_id', { id: possible_id })
        .then(response => {
          this.setState({ validated_response: response.data });
        })
        .catch(error_msg => {
          const responseMSG = JSON.stringify(error_msg);
          const parsedMSG = JSON.parse(responseMSG).response.data;

          this.setState({ validated_response: parsedMSG });
        });
    }
    return;
  }

  render() {
    const { possible_id, validated_response } = this.state;
    return (
      <Container containerStyle="ds-container">
        <Section sectionStyle="ds-wrapper">
          <H2 h2Style="ds-title">Participant Search</H2>
          <Section sectionStyle="ds-button-wrapper">
            <Input
              handleChange={e => this.setState({ possible_id: e.target.value })}
              value={possible_id}
              inputStyle="ds-input-style"
              textLabel="Participant ID"
            />
            <Button
              handleClick={this.handleClick}
              buttonStyle="ds-search-button"
            >
              Search
            </Button>
          </Section>
        </Section>
        <RenderValidation responseStatus={validated_response} />
      </Container>
    );
  }
}

export default App;
