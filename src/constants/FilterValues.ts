export enum FilterValues {
  ALL = "all",
  COMPLETED = "completed",
}

export enum SortValues {
  DATE_ASC = "date_asc",
  DATE_DESC = "date_desc",
  ORDER = "order",
  ORDER_DESC = "order_desc",
}

export type FilterItem = {
  name: string;
  key: string;
};

export const filterItems = [
  {
    key: FilterValues.COMPLETED,
    name: "Completed",
  },
  {
    key: FilterValues.ALL,
    name: "All",
  },
];

export const sortItems = [
  {
    key: SortValues.ORDER,
    name: "Order Asc",
  },
  {
    key: SortValues.ORDER_DESC,
    name: "Order Desc",
  },
  {
    key: SortValues.DATE_ASC,
    name: "Date Asc",
  },
  {
    key: SortValues.DATE_DESC,
    name: "Date Desc",
  },
];
