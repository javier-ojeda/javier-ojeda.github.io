function generatetime(){
    //funcion
    let TimeNow = new Date();

    //minutero//
    let hours = TimeNow.getHours().toString().length < 2 ? "0" + TimeNow.getHours() : TimeNow.getHours();
    let minutes = TimeNow.getMinutes().toString().length < 2 ? "0" + TimeNow.getMinutes() : TimeNow.getMinutes();
    let seconds = TimeNow.getSeconds().toString().length < 2 ? "0" + TimeNow.getSeconds() : TimeNow.getSeconds();

    let mainTime = `$(hours):$(minutes):$(seconds)`

    document.getElementById("time").innerHTML = mainTime;

    setInterval(() => {
        generatetime();
    }, 1000);

} 