$("#btn1").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var tot = n1 + n2;

        var string ="<tr><td>" + n1 + "</td><td>" + "+" + "</td><td>" + n2 + "</td><td>" + tot +"</td></tr>";
        $("#tab").append(string);
        input1.val("");
        input2.val("");
    }  
});

$("#btn2").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var tot = n1 - n2;

        var string ="<tr><td>" + n1 + "</td><td>" + "-" + "</td><td>" + n2 + "</td><td>" + tot +"</td></tr>";
        $("#tab").append(string);
        input1.val("");
        input2.val("");
    }  
});

$("#btn3").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var tot = n1 * n2;

        var string ="<tr><td>" + n1 + "</td><td>" + "*" + "</td><td>" + n2 + "</td><td>" + tot +"</td></tr>";
        $("#tab").append(string);
        input1.val("");
        input2.val("");
    }  
});

$("#btn4").click(function(){
    var input1 = $("#num1");
    var input2 = $("#num2");
    if(input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var tot = n1 / n2;

        var string ="<tr><td>" + n1 + "</td><td>" + "/" + "</td><td>" + n2 + "</td><td>" + tot +"</td></tr>";
        $("#tab").append(string);
        input1.val("");
        input2.val("");
    }  
});