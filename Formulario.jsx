import React from 'react';

export function MyForm() {
  return (
    <form>
      <label>
        Coloque seu nome:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        coloque seu email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        coloque sua senha:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
