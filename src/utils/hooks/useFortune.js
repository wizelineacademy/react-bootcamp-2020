import { useState, useEffect } from 'react';

import { random } from '../fns';

const API_URL = 'http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10';

function useFortune() {
  const [fortune, setFortune] = useState(null);

  useEffect(() => {
    async function findMyFortune() {
      try {
        const response = await fetch(API_URL);
        const fortuneCookies = await response.json();

        const randomIndex = random(fortuneCookies.length);
        const currentFortune = fortuneCookies[randomIndex];

        setFortune(currentFortune.message);
      } catch (error) {
        console.error('Bad fortune: ', error);
      }
    }

    findMyFortune();
  }, []);

  return { fortune };
}

export { useFortune };
