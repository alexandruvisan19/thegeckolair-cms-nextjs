import * as React from 'react';
import styles from './Logo.module.scss';

const SvgComponent = () => (
  <svg
    className={styles.logo}
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 162 27"
    xmlSpace="preserve"
    width="162"
    height="48"
  >
    <style>{'.st2{fill:#5385c4;stroke:#000;stroke-width:.25;stroke-miterlimit:10}.st3{fill:#2c2b27}'}</style>
    <path
      d="M32.3 37.6H5.7c-3 0-5.4-2.4-5.4-5.4V5.6C.3 2.6 2.7.2 5.7.2h26.6c3 0 5.4 2.4 5.4 5.4v26.6c0 3-2.4 5.4-5.4 5.4z"
      style={{
        fill: '#5c5aa7',
      }}
    />
    <path
      d="M17.9 20.8c.2-.4.3-.9.6-1.5.6.7 1 1.2 1.6 2-.5.2-1 .4-1.1.4-.4 1-.9 1.7-1.1 2.6-.2.7-.1 1.5-.1 2.3.8 0 1.7.3 2.3 0 1.9-1 2.5-3.2 1.6-5.6-.8-2-2.8-3.2-5-2.8-3.2.6-5.7 2.2-6.6 5.4-.9 2.9-.3 5.6 2 7.7 2.6 2.3 5.7 2.9 8.9 1.7 3.9-1.4 6.9-5.9 7-10.2.1-4.7-2.4-8.8-6.5-10.6-1.5-.7-3.1-1.3-4.6-2.1-1.8-1-2.5-2.4-2.1-4.2.3-1.6 1.7-2.6 3.6-2.7 2.5-.3 3-.2 3.7.8 1.5-1.3-.2-2.3-.4-3.4 1.8.2 2.8 2.3 1.5 3.7-.8.8-2.1 1.1-3.2 1.7-.5.3-1.1.4-1.7.7.5.5.9 1.2 1.5 1.5 1.9 1.1 4.1 1.8 5.9 3.1 4.6 3.3 6.5 9.1 5.1 14.8-1.5 6.1-5.8 10.4-11.5 11.1-4.7.6-8.7-1.2-11.5-5.1C5.3 28.5 5 24.6 7 20.8c2.3-4.1 5.8-6.4 10.6-6.4 3.5 0 6.5 2.5 7.7 6.1 1 3.3-.2 7.3-3 9.3-2.3 1.7-6.3 1-8.2-1.3-1.6-2-1.5-4.8.5-6.5.8-.7 1.9-1 2.9-1.5.2.1.3.2.4.3z"
      style={{
        fill: '#5385c4',
        stroke: '#010101',
        strokeWidth: 0.5,
        strokeMiterlimit: 10,
      }}
    />
    <path
      className="st2"
      d="M64.9.7c.7-.1 1.3-.1 2.1-.2v5.7c.2.2.4.3.6.5.1-.3.1-.8.4-1 1.7-1.6 3.9-1.2 4.7 1.1.4 1.3.5 2.8.5 4.2.1 2.1 0 4.3 0 6.6-.7 0-1.4-.1-2.2-.1v-6.9c0-.8.1-1.7-.2-2.4-.3-.7-1-1.6-1.6-1.6-.6 0-1.6.8-1.8 1.4-.3 1.5-.3 3-.4 4.6-.1 1.6 0 3.2 0 5-.8-.1-1.4-.1-2.1-.1V.7zM77.6 12c.6 3.4 1.8 4.2 4.6 3.4.5 1.4 0 2.1-1.5 2.1h-.9c-2.4-.3-3.9-1.9-4.4-4.7-.7-3.7.3-6.7 2.4-7.7 1.5-.7 3-.7 4.3.5 1.2 1.1 1.5 2.5 1 4-.5 1.6-1.8 2.2-3.4 2.3-.6.2-1.3.1-2.1.1zm0-1.8c2.2.5 3.2.1 3.4-1.3.1-1.1.1-2.2-1.3-2.5-1.3-.2-2.1 1.2-2.1 3.8zM59.5 2.5c0 1.1.1 1.9.1 2.8h3.1v1.9h-3.1c0 2.5-.1 4.8 0 7.2.2 2.1 1.8 1.2 3 1.1.5 1.3 0 1.9-1.3 2-2.4.3-4-.8-4-3.3-.1-3.3 0-6.6-.1-9.9 0-1.7 1.1-1.4 2.3-1.8z"
    />
    <path
      className="st3"
      d="M49 30.9v-2.3c-1 1.4-2.1 2.2-3.5 2.2-1.7 0-3-.7-4-2.1s-1.4-3.4-1.4-6c0-2.5.5-4.5 1.4-6s2.2-2.2 3.8-2.2c1.4 0 2.6.7 3.6 2.2h.1V15h5v14.7c0 1.3-.2 2.6-.7 3.8-.5 1.2-1.3 2.2-2.5 2.8s-2.5 1-4 1c-1.4 0-2.8-.4-4-1.2-1.3-.8-2.1-2.1-2.5-3.9h4.5c.5.8 1.2 1.2 1.9 1.2s1.2-.3 1.7-.8c.4-.3.6-.9.6-1.7zm0-7.7c0-2.6-.6-3.8-1.9-3.8-.6 0-1.1.3-1.5.9-.4.6-.6 1.5-.6 2.6 0 2.9.7 4.3 2 4.3 1.4 0 2-1.3 2-4zM64.7 30.6h4.2c-.8 3.6-2.8 5.3-6 5.3-2 0-3.6-.8-4.8-2.3-1.2-1.5-1.8-3.6-1.8-6.3 0-2.5.6-4.5 1.8-6 1.2-1.5 2.7-2.3 4.7-2.3 1.2 0 2.3.4 3.4 1.1 1.1.7 1.9 1.7 2.4 2.9s.8 3.1.8 5.7H61c.1 2.4.7 3.5 2 3.5.4 0 .8-.2 1.1-.5.3-.2.5-.6.6-1.1zM61.1 26h3.6c0-1.1-.2-1.9-.5-2.5-.3-.5-.7-.8-1.3-.8-.7 0-1.1.3-1.4.8-.3.5-.4 1.3-.4 2.5zM81.9 30.6v4.1c-1.2.8-2.4 1.2-3.6 1.2-1.8 0-3.2-.8-4.3-2.3-1.1-1.5-1.6-3.6-1.6-6.2 0-2.5.6-4.5 1.7-6s2.5-2.3 4.3-2.3c1.2 0 2.4.4 3.6 1.3v4.1c-.7-.4-1.3-.5-1.8-.5-.8 0-1.5.3-1.9 1-.5.6-.7 1.5-.7 2.6s.2 2 .7 2.7c.5.7 1.1 1 2 1 .3-.2.9-.4 1.6-.7zM85.8 11.2h5v14.1h.1l3.4-5.6h6l-5.1 7.1 5.2 8.7h-5.8l-3.7-7.7h-.1v7.7h-5V11.2zM108 19c2.3 0 4 .8 5.2 2.3 1.2 1.5 1.8 3.6 1.8 6.3 0 2.7-.6 4.7-1.9 6.2-1.2 1.5-3 2.2-5.1 2.2-2.1 0-3.8-.7-5-2.2-1.2-1.5-1.8-3.5-1.8-6.1 0-2.7.6-4.8 1.8-6.3 1.1-1.6 2.8-2.4 5-2.4zm0 12.5c.7 0 1.1-.3 1.5-.9.3-.6.5-1.6.5-3.1s-.2-2.5-.5-3.1c-.3-.6-.8-.9-1.4-.9-.6 0-1.1.3-1.4.9-.3.6-.5 1.6-.5 3.1-.1 2.7.6 4 1.8 4zM118.1 11.2h5v24.2h-5V11.2zM134.9 35.1V33h-.1c-.6.9-1.2 1.6-1.8 2-.6.4-1.2.6-2 .6-1.5 0-2.7-.8-3.6-2.3-.9-1.5-1.3-3.6-1.3-6.3 0-2.5.5-4.6 1.4-6.1.9-1.5 2.1-2.3 3.6-2.3.8 0 1.5.2 2 .6.6.4 1.1 1 1.7 1.9h.1v-2h5v15.8h-5zm0-7.7c0-2.6-.6-3.9-1.9-3.9-1.3 0-1.9 1.3-1.9 3.9 0 2.7.7 4.1 2 4.1 1.2 0 1.8-1.3 1.8-4.1zM143.8 19.6h5v15.8h-5V19.6zM157.6 19.6v2.7h.1c1.2-2.1 2.4-3.1 3.8-3.1.2 0 .5 0 .8.1v4.9c-.6-.1-1.2-.2-1.7-.2-1.8 0-2.8 1.2-2.8 3.6v7.9h-5V19.6h4.8z"
    />
    <circle
      cx={146.3}
      cy={12.8}
      r={3.7}
      style={{
        fill: '#5c5aa7',
        stroke: '#000',
        strokeWidth: 0.25,
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);

export default SvgComponent;
