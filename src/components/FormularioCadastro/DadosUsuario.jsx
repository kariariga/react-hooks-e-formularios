import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useValidation from "../../hooks/useValidation";

function DadosUsuario(props) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const validate = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useValidation(validate);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()) {
        props.onSubmit({ usuario, senha });
      }
    }}>
      <TextField
        value={usuario}
        onChange={(event) => {
          setUsuario(event.target.value);
        }}
        id="user"
        label="Usuário"
        required
        type="email"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        id="password"
        label="Senha"
        name="senha"
        required
        type="password"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
        error={!erros.senha.valido}
        helperText={erros.senha.mensagem}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
