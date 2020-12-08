import { useRef, useEffect, useState } from 'react';

function useInterval(callback, interval) {
  const savedCallback = useRef(() => callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    console.log(4);
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
}

export default function useResizeIframe(interval = 250) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  useInterval(() => {
    try {
      const iframe = iframeRef.current;
      const newHeight = iframe.contentWindow.document.body.scrollHeight;
      setIframeHeight(newHeight);
    } catch (_) {
      return false;
    }
  }, interval);

  return [iframeRef, iframeHeight];
}
