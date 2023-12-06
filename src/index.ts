import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the scripter extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'scripter:plugin',
  description: 'A Jupyer Lab extension to quickly convert a cell to a script',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension scripter is activated!');
  }
};

export default plugin;
