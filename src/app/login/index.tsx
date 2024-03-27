import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import { PiRocketLaunchLight } from 'react-icons/pi'
import {
  LoginContainer,
  SignInButton,
  SignInContainer,
  SignInContent,
  WelcomeText,
} from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <Image
        src="/logo.svg"
        alt="book wize logo"
        width={598}
        height={912}
        quality={100}
      />

      <SignInContainer>
        <WelcomeText>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>
        </WelcomeText>
        <SignInContent>
          <SignInButton>
            <FcGoogle size={32} />
            Entrar com Google
          </SignInButton>
          <SignInButton>
            <FaGithub size={32} />
            Entrar com Github
          </SignInButton>
          <SignInButton>
            <PiRocketLaunchLight size={32} color="#8381D9" />
            Acessar como visitante
          </SignInButton>
        </SignInContent>
      </SignInContainer>
    </LoginContainer>
  )
}
