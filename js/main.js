requirejs.config({
  urlArgs: 'bust=' + new Date().getTime(),
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery-1.9.1'
  }
});
