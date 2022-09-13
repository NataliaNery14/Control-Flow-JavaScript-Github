    const a, b, c, menor, maior;

    document.write('Digite tres valores: ');
    
    
    if(a < b){
        if(a < c)
            menor = a;
        else
            menor = c;
    }
    else{
        if(b < c)
            menor = b;
        else
            menor = c;
    }

    
    if(a > b){
        if(a > c)
            maior = a;
        else
            maior = c;
    }
    else{
        if(b > c)
            maior = b;
        else
            maior = c;
    }

    document.write('Primeira versao\tMenor: %d\tMaior: %d\n", menor, maior');
