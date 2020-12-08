import styled from 'styled-components';

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: ${(props) => props.theme.primary_title_weight};
    margin-bottom: 5px;
    text-align: left;
    font-size: ${(props) => props.theme.primary_text_size};
    color: #030303;
  }
  input {
    padding: 5px 12px;
    font-size: ${(props) => props.theme.primary_text_size};
    line-height: 20px;
    border: ${(props) => props.theme.primary_text_input_border};
    border-radius: 6px;
    margin-top: 5px;
    margin-bottom: 15px;
    outline: none;
  }

  input:focus {
    border: 1px solid #606060;
  }
`;
