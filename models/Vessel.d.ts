export type Vessel = {
  id: number
  name: string
  mmsi: number
  shipType?: string
  imo?: number
  callSign?: string
  flag?: string
  width?: number
  length?: number
  positionFixingDevice?: string
  toBow?: number
  toStern?: number
  toPort?: number
  toStarboard?: number
}
