// Helper function - today's date
export const getDateString = (now = new Date()) => {
  let todaysDay = now.getDate();
  let todaysMonth = now.getMonth() + 1;
  const todaysYear = now.getFullYear();
  if (todaysMonth < 10) {
    todaysMonth = todaysMonth.toString();
    todaysMonth = '0' + todaysMonth;
  }
  if (todaysDay < 10) {
    todaysDay = todaysDay.toString();
    todaysDay = '0' + todaysDay;
  }
  return `${todaysYear}-${todaysMonth}-${todaysDay}`;
};

export const dateObjectFromString = (date) => {
  const params = date.split('-');
  return new Date(params[0], params[1] - 1, params[2]);
};
