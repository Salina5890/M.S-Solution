import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/firebase';

export function useAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Exclude admin dashboard from public visitor metrics
    if (location.pathname.startsWith('/admin')) return;

    trackPageView(location.pathname);
  }, [location.pathname]);
}

export default useAnalyticsTracker;

