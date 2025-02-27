export const randomPlaceholder = () => {
  const placeholders = [
    "Pick up groceries 🛍️",
    "Finish the project 📝",
    "Call the bank 📞",
    "Buy a new phone 📱",
  ];
  return placeholders[Math.floor(Math.random() * placeholders.length)];
};
