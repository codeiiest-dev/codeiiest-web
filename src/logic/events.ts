import axios from 'axios'
import dayjs from 'dayjs'

const DATE_FORMAT = 'DD MMM, YYYY'

export const getEvents = async(): Promise<any> => {
  const { data } = await axios.get('https://www.googleapis.com/calendar/v3/calendars/5rbvb4k7c10ujfrpeboh5je074@group.calendar.google.com/events?key=AIzaSyDYjDZLMD5FgoTZwfLcqkdMlen3MwceA84')

  return data
}

export const formatDateTime = (dateTime: string): string => {
  return dayjs(dateTime).format(DATE_FORMAT)
}
