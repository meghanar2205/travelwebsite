var no_of_persons;
var ticket_price;
var totalAmount;

function booking()
{
	bookingbuttons = document.getElementsByClassName('bkt');
	bookingbuttons[0].onclick = function popup()
	{
		document.getElementById("demo").style.display="block";
		ticket_price = 150;
		
	}
	bookingbuttons[1].onclick = function popup()
	{
		document.getElementById("demo").style.display="block";
		ticket_price = 100;
	}
	bookingbuttons[2].onclick = function popup()
	{
		document.getElementById("demo").style.display="block";
		ticket_price = 100;
	}
	bookingbuttons[3].onclick = function popup()
	{
		document.getElementById("demo").style.display="block";
		ticket_price = 120;
	}
	bookingbuttons[4].onclick = function popup()
	{
		document.getElementById("demo").style.display="block";
		ticket_price = 100;
	}
	bookingbuttons[5].onclick = function popup()
	{
		document.getElementById("demo").style.display="block";
		ticket_price = 250;
	}
}
function calculateMoney()
{
	no_of_persons = document.getElementById("persons").value
	totalAmount = no_of_persons*ticket_price;
	document.getElementById("tot_amt").innerHTML = "The total amount to be paid is "+totalAmount;
	document.getElementById("pay").style.display = "block";
}
function payment()
{
	document.getElementById("payment_modes").style.display = "block";
} 
function creditCardPayment()
{
	document.getElementById("creditcardpaymentlink").style.display = "block";
	document.getElementById("debitcardpaymentlink").style.display = "none";
}
function debitCardPayment()
{
	document.getElementById("creditcardpaymentlink").style.display = "none";
	document.getElementById("debitcardpaymentlink").style.display = "block";
}
function creditCardPaymentPage()
{
	document.getElementById("creditcardform").style.display = "block";
} 
function debitCardPaymentPage()
{
	document.getElementById("debitcardform").style.display = "block";
} 
function myfunc()
{
	document.getElementById("demo").style.display="none";
}