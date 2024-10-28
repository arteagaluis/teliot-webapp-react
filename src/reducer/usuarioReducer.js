export const ESTADO_INICIAL = {
  usuario: {
    nombre: '',
    apellido: '',
    correo: '',
  },
  token: '',
};

export const ACCIONES_USUARIO = {
  ACTUALIZAR_USUARIO: 'ACTUALIZAR_USUARIO',
  ACTUALIZAR_SEND_EMAIL_USER: 'ACTUALIZAR_SEND_EMAIL_USER',
  ACTUALIZAR_TOKEN: 'ACTUALIZAR_TOKEN',
};

export function usuarioReducre(state, action) {
  switch (action.type) {
    case ACCIONES_USUARIO.ACTUALIZAR_USUARIO:
      return { ...state, usuario: { ...state.usuario, ...action.payload } };

    case ACCIONES_USUARIO.ACTUALIZAR_SEND_EMAIL_USER:
      return { ...state, sendEmailUser: action.payload };

    case ACCIONES_USUARIO.ACTUALIZAR_TOKEN:
      return { ...state, token: action.payload };

    default:
      throw new Error(`Este tipo de accion no esta permitida ${action.type}`);
  }
}
