import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ControllerInput from '@/components/molecules/ControllerInput';
import Button from '@/components/atoms/Button';

const AdminLogin: React.FC = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Admin login işlemleri
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <ControllerInput name="username" control={methods.control} label="Username" />
        <ControllerInput name="password" control={methods.control} label="Password" type="password" />
        <Button text="Login" type="submit" className="bg-blue-500 text-white p-2 rounded" />
      </form>
    </FormProvider>
  );
};

export default AdminLogin;
