export default async function fetchData(url: string) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}