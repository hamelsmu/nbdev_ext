import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the nbdev_ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nbdev_ext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nbdev_ext is activated!');
  }
};

export default plugin;
