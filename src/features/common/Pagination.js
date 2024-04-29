import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ITEMS_PER_PAGE } from "../../app/constants";


const Pagination = ({ page, handlePage, totalItems }) => {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const getPageRange = () => {
        const visiblePages = 3;
        const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
        const endPage = Math.min(totalPages, startPage + visiblePages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    const pageNumbers = getPageRange();

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <div
                    onClick={(e) => handlePage(page > 1 ? page - 1 : page)}
                    className="relative cursor-pointer inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </div>
                <div
                    onClick={(e) => handlePage(page < totalPages ? page + 1 : page)}
                    className="relative cursor-pointer ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(page - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
                        <span className="font-medium">
                            {page * ITEMS_PER_PAGE > totalItems
                                ? totalItems
                                : page * ITEMS_PER_PAGE}
                        </span> of{" "}
                        <span className="font-medium">{totalItems}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {/* Prev Button  */}
                        {page > 1 && (
                            <div
                                onClick={(e) => handlePage(page > 1 ? page - 1 : page)}
                                className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </div>
                        )}
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                        {pageNumbers.map((pageNumber) => (
                            <div
                                key={pageNumber}
                                className={`relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${pageNumber === page
                                    ? "bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    : ""
                                    }`}
                                onClick={() => handlePage(pageNumber)}
                            >
                                {pageNumber}
                            </div>
                        ))}

                        {/* Next Button */}
                        {page !== totalPages && (
                            <div
                                onClick={(e) => handlePage(page < totalPages ? page + 1 : page)}
                                className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;