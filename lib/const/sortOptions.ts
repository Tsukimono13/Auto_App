interface SortType {
    value: string;
    content: string
}

export const options: SortType[] = [
    { value: "asc", content: "По цене: сначала дорогие" },
    { value: "desc", content: "По цене: сначала дешевые" },
    { value: "newest", content: "По году выпуска: сначала новые" },
    { value: "oldest", content: "По году выпуска: сначала старые" },
];