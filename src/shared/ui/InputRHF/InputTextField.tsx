import { TextField } from '@mui/material';
import { IFormInputProps } from './Input.types';
import { Controller } from "react-hook-form";

const ContactInput: React.FC<IFormInputProps> = ({
  name,
  control,
  placeholder,
  type
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            placeholder={placeholder}
            value={value || ''}
            type={type}
            onChange={onChange}
            size="small" 
            sx={{ 
              width: {
                xs: "100%",
                sm: "100%",
                md: "20%",
                lg: "20%",
                xl: "20%"
              },
              marginBottom: "20px",
              backgroundColor: "white",
            }}
          />
        )}
      />
    </>
  );
};

export default ContactInput;

