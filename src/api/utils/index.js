export const getURLWithKey = () => {
  const url = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;

  if (!url) {
    console.log('[URL] Undefined');
  }

  if (!key) {
    console.log('[API_KEY] Undefined');
  }

  return `${ url }?key=${ key }`;
};