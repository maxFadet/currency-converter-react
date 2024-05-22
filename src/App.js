import React from "react";
import Container from "./Container";
import Form from "./Form";
import Fieldset from "./Fieldset";
import Result from "./Result";
import Legend from "./Legend";
import Input from "./Input";
import Select from "./Select";

function App() {
  return (
    <Container>
      <Form>
        <Fieldset>
          <Legend />
          <Input />
          <Select name="currencyHave" />
          <Select
            name="currencyGet"
            defaultValue="4.59"
            otherColor
          />
        </Fieldset>
        <Result />
      </Form>
    </Container>
  );
};

export default App;
