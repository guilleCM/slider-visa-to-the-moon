import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  if (typeof window !== 'undefined') {
    const mediaMatch = window.matchMedia(query);
    const [ matches, setMatches ] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = (e) => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  }
  return false;
};

export default useMediaQuery;
