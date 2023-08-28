import FormWrapper from "./FormWrapper";
type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({ firstName, lastName, age , updateFields}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="first_name">First Name</label>
      <input
        id="first_name"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        id="last_name"
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
