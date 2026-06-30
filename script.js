let alunos = [];

const button = document.getElementById("btn-add");
button.addEventListener("click", function () {
  let nome = document.getElementById("inp-nome").value;
  let nota1 = parseFloat(document.getElementById("inp-n1").value);
  let nota2 = parseFloat(document.getElementById("inp-n2").value);
  let nota3 = parseFloat(document.getElementById("inp-n3").value);

  //IsNan verifica se o valor é um número ou não, retornando true ou false.

  if (nome === "" || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, preencha todos os campos com valores válidos.");
    return;
  }

  let media = calcularMedia(nota1, nota2, nota3).toFixed(2);
  let resultado = medirResultado(media);

  let aluno = {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3,
    media: media,
    resultado: resultado,
  };

  alunos.push(aluno);
  console.log(alunos);

  adicionarAlunoTabela(aluno);
  atualizarCards(alunos);
});

// Função para calcular a média das notas

function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return media;
}

// Função para medir o resultado do aluno com base na média

function medirResultado(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 6 && media < 7) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function adicionarAlunoTabela(aluno) {
  const exibirNota = document.getElementById("tabela-body");

  let linha = document.createElement("tr");
  let colunaNome = document.createElement("td");
  let colunaNota1 = document.createElement("td");
  let colunaNota2 = document.createElement("td");
  let colunaNota3 = document.createElement("td");
  let colunaMedia = document.createElement("td");
  let colunaResultado = document.createElement("td");

  colunaNome.textContent = aluno.nome;
  colunaNota1.textContent = aluno.nota1;
  colunaNota2.textContent = aluno.nota2;
  colunaNota3.textContent = aluno.nota3;
  colunaMedia.textContent = aluno.media;
  colunaResultado.textContent = aluno.resultado;

  linha.appendChild(colunaNome);
  linha.appendChild(colunaNota1);
  linha.appendChild(colunaNota2);
  linha.appendChild(colunaNota3);
  linha.appendChild(colunaMedia);
  linha.appendChild(colunaResultado);

  exibirNota.appendChild(linha);
}

function atualizarCards(alunos) {
  let aprovado = 0;
  let reprovado = 0;
  let recuperacao = 0;

  let quant = alunos.length;

  alunos.forEach((aluno) => {
    if (aluno.resultado === "Aprovado") {
      aprovado++;
    } else if (aluno.resultado === "Reprovado") {
      reprovado++;
    } else if (aluno.resultado === "Recuperação") {
      recuperacao++;
    }
  });

  let cardAprovados = document.getElementById("aprovados");
  let cardReprovados = document.getElementById("reprovados");
  let cardRecuperacao = document.getElementById("recuperacao");
  let cardTotal = document.getElementById("total");

  cardAprovados.textContent = aprovado;
  cardReprovados.textContent = reprovado;
  cardRecuperacao.textContent = recuperacao;
  cardTotal.textContent = quant;
}


function aplicarFiltro(filtro) {
  
}

document.getElementById("btn-todos").addEventListener("click", function() {
  const todosButton = "todos";
  aplicarFiltro("todos");
});

document.getElementById("btn-aprovados").addEventListener("click", function() {
  const aprovadosButton = "aprovados";
  aplicarFiltro("aprovados");
});

document.getElementById("btn-recuperacao").addEventListener("click", function() {
  const recuperacaoButton = "recuperacao";
  aplicarFiltro("recuperacao");
});

document.getElementById("btn-reprovados").addEventListener("click", function() {
  const reprovadosButton = "reprovados";
  aplicarFiltro("reprovados");
});
