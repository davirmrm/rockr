export const adicionaZero = (numero) => {
  if (numero <= 9) return `0${numero}`;
  else return numero;
};

export const MaskTelefone = (valor) => {
  valor = valor || '';
  let valueNew = '';
  if (valor.length <= 10) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
      .replace('-', '')
      .replace(/(\d{4})(\d)/, '$1-$2');
  } else if (valor.length > 10) {
    valueNew = valor
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/(.{3})(\d)/, '$1)$2')
      .replace(/(.{4})(\d)/, '$1 $2')
      .replace('-', '')
      .replace(/(\d{5})(\d)/, '$1-$2');
  }
  return valueNew;
};

export const MaskItemCep = (valor) => {
  let valueNew = '';
  valueNew = valor.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
  return valueNew;
};

export const MaskCpf = (valor) => {
  let valueNew = '';
  valueNew = valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2');

  return valueNew;
};

const lenguageList = {
  "pt-BR": { style: 'currency', currency: 'BRL' }
}
export const MaskValorMoedaex = (valor, language = "pt-BR") => {
  valor = String(valor)
  if(valor?.includes('R$ ')){
    valor = valor.replace('R$ ', '').replace('.', '').replace('.', '').replace('.', '');
  }
  valor = valor.replace('.', ',').split(',')
  const formatter = new Intl.NumberFormat(language, lenguageList[language]);
  const val = formatter.format(valor[0]);
  return val;
};

export const MaskValor = (valor, language = "pt-BR" ) => {
  let v = valor.toLocaleString(language)
  return v
}


export const MaskDataHora = (valor, options) => {
  if (options?.language) {
    if (options?.language === 'en-US') {
      options = {...options, format: 'MM/DD/YYYY-HH:MM:SS'}
    }
    if (options?.language === 'pt-BR') {
      options = {...options, format: 'DD/MM/YYYY-HH:MM:SS'}
    }
  }
  const formatos = options?.format?.split('-');
  let valueNew = {data: '', hora: ''}
  let data = new Date(valor);

  
  if (options?.format) {
    const formato = formatos[0].split('/');
    const formType = {
      'DD': adicionaZero(data.getDate()),
      'MM': adicionaZero(data.getMonth()+1),
      'YYYY': data.getFullYear()
    }
    const formatoHora = formatos[1].split(':');
    const formTypeHora = {
      'HH': adicionaZero(data.getHours()),
      'MM': adicionaZero(data.getMinutes()),
      'SS': adicionaZero(data.getSeconds())
    }
    
    valueNew.data = `${formType[formato[0]]}/${formType[formato[1]]}/${formType[formato[2]]}`;
    valueNew.hora = `${formTypeHora[formatoHora[0]]}:${formTypeHora[formatoHora[1]]}:${formTypeHora[formatoHora[2]]}`;
  } else {
    valueNew.data = `${adicionaZero(data.getDate())}/${adicionaZero(data.getMonth()+1)}/${data.getFullYear()}`;
    valueNew.hora = `${adicionaZero(data.getHours())}:${adicionaZero(data.getMinutes())}:${adicionaZero(data.getSeconds())}`;
  }
  return valueNew
}
