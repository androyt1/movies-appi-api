import React from 'react'
import ReactPaginate from 'react-paginate'

const BottomBar = ({pageCount, handlePageClick}) => {
  return (
    <>
    <div className='w-full h-[15vh] flex justify-center items-center border-slate-50   bg-black '>
    <ReactPaginate 
              previousLabel={'Prev'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={'flex flex-row justify-around items-center mb-10 w-full md:w-1/2'}
              previousLinkClassName={'text-slate-50 text-md px-4 py-1 border border-[#e76363c5] rounded-lg'}
              nextLinkClassName={'text-slate-50 text-md px-4 py-1 border border-[#e76363c5] rounded-lg'}
              disabledClassName='opacity-50 cursor-not-allowed'
              activeLinkClassName={'text-white font-bold text-md px-4 py-1 shadow-lg shadow-[#e76363c5]  rounded-lg bg-transparent'}
              pageLinkClassName={'border-2 border-[#e76363c5]  text-slate-50 text-md px-4 py-1 rounded-lg '}
             />
    </div>
    </>
  )
}

export default BottomBar