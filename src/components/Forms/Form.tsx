import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const Form = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit,reset } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data)
      // console.log(data);
      reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
