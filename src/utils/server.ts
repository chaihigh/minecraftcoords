import { Waypoint, WaypointFields } from '../types.ts';

type Response<T> = {
  status: number,
  data: T,
  error?: string,
}
const request = async <R = any>(url: string, method: string, body: any = {}): Promise<Response<R>> => {
  const res = await fetch(`http://localhost:3001${url}`, {
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
  let error = !res.ok ? `${res.status}` : '';
  try {
    data = await res.json() as unknown as R;
  } catch (error) {
    error = error?.message ?? error;
  }
  return {
    status,
    data: data!,
    error,
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
  return await request<null>(`/waypoints/${waypoint.id}`, 'DELETE')
}