import inject from '@rollup/plugin-inject';

export default {
  external: ['src/js/jquery-3.3.1.min.js'],
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
