console.log("nome: ", "beppe");
$("#tab").append(JSON.parse(localStorage))

var tableArray = [];
$("button").click(function(){
    if ($("#elimina")) {
        
    }
    var input1 = $("#num1");
    var input2 = $("#num2");
    var sign = $(this).val();
    console.log("input1", input1.val());
    console.log("input2", input2.val());
    if(input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var tot;
        switch (sign) {
            case "+":
                tot = n1 + n2;
                break;
            case "-":
                tot = n1 - n2;
                break;
            case "/":
                tot = n1 / n2;
                break;
            case "*":
                tot = n1 * n2;
                break;
        };

        var string ="<tr><td>" + n1 + "</td><td>" + sign + "</td><td>" + n2 + "</td><td>" + tot +"</td><td><button id='elimina'>ELIMINA</button></td></tr>";
        tableArray.push(string);
        
        var table = localStorage.getItem("tabella");
        localStorage.setItem(localStorage.length+1, JSON.parse(tableArray));
        $("#tab").append(string);
        input1.val("");
        input2.val("");
        
    }
});

for (let i=0; i<localStorage.length; i++) {
    $("#tab").append(localStorage.getItem(i));    
}