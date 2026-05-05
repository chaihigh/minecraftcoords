export type Waypoint = {
  id: number;
  name: string,
  coord: {
    x: number,
    y: number,
    z: number,
  }
}
export type WaypointFields = Omit<Waypoint, 'id'>;

export type GameThought = {
  name: string,
  priority: number,
  description: string,
}