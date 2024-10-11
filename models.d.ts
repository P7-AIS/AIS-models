export type AisMessage = {
  id: number
  mmsi: number
  destinationId?: number
  mobileTypeId?: number
  navigationalStatusId?: number
  dataSourceType?: string
  timestamp: Date
  latitude: number
  longitude: number
  rot?: number
  sog?: number
  cog?: number
  heading?: number
  draught?: number
  cargoType?: string
  eta?: Date
}

export type SimpleVessel = {
  mmsi: number
  location: Location
}

export type Location = {
  point: Point
  heading?: number
  timestamp: number
}

export type Point = {
  lat: number
  lon: number
}

export type Vessel = {
  mmsi: number
  name: string
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

export type ShipType = {
  id: number
  name?: string
}
