document.querySelector("#sar").addEventListener("mouseover", sarDisplay);
document.querySelector("#sar").addEventListener("mouseout", sarDisplayOff);
function sarDisplay(){
    document.querySelector(".sar-content").style.display="flex";
}
function sarDisplayOff(){
    document.querySelector(".sar-content").style.display="none";
}

document.querySelector("#momath").addEventListener("mouseover", momathDisplay);
document.querySelector("#momath").addEventListener("mouseout", momathDisplayOff);
function momathDisplay(){
    document.querySelector(".momath-content").style.display="flex";
}
function momathDisplayOff(){
    document.querySelector(".momath-content").style.display="none";
}

document.querySelector("#enclave").addEventListener("mouseover", enclaveDisplay);
document.querySelector("#enclave").addEventListener("mouseout", enclaveDisplayOff);
function enclaveDisplay(){
    document.querySelector(".enclave-content").style.display="flex";
}
function enclaveDisplayOff(){
    document.querySelector(".enclave-content").style.display="none";
}

document.querySelector("#census").addEventListener("mouseover", censusDisplay);
document.querySelector("#census").addEventListener("mouseout", censusDisplayOff);
function censusDisplay(){
    document.querySelector(".census-content").style.display="flex";
}
function censusDisplayOff(){
    document.querySelector(".census-content").style.display="none";
}
