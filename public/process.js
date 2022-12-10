$(document).ready(function(){
    
    var currentAccount = "";

    checkMM();

    $("#connectMetaMask").click(function() {
        connectMM().then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    })

    $("#btnDangKy").click(function() {
        $.post("./dangky", {
            Email: $("#txtEmail").val(),
            HoTen: $("#txtHoTen").val(),
            SoDT: $("#txtSoDT").val(),              
        }, function(data) {
            console.log(data);
        })
    })


});

async function connectMM() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}


function checkMM() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        console.log("Ban chua cai metamask!");
    }
}