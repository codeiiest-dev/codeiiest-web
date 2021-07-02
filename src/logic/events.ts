import axios from 'axios'
import dayjs from 'dayjs'

const DATE_FORMAT = 'DD MMM, YYYY'

export const getEvents = async(): Promise<any> => {
  const { data } = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/5rbvb4k7c10ujfrpeboh5je074@group.calendar.google.com/events?key=${import.meta.env.VITE_CALENDAR_KEY}`)

  return data
}

export const formatDateTime = (dateTime: string): string => {
  return dayjs(dateTime).format(DATE_FORMAT)
}

export const ytEvents: Array<{link: string; image: string}> = [
  { link: 'https://www.youtube.com/watch?v=O8zdhpFAW_w', image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625165552/video_to_markdown/images/youtube--O8zdhpFAW_w-c05b58ac6eb4c4700831b2b3070cd403.jpg' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200008/video_to_markdown/images/youtube--4vosyExcRvY-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=4vosyExcRvY' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200675/video_to_markdown/images/youtube--uAHySjoHXuE-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=uAHySjoHXuE' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200767/video_to_markdown/images/youtube--dEz7BYCAxZA-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=dEz7BYCAxZA' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625201123/video_to_markdown/images/youtube--cwRYql9jzXE-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=cwRYql9jzXE' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625201444/video_to_markdown/images/youtube--eWfE27FhHCI-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=eWfE27FhHCI' },
]
