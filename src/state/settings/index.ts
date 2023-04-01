import update from 'immutability-helper';

import '../../macros/state/index.macro';
import getLocale from 'locale';

import * as Types from './types';

export const initialize = () =>
  ({ locale: getLocale(), skin: 'default', theme: 'default' } as Types.State);

export const merge = (settings: Types.Settings) => (state: Types.State) =>
  update(state, { $merge: settings }) as Types.State;
