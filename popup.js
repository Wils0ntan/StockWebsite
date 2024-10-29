
document.querySelector('.newtrade_button').addEventListener('click', function() {
    var newWindow = window.open("", "_blank", 'width=600,height=400');


 newWindow.document.write( `
    <html>
        <head>
            <style>
        #newtrade_title{
        position: relative; top: 38px;
        position: relative; left: 150px;
        font-size: 30px;
        }
               #stockname {
          width:200px;
          height:40px;
          position: relative; top: 38px;
          position: relative; left: 40px;
        }
            #quantity{
        position: relative; top: 38px;
        position: relative; left: 50px;
        height:40px;
        width:80px;
        }
        #buyprice{
        position: relative; top: 38px;
        position: relative; left: 60px;
        height: 40px;
        width: 100px;
        }
          #stoploss{
        position: relative; top: 95px;
        position: relative; left:-115px;
        height: 40px;
        }
         #targetprice{
        position: relative; top: 55px;
        position: relative; left: 120px;
        height:40px;
        }
          #buybutton{
        position: relative; top: 0px;
        position: relative; left: 20px;
        width: 80px;
        height: 40px;
        border-radius: 100px;
        background-color:green;
        }
         #submitbutton{
        position: absolute;
        bottom: 10;
        right:30;
        width: 110px;
        height: 40px;
        border-radius: 100px;
        background-color:teal;
}
   #sellbutton{
        position: absolute;
        bottom: 110;
        right:490;
        width: 80px;
        height: 40px;
        border-radius: 100px;
        background-color:red;
}

        #sellprice{
        position: relative; top: 105px;
        position: relative; left:125px;
        height: 40px;
}
   #Quantityone{
        position: relative; top: 105px;
        position: relative; left:-180px;
        height: 40px;
}

            </style>
            </head>
      <body>
        <p id="newtrade_title">Enter new trade here</p>

        <form id="newtradeform">
        <input type="text" placeholder ="Stockname" id="stockname">
        <input type="text" placeholder ="Quantity" id="quantity">
        <input type="text" placeholder ="Buy Price" id="buyprice">
        <input type="text" placeholder ="Stop Loss" id="stoploss">
        <input type="text" placeholder ="Target Price" id="targetprice">
        <input type="text" placeholder ="Sell Price" id="sellprice">
        <input type="text" placeholder ="Quantity" id="Quantityone">
        </form>

       <button id="buybutton"> BUY</button>
       <button type="button" id="submitbutton" >SUBMIT</button>
       <button type="button" id="sellbutton" >SELL</button>



<script>

        document.getElementById("submitbutton").addEventListener("click", function()  {


        var stockname = document.getElementById("stockname").value;
        var quantity = document.getElementById("quantity").value;
        var buyprice = document.getElementById("buyprice").value;
        var stoploss = document.getElementById("stoploss").value;
        var targetprice = document.getElementById("targetprice").value;
        var sellprice = document.getElementById("sellprice").value;
        var openstatus = "Open";

        var table = window.opener.document.getElementById("main_table").getElementsByTagName("tbody")[0];
        var newrow = table.insertRow();
        var symbolcell = newrow.insertCell(0);
        var opencell = newrow.insertCell(1);
        var quantitycell = newrow.insertCell(2);
        var buypricecell = newrow.insertCell(3);
        var stopcell = newrow.insertCell(4);
        var targetcell = newrow.insertCell(5);
        var sellcell = newrow.insertCell(6);
        var returncell = newrow.insertCell(7);


        symbolcell.innerHTML = stockname;
        opencell.innerHTML = openstatus;
        quantitycell.innerHTML = quantity;
        buypricecell.innerHTML = buyprice;
        stopcell.innerHTML = stoploss;
        targetcell.innerHTML = targetprice;
        sellcell.innerHTML = sellprice;
        returncell.innerHTML = sellprice - buyprice;



        savetomain();
        window.close();

        });


        function savetomain() {
    const stockname = document.getElementById("stockname").value;
    const quantity = document.getElementById("quantity").value;
    const buyprice = document.getElementById("buyprice").value;
    const stoploss = document.getElementById("stoploss").value;
    const targetprice = document.getElementById("targetprice").value;
    const sellprice = document.getElementById("sellprice").value;

    if (window.opener) {
        window.opener.localStorage.setItem("stockname", stockname);
        window.opener.localStorage.setItem("quantity", quantity);
        window.opener.localStorage.setItem("buyprice", buyprice);
        window.opener.localStorage.setItem("stoploss", stoploss);
        window.opener.localStorage.setItem("targetprice", targetprice);
        window.opener.localStorage.setItem("sellprice", sellprice);
        }
        }

 function loadfromlocalstorage(){

             const stockname = window.opener.localStorage.getItem("stockname");
             const quantity = window.opener.localStorage.getItem("quantity");
             const buyprice = window.opener.localStorage.getItem("buyprice");
             const stoploss = window.opener.localStorage.getItem("stoploss");
             const targetprice = window.opener.localStorage.getItem("targetprice");
             const sellprice = window.opener.localStorage.getItem("sellprice");

        if (stockname) document.getElementById("stockname").value = stockname;
        if (quantity) document.getElementById("quantity").value = quantity;
        if (buyprice) document.getElementById("buyprice").value = buyprice;
        if (stoploss) document.getElementById("stoploss").value = stoploss;
        if (targetprice) document.getElementById("targetprice").value = targetprice;
        if (sellprice) document.getElementById("sellprice").value = sellprice;
        }



        window.onload = loadfromlocalstorage;
</script>


  </body>

  </html>
` );


});




