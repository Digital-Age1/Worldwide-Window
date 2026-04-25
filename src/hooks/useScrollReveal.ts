import { useEffect, useRef, RefObject } from 'react';

type RevealClass = 'reveal' | 'reveal-left' | 'reveal-right';

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  className: RevealClass = 'reveal',
  threshold = 0.15
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(className);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
}
