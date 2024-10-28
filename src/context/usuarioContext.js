'use client';
import { ESTADO_INICIAL, usuarioReducre } from '@/reducer/usuarioReducer';
import { createContext, useReducer } from 'react';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usuarioReducre, ESTADO_INICIAL);

  const { usuario, token } = state;

  const data = {
    usuario,
    dispatch,
    token,
  };

  return (
    <UsuarioContext.Provider value={data}>{children}</UsuarioContext.Provider>
  );
};

export { UsuarioProvider };
export default UsuarioContext;
