'use client';

import {CldUploadWidget} from "next-cloudinary";

export default function CloudinaryUploadPage() {
  return (
    <main className="p-16 text-center">
      <h1 className='py-8'>Image Upload App</h1>
      <section className='flex flex-col items-center justify-between'>
        <CldUploadWidget uploadPreset="loftlyLove">
          {({open}) => {
            return <button onClick={() => open()}>Upload an Image</button>
          }}
        </CldUploadWidget>
      </section>

    </main>
  )
}