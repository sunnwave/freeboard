import Link from 'next/link';
import * as H from './Header.styles';

export default function Header() {
  return (
    <H.HeaderContainer>
      <Link href="/boards">
        <H.Logo src="/header/logo.png" />
      </Link>
      <H.LoginContainer>
        <H.LoginButton href="/login" variant="login">
          로그인
        </H.LoginButton>
        <H.LoginButton href="/login/signup" variant="signup">
          회원가입
        </H.LoginButton>
      </H.LoginContainer>
    </H.HeaderContainer>
  );
}
