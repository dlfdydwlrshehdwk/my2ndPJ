<template>
  <!-- 상단영역 -->
  <div id="top">
        <header class="top">
            <nav class="nav">
                <div class="logo">
                    <a href="#">
                        <svg
            id="Layer_1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 29.3 44"
            enable-background="new 0 0 29.3 44"
            xml:space="preserve"
            width="29.3"
            height="44"
            class="main-navigation-logo"
            data-v-1189f3a6=""
        >
            <g>
                <rect
                    x="1.7"
                    y="17.9"
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.5698"
                    stroke-miterlimit="10"
                    width="25.8"
                    height="25.8"
                ></rect>
                <polyline
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.3561"
                    stroke-linejoin="bevel"
                    stroke-miterlimit="10"
                    points="1.7,17.9 14.6,43.7 27.5,17.9"
                ></polyline>
                <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.3561"
                    stroke-miterlimit="10"
                    d="M1.7,43.7V33.6c0-7.1,5.8-12.9,12.9-12.9 s12.9,5.8,12.9,12.9v10.1"
                ></path>
                <line
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.3561"
                    stroke-miterlimit="10"
                    x1="14.6"
                    y1="43.7"
                    x2="14.6"
                    y2="17.9"
                ></line>
            </g>
            <g>
                <g>
                    <g>
                        <path
                            d="M2,2.2c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0.1,0.3,0.1,0.3l2.9,10.1L8,3c0,0,0-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2 c0.1-0.2,0.1-0.3,0.1-0.5c0-0.2,0.1-0.4,0.1-0.6h0.4C8.6,1.7,8.5,1.9,8.5,2.1C8.4,2.3,8.4,2.5,8.3,2.7L8.2,3l-2.9,10 c0,0.1,0,0.2,0,0.3c0,0.1,0,0.3,0.1,0.4H4.3L1.3,3C1.2,2.7,1.2,2.4,1.1,2.2S0.9,1.8,0.8,1.5h1.2C2,1.8,2,2,2,2.2z"
                        ></path>
                        <path
                            d="M11.2,4.3v6.4c0,0.8,0,1.8,0.1,2.8h-1c0.1-0.9,0.1-1.8,0.1-2.8V4.3c0-1,0-1.9-0.1-2.8h1C11.2,2.6,11.2,3.5,11.2,4.3z"
                        ></path>
                        <path
                            d="M20.7,2.1C20.1,2,19.5,1.9,19,1.8c-0.6-0.1-1-0.1-1.4-0.1h-0.2v9.1c0,1,0,1.9,0.1,2.8h-1c0.1-1.1,0.1-2,0.1-2.8V1.7h-0.2 c-0.4,0-0.9,0-1.4,0.1S13.8,2,13.3,2.1l-0.5-0.6h8.5L20.7,2.1z"
                        ></path>
                        <path
                            d="M27.9,12.8c0.1,0.2,0.2,0.5,0.3,0.8h-1.2c0-0.3,0-0.5-0.1-0.6s-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.4l-0.8-2.9h-4.1 l-0.9,3c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.2-0.1,0.3-0.1,0.5c0,0.2-0.1,0.4-0.1,0.6h-0.4c0.1-0.2,0.2-0.4,0.3-0.6 c0.1-0.2,0.1-0.4,0.2-0.5l0.1-0.3l2.9-10c0-0.1,0-0.2,0-0.3c0-0.1,0-0.3-0.1-0.4h1.1l3,10.6C27.7,12.4,27.8,12.6,27.9,12.8z M21.9,9h4l-2-6.9L21.9,9z"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
                        <!-- svg를 로고로 쓰려면
                        svg파일을 png로 바꿔서 쓰면 편하다!
                        추가예정입니다! -->
                    </a>
                </div>
                <div class="navlist">
                    <ul>
                        <li class="white">
                            <a href="project.html">Project</a>
                        </li>
                        <li class="white">
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li class="white">
                            <a href="member.html">Member</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    <div class="loginbg">
        <div class="loginwrap">
            <div class="login_logo">
                <img src="../assets/img/favi.jpg" alt="">
            </div>
            <div class="loginbx">
                <div>
                    <div>
                        <span>아이디&nbsp;&nbsp;  </span>
                        <input type="text" name="id" id="id" maxlength="10">
                    </div>
                    <div>
                        <span>비밀번호</span>
                        <input type="password" name="pw" id="pw" maxlength="10">
                    </div>
                </div>
                <div class="login">
                    <span>로그인</span>
                </div>
            </div>
            <div class="close">
                X
            </div>
            <div class="graybx">
                <span><a href="">아이디/비밀번호 찾기</a></span>
                <span><a href="">회원가입</a></span>
            </div>
        </div>
    </div>
    
    
</template>

<script>
export default{
    name : 'Top',
    data(){
        return{
        }
    },
    components : {
    },
    mounted(){
        
    }

}
</script>

<style>

/* 상단영역 */
.top{
    position: relative;
    z-index: 10;
}
.nav {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    align-items: center;
    font-weight: 500;
}
.navlist ul {
    display: flex;
}
.navlist li {
    padding-right: 10px;
    font-family: asd;
}
.logo svg {
    width: 3.0rem;
    height: auto;
}
/* 상단영역끝 */

/* 로그인페이지 */
.loginbg{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
}
.loginwrap{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 20px;
    transform: translate(-50%,-50%)
}
.login_logo{
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: 40px;
}
.login_logo img{
    width: 100%;
}
.loginbx{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.login{
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
}
.close{
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
}
.graybx{
    position: absolute;
    bottom: 0;
    background-color: rgba(128, 128, 128, 0.2);
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.graybx span{
    padding-right: 10px;
    font-size: 1rem;
    text-decoration: underline;
}
#id{
    width: 150px;
    border: 1px solid #666;
    margin-right: 10px;
    margin-bottom: 10px;
}
#pw {
    width: 150px;
    border: 1px solid #666;
}
</style>

