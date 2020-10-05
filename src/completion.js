export const newCompletionFor = (currentCompletion, field) => {
  const newCompletion = completionFor(field);
  console.log(field, newCompletion);

  if (newCompletion < currentCompletion) {
    return currentCompletion;
  }

  return newCompletion;
};

export const completionFor = field => {
  return completions[field] || 0;
};

export const isComplete = (currentCompletion, field) => {
  return completionFor(field) <= currentCompletion;
};

const completions = {
  revenueTarget: 1,
  salePrice: 1,
  haveSalesCall: 2,
  salesCallConversionRate: 2,
  cancellationRate: 2,
  callBookingConversionRate: 3,
  registrationPageConversionRate: 3,
  cpc: 4,
  ctr: 4,
};
