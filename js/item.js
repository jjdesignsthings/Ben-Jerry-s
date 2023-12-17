let itemList = [
    {   
        category:"pint",
        new: true,
        itemid: 0,
        title: "카라멜 수트라",
        image:"karamel-sutra.png",
        desc: "퍼지 칩과 부드러운 카라멜이 들어있는 초콜릿 & 카라멜 아이스크림",
        dCerti:["#Gluten Free","#Kosher Dairy"]
    },
    {
        category:"pint",
        new: true,
        itemid: 1,
        title: "피넛 버터 컵",
        image:"peanut-butter-cup.png",
        desc: "고소한 피넛버터 아이스크림에 피넛버터 초콜릿이 콕콕 박혀있는 아이스크림",
        dCerti:["#Gluten Free","#Kosher Dairy"]

    },
    {
        category:"pint",
        new: true,
        itemid: 2,
        title: "피넛 버터 퍼지 코어",
        image:"peanut-butter-fudge.png",
        desc: "초콜릿 아이스크림과 피넛 버터 아이스크림, 그리고 진한 피넛버터 퍼지의 조화",
        dCerti:["#Gluten Free","#Kosher Dairy"]
    },
    {
        category:"pint",
        new: false,
        itemid: 3,
        title: "뉴욕 수퍼 퍼지 청크",
        image:"new-york-super-fudge.png",
        desc: "화이트 & 다크 퍼지 청크, 피칸, 호두, 아몬드가 들어있는 초콜릿 아이스크림",
        dCerti:["#Gluten Free","#Kosher Dairy"]
    },

    {
        category:"pint",
        new: false,
        itemid: 4,
        title: "민트 초콜릿 칩 쿠키",
        image:"mint-chocolate-cookie.png",
        desc: "신선한 민트 아이스크림에 초콜릿 쿠키가 들어있는 아이스크림",
        dCerti:["#Kosher Dairy"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 5,
        title: "바닐라",
        image:"vanilla.png",
        desc: "풍부한 맛의 크림같은 바닐라",
        dCerti:["#Kosher Dairy"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 6,
        title: "청키 몽키",
        image:"chunky-monkey.png",
        desc: "호두 퍼지 덩어리가 들어간 바나나 아이스크림",
        dCerti:["#Kosher Dairy"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 7,
        title: "체리 가르시아",
        image:"cherry-garcia.png",
        desc: "체리 퍼지 플레이크가 들어간 체리 아이스크림",
        dCerti:["#Kosher Dairy"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 8,
        title: "초콜릿 칩 쿠키 도우",
        image:"chocolate-chip-cookie.png",
        desc: "초콜릿 칩 쿠키 도우의 퍼지 덩어리가 들어간 바닐라 아이스크림",
        dCerti:["&nbsp;"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 9,
        title: "초콜릿 퍼지 브라우니",
        image:"chocolate-fudge-brownie.png",
        desc: "퍼지 브라우니가 들어간 초콜릿 아이스크림",
        dCerti:["#Halal","#Kosher Dairy"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 10,
        title: "커피커피 버즈버즈버즈!",
        image:"coffee-coffee-buzz.png",
        desc: "커피 아이스크림 베이스에 에스프레소 빈 퍼지가 들어있는 아이스크림",
        dCerti:["#Kosher Dairy"]
    },
    
    {
        category:"pint",
        new: false,
        itemid: 11,
        title: "하프베이크드",
        image:"half-baked.png",
        desc: "초코칩 쿠키도우와 퍼지 브라우니의 청크가 절묘하게 어우러진 초콜릿 & 바닐라 아이스크림",
        dCerti:["#Kosher Dairy"]
    },

    {
        category:"minicup",
        new: false,
        itemid: 12,
        title: "도우 낫 워리 비 해피",
        image:"doughnt-worry-be-happy.png",
        desc: "쿠키 도우와 초콜릿 맛 쿠키가 어우러진 캐러멜 맛 아이스크림",
        dCerti:["&nbsp;"]
    },
    {
        category:"minicup",
        new: false,
        itemid: 13,
        title: "체리 가르시아",
        image:"cherry-garcia.png",
        desc: "체리 퍼지 플레이크가 들어간 체리 아이스크림",
        dCerti:["#Kosher Dairy"]
    },
    
    {
        category:"minicup",
        new: false,
        itemid: 14,
        title: "초콜릿 칩 쿠키 도우",
        image:"chocolate-chip-cookie.png",
        desc: "초콜릿 칩 쿠키 도우의 퍼지 덩어리가 들어간 바닐라 아이스크림",
        dCerti:[]
    },
    
    {
        category:"minicup",
        new: false,
        itemid: 15,
        title: "초콜릿 퍼지 브라우니",
        image:"chocolate-fudge-brownie.png",
        desc: "퍼지 브라우니가 들어간 초콜릿 아이스크림",
        dCerti:["#Halal","#Kosher Dairy"]
    },


    {
        category:"scoop",
        new: true,
        itemid: 16,
        title: "하프베이크드",
        image:"scoop-half-baked.png",
        desc: "초코칩 쿠키도우와 퍼지 브라우니의 청크가 절묘하게 어우러진 초콜릿 & 바닐라 아이스크림",
        dCerti:["#Kosher Dairy"]
    },
    {
        category:"scoop",
        new: false,
        itemid: 17,
        title: "뉴욕 수퍼 퍼지 청크",
        image:"scoop-new-york-super-fudge.png",
        desc: "화이트 & 다크 퍼지 청크, 피칸, 호두, 아몬드가 들어있는 초콜릿 아이스크림",
        dCerti:["#Gluten Free","#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 18,
        title: "민트 초콜릿 청크",
        image:"mint-chocolate-chunk.png",
        desc: "민트 아이스크림 베이스에 초콜릿 칩이 덩어리 채 들어있는 아이스크림",
        dCerti:["#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 19,
        title: "바닐라",
        image:"scoop-vanila.png",
        desc: "풍부한 맛의 크림같은 바닐라",
        dCerti:["#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 20,
        title: "스위트 크림&쿠키",
        image:"sweet-cream-and-cookie.png",
        desc: "바닐라 아이스크림 베이스에 초코 쿠키와 스위트 크림이 들어있는 아이스크림",
        dCerti:["#Halal","#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 21,
        title: "스트로베리",
        image:"strawberry.png",
        desc: "딸기 아이스크림 베이스에 딸기 과육이 듬뿍 들어있는 아이스크림",
        dCerti:["#Halal","#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 22,
        title: "청키 몽키",
        image:"scoop-chunky-monkey.png",
        desc: "호두, 퍼지 덩어리가 들어간 바나나 아이스크림",
        dCerti:["#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 23,
        title: "체리 가르시아",
        image:"scoop-cherry-garcia.png",
        desc: "체리 퍼지 플레이크가 들어간 체리 아이스크림",
        dCerti:["#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 24,
        title: "초콜릿 칩 쿠키 도우",
        image:"scoop-chocolate-chip-cookie.png",
        desc: "초콜릿 칩 쿠키 도우의 퍼지 덩어리가 들어간 바닐라 아이스크림",
        dCerti:[]
    },

    {
        category:"scoop",
        new: false,
        itemid: 25,
        title: "초콜릿 퍼지 브라우니",
        image:"scoop-chocolate-fudge-brownie.png",
        desc: "퍼지 브라우니가 들어간 초콜릿 아이스크림",
        dCerti:["#Halal","#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 26,
        title: "트리플 카라멜 청크",
        image:"triple-caramel-chunk.png",
        desc: "캐러멜 초콜릿과 소스가 듬뿍 들어있는 아이스크림",
        dCerti:["#Halal","#Kosher Dairy"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 27,
        title: "레모네이드 소르베",
        image:"lemonade-sorbet.png",
        desc: "상큼한 레모네이드 맛의 소르베",
        dCerti:["#Halal"]
    },

    {
        category:"scoop",
        new: false,
        itemid: 28,
        title: "베리베리 엑스트라 오디너리",
        image:"berry-extraordinary.png",
        desc: "각종 베리류가 듬뿍 들어있는 소르베",
        dCerti:["#Halal"]
    },







    
]