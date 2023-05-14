<template>
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
export default {

}
</script>

<style>
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