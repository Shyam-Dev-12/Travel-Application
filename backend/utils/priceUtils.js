// utils/priceUtils.js

// Hotel pricing function
export const getHotelPrice = (basePrice, date) => {
  const month = new Date(date).getMonth() + 1; 
  let multiplier = 1;

  // Peak season (Dec, Jan)
  if (month === 12 || month === 1) {
    multiplier = 1.5;
  }
  // Off season (June, July)
  if (month === 6 || month === 7) {
    multiplier = 0.8;
  }

  return Math.round(basePrice * multiplier);
};

// Flight pricing function
export const getFlightPrice = (basePrice, date) => {
  const day = new Date(date).getDay(); 
  let multiplier = 1;

  // Weekend flights cost more
  if (day === 0 || day === 6) {
    multiplier = 1.3;
  }

  return Math.round(basePrice * multiplier);
};
