function recursiva(max){

    console.log(max);
    if(max >= 10349) return;
    max++;
    recursiva(max);
}

recursiva(0);