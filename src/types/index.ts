export enum Statuses {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths',
}

export type TStatus = Statuses

export interface IDailyStat {
  Cases: number
  City: string
  CityCode: string
  Country: string
  CountryCode: string
  Date: string
  Lat: string
  Lon: string
  Province: string
  Status: TStatus
}

export interface ISummary {
  Confirmed: {
    allTime: number
    today: number
  }
  Recovered: {
    allTime: number
    today: number
  }
  Deaths: {
    allTime: number
    today: number
  }
}

export interface IDateRange {
  from: string | null
  to: string | null
}
