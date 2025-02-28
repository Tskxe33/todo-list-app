export enum FilterValues {
  ALL = "all",
  COMPLETED = "completed",
  ACTIVE = "active",
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
    key: FilterValues.ALL,
    name: "All",
  },
  {
    key: FilterValues.ACTIVE,
    name: "Active",
  },
  {
    key: FilterValues.COMPLETED,
    name: "Completed",
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
