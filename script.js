function BookRoom(){
    document.getElementById("lblCustName").innerHTML = document.getElementById("customerName").value;
    document.getElementById("lblCheckInDate").innerHTML = document.getElementById("checkInDate").value;
    document.getElementById("lblTotalDays").innerHTML = document.getElementById("totalDays").value;
    document.getElementById("lblTotalPerson").innerHTML = document.getElementById("totalPerson").value;
    document.getElementById("lblAdvAmount").innerHTML = document.getElementById("advamount").value;

    var roomName = "";
    var roomCost=0;
    var amenities ="";
    var amenitiesCost = 0;
    var total=0;
    var advamt = document.getElementById("advamount").value;
    var optDelux = document.getElementById("OptDelux");
    var optSuite = document.getElementById("OptSuite");
    var totDays = document.getElementById("totalDays");
    var totPerson = document.getElementById("totalPerson").value;

    var extra =0;
    var balance =0;
    if(optDelux.checked){
        roomName = optDelux.value;
        roomCost =4500;
    }
    if(optSuite.checked){
        roomName = optSuite.value;
        roomCost =7000;
    }
    var optAirCondition = document.getElementById("a/c");
    var optLocker = document.getElementById("lock");
    if(optAirCondition.checked){
        amenities +=optAirCondition.value + "&nbsp;"
        amenitiesCost = 1000;
        roomCost+=amenitiesCost;
    }
    if(optLocker.checked){
        amenities +=optLocker.value + "&nbsp;"
        amenitiesCost = 300;
        roomCost+=amenitiesCost;
    }
    totalroomCost = roomCost*totDays.value;
    console.log(totalroomCost);
    if(totPerson>2){
        var extraperson = totPerson -2;
        extra = extraperson*1000;
    }
    total +=totalroomCost+extra;
    console.log(total);
    balance +=total-advamt;
    console.log(balance);
    
    document.getElementById('lblRoom').innerHTML = roomName;
    document.getElementById('lblAmenities').innerHTML = amenities;
    document.getElementById('lblBalance').innerHTML = balance;

}