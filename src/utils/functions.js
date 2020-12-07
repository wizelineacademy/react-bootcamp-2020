import { storage } from './storage';

export const formatDate = (
  date,
  options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
) => {
  const formatedDate = new Date(date);
  return formatedDate.toLocaleDateString('en-US', options);
};

export const setURLKeywords = (keywords) => {
  if (Array.isArray(keywords)) {
    let keywordParams = '&q=';
    keywords.forEach((item, index) => {
      keywordParams += index === keywords.length - 1 ? item : `${item}+`;
    });
    return keywordParams;
  }
};

export const arrayEqualsTo = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    return arr1.join(' ') === arr2.join(' ');
  }
};

export const isVideoFavorite = (id) => {
  return storage.get('favorites').includes(id);
};
