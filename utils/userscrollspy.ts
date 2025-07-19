import { useEffect } from 'react';

const useScrollSpy = (sectionIds: string[]) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              if (id === 'home' || id === 'hero' || id === 'herosection') {
                history.replaceState(null, '', '#home');
                window.dispatchEvent(new CustomEvent('hero-in-view', { detail: true }));
              } else {
                history.replaceState(null, '', `#${id}`);
                window.dispatchEvent(new CustomEvent('hero-in-view', { detail: false }));
              }
            }
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
};

export default useScrollSpy;
