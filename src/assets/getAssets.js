// Use a recursive glob pattern to include subdirectories
// const modules = import.meta.glob("./**/*.@(jpg|png|gif|svg)", { eager: true });
// let images = {};

// for (const path in modules) {
//   // The import.meta.glob with the eager option returns the actual modules directly
//   // So, you don't need to await the import here, just extract the default export
//   const imageModule = modules[path].default;

//   // Extract only the file name from the path, ignoring directories
//   const fileName = path.split("/").pop(); // This gets the last segment after the last '/'
//   images[fileName] = imageModule;
// }

// this is only for docusaurus because vite doesn't support recursive glob
let images = {};

function normalizeModule(mod) {
  // Some bundlers put the URL on default, others return the URL directly
  return mod && mod.default ? mod.default : mod;
}

const r = require.context("./", true, /\.(jpg|jpeg|png|gif|svg)$/);
r.keys().forEach((key) => {
  const fileName = key.split("/").pop();
  images[fileName] = normalizeModule(r(key));
});

export default images;
