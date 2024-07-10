//bibliotecas e códigos de terceiros
const formatador = (data) => {
    return{
        dia: {
            numerico: dayjs(data).format('DD'),
            semana:{
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
        
    }
}


// object {}
    const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
}

//lista, array, vetor []
let atividades = [
    atividade,
    {
        nome: 'Academia em Grupo',
        data: new Date("2024-07-09 12:00"),
        finalizada: false
    },
    {
        nome: 'Gaming Session',
        data: new Date("2024-07-10 17:00"),
        finalizada: true
    },
]

//atividades = []




// arrow function
const criarItemAtividade = (atividade) => {
    let input = ' <input type="checkbox" '

    if (atividade.finalizada){
        input = input + 'checked'
    }

    input = input + '>'


    const formatar = formatador(atividade.data);

    return  `
     <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>
          ${formatar.dia.semana.longo},
          dia ${formatar,dia.numerico}
          de ${formatar.mes}
          ás ${formatar.hora}h</time>
    </div>
    `
}

const atualizarListaAtividade = () => {
  const section = document.querySelector('section')
    
  
  // verificar se minha lista esta vazia

  if (atividades.length == 0){
    section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
    return
  }

  // verificação de itens dentro da lista 
  
  for (let atividade of atividades){
        section.innerHTML += criarItemAtividade (atividade)
    }

}

atualizarListaAtividade ()
