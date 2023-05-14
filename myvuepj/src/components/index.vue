<template>
<div>
    <main>
        <!-- 첫페이지 -->
        <div class="pg1wrap">
            <div class="pg1">
                <!-- 움직이는 글씨 윗줄  -->
                <div class="scwrap">
                    <div>
                        <section class="sc1">
                            <div>
                            </div>
                        </section>
                        <!-- 움직이는 글씨 아래줄  -->
                        <section class="sc2">
                            <div>
                            </div>
                        </section>
                    </div>
                </div>
                <!-- 찌글찌글박스 -->
                <div class="zgzgwrap">
                    <!-- <video src="../assets/img/dh2.mov"  autoplay muted loop></video> -->
                    <!-- 찌글찌글 안에 영상박스 -->
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2번째 부분 -->
        <div class="pg2">
            <!-- 2페이지 텍스트영역랩 -->
            <!-- pg2인라인안에 div하나 넣어서 겉박스에 oh주고 해야될듯 -->
            <div class="pg2_txtwrap">
                <div class="ohbx">
                    <div>
                        We <div class="pg2_inlineImg">
                            <img src="../assets/img/page2img1.jpg" alt="">
                        </div> care about
                    </div>
                </div>
                <div class="ohbx">
                    
                        <div>
                            <div class="pg2_inlineImg">
                                <img src="../assets/img/page2img2.jpg" alt="">
                            </div>creating beautiful
                        </div>
                    
                </div>
                <div class="ohbx">
                    
                        <div>
                            architecture,<div class="pg2_inlineImg">
                                <img src="../assets/img/page2img3.jpg" alt="">
                            </div>developing
                        </div>
                    
                </div>
                <div class="ohbx">
                    
                        <div>
                            projects <div class="pg2_inlineImg">
                                <img src="../assets/img/page2img4.jpg" alt="">
                            </div>that are individual,
                        </div>
                    
                </div>
                <div class="ohbx">
                    
                        <div>
                            inspiring, and <div class="pg2_inlineImg">
                                <img src="../assets/img/page2img5.jpg" alt="">
                            </div> enhancing
                        </div>
                    
                </div>
                <div class="ohbx">
                    <div>the lifestyle of users.</div>
                </div>
            </div>
        </div>

        <!-- 3번째 페이지 -->
        <div class="pg3">
            <div class="pg3wrap">
                <!-- 이미지 박스들~ -->
                <!-- 왼쪽박스 -->
                <div class="pg3_leftbx pg3imgbx">
                    <img src="../assets/img/108degrees_last.jpg" alt="">
                </div>
                <!-- 왼쪽에서 제일큰박스 -->
                <div class="pg3_bigbx pg3imgbx">
                    <img src="../assets/img/108degrees_next.jpg" alt="">
                </div>
                <!-- 가운데박스 -->
                <div class="pg3_centerbx pg3imgbx">
                    <img src="../assets/img/108degrees_small.jpg" alt="">
                </div>
                <!-- 밑박스 -->
                <div class="pg3_btmbx pg3imgbx">
                    <img src="../assets/img/108degrees_start.jpg" alt="">
                </div>
                <!-- 오른쪽박스 -->
                <div class="pg3_rightbx pg3imgbx">
                    <img src="../assets/img/buckhurst_colorbg.jpg" alt="">
                </div>

                <!-- 텍스트박스들~ -->
                <!-- 왼쪽. 왼쪽으로 90도 돌아간박스 -->
                <div class="pg3_lefttext pg3inlinebx">
                    <div class="pg3_lefttext_ro">TANDRIDGE, SURREY</div>
                </div>
                <!-- 가운데 텍스트박스 -->
                <div class="pg3_centertext pg3inlinebx"><span>Swissland</span><br><span>Hill House</span></div>
                <!-- 밑에 텍스트박스 -->
                <div class="pg3_bttext pg3inlinebx">
                    <div class="pg3_bttext_wrap">
                        <h4>PRIVATE HOUSE</h4>
                        <p>A bespoke private gym house<br>extension</p>
                    </div>
                </div>
                <!-- 버튼들 -->
                <div class="pg3_btns">
                    <div class="leftbtn">
                        <a href="">
                            <div>PREV</div>
                            <div>＜-</div>
                        </a>
                    </div>
                    <div class="rightbtn">
                        <a href="">
                            <div>NEXT</div>
                            <div>-＞</div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <!-- 4번째 페이지 -->
        <div class="pg4">
            <div class="pg4wrap">
                <div class="p4cont">
                    <ul>
                        <!-- 프로젝트 개수 -->
                        <li>
                            <div>12</div>
                            <p>Projects</p>
                        </li>
                        <!-- 나의 2번째 프로젝트 -->
                        <li>
                            <div>My 2nd</div>
                            <p>Project</p>
                        </li>
                        <!-- 만든이 -->
                        <li>
                            <div>The one who made it</div>
                            <p>Dong Ho Kim</p>
                        </li>
                    </ul>
                    <span class="p4span">Show your project</span>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name : "index",
    mounted() {
        startSS();
    console.log('hi')

    // 기능구현해야할 리스트
    /* 
        1페이지에서 마우스를 이동시 
        글귀들이 skew되며 마우스가 이동한방향으로 흘러감
        + 기본적으로 자동으로 흘러감 

        2. 찌글찌글에 마우스 오버시 동영상화면이 나오면서 실행
        오버아닐시 동영상 멈춤 + 찌글찌글

        2페이지부터 갈시 보이는 페이지의 화면이 2/3 정도가 되면 
        글씨 등장 
        + 글씨 등장이 좀 다양하고 귀여운데 이건 
    */

    // p2g높이 
    let pg2h = $('.pg2').height()
    // 윈도우높이
    let winh = $(window).scrollTop();
    // p4g 높이
    let pg4hh = $('.pg4').height();
    // 이건 스크롤안해도 실행되게 -> 새로고침시 맨위로 할거면 삭제해도될듯
    if(winh >= pg2h) bobobong;
    
    // 2페이지 스크롤 되면 함수실행 글씨 뾰뵤뵤뵹
    // 2페이지의 높이가 윈도우높이의 33%가 되면
    let hhh = $(window).scrollTop()
    
    $(window).on('scroll touchstart',function(){
        // 돔 기준 pg4의 머리 까지 거리
        let pg3h = $('.pg3').offset().top;
        let pg4h = $('.pg4').offset().top;
        // 윈도우 스크롤높이 체크! -> 이게 밖에 전역변수로 놓으니까 안바뀜..
        hhh = $(this).scrollTop();

        
        let asdfg = pg4h/3 *2 - hhh 
        // 페이지 4의 이벤트 실행높이값
        let asdf = pg3h/3 *2 - hhh 
        console.log(asdfg , hhh)
        // 2번째 페이지 액션실행
        if(hhh >= pg2h){
            bobobong()
        }
        // 3번째 페이지 액션실행
        if (hhh >= asdfg){
            ssgssg();
        }
        // 4번째 페이지 액션실행
        // if (hhh>=asdf){
        //     ziingziing();
        // }


        
        if( asdfg <= -100 ){
            zrr();
        }

    })



    // 글씨 뾰보봉
    function bobobong(){
        // 글씨올라오기
        $('.ohbx > div').css({
            transform : 'translateY(0)'
        });

        // 글씨 올라오고 나서 뽀보보보봉하기
        setTimeout(()=>{
            $('.pg2_inlineImg img').eq(0)
            .css({
                transform : 'scale(1)',
                // opacity : '1',
                borderRadius : '0',
                transition: '.5s ease-in-out .8s'
            },400,
            setTimeout(()=>{
                $('.pg2_inlineImg img').eq(1)
                .css({
                    transform : 'scale(1)',
                    // opacity : '1',
                    borderRadius : '0',
                    transition: '.5s ease-in-out 1s'
                },400,setTimeout(()=>{
                    $('.pg2_inlineImg img').eq(2)
                    .css({
                        transform : 'scale(1)',
                        // opacity : '1',
                        borderRadius : '0',
                        transition: '.5s ease-in-out 1.2s'
                    },400,setTimeout(()=>{
                        $('.pg2_inlineImg img').eq(3)
                        .css({
                            transform : 'scale(1)',
                            // opacity : '1',
                            borderRadius : '0',
                            transition: '.5s ease-in-out 1.4s'
                        },400,setTimeout(()=>{
                            $('.pg2_inlineImg img').eq(4)
                            .css({
                                transform : 'scale(1)',
                                // opacity : '1',
                                borderRadius : '0',
                                transition: '.5s ease-in-out 1.6s'
                            },400)
                        }))
                    }))
                }))
            }))
        })
    }
    // bobobong()


    // 주르륵 텍스트 대상
    // 주루륵 한번만실행할려구
    let zrrnum = 0;
    function zrr(){

    if(zrrnum) return;
    zrrnum = 1;
    let p4li1 = $('.p4cont ul li>div').eq(0).text()
    let p4li2 = $('.p4cont ul li>div').eq(1).text()
    let p4li3 = $('.p4cont ul li>div').eq(2).text()
    let p4ull1 = $('.p4cont ul li > div').eq(0)
    let p4ull2 = $('.p4cont ul li > div').eq(1)
    let p4ull3 = $('.p4cont ul li > div').eq(2)
    let p4lip1 = $('.p4cont ul li>p').eq(0).text()
    let p4lip2 = $('.p4cont ul li>p').eq(1).text()
    let p4lip3 = $('.p4cont ul li>p').eq(2).text()
    let p4ullp1 = $('.p4cont ul li > p').eq(0)
    let p4ullp2 = $('.p4cont ul li > p').eq(1)
    let p4ullp3 = $('.p4cont ul li > p').eq(2)

    // 주르륵텍스트 1호
    function zrrtxt(a,b){
        let hcode = "";
        let idx = 0;
        for(let x of a){
            if(x === "") x= "&nbsp;";
            hcode += `
            <div style = "transition-delay:${idx*0.02}s;">${x}</div>
            `
            idx++;
            b.html(hcode)
        }
        setTimeout(()=>{
            b.addClass('on');
        },1000)
    }
    // 주르륵텍스트 2호
    function zrrtxt1(a,b){
        let hcode = "";
        let idx = 0;
        for(let x of a){
            if(x === "") x= "&nbsp;";
            hcode += `
            <div style = "transition-delay:${idx*0.02}s;">${x}</div>
            `
            idx++;
            b.html(hcode)
        }
        setTimeout(()=>{
            b.addClass('on');
        },1500)
    }
    $('.p4cont ul').css({
        transform:'translate(0)'
    })

    // 실행코드
    zrrtxt(p4li1,p4ull1);
    zrrtxt(p4li2,p4ull2);
    zrrtxt(p4li3,p4ull3);
    zrrtxt1(p4lip1,p4ullp1);
    zrrtxt1(p4lip2,p4ullp2);
    zrrtxt1(p4lip3,p4ullp3);
    setTimeout(()=>{
        $('.p4span').animate({opacity:'1'},800);
    },2000)
    } // 주르륵 함수 //

    // 슥슥슥슥 휘잉
    // 기본셋팅잡기~
    $('.pg3wrap>div').eq(0).find('img').css({
        transform:"translateX(-100%)",
    })
    $('.pg3wrap>div').eq(1).find('img').css({
        transform:"rotate(180deg)" ,
        transformOrigin : "bottom"
    })
    $('.pg3wrap>div').eq(2).find('img').css({
        transform:"translateY(-100%)",
    })
    $('.pg3wrap>div').eq(3).find('img').css({
        transform:"translateY(110%)",
    })
    $('.pg3wrap>div').eq(4).find('img').css({
        transform:"translateX(100%)",
    })

    // 슥슥슥슥 휘잉
    // 슥슥 1회만 허용
    let sgsg = 0;
    function ssgssg() {
        // 1회만 실행하기
        if(sgsg) return;
        sgsg=1;

        // 왼쪽박스
        $('.pg3wrap>div').eq(0).find('img')
        .css({
            transition : ".5s linear",
            transform:"translateX(-0)"
        })
        // 큰박스
        $('.pg3wrap>div').eq(1).find('img')
        .css({
            transition : "1.2s ease-out 1.5s",
            transform:"rotate(360deg)",
            borderRadius : "0"
        })
        // 세번째박스
        $('.pg3wrap>div').eq(2).find('img')
        .css({
            transition : ".5s linear .7s",
            transform:"translateX(-0)"
        })
        // 밑박스
        $('.pg3wrap>div').eq(3).find('img')
        .css({
            transition : ".5s linear 1.2s",
            transform:"translateX(-0)"
        })
        // 맨오른쪽박스
        $('.pg3wrap>div').eq(4).find('img')
        .css({
            transition : ".5s linear .4s",
            transform:"translateX(-0)"
        })

        // 가운데 글씨문구 액션
        $('.pg3_centertext span').css({
            // opacity : '0',
            transform : 'translateY(0%)',
            display : 'inline-block',
            transition : '1s 3s'
        })
        // 맨아래 글씨문구 액션
        $('.pg3_bttext_wrap').css({
            opacity : '1',
            transform:'translateX(0%)',
            transition : '1s 3s'
        })
        // 버튼들 액션
        $('.pg3_btns>div').css({
            opacity : '1',
            transform : 'translateY(0%)',
            transition : '1s 3.5s'
        })




        setTimeout(()=>{
            $('.pg3_lefttext_ro').addClass('on')
        },3000)

    }

    // setTimeout(ssgssg,500)

    // 슥슥슥 기본셋팅잡기
    $('.pg3_centertext span').css({
        // opacity : '0',
        transform : 'translateY(190%)',
        display : 'inline-block'
    })

    // 글씨를 잘라낼수도있다고 생각해서 배열화를 시놔놔버림
    let by = ['V','I','T','A','&nbsp;','A','R','C','H','I','T','E','C','T','U','R','E','&nbsp;']
    let by2 = ['V','I','T','A','&nbsp;','A','R','C','H','I','T','E','C','T','U','R','E','&nbsp;']

    let hcode ="";
    let hcode2 ="";
    const sc1div = $('.sc1 > div');
    const sc2div = $('.sc2 > div');
    // 배열 짤라서 한글자씩 스팬태그로 넣기 윗줄
    for(let x of by){
        // console.log(x)
        hcode += `
        <span>${x}</span>
        `;
    }
    // 배열 짤라서 한글자씩 스팬태그로 넣기 밑줄
    for(let x of by2){
        // console.log(x)
        hcode2 += `
            <span>${x}</span>
        `;
    }
    // console.log(hcode)
    // hcode 넣기 윗줄 아랫줄
    sc1div.html(hcode);
    sc2div.html(hcode2);


    // 흘러가는 글씨~ // 
    // 합칠부분 많음
    function setFlowBanner(){
        // 섹션랩 너비
        let zxc = $('.sc1').width();
        // 글자랩 너비
        let zxcv = $('.sc1>div').width();
        // console.log(zxc,zxcv)
        // 섹션랩과 글자랩의 크기를 맞춰줬음
        // 섹션의 width100vw가 되어있어서 글자박스의 크기보다 작아서 ...
        zxc = zxcv;
        $('.sc1').width(zxc);
        $('.sc2').width(zxc);
        // console.log(zxc,zxcv)
        // 배너1 - sc1div 배너2 - sc2div

        // 래핑박스 변수 - 공용
        let $wrap = $('.scwrap')
        // 래핑박스 가로크기 - 공용
        let wrapWidth = $('.sc1 >div').eq(0).width();
        // 스팬담고있는 div 가로크기 - 이건 따로~
        let listWidth1 = $('.sc1 >div').eq(0).width();
        let listWidth2 = sc2div.width();
        // 이동속도 픽셀 - 조정능능
        const speed = 92;



        // 리스트복제1 - 따로
        let $clone1 = sc1div.clone();
        sc1div.parent().append($clone1);
        
        // 리스트복제2 - 따로
        let $clone2 = sc2div.clone();
        sc2div.parent().append($clone2);

        flowBannerAct1();
        flowBannerAct2();

        // 배너실행함수 
        // 윗글씨 무한재생 // 아래함와와 합치기 쌉가능
        function flowBannerAct1(){
            // 무한반복을 위해 리스트를 복제 후 배너에 추가
            if(listWidth1 < wrapWidth){
                const listCount = Math.ceil(listWidth1 * 2 / listWidth1);
                for(let i =2; i <listCount; i++){
                    $clone1 = $clone1.clone();
                    $wrap.append($clone1);
                }
            }
            // console.log(listWidth1)
            $wrap.find('section').eq(0).css({
                'animation':`${listWidth1/speed}s linear infinite flowRolling1`
            });
        }; // flowBannerAct1
        // 밑글씨 무한재생 // 윗함수랑 합쳐서 사용 쌉가능
        function flowBannerAct2(){
            // 무한반복을 위해 리스트를 복제 후 배너에 추가
            if(listWidth2 < wrapWidth){
                const listCount = Math.ceil(wrapWidth * 2 / listWidth2);
                for(let i =2; i <listCount; i++){
                    $clone2 = $clone2.clone();
                    $wrap.append($clone2);
                }
                
            }
            $wrap.find('section').eq(1).css({
                'animation':`${listWidth2/speed}s linear infinite flowRolling2`
            });
        }; // flowBannerAct2
    }
    // 흘러가는글씨 최초호출
    setFlowBanner();
    },
}
</script>

