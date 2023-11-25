const calculateTimeDifference = (createdAt: Date) => {
  const currentTime = new Date();

  const createdTime = new Date(createdAt);

  return currentTime.getTime() - createdTime.getTime();
};

export default calculateTimeDifference;
