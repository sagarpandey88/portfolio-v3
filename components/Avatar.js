// next image
import Image from 'next/image';
import { imageLoader } from '../common/helper'



const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={ imageLoader('/avatar1.png')}        
        width={737}
        height={678}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
