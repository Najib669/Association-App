import React, { useEffect } from "react";
import styled from "styled-components";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "./UpdateProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Actions/authuserActions";
import { Link } from "react-router-dom";
import { getUser } from "../Actions/authuserActions";

const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const UserItem = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
  }
  & input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  & label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;
const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const Option = styled.option``;

const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  cursor: pointer;
  padding: 7px 10px;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 20px;
`;

const Profile = () => {
  const { user } = useSelector((state) => state.authReducer);
  console.log("user", user);
  const [file, setFile] = useState("");

  // const [fullName, setFullName] = useState(user.fullName);
  // const [email, setEmail] = useState(user.email);
  // const [password, setPassword] = useState(user.password);
  // const [birthDay, setBirthDay] = useState(user.birthDay);
  // const [gender, setGender] = useState(user.gender);
  // const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  // const [adress, setAdress] = useState(user.adress);
  // const [country, setCountry] = useState(user.country);
  // const [city, setCity] = useState(user.city);

  const dispatch = useDispatch();
  const [inputUpdate, setInputUpdate] = useState({
    fullName: user.fullName,
    email: user.email,
    password: user.password,
    birthDay: user.birthDay,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
    adress: user.adress,
    city: user.city,
    country: user.country,
  });
  const handleChangeUpdate = (e) => {
    setInputUpdate({ ...inputUpdate, [e.target.name]: e.target.value });
  };
  const handleUpdate = async () => {
    await dispatch(updateUser(user._id, inputUpdate));
    dispatch(getUser(user._id));
  };
  useEffect(() => {
    handleUpdate();
  }, [inputUpdate]);
  return (
    <Container>
      <Title>Profile</Title>
      <div className="left">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "data:image/png;base64,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"
          }
          alt=""
        />
        <label htmlFor="file">
          Image:
          <DriveFolderUploadIcon className="icon" />
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
      </div>

      <Form>
        <UserItem>
          <label>id</label>
          <input type="text" placeholder="chikhAdel1995" value={user._id} />
        </UserItem>
        <UserItem>
          <label>fullName</label>
          <input
            type="text"
            placeholder="Alon"
            name="fullName"
            value={inputUpdate.fullName}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>Email</label>
          <input
            type="text"
            placeholder="user@gamil.com"
            name="email"
            value={inputUpdate.email}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>Password</label>
          <input
            type="password"
            placeholder="At least 7 characters long"
            name="password"
            value={inputUpdate.password}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>Birthdate</label>
          <input
            type="text"
            placeholder="+216...."
            name="birthDay"
            value={inputUpdate.birthDay}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>Phone</label>
          <input
            type="text"
            placeholder="+216...."
            name="phoneNumber"
            value={inputUpdate.phoneNumber}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>Gender</label>
          <GenderContainer
            name="gender"
            value={inputUpdate.gender}
            onChange={handleChangeUpdate}
          >
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="male">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </GenderContainer>
        </UserItem>
        <UserItem>
          <label>Address</label>
          <input
            type="text"
            placeholder="Tunisia"
            name="adress"
            value={inputUpdate.adress}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>City</label>
          <input
            type="text"
            placeholder="Tunisia"
            name="city"
            value={inputUpdate.city}
            onChange={handleChangeUpdate}
          />
        </UserItem>
        <UserItem>
          <label>Country</label>
          <input
            type="text"
            placeholder="Tunisia"
            name="country"
            value={inputUpdate.country}
            onChange={handleChangeUpdate}
          />
        </UserItem>

        <UserItem>
          <label>Active</label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </UserItem>
        <Link to="/profile">
          <Button onClick={handleUpdate}>update</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Profile;
