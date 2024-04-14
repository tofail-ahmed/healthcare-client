import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const Form = ({ children, onSubmit, resolver, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    // console.log(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
