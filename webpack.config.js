const path = require('path');

// Configuration without split-chunks

module.exports = {
	entry: {
		A: "./A",
		B: "./B"
  },
  output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
  },
};

// Configuration using split-chunks

// module.exports = {
// 	entry: {
// 		A: "./A",
// 		B: "./B"
//   },
//   output: {
// 		path: path.join(__dirname, "dist"),
//     filename: "[name].js",
//     chunkFilename: "[name].js",
// 	},
//   optimization: {
//     splitChunks: {
//       // Include static and dynamic import for modules
//       chunks: 'all',
//       name: 'chunks'
//     }
//   }
// };
