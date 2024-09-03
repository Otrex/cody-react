import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Switch from "./components/Switch";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const calculateProgress = (formType: "login" | "register") => {
    if (formType === "login") {
      return ((loginEmail ? 1 : 0) + (loginPassword ? 1 : 0)) * 50;
    } else {
      return (
        ((registerEmail ? 1 : 0) +
          (registerPassword ? 1 : 0) +
          (registerConfirmPassword ? 1 : 0) +
          (termsAccepted ? 1 : 0)) *
        25
      );
    }
  };

  const loginContent = (
    <div className="space-y-4">
      <ProgressBar progress={calculateProgress("login")} color="blue" />
      <TextInput
        label="Email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <TextInput
        label="Password"
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <Button variant="primary" className="w-full">
        Log In
      </Button>
    </div>
  );

  const registerContent = (
    <div className="space-y-4">
      <ProgressBar progress={calculateProgress("register")} color="purple" />
      <TextInput
        label="Email"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <TextInput
        label="Password"
        type="password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <TextInput
        label="Confirm Password"
        type="password"
        value={registerConfirmPassword}
        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
      />
      <div className="flex items-center space-x-2">
        <Switch
          isOn={termsAccepted}
          handleToggle={() => setTermsAccepted(!termsAccepted)}
          color="purple"
        />
        <span className="text-sm text-gray-600">
          I accept the Terms and Conditions
        </span>
      </div>
      <Button variant="secondary" className="w-full">
        Register
      </Button>
    </div>
  );

  const tabs = [
    { id: "login", label: "Login", content: loginContent },
    { id: "register", label: "Register", content: registerContent },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-custom max-w-md w-full">
        <img
          src="https://images.pexels.com/photos/27582545/pexels-photo-27582545/free-photo-of-neon-lights.jpeg"
          alt="Nature"
          className="w-full h-40 object-cover rounded-xl mb-6"
        />
        <Tabs tabs={tabs} color="blue" />
      </div>
    </div>
  );
}

export default App;
