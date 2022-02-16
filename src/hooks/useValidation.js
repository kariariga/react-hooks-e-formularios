import React, { useState } from "react";

function useValidation(validate) {
  const estadoInicial = criarEstadoInicial(validate);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validate[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for(let campos in erros) {
      if(!erros[campos].valido) {
        return false;
      }
    }
    return true;
  }

  return[erros, validarCampos, possoEnviar]
}

function criarEstadoInicial(validate) {
  const estadoInicial = {};
  for (let campos in validate) {
    estadoInicial[campos] = { valido: true, mensagem: "" };
  }
  return estadoInicial;
}

export default useValidation;