<style>
/* 프로젝트 - 2 메인 CSS  */

@charset "utf-8";
/* ohbx */
.ohbx{
    overflow: hidden;
}
/* 메인영역 */
body{
    /* background-color: #eee; */
    overflow-x: hidden;
}
.pg1{
    height: 100vh;
    background-color: #eee;
}
/* 흘러가는 글씨 랩 */
.scwrap{
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    width: 100%;
    overflow-x: hidden;
}
/* 흘러가는 글씨 */
.pg1 span{
    font-size: 10rem;
    font-family: sdf;
}
.pg1 section >div{
    display: flex;
}
.pg1 section {
    white-space: nowrap;
}
.pg1 section > div{
    border-bottom: 1px solid #000;
}
@keyframes flowRolling1 {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
@keyframes flowRolling2 {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}
/* 찌글찌글랩 */
.zgzgwrap{
    z-index: -1;
    position: relative;
    bottom: -31%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 65%;
    height: 650px;
    text-align: center;
}
.zgzgwrap video{
    width: 85%;
    height: 103%;
    object-fit: fill;
    border-radius: 75% 75% 0 0 ;
}
/* 2페이지  */
.pg2{
    background-color: #fff;
}
.pg2_txtwrap{
    text-align: center;
    padding: 5rem;
    font-size: 3rem;
    font-family: dfg;
}
.pg2_inlineImg{
    display: inline-block;
    height: 4rem;
    transform: translateY(25%);
}
.sc1{
    display: flex;
}
.sc2{
    display: flex;
}
.pg2_inlineImg img{
    height: 100%;
    transform: scale(0);
    /* opacity: 1; */
    
    border-radius: 80%;
}
.ohbx>div{
    transform: translateY(4rem);
    transition: .5s ease-in-out;
}

/* 3페이지 */
.pg3{
    background-color: #fafafa;
}
.pg3wrap{
    position: relative;
    height: 100vh;
    background-color: #eee;
}
.pg3imgbx{
    position: absolute;
    overflow: hidden;
}
.pg3imgbx img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/* 왼쪽박스 */
.pg3_leftbx{
    width: 10rem;
    height: 20rem;
    bottom: 10%;
    left: 0%;
}
/* 큰박스 */
.pg3_bigbx{
    width: 33%;
    height: 78%;
    top: 0%;
    left: 18%;
}
/* 가운데박스 */
.pg3_centerbx{
    width: 11%;
    height: 24%;
    top: 16%;
    left: 62%;
}
/* 오른쪽박스 */
.pg3_rightbx{
    width: 15%;
    height: 33%;
    right: 0%;
    top: 39%;
}
/* 밑박스 */
.pg3_btmbx{
    width: 15rem;
    height: 20rem;
    bottom: 0;
    right: 28%;
}
/* pg3 인라인박스 */
.pg3inlinebx{
    display: inline-block;
    position: absolute;
}
.pg3_lefttext{
    top: 50%;
    left: 8%;
    transform: rotate(270deg);
    font-size: 1.4rem;
    /* overflow: hidden; */
    
}
.pg3_lefttext_ro{
    transform: rotate(180deg);
    transform-origin: right;
    transition: transform 1s, opacity 2s  ;
    opacity: 0;
}
.pg3_lefttext_ro.on{
    transform: rotate(0deg);
    transform-origin: right;
    opacity: 1;
}
.pg3_centertext{
    overflow: hidden;
    top: 49%;
    left: 54%;
    font-size: 3.5rem;
}
.pg3_bttext{
    bottom: 5%;
    left: 35%;
    overflow: hidden;
}
.pg3_bttext_wrap{
    transform: translateX(-100%);
    opacity: 0;
}
/* 버튼들 */
.pg3_btns{
    display: flex;
    position: absolute;
    justify-content: space-between;
    bottom: 0%;
    width: 100%;
    padding: 0 30px 20px;
    box-sizing: border-box;
    font-size: 1.2rem;
    overflow: hidden;
}
.pg3_btns>div{
    opacity: 0;
    transform: translateY(200%);
}
/* 4페이지 */
.pg4{
    background-color: #fff;
    border-bottom: 1px solid #000;
}
.p4cont{
    width: 70rem;
    margin: 0 auto;
    padding: 10rem 0;
    overflow: hidden;
}
.p4cont ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000;
    transform: translateX(-100%);
    transition: .7s;
}
.p4cont ul li{
    font-family: dfg;
    display: flex;
    border-bottom: 1px solid #000;
    padding: 1.5rem 0;
    /* 겉박스 역할 */
    overflow: hidden;
    
}
.p4cont ul li >div{
    overflow: hidden;
    font-size: 6rem;
    width: 60%;
    letter-spacing: -0.7rem;
}
.p4cont ul li >div div{
    transform: translateY(60%);
    opacity: 0;
    transition: .3s linear;
    display: inline-block;
}
.p4cont ul li >div.on div{
    transform: translateY(0);
    opacity: 1;
}
.p4cont ul li >p.on div{
    transform: translateY(0);
    opacity: 1;
}
.p4cont ul li p{
    letter-spacing: -0.15rem;
    font-size: 1.5rem;
    line-height: 3;
    font-family: dfg;
}
.p4cont ul li >p div{
    transform: translateY(60%);
    opacity: 0;
    transition: .3s linear;
    display: inline-block;
}

.p4span{
    line-height: 3;
    font-size: 1.5rem;
    font-family: asd;
    font-weight: normal;
    opacity: 0;
}
/* 메인영역끝 */
</style>