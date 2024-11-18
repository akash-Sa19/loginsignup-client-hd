type SelectPropsTypes = {
  setQuery: any;
  query: any;
  name: string;
  optionArray: any;
  placeholder?: string;
};

type OptionPropsTypes = {
  value: string;
  label: string;
};

const SelectTag = ({
  setQuery,
  query,
  name,
  optionArray,
  placeholder,
}: SelectPropsTypes) => {
  return (
    <select
      className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
      required
      value={query[name]}
      onChange={(e) => setQuery({ ...query, [name]: e.target.value })}
    >
      <option value="">{placeholder || "Select an option"}</option>
      {optionArray.map(({ value, label }: OptionPropsTypes) => (
        <option
          key={value}
          value={label}
        >
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectTag;
