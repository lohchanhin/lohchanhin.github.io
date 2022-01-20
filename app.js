
 gsap.to(".animation", {rotation: 0, x:1920 , duration: 1});
 let viewportWidth = window.innerWidth;
 let viewportHeight = window.innerHeight;


function animateName(){    
    const t1 = new TimelineMax();    
    const target = document.getElementsByClassName("one");
    
    for(i=0;i<target.length;i++){
        var k = 0.5;
        console.log(`現在是第${i}個目標,這是i的時長,${k}秒`);

        t1
    .set(target[i],{
       scale:0.1       
    })
    .to(target[i],0.1,{        
        autoAlpha:1,
        scale:1,
        ease:Back.easeOut.config(10,10)
    });    
    }
    console.log("結束");
}

function animateName2(){    
    const t1 = new TimelineMax();    
    const target = document.getElementsByClassName("one");
    
    for(i=0;i<target.length;i++){
        var k = 0.5;
        console.log(`現在是第${i}個目標,這是i的時長,${k}秒`);

        t1
    .set(target[i],{
       scale:0.1       
    })
    .to(target[i],0.1,{        
        autoAlpha:1,
        scale:1,
        ease:Back.easeOut.config(10,10)
    });    
    }
    console.log("結束");
}


function remove(){
    const t2 = new TimelineMax();
    const target2 = document.getElementsByClassName("animation");

    t2.set(target2,{
        scale:1,
        
    }).to(target2,1,{
        rotationX:360,
        scale:0
    })
}

if(viewportWidth<800){
    setTimeout(function(){animateName2();},2000);
}else{
    setTimeout(function(){animateName();},2000);
}

setTimeout(function(){remove();},5000);

