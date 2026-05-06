import { Waypoint, WaypointFields } from '../types.ts';
import { GameThought, GameThoughtFields } from '../types.ts';

const HOST = location.hostname;

type Response<T> = {
  status: number,
  data: T,
}
const request = async <R = any>(url: string, method: string, body: any = {}): Promise<Response<R>> => {
  const res = await fetch(`http://${HOST}:3001${url}`, {
    method,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: method === 'GET' ? undefined : JSON.stringify({
      ...body,
    })
  });
  const { status } = res;
  let data: R | undefined = undefined;
  try {
    data = await res.json() as unknown as R;
  } catch (error) {
    throw error;
  }
  return {
    status,
    data: data!
  }
}

export const getAllWaypoints = async () => {
  return await request<Waypoint[]>('/waypoints', 'GET');
}

export const createNewWaypoint = async (waypoint: WaypointFields) => {
  return await request<Waypoint>('/waypoints', 'POST', waypoint);
}

export const clearAllWaypoints = async () => {
  return await request<Waypoint[]>('/waypoints', 'DELETE')
}

export const deleteWaypoint = async (waypoint: Waypoint) => {
  return await request<null>(`/waypoints/${waypoint._id}`, 'DELETE')
}

export const getAllGameThoughts = async () => {
  return await request<GameThought[]>('/gamethoughts', 'GET');
}

export const createNewGameThought = async (gameThought: GameThoughtFields) => {
  return await request<GameThought>('/gamethoughts', 'POST', gameThought);
}

export const clearAllGameThoughts = async () => {
  return await request<GameThought[]>('/gamethoughts', 'DELETE')
}

export const deleteGameThought = async (gameThought: GameThought) => {
  return await request<null>(`/gamethoughts/${gameThought._id}`, 'DELETE')
}