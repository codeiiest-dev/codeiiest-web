import axios from 'axios'
import dayjs from 'dayjs'

const DATE_FORMAT = 'DD MMM, YYYY hh:mm A'

export const getEvents = async(): Promise<any> => {
  const { data } = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/5rbvb4k7c10ujfrpeboh5je074@group.calendar.google.com/events?key=${import.meta.env.VITE_CALENDAR_KEY}`)
  const { items } = data;
  return items.filter((i: any) => dayjs(i.end.dateTime).isAfter(dayjs()) && !i.recurrence)
}

export const formatDateTime = (dateTime: string): string => {
  return dayjs(dateTime).format(DATE_FORMAT)
}

export const ytEvents: Array<{link: string; image: string; alt: string}> = [
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625165552/video_to_markdown/images/youtube--O8zdhpFAW_w-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=O8zdhpFAW_w', alt: 'Fresher\'s Induction | CodeIIEST | 2021' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200008/video_to_markdown/images/youtube--4vosyExcRvY-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=4vosyExcRvY', alt: 'GCD, Prime, and Exponents | CodeIIEST CP Sessions' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200675/video_to_markdown/images/youtube--uAHySjoHXuE-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=uAHySjoHXuE', alt: 'Resume 101 | CodeIIEST Girls Session' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625200767/video_to_markdown/images/youtube--dEz7BYCAxZA-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=dEz7BYCAxZA', alt: 'Git and GitHub | CodeIIEST Dev-Sec Sessions' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625201123/video_to_markdown/images/youtube--cwRYql9jzXE-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=cwRYql9jzXE', alt: 'CodeIIEST Machine Learning Session | Episode 1 | Introduction' },
  { image: 'https://res.cloudinary.com/marcomontalbano/image/upload/v1625201444/video_to_markdown/images/youtube--eWfE27FhHCI-c05b58ac6eb4c4700831b2b3070cd403.jpg', link: 'https://www.youtube.com/watch?v=eWfE27FhHCI', alt: 'MiniCTF 2021 Discussion | CodeIIEST | Part 1' },
]

export function getString(st: string): string {
  return `${st.replace(/-/g, '').replace(/:/g, '').split('.')[0]}Z`
}

export function getGoogleEventURL(event: any): string {
  const start = getString(new Date(event.start.dateTime).toISOString())
  const end = getString(new Date(event.end.dateTime).toISOString())
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${event.summary}&details=${event.description}&dates=${start}%2F${end}`
}

export function sanitizeHTML(description: string): string {
  let element = document.createElement('div')
  element.innerHTML = description
  let sanitizedHTML = element.innerHTML
  return sanitizedHTML
}