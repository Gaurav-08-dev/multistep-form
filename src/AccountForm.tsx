import FormWrapper from "./FormWrapper";
type AccountData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
const AccountForm = ({ email, password , updateFields}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Form">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
