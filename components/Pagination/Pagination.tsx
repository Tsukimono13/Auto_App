import { classNames } from "@/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import cls from "./Pagination.module.scss";
import { Text, TextSize } from "../Text/Text";
interface PaginationProps {
  className?: string;
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, onPageChange, className } = props;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {pages.map((page) => (
        <Button
          theme={ThemeButton.CLEAR}
          key={page}
          onClick={() => onPageChange(page)}
          className={classNames("", {}, [
            className,
            page === currentPage ? cls.currentPage : cls.page,
          ])}
        >
          {page}
        </Button>
      ))}
    </>
  );
};
