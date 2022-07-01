export const formatToMoney = (value: number) => value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
