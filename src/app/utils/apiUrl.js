export const apiUrl = (params) =>
  `${process.env.NEXT_PUBLIC_API_URL}${params}?format=json`;
