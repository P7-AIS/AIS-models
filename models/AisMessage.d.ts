export type AisMessage = {
  id: number
  vesselId: number
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
