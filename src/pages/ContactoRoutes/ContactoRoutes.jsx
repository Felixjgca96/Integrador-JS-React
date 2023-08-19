import React from "react";
import {
  ContactoRoutesContainerStyled,
  FormStyled,
  ButtonFormStyled,
  Form,
} from "./ContactoRoutesStyles";

import LoginInput from "../../components/UI/LoginInput/LoginInput";

const ContactoRoutes = () => {
  return (
    <ContactoRoutesContainerStyled>
      <h2>Envianos tus dudas</h2>
      <FormStyled>
        <Form>
          <LoginInput type="text" placeholder="Nombre" />
          <LoginInput type="text" placeholder="Apellido" />
          <LoginInput type="text" placeholder="Email" />
          <LoginInput type="text" placeholder="Asunto" />

          <ButtonFormStyled type="button">Enviar</ButtonFormStyled>
        </Form>
      </FormStyled>
      <p>Muchas Gracias por comunicarte con nosotros.</p>
    </ContactoRoutesContainerStyled>
  );
};

export default ContactoRoutes;
