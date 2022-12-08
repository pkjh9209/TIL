import React from 'react'

function Login() {
  return (
    <div className='login'>
        <div className='wrapper'>
            
            <div className='logo'>
                <img src="/assets/welcome/logo.svg" alt="" />
            </div>

            <form className='login-contents'>
                <div className='email-inp'>
                    <div className='title txt-bold'>이메일</div>
                    <div className='inp'>
                        <input type="email" required placeholder='이메일을 입력해주세요'/>
                    </div>
                </div>
                <div className='password-inp'>
                    <div className='title txt-bold'>비밀번호</div>
                    <div className='inp'>
                        <input type="password" required placeholder='비밀번호를 입력해주세요'/>
                    </div>
                </div>
                <button type='submit'>로그인하기</button>
            </form>

            <div className='go-join'>
                <div className='title txt-bold'>
                    또는 회원가입하기
                </div>
                <div className='asset'>
                    <img src="/assets/welcome/arrow.svg" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login
