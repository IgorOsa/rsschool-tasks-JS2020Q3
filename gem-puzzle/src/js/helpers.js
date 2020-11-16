export const timeFormatter = (time) => `${Math.floor(time / 60)
  .toString()
  .padStart(2, '0')}:${Math.floor(time % 60)
  .toString()
  .padStart(2, '0')}`;
export const winner = '';
