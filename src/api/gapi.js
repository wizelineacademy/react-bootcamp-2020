export async function initGoogle() {
  await new Promise((res, rej) => {
    window.gapi.load('client', { callback: res, onerror: rej });
  });

  window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_KEY);

  const x = await window.gapi.client.load('youtube', 'v3');
  window.gapi.load('client:auth2', x);
}
