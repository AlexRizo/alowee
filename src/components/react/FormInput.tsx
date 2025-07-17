import { useEffect } from "react";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

export const FormInput = ({
  id,
  label,
  type,
  name,
  placeholder,
  required = false,
}: FormInputProps) => {
  useEffect(() => {
    
  });

  return (
    <div className="inline-block min-w-80">
      <label htmlFor={id} className="block text-black font-medium text-sm mb-0.5">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-md p-1.5 text-black text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};
