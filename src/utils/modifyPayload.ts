export const modifyPayload = (values: any) => {
  const obj = { ...values };

  const file=obj["file"];
  delete obj["file"]

  const data = JSON.stringify(obj);

  const newFormData = new FormData();
  
  newFormData.append("data", data);

  newFormData.append("file", file as Blob);

  
  return newFormData;
};
