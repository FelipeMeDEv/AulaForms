import React from 'react';

export function MyForm() {
  return (
    <form>
      <div>
        <label>
          Seu nome:
          <input type="text" name="nome" />
        </label>
      </div>
      <div>
        <label>
          Seu email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Sua senha:
          <input type="password" name="senha" />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
