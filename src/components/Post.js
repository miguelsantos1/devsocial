
export default function Post(props) {

    return(
        <div className='bg-[#121214] rounded p-5 mt-5'>
        <div className='flex items-center gap-2'>
          <img src={ props.userImage } className="w-[50px] h-[50px] rounded-full" />
          <p className='font-medium'> { props.user } </p>
        </div> 
        <p className='mt-5 text-justify'> { props.content } </p>
      </div>
    )
}