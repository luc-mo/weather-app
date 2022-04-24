const weekDays = {
  spanish: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  english: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

const months = {
  spanish: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  english: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}

export function getCurrentDate(language = 'english') {
  const parsedDate = new Date()
  const day = parsedDate.getDate()
  const weekDay = parsedDate.getDay()
  const month = parsedDate.getMonth()
  return {
    day,
    weekDay: weekDays[language][weekDay],
    month: months[language][month],
  }
}

export function getUTCDate(date, language = 'english') {
  const parsedDate = new Date(date * 1000)
  const day = parsedDate.getUTCDate()
  const weekDay = parsedDate.getUTCDay()
  const month = parsedDate.getUTCMonth()
  return {
    day,
    weekDay: weekDays[language][weekDay],
    month: months[language][month],
  }
}