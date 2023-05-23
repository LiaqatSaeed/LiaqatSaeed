import { useState, useEffect } from 'react';

export enum Direction {
  Up = "up",
  Down = "down",
  null = 'null'
}

export const useScrollDirection = () =>  {
  const [scrollDirection, setScrollDirection] = useState(Direction.null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction: Direction = scrollY > lastScrollY ? Direction.Down : Direction.Up;
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return {direction: scrollDirection};
}
