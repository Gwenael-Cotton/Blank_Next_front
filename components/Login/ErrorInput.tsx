import { useState } from 'react';

interface Props {
  errorMessage: string;
  typeInput: string;
  placeholder: string;
  label: string;
}

export default function InputError ({errorMessage, typeInput, placeholder, label}: Props) {
    const [error, setError] = useState(false);
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const {value, type} = event.target;
        if (type === typeInput && value === "") {
          setError(true);
        } else {
          setError(false);
        }
      };
    return (
    <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <input 
            required
            type={typeInput}
            className="border-solid border-2 rounded-lg p-3 w-full"
            placeholder={placeholder}
            onBlur={handleBlur}
        />
        {error && (
            <p className="text-red-500 text-xs italic">
                {errorMessage}
            </p>
        )}
    </div>
    )
  };