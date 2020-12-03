import React from 'react';

export default () => {
  function getRandomElements(arr, n) {
    const len = arr.length;
    const result = new Array(n);
    let counter = n;
    while (counter) {
      counter -= 1;
      result[counter] = arr[Math.floor(Math.random() * len)];
    }
    return result;
  }
  const suggestedSearchesElements = [
    'bts',
    'pewdiepie',
    'asmr',
    'billie eilish',
    'baby shark',
    'badabun',
    'blackpink',
    'old town road',
    'music',
    'peliculas completas en español',
    'fortnite',
    'pewdiepie vs t series',
    'minecraft',
    'senorita',
    'ariana grande',
    'alan walker',
    'tik tok',
    'musica',
    'bad bunny',
    'wintergatan marble machine',
    'mantis shrimp',
    'diresta tool drawer',
    'markiplier',
    'old town road',
    'jacksepticeye',
    'dantdm',
    'game grumps',
    'cnn',
    'wwe',
    'lofi',
  ];

  const randomSuggestedSearchesElements = getRandomElements(suggestedSearchesElements, 4);
  const elements = randomSuggestedSearchesElements.map((value) => (
    <span key={value}>{value}</span>
  ));
  return elements;
};
