import { format, getTime, formatDistanceToNow } from 'date-fns'

export const fDate = (date: string, newFormat: string): string => date ? format(new Date(date), newFormat || 'dd MMM yyyy') : ''

export const fDateTime = (date: string, newFormat: string): string => date ? format(new Date(date), newFormat || 'dd MMM yyyy p') : ''

export const fTimestamp = (date: string): number | '' => date ? getTime(new Date(date)) : ''

export const fToNow = (date: string): string => date ? formatDistanceToNow(new Date(date), { addSuffix: true }) : ''
