import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pageRange = (page: number, pageSize: number) => {
  return {
    from: (page - 1) * pageSize,
    to: page * pageSize - 1,
  };
};
