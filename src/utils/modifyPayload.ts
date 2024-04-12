export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const newFormData = new FormData();
  newFormData.append("data", data);
  return newFormData;
};
