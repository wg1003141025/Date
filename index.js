window.onload = function () {
    move();
    let time = setInterval(move,1000);
    function move() {
        let date = new Date(2018,1,8,18,0,0);
        let now = new Date();
        let mcha = Math.floor((date.getTime()-now.getTime())/1000);
        let day = Math.floor(mcha/3600/24);
        let hour = Math.floor((mcha-day*3600*24)/3600);
        let minute = Math.floor((mcha-day*3600*24-hour*3600)/60);
        let miao = Math.floor(mcha-day*3600*24-hour*3600-minute*60);
        let tianshu = document.querySelectorAll(".sj>.cent>.bor>span");
        let arr = [];
        arr.push(day,hour,minute,miao);
        tianshu.forEach((element,index) => {
            element.innerText = arr[index];
        });
        //tianshu.innerHTML = day+'天'+hour+'时'+minute+'分'+miao+'秒';
        //console.log(day,hour,minute,miao,mcha);
    }
}