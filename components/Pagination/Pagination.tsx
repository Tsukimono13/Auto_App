interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
  }

const Pagination = (props: PaginationProps) => {
    const { totalPages, currentPage, onPageChange } = props;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };
  