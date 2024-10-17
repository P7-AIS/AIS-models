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
  binLocation: Buffer
  heading?: number
}

export type Vessel = {
  mmsi: number
  name?: string
  shipType?: string
  imo?: number
  callSign?: string
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

export type VesselPath = {
  binPath: Buffer
  headings: (number | undefined)[]
}
