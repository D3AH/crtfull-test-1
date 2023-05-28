/**
 * ESTE SCRIPT SE PUEDE EJECUTAR EN EL NAVEGADOR
 */

const data = [
  {
    questionId: 1,
    questionName: 'What is you favorite color?',
    answers: [
      {
        answerName: 'Red',
        answerId: 11
      },
      {
        answerName: 'Blue',
        answerId: 12
      },
      {
        answerName: 'Pink',
        answerId: 13
      }
    ]
  },
  {
    questionId: 2,
    questionName: 'Are you a flat-earther?',
    answers: [
      {
        answerName: 'Yes',
        answerId: 21
      },
      {
        answerName: 'No',
        answerId: 22
      }
    ]
  }
];

const getNumeroCombinaciones = function(data) {
  let count = 1;

  data.forEach((item) => {
    count = item.answers.length * count;
  });

  return count;
}

const getCombinaciones = function(data) {
  let combinaciones = [];

  const getEspacio = function (sizeCombinacion, index, combinacion) {
    if (index >= sizeCombinacion) {
      combinaciones.push(combinacion);
      return;
    }

    data[index].answers.forEach((answer) => {
      const _combinacion = [...combinacion, answer];

      getEspacio(sizeCombinacion, index + 1, _combinacion);
    });
  }

  getEspacio(data.length, 0, []);

  return combinaciones;
}

const getCSVFromCombinaciones = function(data, combinaciones) {
  let csv = [];

  let header = [];
  data.forEach((question) => {
    header.push(question.questionName);
  })

  csv.push(header.join(','));

  combinaciones.forEach((combinacion) => {
    let row = combinacion
      .map((answer) => answer.answerName)
      .join(',');

    csv.push(row);
  });

  return csv.join('\n');
}

console.log(`Número de combinaciones ${getNumeroCombinaciones(data)}`);
let csv = getCSVFromCombinaciones(data, getCombinaciones(data));

const blob = new Blob([csv], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const downloadElement = document.createElement('a');

downloadElement.setAttribute('href', url);
downloadElement.setAttribute('display', 'none');
downloadElement.setAttribute('download', 'combinaciones.csv');

document.body.appendChild(downloadElement);
downloadElement.click();

document.body.removeChild(downloadElement);