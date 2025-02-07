const currentYear = new Date().getFullYear();
export const years = Array.from(
  { length: currentYear - 2015 + 1 },
  (_, i) => 2015 + i
);
