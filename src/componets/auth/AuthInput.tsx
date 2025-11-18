export const AuthInput = ({
  value,
  onChange,
  label,
  type,
  isRequired = true,
}: {
  value: string;
  label: string;
  onChange: (val: string) => void;
  type: "email" | "password" | "text";
  isRequired?: boolean;
}) => {
  return (
    <div className="gap-y-2 flex flex-col">
      {label && <p className="text-gray-700 font-medium text-sm">{label}</p>}
      <div>
        <input
          type={type}
          // placeholder="Email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md bg-gray-50 text-gray-900"
          // className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required={isRequired}
        />
      </div>
    </div>
  );
};
