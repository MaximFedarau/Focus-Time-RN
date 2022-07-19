module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: './',
          alias: {
            '@constants': './constants',
            '@screens': './screens',
            '@components': './components',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
