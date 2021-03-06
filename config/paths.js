'use strict';

const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  swSrc: resolveModule(resolveApp, 'src/service-worker'),
  publicUrlOrPath,

  appAirConditionIndexJs : resolveModule(resolveApp, 'src/component/pages/airCondition/index'),
  appAirConditionHtml: resolveApp('public/index.html'),

  appGisMainIndexJs : resolveModule(resolveApp, 'src/component/pages/gisMain/index'),
  appGisMainHtml: resolveApp('public/index.html'),

  appGisFacilityIndexJs : resolveModule(resolveApp, 'src/component/pages/gisFacility/index'),
  appGisFacilityHtml: resolveApp('public/index.html'),

  appBroadcastIndexJs : resolveModule(resolveApp, 'src/component/pages/broadcast/index'),
  appBroadcastHtml: resolveApp('public/index.html'),

  appDisasterEventListIndexJs : resolveModule(resolveApp, 'src/component/pages/disasterEventList/index'),
  appDisasterEventListHtml: resolveApp('public/index.html'),

  appEventStatisticIndexJs : resolveModule(resolveApp, 'src/component/pages/eventStatistic/index'),
  appEventStatisticHtml: resolveApp('public/index.html'),

  appFacilityStatisticIndexJs : resolveModule(resolveApp, 'src/component/pages/facilityStatistic/index'),
  appFacilityStatisticHtml: resolveApp('public/index.html'),

  appWeatherIndexJs : resolveModule(resolveApp, 'src/component/pages/weather/index'),
  appWeatherHtml: resolveApp('public/index.html'),
};



module.exports.moduleFileExtensions = moduleFileExtensions;
