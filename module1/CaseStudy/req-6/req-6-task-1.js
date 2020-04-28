//***************************** REQ 6 / task 1.1-2 *****************************
let arrListCustomers = [];
let Customer = function () {
    this.setFullName = function(fullName){
        this.fullName = fullName;
    };
    this.getFullName = function(){
        return this.fullName;
    };
    this.setIdNumber = function(idNumber){
        this.idNumber = idNumber;
    };
    this.getIdNumber = function(){
        return this.idNumber;
    };
    this.setDateOfBirth = function(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    };
    this.getDateOfBirth = function() {
        return this.dateOfBirth;
    };
    this.setEmail = function(email) {
        this.email = email;
    };
    this.getEmail = function() {
        return this.email;
    };
    this.setAddress = function(address) {
        this.address = address;
    };
    this.getAddress = function() {
        return this.address;
    };
    this.setTypeCustomer = function(typeCustomer){
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function() {
        return this.typeCustomer;
    };
    this.setNumGuest = function(numGuest) {
        this.numGuest = numGuest;
    };
    this.getNumGuest = function() {
        return this.numGuest;
    };
    this.setNumNight = function(numNight) {
        this.numNight = numNight;
    };
    this.getNumNight = function() {
        return this.numNight;
    };
    this.setTypeRoom = function(typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.gettypeRoom = function() {
        return this.typeRoom;
    };
    this.setTypeService = function(typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function() {
        return this.typeService;
    };
//***************************** REQ 6 / task 1.3 *****************************
    this.totalPay = function () {
        switch (this.typeRoom){
            case 'House':
                this.price = 500;
                break;
            case 'Villa':
                this.price = 300;
                break;
            case 'Room':
                this.price = 100;
                break;
        }
        //giảm theo địa chỉ
        switch (this.address) {
            case "Đà Nẵng":
                this.discountAddress = 20;
                break;
            case "Huế":
                this.discountAddress = 10;
                break;
            case "Quảng Nam":
                this.discountAddress = 5;
                break;
            default:
                this.discountAddress = 0;
        }
        //giảm theo thời gian lưu trú
        if ( this.numNight > 7){
            this.discountNumNight = 30;
        } else if ( this.numNight > 5 ){
            this.discountNumNight = 20;
        } else if ( this.numNight > 2 ){
            this.discountNumNight = 10;
        } else{
            this.discountNumNight = 0;
        }
        //giảm theo loại Customer
        switch (this.typeCustomer) {
            case "Diamond":
                this.discountCustomer = 15;
                break;
            case "Platinum":
                this.discountCustomer = 10;
                break;
            case "Gold":
                this.discountCustomer = 5;
                break;
            case "Silver":
                this.discountCustomer = 2;
                break;
            default:
                this.discountCustomer = 0;
        }
        this.totalDiscount = this.discountAddress + this.discountNumNight + this.discountCustomer;
        return (this.price * this.numNight - this.totalDiscount);
    };
};
//***************************** REQ 6 / task 1.4 *****************************
function addNewCustomer() {
    let perCustomer = new Customer();
    perCustomer.setFullName(document.getElementById("fullName").value);
    perCustomer.setIdNumber(document.getElementById("idNumber").value);
    perCustomer.setDateOfBirth(document.getElementById("dateOfBirth").value);
    //if ( /^\w_+@\w{2,}.\w{2,}$/g.test(document.getElementById("email").value){
        perCustomer.setEmail(document.getElementById("email").value);
    //}

    perCustomer.setAddress(document.getElementById("address").value);
    perCustomer.setTypeCustomer(document.getElementById("typeCustomer").value);
    perCustomer.setNumGuest(document.getElementById("numGuest").value);
    perCustomer.setNumNight(document.getElementById("numNight").value);
    perCustomer.setTypeRoom(document.getElementById("typeRoom").value);
    perCustomer.setTypeService(document.getElementById("typeService").value);
    perCustomer.totalPay();

    //if(checkValidFormat()){
        arrListCustomers.push(perCustomer);
        alert ("Just saved new customer: " + perCustomer.getFullName());
        displaymenuFormAddCustomer();
        displayCustomer();
    //}
}
let menuFormAddCustomer = 'Full Name <input type="text" id="fullName"/><br/>'
    +'ID number <input type="text" id="idNumber"/><br/>'
    +'Birthday <input type="text" id="dateOfBirth"/><br/>'
    +'Email <input type="email" id="email"/><br/>'
    +'Address <select id="address"><option>Đà Nẵng</option><option>Huế</option><option>Quảng Nam</option><option>Others</option></select><br/>'
    +'Customer Type <select id="typeCustomer"><option>Member</option><option>Silver</option><option>Gold</option><option>Platinum</option><option>Diamond</option></select><br/>'
    +'Number of Guest <input type="number" id="numGuest"/><br/>'
    +'Number of Nights <input type="number" id="numNight"/><br/>'
    + 'Type of Room <select id="typeRoom"><option>Villa</option><option>House</option><option>Room</option></select><br/>'
    + 'Type of Service <select id="typeService"><option>Normal</option><option>Business</option><option>V.I.P.</option></select><br/>';
function displaymenuFormAddCustomer() {
    document.getElementById("menuFormAddCustomer").innerHTML = menuFormAddCustomer + '<button onclick="addNewCustomer()" >Save</button>';
}
function checkValidFormat() {
    let pattEmail = /^\w_+@\w{2,}.\w{2,}$/g;
    let pattDate = /(^0[0-9]$|^[12][0-9]$|^3[01]$)\/(^0[0-9]$|^1[0-2]$)\/(^[0-9]{4}$)/;
    let pattNumber = /^[0-9]$/g;
    let pattIdNumber = /^[0-9]{8}$/g;
    if ( pattEmail.test(arrListCustomers[i].getEmail()) || pattDate.test(arrListCustomers[i].getDateOfBirth())
        || pattNumber.test(arrListCustomers[i].getNumNight()) || pattNumber.test(arrListCustomers[i].getNumGuest())){
        return true;
    } else {
        alert ("Invalid value");
    }
}
//***************************** REQ 6 / task 1.5 *****************************
function displayCustomer() {
    let chart = "<table><tr>"
        +"<td>No.</td>"
        +"<td>Name</td>"
        +"<td>ID number</td>"
        +"<td>Date of Bỉrthday</td>"
        +"<td>Email</td>"
        +"<td>Address</td>"
        +"<td>Customer Type</td>"
        +"<td>No. of Guests</td>"
        +"<td>No. of Nights</td>"
        +"<td>Type of Room</td>"
        +"<td>Type of Service</td>"
        +"<td>Payment</td></tr>";
    for ( let i = 0; i < arrListCustomers.length; i++) {
        chart += "<tr>" + "<td>" + i + "</td>"
            +"<td>"+ arrListCustomers[i].getFullName() +"</td>"
            +"<td>"+ arrListCustomers[i].getIdNumber() +"</td>"
            +"<td>"+ arrListCustomers[i].getDateOfBirth() +"</td>"
            +"<td>"+ arrListCustomers[i].getEmail() +"</td>"
            +"<td>"+ arrListCustomers[i].getAddress() +"</td>"
            +"<td>"+ arrListCustomers[i].getTypeCustomer() +"</td>"
            +"<td>"+ arrListCustomers[i].getNumGuest() +"</td>"
            +"<td>"+ arrListCustomers[i].getNumNight() +"</td>"
            +"<td>"+ arrListCustomers[i].gettypeRoom() +"</td>"
            +"<td>"+ arrListCustomers[i].getTypeService() +"</td>"
            +"<td>"+ arrListCustomers[i].totalPay() +"$</td>";

        chart += "<td><button onclick='displaymenuFormEditCustomer("+ i+ ")'>Edit</button>"
            +"<button onclick='deleteCustomer("+ i+ ")'>Delete</button></tr>";
    }
    chart += "</table>";
    document.getElementById("displaylist").innerHTML = chart;
}
function totalPay() {
    displayCustomer();
}
function displaymenuFormEditCustomer(i){
    displayCustomer();
    document.getElementById("menuFormAddCustomer").innerHTML = menuFormAddCustomer + '<button onclick="editCustomer('+i+')" >Save</button>';
    //display current info
    document.getElementById("fullName").value = arrListCustomers[i].getFullName();
    document.getElementById("idNumber").value = arrListCustomers[i].getFullName();
    document.getElementById("dateOfBirth").value = arrListCustomers[i].getDateOfBirth();
    document.getElementById("email").value = arrListCustomers[i].getEmail();
    document.getElementById("address").value = arrListCustomers[i].getAddress();
    document.getElementById("typeCustomer").value = arrListCustomers[i].getTypeCustomer();
    document.getElementById("numGuest").value = arrListCustomers[i].getNumGuest();
    document.getElementById("numNight").value = arrListCustomers[i].getNumNight();
    document.getElementById("typeRoom").value = arrListCustomers[i].gettypeRoom();
    document.getElementById("typeService").value = arrListCustomers[i].getTypeService();
}
function editCustomer(i) {
    arrListCustomers[i].setFullName(document.getElementById("fullName").value);
    arrListCustomers[i].setIdNumber(document.getElementById("idNumber").value);
    arrListCustomers[i].setDateOfBirth(document.getElementById("dateOfBirth").value);
    arrListCustomers[i].setEmail(document.getElementById("email").value);
    arrListCustomers[i].setAddress(document.getElementById("address").value);
    arrListCustomers[i].setTypeCustomer(document.getElementById("typeCustomer").value);
    arrListCustomers[i].setNumGuest(document.getElementById("numGuest").value);
    arrListCustomers[i].setNumNight(document.getElementById("numNight").value);
    arrListCustomers[i].setTypeRoom(document.getElementById("typeRoom").value);
    arrListCustomers[i].setTypeService(document.getElementById("typeService").value);
    displayCustomer();
}
function deleteCustomer(i) {
    displayCustomer();
    if (confirm("Are you sure to delete the guest " + arrListCustomers[i].getFullName() + "?")){
        arrListCustomers.splice(i,1);
    }
    displayCustomer();
}
function exitMenu() {
    document.getElementById("displaylist").innerHTML = "";
    document.getElementById("menuFormAddCustomer").innerHTML = "";
}
//test_display

