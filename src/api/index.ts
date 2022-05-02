import axios from 'axios'
import moment from 'moment'
import { IDateRange, TStatus } from '../types'

const apiBaseURL = 'https://api.covid19api.com'

const country = 'belgium'
const startDate = '2020-01-01T00:00:00.000Z'
const endDate = moment().startOf('day').toISOString()

export const getInfo = async (status: TStatus, dateRange: IDateRange) => {
  try {
    const request = {
      method: 'get',
      url: apiBaseURL.concat(`/country/${country}/status/${status}`),
      params: {
        from: dateRange.from ? dateRange.from : startDate,
        to: dateRange.to ? dateRange.to : endDate,
      },
      headers: { 'Content-Type': 'application/json' },
    }

    const response = await axios(request)

    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAllTimeTotal = async () => {
  try {
    const request = {
      method: 'get',
      url: apiBaseURL.concat(`/dayone/country/${country}`),
      headers: { 'Content-Type': 'application/json' },
    }

    const response = await axios(request)

    return {
      Confirmed: {
        allTime: response.data[response.data.length - 1].Confirmed,
        today:
          response.data[response.data.length - 1].Confirmed -
          response.data[response.data.length - 2].Confirmed,
      },
      Recovered: {
        allTime: response.data[response.data.length - 1].Recovered,
        today:
          response.data[response.data.length - 1].Recovered -
          response.data[response.data.length - 2].Recovered,
      },
      Deaths: {
        allTime: response.data[response.data.length - 1].Deaths,
        today:
          response.data[response.data.length - 1].Deaths -
          response.data[response.data.length - 2].Deaths,
      },
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
