vina = [
	{
		vrsta: "Merlot",
		vinarija: "Mackov podrum",
		godina: "2014",
		cena: 750
	},
	{
		vrsta: "Cabaret sauvignon",
		vinarija: "Podrum Petrovic",
		godina: "2013",
		cena: 650
	},
	{
		vrsta: "Cabaret Franc",
		vinarija: "Podrum Petrovic",
		godina: "2013",
		cena: 700
	},
	{
		vrsta: "Rajanski Rizling",
		vinarija: "Podrum Zivanovic",
		godina: "2015",
		cena: 700
	},

]
function prikaziVina(vina) {
	var tabela = document.getElementById("tabela");
	var button = document.getElementsByClassName("button");

	var header = tabela.createTHead();
	var row = header.insertRow();

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	cell1.innerHTML = "<b>Vrsta</b>";
	cell2.innerHTML = "<b>Vinarija</b>";
	cell3.innerHTML = "<b>Godina</b>";
	cell4.innerHTML = "<b>Cena</b>";
	cell5.innerHTML = "<b>Kupovina</b>";

	for (var i = 0; i < vina.length; i++) {
		var row = tabela.insertRow(1);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);

		cell1.innerHTML = vina[i].vrsta;
		cell2.innerHTML = vina[i].vinarija;
		cell3.innerHTML = vina[i].godina;
		cell4.innerHTML = vina[i].cena;
		cell5.innerHTML = '<button class="button" onclick="dodajVinaUKorpu(' + i + ')">Dodaj u korpu</button>';
	}
}

function dodajVinaUKorpu(i) {
	var korpa = document.getElementById("korpa");

	var row = korpa.insertRow(1);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	
	cell1.innerHTML = vina[i].vrsta;		 
	cell2.innerHTML = vina[i].vinarija;	 
	cell3.innerHTML = vina[i].godina;		
}
