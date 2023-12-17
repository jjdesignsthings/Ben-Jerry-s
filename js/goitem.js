$(function(){


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





// 카테고리 별로 아이템 디스플레이
    let category = location.href.split("?")[1].split("=")[1]
    "all / pint / minicup / scoop"

    let applyItem = {
        all:{
            style:{
                background:"#fab303"
            },
            text:"전체"
        },
        pint:{
            style:{
                background:"#ffa1ba"
            },
            text:"파인트"
        },
        minicup:{
            style:{
                background:"#efd1a5"
            },
            text:"미니컵"
        },
        scoop:{
            style:{
                background:"#c1e297"
            },
            text:"스쿱"
        }
    }
    
    // let a = {a:1,b:2,c:3}
    // a["b"]

    // itemList 배열 안에서 카테고리에 해당되는 아이템들을 넣어줄 배열
    let itemListArray = []
    if(category!=="all"){
        for(let i=0 ; i<itemList.length ; i++){
            if(itemList[i].category == category){
                itemListArray.push(itemList[i])
            }
        }
        console.log(applyItem[category])

    }else{
        itemListArray = itemList
        console.log(itemListArray)
        // $(".itemTitle").css("background","#fab303")
        // $(".itemTitleName").html("전체")
    }
    $(".itemTitle").css("background",applyItem[category].style.background)
    $(".itemTitleName").html(applyItem[category].text)


    let result = ""
    for(let i=0; i<itemListArray.length; i++){
        let certi = ""
        for (let j=0; j<itemListArray[i].dCerti.length; j++){
            certi+="<span> "+itemListArray[i].dCerti[j]+" </span>"
        }
        
        result += `
            <li>
                <section class="itemBorder">
                    <img src="./itemImg/${itemListArray[i].image}" alt="${itemListArray[i].title}">
                    <span>더보기</span>
                </section>
                <section class="itemInfo">
                    <p>
                        ${certi}
                    </p>
                    <h5>${itemListArray[i].title}</h5>
                    <p>${itemListArray[i].desc}</p>
                </section>
            </li>
        `
    }
    $(".showItem").html(result)



    
// 카테고리 클릭 시 제목 변경
    $(".all").click(function(){


       
    })
    // $(".pint").click(function(){
    //     $(".itemTitle").css("background","#ffa1ba")
    //     $(".itemTitleName").html("파인트")
    // })
    // $(".minicup").click(function(){
    //     $(".itemTitle").css("background","#efd1a5")
    //     $(".itemTitleName").html("미니컵")
    // })
    // $(".scoop").click(function(){
    //     $(".itemTitle").css("background","#c1e297")
    //     $(".itemTitleName").html("스쿱")
    // })



})