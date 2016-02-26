function validatePass()
{
	var password1 = document.forms["myForm"]["password1"].value;
	var password2 = document.forms["myForm"]["password2"].value;
	var p1Length = password1.length;
	var p2Length = password2.length;
	if(password1 != password2)
	{
		alert("Passwords do not match!");
	}
	else if(p1Length < 8)
	{
		alert("Password needs to be at least 8 characters!");
	}
}