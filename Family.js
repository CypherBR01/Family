let family = {
  receita: [(pai = 50), (mae = 2000), (filha = 200), (filho = 10)],
  despesas: [(luz = 400), (agua = 500.45), (comida = 900.5)]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function caculator() {
  let fReceita = sum(family.receita)
  let fDespesas = sum(family.despesas)

  let total = fReceita - fDespesas
  let ok = total >= 0

  let balaceText = 'negativo'

  if (ok) {
    balaceText = 'positivo'
  }

  console.log(`Seu saldo é ${balaceText}, ${total.toFixed(2)}R$`)
}
console.log(caculator())
