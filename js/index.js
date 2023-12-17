$(document).ready(function(){

//배너
let train = $(".train")
let trainLI = train.children()
let count = 0
let pageUL = $(".page")
let pageLI = pageUL.children()

pageLI.click(function(){
      let idx = $(this).index()
      trainLI.removeClass("on")
      trainLI.eq(idx).addClass("on")
      pageLI.removeClass("on")
      pageLI.eq(idx).addClass("on")
      count = idx
})

// 자동기능   
let timer = setInterval(function(){
   count++
   if(count>trainLI.length-1){count=0}
   trainLI.removeClass("on")
   trainLI.eq(count).addClass("on")
   pageLI.removeClass("on")
   pageLI.eq(count).addClass("on")
},2777)

$(".link2detail").mouseover(function(){
   clearInterval(timer)
})

$(".link2detail").mouseout(function(){
   timer = setInterval(function(){
   count++
   if(count>trainLI.length-1){count=0}
   trainLI.removeClass("on")
   trainLI.eq(count).addClass("on")
   pageLI.removeClass("on")
   pageLI.eq(count).addClass("on")
   },2777)
})


// 메뉴에 마우스를 hover하면 부모인 header의 높이를 430px
$(".gnb1>li, .gnb2>li").hover(function(){
   $(this).parents("header").addClass("on")
},function(){
   $(this).parents("header").removeClass("on")
})
   
// .gnb2>li>a , .gnb2>li>a 마우스를 hover하면 class on
$(".gnb1>li>a,.gnb2>li>a").hover(function(){
   $(this).addClass("on")
}, function(){
   $(this).removeClass("on")
})

// 스크롤이 .size에 도착하면 .deco1,2,3이 튀어 나옴


let sizeTop = $(".size").offset().top
let devHeight = $(window).height()
let scTop = 0
$(window).scroll(function(){
   scTop = $(window).scrollTop()
   if(scTop+(devHeight*0.83)>=sizeTop){
      $(".deco1,.deco2,.deco3").addClass("on")
   }
   else{
      $(".deco1,.deco2,.deco3").removeClass("on")
   }
})


//스크롤이 ct2-1를 만나면 컨텐츠들이 좌우로 모임

    $(window).scroll(function(){
        scTop = $(window).scrollTop()
        $(".ct2-1 img,.ct2-1 div,.ct2-2 img,.ct2-2 div").each(function(){
            if(scTop + (devHeight*0.6) >=$(this).offset().top){
                $(this).addClass("on")
            }
            else{
                $(this).removeClass("on")
            }
        })
    })

    //좌표에 마우스 올리면 위치가 나타남

    $(".ct3-2Navigation>li").click(function(){
      let navIdx = $(this).index()
      let stopIdx = $(".ct3-2Stop>li").eq(navIdx)

      if(navIdx==stopIdx.index()){
         stopIdx.addClass("on")
      }
      else{
         stopIdx.removeClass("on")
      }
   

   })


// 모바일

// 메뉴
//moblieSearch 클릭하면 hiddenSearch에 on 클래스 붙이기

$(".moblieSearch").click(function(){
   $(".hiddenSearch").addClass("on")
   $(".moblieSearch").css("display","none")
   $(".mobile_menuOpen").css("display","none")
   $(".mobile_menuCloseSearch").css("display","block")
})

$(".mobile_menuCloseSearch").click(function(){
   $(".hiddenSearch").removeClass("on")
   $(".moblieSearch").css("display","block")
   $(".mobile_menuOpen").css("display","block")
   $(".mobile_menuCloseSearch").css("display","none")
})

//MobileSearchList 클릭하면 배경색
$(".MobileSearchList>li").click(function(){
   $(".MobileSearchList>li").removeClass("on")
   $(this).addClass("on")
})



// .mobileMenu 클릭하면 hiddenGnb>ul 에 on 클래스 
$(".mobile_menuOpen").click(function(){
   $(".hiddenGnb").addClass("on")
   $(".mobileMenu").addClass("on")
   $(".moblieSearch").css("display", "none")
   $(".mobile_menuOpen").css("display", "none")
})

$(".mobile_menuClose").click(function(){
   $(".hiddenGnb").removeClass("on")
   $(".mobileMenu").removeClass("on")
   $(".moblieSearch").css("display", "block")
   $(".mobile_menuOpen").css("display", "block")
   $(".hiddenGnb>ul>li").css("height",42)
   for(let i=0; i<boxStateArray.length; i++){
      boxStateArray[i].state = false
   }

})

// Gnb 클릭
let boxStateArray = [
   {
      state:false,
      height:0
   },
   {
      state:false,
      height:0
   },
   {
      state:false,
      height:0
   },
   {
      state:false,
      height:0
   },
   {
      state:false,
      height:0
   }
]

$(".hiddenGnb>ul>li").each(function(index){
   let height = $(this).children("ul").height()
   boxStateArray[index].height = height
})

let state = false
$(".hiddenGnb>ul>li").click(function(){
   let idx = $(this).index()
   if(boxStateArray[idx].state == false){
      $(".hiddenGnb>ul>li").css("height",42)
      for(let i=0; i<boxStateArray.length; i++){
         boxStateArray[i].state = false
      }
      $(this).css("height",42+boxStateArray[idx].height)
      boxStateArray[idx].state = true
   }
   else{
      $(this).css("height",42)
      boxStateArray[idx].state = false
   }
})

let deviceWidth = $(window).width()
console.log(deviceWidth)
let fontsize = deviceWidth*0.08
$(".glideWrap>p").css("font-size",fontsize)

$(window).resize(function(){
   deviceWidth = $(window).width()
   let fontsize = deviceWidth*0.08
   $(".glideWrap>p").css("font-size",fontsize)
})


// 모바일 맛보기

let classChg = 1


let rCount = 0
$(".mobileControler .btn_prev").click(function(e){
   // 1번 인덱스의 클래스지워지고 i만큼 
   e.preventDefault()

   rCount++
   $(".mobileSizeRotate>li").each(function(){
      let idx = $(this).index()
      let classNum = (idx+rCount)%3
      $(this).removeClass("mobileS0")
      $(this).removeClass("mobileS1")
      $(this).removeClass("mobileS2")
      $(this).addClass("mobileS"+classNum)
      
   })

})

$(".mobileControler .btn_next").click(function(e){
   e.preventDefault()

   rCount--
   if(rCount<0){rCount=2}
   $(".mobileSizeRotate>li").each(function(){
      let idx = $(this).index()
      let classNum = (idx+rCount)%3
      $(this).removeClass("mobileS0")
      $(this).removeClass("mobileS1")
      $(this).removeClass("mobileS2")
      $(this).addClass("mobileS"+classNum)
      
   })

})
// mobileSizeRotate

let mSRHeight = $(".mobileS1").height()
$(".mobileSizeRotate").height(mSRHeight)

$(window).resize(function(){
   mSRHeight = $(".mobileS1").height()
   $(".mobileSizeRotate").height(mSRHeight)
})

})





