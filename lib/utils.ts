import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatDateTime(date: Date | string): string {
  return `${formatDate(date)} at ${formatTime(date)}`
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount)
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export function getClassTypeColor(type: string): string {
  const colors: Record<string, string> = {
    YOGA: 'bg-sage-200 text-sage-800',
    MARTIAL_ARTS: 'bg-terracotta-200 text-terracotta-800',
    MEDITATION: 'bg-lavender-200 text-lavender-800',
    WORKSHOP: 'bg-cream-200 text-cream-800',
    PRIVATE_SESSION: 'bg-sage-300 text-sage-900',
  }
  return colors[type] || 'bg-gray-200 text-gray-800'
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    PENDING: 'bg-yellow-200 text-yellow-800',
    CONFIRMED: 'bg-green-200 text-green-800',
    COMPLETED: 'bg-blue-200 text-blue-800',
    CANCELLED: 'bg-red-200 text-red-800',
    PAID: 'bg-green-200 text-green-800',
    REFUNDED: 'bg-gray-200 text-gray-800',
    FAILED: 'bg-red-200 text-red-800',
  }
  return colors[status] || 'bg-gray-200 text-gray-800'
}

export function calculateEndTime(startTime: Date, duration: number): Date {
  const end = new Date(startTime)
  end.setMinutes(end.getMinutes() + duration)
  return end
}

export function isBookingConflict(
  existingStart: Date,
  existingEnd: Date,
  newStart: Date,
  newEnd: Date
): boolean {
  return (
    (newStart >= existingStart && newStart < existingEnd) ||
    (newEnd > existingStart && newEnd <= existingEnd) ||
    (newStart <= existingStart && newEnd >= existingEnd)
  )
}

export function getAvailableTimeSlots(
  date: Date,
  duration: number,
  startHour: number = 8,
  endHour: number = 20,
  interval: number = 30,
  bookedSlots: Date[] = []
): Date[] {
  const slots: Date[] = []
  const currentDate = new Date(date)
  currentDate.setHours(startHour, 0, 0, 0)

  const endDate = new Date(date)
  endDate.setHours(endHour, 0, 0, 0)

  while (currentDate < endDate) {
    const slotEnd = new Date(currentDate)
    slotEnd.setMinutes(slotEnd.getMinutes() + duration)

    // Check if slot is available
    const isBooked = bookedSlots.some(bookedStart => {
      const bookedEnd = new Date(bookedStart)
      bookedEnd.setMinutes(bookedEnd.getMinutes() + duration)
      return isBookingConflict(bookedStart, bookedEnd, currentDate, slotEnd)
    })

    if (!isBooked && slotEnd <= endDate) {
      slots.push(new Date(currentDate))
    }

    currentDate.setMinutes(currentDate.getMinutes() + interval)
  }

  return slots
}

export function getDayOfWeek(date: Date): string {
  return date.toLocaleDateString('en-GB', { weekday: 'long' })
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

export function isPastDate(date: Date): boolean {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const checkDate = new Date(date)
  checkDate.setHours(0, 0, 0, 0)
  return checkDate < now
}

export function getWeekDates(date: Date): Date[] {
  const week: Date[] = []
  const current = new Date(date)
  const day = current.getDay()
  const diff = current.getDate() - day + (day === 0 ? -6 : 1) // Monday

  current.setDate(diff)

  for (let i = 0; i < 7; i++) {
    week.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  return week
}
