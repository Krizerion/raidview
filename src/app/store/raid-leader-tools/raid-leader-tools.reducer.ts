import { addPlayer, editPlayer, setRosterDataInStore } from '@app/store/raid-leader-tools/raid-leader-tools.actions';
import { RaidLeaderToolsState } from '@app/store/raid-leader-tools/raid-leader-tools.state';
import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';

export const initialState: RaidLeaderToolsState = {
  isLoading: false,
  planner: {
    players: [],
    backup: []
  }
};

const reducer = createReducer(
  initialState,
  on(setRosterDataInStore, (state, payload) => ({
    ...state,
    planner: {
      ...state.planner,
      players: cloneDeep(payload.players),
      backup: cloneDeep(payload.backup)
    }
  })),
  on(addPlayer, (state, payload) => {
    return {
      ...state,
      planner: {
        ...state.planner,
        players: state.planner.players.concat(payload.player)
      }
    };
  }),
  on(editPlayer, (state, payload) => {
    return {
      ...state,
      planner: {
        ...state.planner,
        players: state.planner.players.map(player => (player.id === payload.player.id ? payload.player : player))
      }
    };
  })
);

export function raidLeaderToolsReducer(state: RaidLeaderToolsState | undefined, action: Action): any {
  return reducer(state, action);
}
