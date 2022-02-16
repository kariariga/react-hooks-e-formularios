function validarCPF(cpf) {
  return cpf.length === 11
    ? { valido: true, mensagem: "" }
    : { valido: false, mensagem: "CPF deve conter 11 dígitos." };
}

function validarSenha(senha) {
  return (senha.length >= 4 && senha.length <= 8)
    ? { valido: true, mensagem: "" }
    : { valido: false, mensagem: "Senha deve conter entre 4 e 8 dígitos." };
}

export { validarCPF, validarSenha }