import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUpForm = () => {
  
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch('https://fg-qlk6.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
if(!validateForm()){
    alert('insert  value')
}
      else if (response.ok ) {
        alert('Signup successful');
      } 
      else{
        alert('error')
      }
      
    } catch (errors) {
      console.error("error",errors);
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
     <form onSubmit={handleSignUp}>
      <TextField
        label="First Name"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
      />
      <TextField
        label="Last Name"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.lastName)}
        helperText={errors.lastName}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
    </div>
  );
};

export default SignUpForm;