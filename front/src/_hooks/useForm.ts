import { useState, useCallback } from 'react';

interface FormValues {
  [key: string]: string | File | null;
}

const useForm = (initialValues: FormValues) => {
  const [formState, setFormState] = useState(initialValues);

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value, // 입력 필드 이름을 키로 사용
    }));
  }, []);

  const inputFileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    }
  };

  return { formState, inputHandler, setFormState, inputFileUploadHandler };
};

export default useForm;
