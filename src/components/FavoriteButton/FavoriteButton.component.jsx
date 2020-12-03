import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function FavoriteButton({ isFavorite, handleClick }) {
  return (
    <Button
      type={isFavorite ? 'dashed' : 'primary'}
      shape="round"
      icon={isFavorite ? <MinusCircleOutlined /> : <PlusCircleOutlined />}
      size="large"
      onClick={handleClick}
    >
      {isFavorite ? 'Remove to Favorites' : 'Add to Favorites'}
    </Button>
  );
}

export default FavoriteButton;
