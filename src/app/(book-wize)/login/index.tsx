// import Image from 'next/image'
import { SignInOptions } from '../../components/sign-in-options'
import { LoginContainer, SignInContainer, WelcomeText } from './styles'

export default function Login() {
  return (
    <LoginContainer>
      {/* <Image
        src="/login-logo.svg"
        alt="Book wize logo"
        width={598}
        height={912}
        quality={100}
        priority
      /> */}

      <SignInContainer>
        <WelcomeText>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>
        </WelcomeText>

        <SignInOptions />
      </SignInContainer>
    </LoginContainer>
  )
}
