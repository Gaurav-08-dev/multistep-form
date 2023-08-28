import FormWrapper from "./FormWrapper";
type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};
const AddressForm = ({ street, city, state, zip, updateFields }: AddressFormProps) => {
  return (
    <FormWrapper title="Address Form">
      <label htmlFor="street">Street</label>
      <input
        id="street"
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="state">State</label>
      <input
        id="state"
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="zip">Zip</label>
      <input
        id="zip"
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
