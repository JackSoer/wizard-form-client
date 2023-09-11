import { useState } from 'react';
import './fileInput.scss';

const FileInput = (props: any) => {
  const {
    onChange,
    allowedFileTypes,
    maxFileSize = 16,
    label,
    ...inputProps
  } = props;
  type ErrorsType = {
    size?: string;
    types?: string;
  } | null;

  const [errors, setErrors] = useState<ErrorsType>(null);

  const handleErrors = (e: any) => {
    const file = e.target.files[0];

    if (!file) {
      setErrors(null);
      return;
    }

    if (file.size / 1000000 > maxFileSize) {
      setErrors({ ...errors, size: 'File size greater than 16' });
    } else {
      setErrors({ ...errors, size: '' });
    }

    const fileNameArray = file.name.split('.');
    const fileExtension = fileNameArray[fileNameArray.length - 1];

    if (!allowedFileTypes.includes(fileExtension)) {
      setErrors({
        ...errors,
        types: `${fileExtension} file extension isn't allowed`,
      });
    } else {
      setErrors({ ...errors, types: '' });
    }
  };

  const onHandleChange = (e: any) => {
    onChange(e);

    handleErrors(e);
  };

  return (
    <div className="file-box">
      <label htmlFor={inputProps.id} className="file-label">
        {label}
      </label>
      <p className="file-tip">{`Allowed file types: ${allowedFileTypes.join(
        ', '
      )}. Max file size : ${maxFileSize} MB`}</p>
      <input
        type="file"
        className="file-input"
        onChange={onHandleChange}
        {...inputProps}
      />
      {errors?.size && <span className="error">{errors.size}</span>}
      {errors?.types && <span className="error">{errors.types}</span>}
    </div>
  );
};

export default FileInput;
