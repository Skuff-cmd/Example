function ChangeRed()
{
	let myBlock = document.getElementsByClassName("text1");
		for(let i = 0; i < myBlock.length; i+=2)
		if(myBlock[i].style.color === 'white')
		myBlock[i].style.color = 'red';
		else
			myBlock[i].style.color = 'white';
}

function ChangeGreen()
{
	let myBlock = document.getElementsByClassName("text1");
		for(let b = 1; b < myBlock.length; b+=2)
		if(myBlock[b].style.color === 'white')
		myBlock[b].style.color = 'green';
		else
			myBlock[b].style.color = 'white';
}

let mas = new Array(4);
mas[0] = 1;
mas[1] = 3;
mas[2] = 5;
mas[3] = 7;

let max = mas[0];
for(let i = 1; i < 4; i++)
{
	if(mas[i] > max)
	{
		max = mas[i]
	}

}
console.log(max)