const CARD_ERRORS: Record<string, string> = {
  'LA FECHA ALTA TIENE UN MES INCORRECTO': 'Datos de la tarjeta incorrectos',
  'LA FECHA DE ALTA ES INCORRECTA': 'Datos de la tarjeta incorrectos',
  'ESTA TARJETA NO ESTA HABILITADA PARA COMPRAS POR INTERNET':
    'Datos de la tarjeta incorrectos',
  'NO SE HA ENCONTRADO LA TARJETA': 'Datos de la tarjeta incorrectos',
  'EL CVV ES INCORRECTO': 'Datos de la tarjeta incorrectos',
  'ES NECESARIO PROPORCIONAR UN MES VALIDO': 'Datos de la tarjeta incorrectos',
  'LA FECHA ALTA ESTA EN FORMATO INCORRECTO': 'Datos de la tarjeta incorrectos',
  'ES NECESARIO PROPORCIONAR EL NÚMERO DE TARJETA':
    'Datos de la tarjeta incorrectos',
  'ES NECESARIO PROPORCIONAR EL MES': 'Datos de la tarjeta incorrectos',
  'ES NECESARIO PROPORCIONAR EL AÑO': 'Datos de la tarjeta incorrectos',
  'ES NECESARIO PROPORCIONAR UN AÑO VALIDO': 'Datos de la tarjeta incorrectos',
  'ES NECESARIO PROPORCIONAR EL CVV': 'Datos de la tarjeta incorrectos',
  'ESTA TARJETA NO SE ENCUENTRA EN LA BDA': 'Datos de la tarjeta incorrectos',
}

const TOKEN_ERRORS: Record<string, string> = {
  'NO SE HA ENCONTRADO UN TOKEN VALIDO': 'Código inválido',
  'ES NECESARIO PROPORCIONAR EL TOKEN': 'Código inválido',
  'EL TOKEN HA EXPIRADO': 'Código inválido',
  'EL TOKEN CON LA TARJETA ENVIADA NO FUE ENCONTRADO': 'Código inválido',
}

const AMOUNT_ERROR: Record<string, string> = {
  'EL IMPORTE EXCEDE EL LIMITE DEL CLIENTE':
    'El monto excede el límite de la tarjeta',
}

const USER_ERRORS: Record<string, string> = {
  'EL CLIENTE NO CUENTA CON DISPONIBLE PARA LA COMPRA':
    'No puede realizar la compra',
  'EL CLIENTE NO CUENTA CON DISPONIBILIDAD PARA LA COMPRA':
    'No puede realizar la compra',
  'EL CLIENTE NO SE ENCUENTRA EN SITUACION DE COMPRA':
    'No puede realizar la compra',
  'EL CORREO ELECTRÓNICO NO ES VALIDO': 'No puede realizar la compra',
}

const EXIST_ERROR: Record<string, string> = {
  'ERROR EL ORDENID YA EXISTE': 'Ya se realizó la compra',
}

export const ALL_ERRORS: Record<string, string> = {
  ...AMOUNT_ERROR,
  ...CARD_ERRORS,
  ...TOKEN_ERRORS,
  ...USER_ERRORS,
  ...EXIST_ERROR,
}
