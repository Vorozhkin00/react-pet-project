import Image from "next/image";
import {Button} from "@/libs/design-system/ui/button/button";

export default function Home() {
  return (
    <div className='p-10 flex flex-col gap-3'>
      <Button variant='default'>Show more</Button>
      <Button variant='rounded'>Show more</Button>
    </div>
  )
}
