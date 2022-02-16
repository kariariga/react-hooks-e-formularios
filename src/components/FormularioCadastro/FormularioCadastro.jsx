import React, { useEffect, useState } from "react";
import DadosCadastro from "./DadosCadastro";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Stepper, Step, Typography, StepLabel } from "@material-ui/core";

function FormularioCadastro(props) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  const formulario = [
    <DadosUsuario onSubmit={coletarDados} validate={props.validate}/>,
    <DadosCadastro onSubmit={coletarDados} validate={props.validate} />,
    <DadosEntrega onSubmit={coletarDados} validate={props.validate}/>,
    <Typography>Obrigado por se cadastrar!</Typography>,
  ];

  useEffect(() => {
    console.log(dadosColetados);
    if (etapaAtual === formulario.length - 1) {
      props.onSubmit(dadosColetados);
    }
  });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
