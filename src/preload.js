// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require("electron");
const node = require("node");
contextBridge.executeInMainWorld("funcs", {
  path: () => path.join,
});
