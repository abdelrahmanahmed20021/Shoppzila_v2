export function updateRemainingTime() {
  // Get the current date and time
  const now = new Date();

  // Calculate the end of the active month (assuming the next month)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Calculate the remaining time in milliseconds
  const remainingTime = Number(endOfMonth) - Number(now);

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return {
    days: days < 10 ? `0${days}` : days,
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };
}
