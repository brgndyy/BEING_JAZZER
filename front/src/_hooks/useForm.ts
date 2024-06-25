import { useState, useCallback } from 'react';

const useForm = <T>(initialValues: T) => {
  const [formState, setFormState] = useState<T>(initialValues);

  const handleFormValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleUploadFormFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    }
  };

  return { formState, handleFormValue, setFormState, handleUploadFormFile };
};

export default useForm;
