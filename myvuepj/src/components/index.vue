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
                            <p>김동호</p>
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
    background-color: #eee;
    overflow-x: hidden;
}
.pg1{
    height: 100vh;
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
    font-family: asd;
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