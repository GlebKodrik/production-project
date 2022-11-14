export const getUniqueId = (() => {
  const currentDate = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 100);
  let count = 0;
  return (): string => {
    count += 1;
    return `${currentDate}-${count}-${randomNumber}`;
  };
})();
