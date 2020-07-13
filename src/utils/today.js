// Helper function - today's date
export const today = () => {
  const now = new Date();
  const todaysDay = now.getDate();
  const todaysMonth = now.getMonth();
  const todaysYear = now.getFullYear();
  return `${todaysYear}-${todaysMonth + 1}-${todaysDay}`;
};
