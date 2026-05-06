export type Waypoint = {
  _id: string;
  name: string,
  coord: {
    x: number,
    y: number,
    z: number,
  }
}
export type WaypointFields = Omit<Waypoint, '_id'>;

export type GameThought = {
  _id: string;
  name: string,
  priority: number,
  description: string,
}
export type GameThoughtFields = Omit<GameThought, '_id'>;