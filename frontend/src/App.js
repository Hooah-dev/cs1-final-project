import React from "react";
import "./App.css";
import ChangePssw from "./components/ChangePssw"
import FormEditStudent from "./components/FormEditStudent"
import TopicsLibrary from "./pages/curriculum/TopicsLibrary";
import CanddidacyPage from "./components/CandidacyPage";
import SingIn from "./components/singIn";
import ConfirmSingIn from "./components/ConfirmSingIn";
import { Button } from "@material-ui/core";

let mokData = {
  name: "Matteo",
  surname: "Schieven",
  email: "prova@prova.it",
  password: "1234",
  gender: "male",
  address: "Via Roma 123",
  municipality: "Vicenza",
  zipCode: "36100",
  nationality: { code: 'AS', label: 'American Samoa', phone: '1-684' },
  termsCondition: "true",
  privacy: "false",
  images: "true",
  birthday: "1999-05-12"
};


function App() {
  let [data , setForm]= React.useState(mokData);
  let [logInData, setLogInData]= React.useState(mokData)
  return (
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      <TopicsLibrary />
      <br></br>
     {/*  <CanddidacyPage data={data} onSubmit={(e) => setForm(e)}/> */}
      <Button onClick={()=> console.log(data)}>
        Risultato
      </Button>
      <br></br>
      <ChangePssw/>
      <br/>
      <FormEditStudent onSubmit={(e) => setForm(e)}/>
   {/*  <SingIn data={logInData} onSubmit={(e) => setLogInData(e)}/>}
      <br></br>
      <ConfirmSingIn/>
      <br></br> */}
    </div>
  );
}
export default App;
