function sacarDinheiro(valorSaque){
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;
    while(valorSaque >= 100){
        valorSaque -= 100;
        contador100 ++;
    }
    while(valorSaque >= 50){
        valorSaque -= 50;
        contador50 ++;
    }
    while(valorSaque >= 20){
        valorSaque -= 20;
        contador20 ++;
    }
    while(valorSaque >= 10){
        valorSaque -= 10;
        contador10 ++;
    }
    while(valorSaque >= 5){
        valorSaque -= 5;
        contador5 ++;
    }
    while(valorSaque >= 1){
        valorSaque -= 1;
        contador1 ++;
    }

    
    if (contador100 > 0) {
            console.log(`${contador100} nota(s) de R$ 100. `)
    }
    
    if (contador50 > 0) {
            console.log(`${contador50} nota(s) de R$ 50. `)
    }
    if (contador20 > 0) {
            console.log(`${contador20} nota(s) de R$ 20. `)
    }
    if (contador10 > 0) {
            console.log(`${contador10} nota(s) de R$ 10. `)
    }
    
    if (contador5 > 0) {
            console.log(`${contador5} nota(s) de R$ 5. `)
    }
    
    if (contador1 > 0) {
            console.log(`${contador1} nota(s) de R$ 1. `)
    }
    
}

sacarDinheiro(421);