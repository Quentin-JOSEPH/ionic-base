declare var require: any;

export const environment = {
  production: true,
  API_URL: "http://localhost:8100/api/",// TODO : change
  appVersion: require('../../package.json').version,
};
