import { Waypoint } from '../types.ts';

export const recallWaypoints = (): Waypoint[] => {
  try {
    const stored = localStorage.getItem('mctracker:waypoints');
    return stored ? JSON.parse(stored) : [];
  } catch(error) {
    // swallow error, dont surface it
    return [];
  }
}

export const storeWaypoints = (sessionWaypoints: Waypoint[]) => {
  try {
    const json = JSON.stringify(sessionWaypoints);
    localStorage.setItem('mctracker:waypoints', json);
  } catch(error) {
    // swallow error, dont surface it
  }
}