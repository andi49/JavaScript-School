import { animate, stagger, splitText, steps } from 'https://esm.sh/animejs';

const { chars } = splitText('h2', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
  
  },
 y: '100cqh',
  duration: 1000,
  ease: 'outBounce'
});