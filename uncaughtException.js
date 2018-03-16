function func(callback){
    // 비동기 동작
    console.log("1111");
    process.nextTick(callback, "callback!!");
    console.log("2222");
}

try{
    console.log("3333");
    func((param) => {
        console.log("4444");
        // 일부러 에러 발생
        a.a = 0;
        console.log("5555");
    });
}catch (e){
    // 실행되지 않음
    console.log("6666");
    console.log("exception!!");
}

// uncaughtException 이벤트는 모든 예외 발생 시 호출 되는 이벤트
process.on("uncaughtException", (error) =>{
    console.log("uncaughtException!!");
});

/*
3333
1111
2222
4444
uncaughtException!!
**/