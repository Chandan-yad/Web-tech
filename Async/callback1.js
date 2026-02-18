function roll(num, next){
    setTimeout(() => {
        console.log("Roll no is ", + num);
        if(next) next();
    }, 1000)
}

roll(12212, ()=> {
    console.log("Wait its getting downloaded");
    roll(12312, ()=> {
        console.log("Wait its getting downloaded");
        roll(12412, ()=> {
            console.log("Wait its getting downloaded");
            roll(12512, ()=>{
                console.log("Wait its almost over");
                roll(12612);
            });
        });
    });
}); 