module.exports = function(api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow"
  ];
  const plugins = [["babel-plugin-styled-components", { ssr: true }]];

  return {
    presets,
    plugins
  };
};
