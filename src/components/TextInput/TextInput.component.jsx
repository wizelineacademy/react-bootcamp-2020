import React, { PureComponent } from 'react';

import Input from './Input.styled';

class TextInput extends PureComponent {
  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        type={this.props.password ? 'password' : 'text'}
        data-testid="inputComponent"
        {...this.props}
      />
    );
  }
}

export default TextInput;
