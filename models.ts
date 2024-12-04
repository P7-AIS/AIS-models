export type AisMessage = {
  id: number
  mmsi: number
  destination?: string
  mobileTypeId?: number
  navigationalStatusId?: number
  dataSourceType?: string
  timestamp: Date
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

export type Trajectory = {
  mmsi: number
  binPath: Buffer
}

export type AISJobData = {
  mmsi: number
  timestamp: number
  algorithm: AISWorkerAlgorithm
}

export type AISJobResult = {
  mmsi: number
  trustworthiness: number
  reason?: string
  algorithm: AISWorkerAlgorithm
}

export type AISJobTestResult = AISJobResult & {
  endQueuedTo: number
  startDbQuery: number
  endDbQuery: number
  startAlgo: number
  endAlgo: number
  startQueuedFrom: number
}

export enum AISWorkerAlgorithm {
  SIMPLE = 'simple',
  RANDOM = 'random',
  HASHED = 'hashed',
  PROFILING_FETCH = 'profiling_fetch',
  PROFILING_JSON = 'profiling_json',
}

export type JobAisData = {
  mmsi: number
  messages: AisMessage[]
  trajectory: Trajectory
  algorithm: AISWorkerAlgorithm
}
