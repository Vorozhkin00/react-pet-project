'use client';
import {FC} from "react";
import {Button} from "@/libs/design-system/ui/button/button";
import {TextInput} from "@/libs/design-system/ui/text-input/text-input";

const AuthSignInPage: FC = () => {
  return (
    <div className='flex h-full'>
      <div className='relative'>

        <button className='absolute text-body1Bold right-1/2 top-8  translate-x-1/2'>
          LoftlyLove.
        </button>
        <img className='h-screen' src="/images/loftlyLove-auth.png"/>
      </div>
      <div
        className='flex h-full justify-center items-center mx-auto'>
        <div className='flex flex-col gap-8 w-[456px] mx-auto justify-between'>
          <div className='flex flex-col gap-6'>
            <div className='text-headline4'>Sign up</div>
            <div className='text-body2Semi text-neutral-400'>Already have an account? <span
              className='text-green'>Sign in</span></div>
          </div>
          <div className='flex flex-col gap-10'>
            <TextInput placeholder='Your name'/>
            <TextInput placeholder='Username'/>
            <TextInput placeholder='Email address'/>
            <TextInput placeholder='Password'/>
          </div>
          <div className='flex gap-3'>
            <input
              type='checkbox'
              className='size-5 self-center'
            />
            <div>
              I agree with <b>Privacy Policy</b> and <b>Terms of Use</b>
            </div>
          </div>
          <div>
            <Button variant='default'>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuthSignInPage