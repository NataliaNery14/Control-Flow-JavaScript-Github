const idade;

  document.write('Informe a idade do nadador: ');
  document.write('%d", &idade');

  if (idade < 5)
     document.write('Sem classificação.');
    else if (idade <= 7)
	  document.write('infantil A');
    else if (idade <= 10)
	  document.write('infantil B');
	else if (idade <= 13)
	  document.write('juvenil A');
	else if (idade <= 17)
	  document.write('juvenil B');
	else
	  document.write('sênior');
