import Layout from './layout/Layout';

function NoMatch() {
  return (
    <Layout>
      <div className='fixed inset-0'></div>
      <div className='fixed inset-40'>
        <h1 className='grid h-full w-full place-content-center text-[10rem] text-white'>
          404 No Page
        </h1>
      </div>
    </Layout>
  );
}

export default NoMatch;
