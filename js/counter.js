var number = document.querySelector('.number');
setTimeout(function(){
    number.innerHTML = '2';
    setTimeout(function(){
        number.innerHTML = '1';
        setTimeout(function(){
            number.innerHTML = '0';
            window.location.href = "https://jesusrmz.com/";
        }, 1000);
    }, 1000);
},1200);