// const path = require('path');
//
// const myNodeModules = {
//   'react-native-web-components': path.resolve(__dirname + '/../'),
// };
//
// module.exports = {
//   projectRoot: path.resolve(__dirname),
//   resolver: {
//     extraNodeModules: new Proxy(myNodeModules, {
//       get: (target, name) =>
//         name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
//     }),
//   },
//   watchFolders: [path.resolve(__dirname + '/../')]
// };
