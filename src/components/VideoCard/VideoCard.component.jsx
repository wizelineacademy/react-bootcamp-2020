import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router';

import {
  Card,
  CardContainer,
  CardImage,
  CardContent,
  Title,
  Description,
} from './VideoCard.styles';



export default function VideoCard({video:{id,description,image,title}}){
  const { theme } = useContext(ThemeContext);
  const history = useHistory();
  const openVideoPage = () => {
    history.push(`/watch/${id}`);
  };

  return  (
    <Card theme={theme}>
      <CardContainer onClick={openVideoPage}>
        <CardImage src={ image} alt={title} />
        <CardContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardContent>
      </CardContainer>
    </Card>
  ) 
    
}
