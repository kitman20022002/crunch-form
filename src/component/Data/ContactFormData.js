import React from 'react';
import TextField from "../TextField/TextField";
import TextArea from "../TextArea/TextArea";
import FormGroup from "../../hoc/FormGroup/FormGroup";
import Select from "../Select/Select";
import {MdErrorOutline} from "react-icons/md";
import Search from "../Search/Search";
import './ContactFormData.css';
import InputGroup from "../../hoc/InputGroup/InputGroup";
import FormRow from "../../hoc/FormRow/FormRow";
import Checkbox from "../CheckBox/Checkbox";

const ContactFormData = (props) => {
    const {values, errors, handleChange, disabled, classes, countries, handleCheckBox, setCountryState} = props;


    return (
        <div className={classes}>
            <h2>Contact Information</h2>
            <FormGroup>
                <InputGroup>
                    <label htmlFor={"firstName"}>First Name</label>
                    <FormRow classes={'container-form-row row-space'}>
                        <Select value={values.honorifics}
                                className={errors.honorifics && !errors.honorifics.isValid ? "error" : ''}
                                onChange={handleChange}
                                name={'honorifics'}
                                disabled={disabled}
                                data-testid={'honorifics'}>
                            <option value="" disabled hidden>None</option>
                            <option value="Mr">Mr</option>
                            <option value="Miss">Miss</option>
                            <option value="Mrs">Mrs</option>
                        </Select>
                        <input type={"text"}
                               name={"firstName"}
                               placeholder={"Alex"}
                               value={values.firstName}
                               onChange={handleChange}
                               className={errors.firstName && !errors.firstName.isValid ? "error" : ''}
                               disabled={disabled}
                               data-testid={'firstName'}
                        />
                        {errors.firstName && !errors.firstName.isValid &&
                        <MdErrorOutline className={"icon-error"} color={"#FF516D"}/>}
                    </FormRow>
                </InputGroup>
                <InputGroup>
                    <TextField name={"lastName"}
                               placeholder={"Smith"}
                               label={"Last Name"}
                               value={values.lastName}
                               onChange={handleChange}
                               error={errors.lastName}
                               disabled={disabled}
                               data-testid={'lastName'}/>
                </InputGroup>
                <InputGroup>
                    <TextField name={"accountName"}
                               placeholder={"John’s Joinery"}
                               label={"Account Name"}
                               value={values.accountName}
                               onChange={handleChange}
                               error={errors.accountName}
                               disabled={disabled}
                               data-testid={'accountName'}/>
                </InputGroup>
                <InputGroup>
                    <TextField name={"companyName"}
                               placeholder={""}
                               label={"Company Name (optional)"}
                               value={values.companyName}
                               onChange={handleChange}
                               error={errors.companyName}
                               disabled={disabled}
                               data-testid={'companyName'}/>
                </InputGroup>
                <InputGroup>
                    <TextField name={"phone"}
                               placeholder={"02 123 456 78"}
                               label={"Phone"}
                               value={values.phone}
                               onChange={handleChange}
                               error={errors.phone}
                               disabled={disabled}
                               data-testid={'phone'}/>
                </InputGroup>
                <InputGroup>
                    <TextField name={"fax"}
                               placeholder={"John’s Joinery"}
                               label={"Fax (optional)"}
                               value={values.fax}
                               onChange={handleChange}
                               error={errors.fax}
                               disabled={disabled}
                               data-testid={'fax'}/>
                </InputGroup>
                <InputGroup>
                    <TextField name={"title"}
                               placeholder={"Owner"}
                               label={"Title (optional) "}
                               value={values.title}
                               onChange={handleChange}
                               error={errors.title}
                               disabled={disabled}
                               data-testid={'title'}/>
                </InputGroup>
                <InputGroup>
                    <TextField name={"email"}
                               placeholder={"samle@email.com"}
                               label={"Email"}
                               value={values.email}
                               onChange={handleChange}
                               error={errors.email}
                               disabled={disabled}
                               data-testid={'email'}/>
                </InputGroup>
                <InputGroup>
                    <FormRow>
                        <label>Email Opt Out</label>
                        <div className={"container-input"}>
                            <Checkbox value={values.emailOptOut}
                                      name="emailOptOut"
                                      onChange={handleCheckBox}
                                      disabled={disabled}
                                      data-testid={'emailOptOut'}
                            />
                        </div>
                    </FormRow>
                </InputGroup>
            </FormGroup>
            <h2>Address Information</h2>
            <FormGroup>
                <InputGroup>
                    <TextField name={"street"}
                               placeholder={"1, Elizabeth Street"}
                               label={"Street No. & Street"}
                               value={values.street}
                               onChange={handleChange}
                               error={errors.street}
                               disabled={disabled}
                               data-testid={'street'}
                    />
                </InputGroup>
                <InputGroup>
                    <TextField name={"city"}
                               placeholder={"Sydney"}
                               label={"City"}
                               value={values.city}
                               onChange={handleChange}
                               error={errors.city}
                               disabled={disabled}
                               data-testid={'city'}
                    />
                </InputGroup>
                <InputGroup>
                    <Search value={values.state}
                            content={countries}
                            onChange={handleChange}
                            setCountryState={setCountryState}
                            values={values}
                            disabled={disabled}
                            error={errors.state}
                    />
                </InputGroup>
                <InputGroup>
                    <TextField name={"postCode"}
                               placeholder={"2000"}
                               label={"Postcode"}
                               value={values.postCode}
                               onChange={handleChange}
                               error={errors.postCode}
                               disabled={disabled}
                               data-testid={'postCode'}
                    />
                </InputGroup>
            </FormGroup>
            <h2>Description Information</h2>
            <FormGroup>
                    <TextArea name={"description"}
                              label={"Description"}
                              value={values.description}
                              onChange={handleChange}
                              error={errors.description}
                              disabled={disabled}
                              data-testid={'description'}
                    />
            </FormGroup>
        </div>
    );
};
export default ContactFormData;
