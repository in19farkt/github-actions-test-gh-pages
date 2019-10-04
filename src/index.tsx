import pJSON from '../package.json';
import getVersion from './getVersion';

const version = getVersion(pJSON);
// eslint-disable-next-line no-console
console.info(`App version: ${version}`);
