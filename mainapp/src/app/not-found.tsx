import Image from 'next/image';
import exampleImage from '../assets/404.png'; // Adjust the path accordingly


const Notfound = () => {
  return (
    <>
   
    <div className='flex justify-center items-center h-screen'>
     
      <Image
        src={exampleImage}
        alt="Description of the image"
        width={500}
        height={300} 
      />
<h1 className='px-6'>Page Not Found</h1>

</div>

</>
  );
};

export default Notfound;
