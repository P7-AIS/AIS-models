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

export type Point = {
  lon: number
  lat: number
}

export type Location = {
  point: Point
  heading?: number
  timestamp: number
}

export type SimpleVessel = {
  mmsi: number
  location: Location
}

export type MonitoredVessel = {
  mmsi: number
  trustworthiness: number
  reason?: string
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
  locations: Location[]
}

export type AISJobData = {
  aisMessages: AisMessage[]
  trajectories: {
    mmsi: number
    binPath: Buffer
  }[]
}

export type AISJobResult = {
  mmsi: number
  trustworthiness: number
  reason?: string
}[]
