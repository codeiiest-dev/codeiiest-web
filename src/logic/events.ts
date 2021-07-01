import axios from 'axios'

export const getEvents = async(): Promise<any> => {
  const { data } = await axios.get('https://www.googleapis.com/calendar/v3/calendars/5rbvb4k7c10ujfrpeboh5je074@group.calendar.google.com/events?key=AIzaSyDYjDZLMD5FgoTZwfLcqkdMlen3MwceA84')

  return data
}
