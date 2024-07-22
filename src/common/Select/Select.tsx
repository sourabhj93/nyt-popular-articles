interface ISelectProps {
  selectedOption: string;
  setSelectedOption: (selectedOptionValue: string) => void;
}

const Select = (props: ISelectProps) => {
  const { selectedOption, setSelectedOption } = props;
  const options = [
    { value: "1", label: "1" },
    { value: "7", label: "7" },
    { value: "30", label: "30" },
  ];

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown" style={{ fontSize: 16, fontWeight: 500 }}>
        Choose periodic value :
      </label>
      <select
        data-testid="dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
