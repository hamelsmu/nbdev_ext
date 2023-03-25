import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';


/**
 * Initialization data for the nbdev_ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nbdev_ext:plugin',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, pallette: ICommandPalette) => {
    console.log('JupyterLab extension nbdev_ext is activated!');
    console.log('ICommandPalette:', pallette);
  }
};

export default plugin;
