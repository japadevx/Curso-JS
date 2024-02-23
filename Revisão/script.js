document.addEventListener("DOMContentLoaded", function() {
    const tabuadaContainer = document.getElementById("tabuada-container");
    tabuadaContainer.innerHTML = generateTabuada(7);
  
    function generateTabuada(multiplier) {
      let tableHTML = '<table>';
      tableHTML += '<tr><th>Multiplier</th><th>Result</th></tr>';
  
      for (let i = 1; i <= 10; i++) {
        let result = multiplier * i;
        tableHTML += `<tr><td>${i}</td><td>${result}</td></tr>`;
      }
  
      tableHTML += '</table>';
      return tableHTML;
    }
  });
  