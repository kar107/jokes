const tempload = () =>{ 
    let temp = document.querySelector('#temp');
    temp.innerHTML="&#xf2cb";
    setTimeout(() => {
        temp.innerHTML="&#xf2ca";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML="&#xf2c9";
        temp.style.color="yellow";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML="&#xf2c8";
        
    }, 3000);
    setTimeout(() => {
        temp.innerHTML="&#xf2c7";
        temp.style.color="red";
    }, 4000);
}

tempload();
setInterval(tempload,5000)



