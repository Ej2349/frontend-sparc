import React from 'react'

function test() {

  function calculateFunc(c) {
    var x = parseInt(document.getElementById("num1").value);
     var y = parseInt(document.getElementById("num2").value);
      switch(c) {
        case 'add' : document.getElementById("result").value = x+y;
        break;
        case 'sub' : document.getElementById("result").value = x-y;
        break;
        case 'mul' : document.getElementById("result").value = x*y;
        break;
        case 'div' : document.getElementById("result").value = x/y;
        break;
        case 'div' : document.getElementById("result").value = x%y;
        break;
    }
  return (
    <div>
    <input type="number" id="num1" value="" placeholder="Operands 1"/>
      <input type="number" id="num2" value="" placeholder="Operands 2"/>
      <button onclick="calculateFunc('add')">Add</button>
      <button onclick="calculateFunc('sub')">Sub</button>
      <button onclick="calculateFunc('mul')">Mul</button>
      <button onclick="calculateFunc('div')">Div</button>
      <button onclick="calculateFunc('mod')">Mod</button>
      <h3>Results:</h3>
      <input type="display" id="result"/>
    </div>
  )
}

export default test