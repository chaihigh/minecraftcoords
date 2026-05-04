export type Waypoint = {
  name: string,
  coord: {
    x: number,
    y: number,
    z: number,
  }
}

export type GameThought = {
  name: string,
  priority: number,
  description: string,
}