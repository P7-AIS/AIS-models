export type Vessel = {
  id: number
  name: string
  mmsi: number
  shipTypeId?: number
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
