function forget() 
{
    Fid.innerHTML = '<h5 style="text-align:center;">MOBILE NUMBER</h5>'+'<input type="number" id="mobnum"class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-success" onclick="sendotp()">Send OTP</button><div>'+'<br><br>'+'<h5 style="text-align:center;">Enter The OTP</h5>'+'<input type="number"  id="enterotp" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-primary" onclick="setpin()">Next</button></div>'
}
function sendotp()
{
    a= document.getElementById('mobnum').value;
    pattern=/^[6-9]+[0-9]{9}$/;
    b=pattern.test(a);
    if(b==true)
    {
        c=Math.floor(Math.random()*10000);
        alert("Your OTP is "+c);
    }
    else
    {
        alert("Invalid Mobile Number")
    }
}
function setpin()
{
   let d=document.getElementById('enterotp').value;
    if(c==d)
    {
    Fid.innerHTML='<h2 style="text-align:center;"> SET PIN</h2>'+'<br>'+'<h4 style="text-align:center;">New Pin</h4>'+'<input type="number" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-warning">Submit</button></div>'
    }
    else{
        alert("Please Enter Validated OTP")
    }
}
function Register(){
    Fid.innerHTML ='<h5 style="text-align:center;">MOBILE NUMBER</h5>'+'<input type="number" id="regmobnum" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-primary" onclick="registerpin()">Send OTP</button><div>'+'<br><br>'+'<h5 style="text-align:center;">Enter The OTP</h5>'+'<input type="number" id="otpenter" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-warning" onclick="kyc()">Next</button></div>'
}
function registerpin()
{
    a=document.getElementById('regmobnum').value;
    pattern=/^[6-9]+[0-9]{9}$/
    b=pattern.test(a);
    if(b==true)
    {
        c=Math.floor(Math.random()*10000);
        alert("Your OTP is "+c)
    }
    else
    {
        alert("Invalid Mobile Number");
    }
}

function kyc()
{
    let d=document.getElementById('otpenter').value;
    if(c==d)
    {
    Fid.innerHTML ='<h3 style="text-align:center;">KYC</h3>'+'<br><br>'+'<h5 style="text-align:center;">Name</h5>'+'<input type="text" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Age</h5>'+'<input type="number" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Email</h5>'+'<input type="email" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Aadhar No</h5>'+'<input type="number" class="form-control"/>'+'<br>'+'<h5 style="text-align:center;">Pin</h5>'+'<input type="number" class="form-control"/>'+'<br>'+'<div class="text-center"><button type="button" class="btn btn-success">Complete Kyc</button></div>'
}
else{
    alert("Please Enter Validated OTP")
}
}
function Menu()
{
    Fid.innerHTML ='<h2 style="text-align:center">Menu</h2>'+'<br><br>'+
    '<h5><a href="#" onclick="displaydetails()" style="text-decoration: none;">PROFILE </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="transaction()" style="text-decoration: none;">TRANSACTIONS </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="CheckBal()" style="text-decoration: none;">CHECK BALANCE </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="accounts()" style="text-decoration: none;">ACCOUNTS </a></h5>'+
    '<br>'+
    '<h5><a href="#" onclick="acDetails()" style="text-decoration: none;">LINK A/C </a></h5>'+
    '<br>'
}
function displaydetails()
{
    Fid.innerHTML ='<h2 style="text-align:center">KYC Details</h2>'+'<br><br>'+
    '<h5 style="text-align:center;">Name :</h5>'+
    '<br>'+ 
    '<h5 style="text-align:center;">Age :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">E-mail :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">Aadhar No :</h5>'+
    '<br>'
}
function transaction()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Transaction</h2>'+
    '<br><br>'+
    '<h5 style="text-align:center;">Mobile Number or UPI</h5><input type="text" class="form-control">'+
    '<br><br>'+
    '<span class="dropdown"><input class="dropdown-menu" id="dropdownMenuButton1" data-bs-toggle="dropdown"><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item">SBI</a></li><li><a class="dropdown-item">ICICI</a></li><li><a class="dropdown-item">HDFC</a></li></ul></span>'+
    '<br>'+ '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action<a><li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div>'+
    '<h5 style="text-align :center;">Amount</h5><input type="number" class="form-control">'+'<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="Moneytransfer()">Send</button></div>'
}
function Moneytransfer()
{
    Fid.innerHTML ='<h5 style="text-align:center;">Transaction Pin</h5><input type="number" class="form-control">'+
    '<br><br>'+
    '<div class="text-center"><button type="button" class="btn btn-success">Transfer</button></div>'
}
function CheckBal()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Chech Balance</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Transaction Pin</h5><input type="number" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-primary" onclick="balance()">Check</button></div>'
}
function balance()
{
    Fid.innerHTML ='<h5 style="text-align:center;">Balance</h5><input type="number" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-primary">Close</button></div>'
}
function accounts()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Accounts</h2>'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-primary" onclick="displayAcc()">Select</button></div>'
}
function displayAcc()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Account Details</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Bank Name :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">IFSC :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">A/C Number :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">Re-A/C Number :</h5>'+
    '<br>'+
    '<h5 style="text-align:center;">Account :</h5>'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="resetTpin()">Reset Pin</button></div>'
}
function resetTpin()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Reset Transaction Pin</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Old Pin</h5><input type="number" class="form-control">'+
    '<br>'+ 
    '<h5 style="text-align:center;">New Pin</h5><input type="number" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success">Change Pin</button></div>'
}
function acDetails()
{
    Fid.innerHTML ='<h2 style="text-align:center;">A/C Details</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Bank Name</h5><input type="text" class="form-control">'+
    '<br>'+
    '<h5 style="text-align:center;">IFSC</h5><input type="text" class="form-control">'+
    '<br>'+
    '<h5 style="text-align:center;">A/C Number</h5><input type="text" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="otpverify()">Link</button></div>'
}
function otpverify()
{
    Fid.innerHTML ='<h2 style="text-align:center;">OTP Verification</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">OTP</h5><input type="number" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success" onclick="SetTpin()">Verify</button></div>'
}
function SetTpin()
{
    Fid.innerHTML ='<h2 style="text-align:center;">Set Transaction PIN</h2>'+
    '<br>'+
    '<h5 style="text-align:center;">Set Pin</h5>'+
    '<input type="number" class="form-control">'+
    '<br>'+
    '<div class="text-center"><button type="button" class="btn btn-success">Submit</button></div>'
}