import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 600px;
  max-width: 80%;
  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    text-align: center;
    color: ${({ theme }) => theme.colors.darkgreen};
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export default FormWrapper;
