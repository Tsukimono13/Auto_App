"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, ThemeButton } from "@/components/Button/Button";
import { Pagination } from "@/components/Pagination/Pagination";
import { HStack } from "@/components/Stack/HStack/HStack";
import cls from "./BottomPagination.module.scss";
import { classNames } from "@/lib/classNames/classNames";

interface BottomPagination {
  className?: string;
  page: number;
  onChange: (pageNumber: number) => void;
}

export const BottomPagination = (props: BottomPagination) => {
  const { page, onChange, className } = props;
  const [hasMore, setHasMore] = useState(true);

  const handlePrevPage = () => {
    if (page > 1) {
      onChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (hasMore) {
      onChange(page + 1);
    }
  };

  return (
    <HStack
      max
      justify="center"
      align="center"
      gap="8"
      className={classNames("", {}, [className])}
    >
      <Button
        onClick={handlePrevPage}
        disabled={page === 1}
        theme={ThemeButton.CLEAR}
        className={cls.paginationBtn}
      >
        <Image
          src={"/assets/icons/prev.svg"}
          width={24}
          height={24}
          alt="Previous"
        />
      </Button>
      <Pagination currentPage={page} totalPages={2} onPageChange={onChange} />
      <Button
        onClick={handleNextPage}
        disabled={!hasMore || page > 1}
        theme={ThemeButton.CLEAR}
        className={cls.paginationBtn}
      >
        <Image
          src={"/assets/icons/next.svg"}
          width={24}
          height={24}
          alt="Next"
        />
      </Button>
    </HStack>
  );
};
