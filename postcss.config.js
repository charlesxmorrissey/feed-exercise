module.exports = {
  plugins: {
    'postcss-custom-properties': {
      importFrom: './src/styles/globals.css',
      preserve: false,
    },
    'postcss-normalize': {
      forceImport: false,
    },
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}
