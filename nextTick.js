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

/*
3333
1111
2222
4444
D:\intellij_workspace\node-study\nextTick.js:13
        a.a = 0;
        ^

ReferenceError: a is not defined
    at func (D:\intellij_workspace\node-study\nextTick.js:13:9)
    at _combinedTickCallback (internal/process/next_tick.js:135:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    at Function.Module.runMain (module.js:695:11)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
* */