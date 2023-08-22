function Error({ error }) {
  return (
    <div className=' bg-rose-200/25 border-2 border-solid border-red rounded-md shadow-md shadow-black'>
      <p className='text-red p-2 text-center'>{error}</p>
    </div>
  );
}
export default Error;
