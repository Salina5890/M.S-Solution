import { useEffect } from 'react';

const DEFAULT_TITLE = 'M.S Solutions | Powering Businesses Through Technology';

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | M.S Solutions` : DEFAULT_TITLE;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}

export default usePageMeta;
