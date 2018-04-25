var inputs = ["FileNameHere", "Date", "Client's Name", "Guest Count", "Contact Person", "Tour Type", "Guide Name", "AD Contact", "Transportation", "Location"];
var schedule = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"]

function validateForm() {
    var a = document.forms["myForm"][inputs[0]].value;
    if (a == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        document.getElementById("filename").innerHTML = "Tour Name:"
        document.getElementById("filename2").innerHTML = a;
    }

    var b = document.forms["myForm"][inputs[1]].value;
    if (b == "") {
        alert("Date must be filled out");
        return false;
    }
    else {
        document.getElementById("date").innerHTML = "Date:"
        document.getElementById("date2").innerHTML = b;
    }

    var c = document.forms["myForm"][inputs[2]].value;
    if (c == "") {
        alert("Client must be filled out");
        return false;
    }
    else {
        document.getElementById("client").innerHTML = "Client:"
        document.getElementById("client2").innerHTML = c;
    }

    var d = document.forms["myForm"][inputs[3]].value;
    if (d == "") {
        alert("Guest Count must be filled out");
        return false;
    }
    else {
        document.getElementById("guests").innerHTML = "# of Guests:"
        document.getElementById("guests2").innerHTML = d;
    }

    var e = document.forms["myForm"][inputs[4]].value;
    if (e == "") {
        alert("Client Contact must be filled out");
        return false;
    }
    else {
        document.getElementById("contact").innerHTML = "Contact:"
        document.getElementById("contact2").innerHTML = e;
    }

    var f = document.forms["myForm"][inputs[5]].value;
    if (f == "") {
        alert("Tour Type must be filled out");
        return false;
    }
    else {
        document.getElementById("tour").innerHTML = "Tour Type:"
        document.getElementById("tour2").innerHTML = f;
    }

    var g = document.forms["myForm"][inputs[6]].value;
    if (g == "") {
        alert("Guide must be filled out");
        return false;
    }
    else {
        document.getElementById("guide").innerHTML = "Guide:"
        document.getElementById("guide2").innerHTML = g;    }

    var h = document.forms["myForm"][inputs[7]].value;
    if (h == "") {
        alert("AD Contact must be filled out");
        return false;
    }
    else {
        document.getElementById("ADcontact").innerHTML = "AD Contact:";
        document.getElementById("ADcontact2").innerHTML = h;
    }

    var i = document.forms["myForm"][inputs[8]].value;
    if (i == "") {
        alert("Transportation must be filled out");
        return false;
    }
    else {
        document.getElementById("transport").innerHTML = "Transport:"
        document.getElementById("transport2").innerHTML = i;
    }

    var j = document.forms["myForm"][inputs[9]].value;
    if (j == "") {
        alert("Pick up location must be filled out");
        return false;
    }
    else {
        document.getElementById("location").innerHTML = "Location:";
        document.getElementById("location2").innerHTML = j;
    }

    document.getElementById("details").innerHTML = "Tour Details:";

    var l1 = document.forms["myForm"]["1stTime"].value;
    var l1end = document.forms["myForm"]["end1stTime"].value;
    var l2 = document.forms["myForm"]["1stDetail"].value;
      document.getElementById("firstTime").innerHTML = l1 + " - " + l1end;
      document.getElementById("firstDetail").innerHTML = l2;
    
    var m1 = document.forms["myForm"]["2ndTime"].value;
    var m1end = document.forms["myForm"]["end2ndTime"].value;
    var m2 = document.forms["myForm"]["2ndDetail"].value;
      document.getElementById("secondTime").innerHTML = m1 + " - " + m1end;
      document.getElementById("secondDetail").innerHTML = m2;

    var n1 = document.forms["myForm"]["3rdTime"].value;
    var n1end = document.forms["myForm"]["end3rdTime"].value;
    var n2 = document.forms["myForm"]["3rdDetail"].value;
      document.getElementById("thirdTime").innerHTML = n1 + " - " + n1end;
      document.getElementById("thirdDetail").innerHTML = n2;
    
    var o1 = document.forms["myForm"]["4thTime"].value;
    var o1end = document.forms["myForm"]["end4thTime"].value;
    var o2 = document.forms["myForm"]["4thDetail"].value;
      document.getElementById("fourthTime").innerHTML = o1 + " - " + o1end;
      document.getElementById("fourthDetail").innerHTML = o2;
    
    var p1 = document.forms["myForm"]["5thTime"].value;
    var p1end = document.forms["myForm"]["end5thTime"].value;
    var p2 = document.forms["myForm"]["5thDetail"].value;
      document.getElementById("fifthTime").innerHTML = p1 + " - " + p1end;
      document.getElementById("fifthDetail").innerHTML = p2;
        
    var q1 = document.forms["myForm"]["6thTime"].value;
    var q1end = document.forms["myForm"]["end6thTime"].value;
    var q2 = document.forms["myForm"]["6thDetail"].value;
      document.getElementById("sixthTime").innerHTML = q1 + " - " + q1end;
      document.getElementById("sixthDetail").innerHTML = q2;
    
    var r1 = document.forms["myForm"]["7thTime"].value;
    var r1end = document.forms["myForm"]["end7thTime"].value;
    var r2 = document.forms["myForm"]["7thDetail"].value;
      document.getElementById("seventhTime").innerHTML = r1 + " - " + r1end;
      document.getElementById("seventhDetail").innerHTML = r2;
    
    var z = document.forms["myForm"]["textNotes"].value;
    document.getElementById("storage").innerHTML = z;
};

