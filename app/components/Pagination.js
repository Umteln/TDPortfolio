const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (
        let i = 1;
        i < Math.floor(totalPosts, postsPerPage, setCurrentPage, currentPage);
        i++
    ) {
        pages.push(i);
    }
    return (
        <div className='flex flex-wrap justify-center mt-[1rem] items-center'>
            {pages.map((page, index) => (
                <button
                    onClick={() => setCurrentPage(page)}
                    className={
                        page === currentPage
                            ? 'w-[40px] h-[40px] font-bold mx-[10px]  shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300  border-[1px] bg-[#e85605] border-transparent text-white rounded-lg'
                            : 'w-[40px] h-[40px]  mx-[10px]  border-[#333]  shadow-lg shadow-gray-400 border-[1px] rounded-lg '
                    }
                    key={index}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
