export default async function fetchData(url: string) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}


 
// api.ts
import axios from 'axios';

export const axiosData = async (url:string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Handle error if needed
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
