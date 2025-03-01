import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FilterDropDown from "../../components/FilterDropDown";

describe("FilterDropdown", () => {
  const mockSetSelected = vi.fn();
  const testItems = [
    { name: "Item 1", key: "item1" },
    { name: "Item 2", key: "item2" },
  ];

  const renderFilterDropdown = (selectedValue = "item1") => {
    return render(
      <BrowserRouter>
        <FilterDropDown
          buttonText="Filter"
          icon={<div>Icon</div>}
          items={testItems}
          selected={selectedValue}
          setSelected={mockSetSelected}
        />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render", () => {
    renderFilterDropdown();
    const filterDropdown = screen.getByTestId("filter-dropdown");
    expect(filterDropdown).toBeInTheDocument();
  });

  it("opens dropdown when button is clicked", () => {
    renderFilterDropdown();

    const dropdownButton = screen.getByTestId("filter-button-text");
    fireEvent.click(dropdownButton);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("selects item when clicked", () => {
    renderFilterDropdown("item2");

    const dropdownButton = screen.getByTestId("filter-button-text");
    fireEvent.click(dropdownButton);

    const secondItem = screen.getByText("Item 2");
    fireEvent.click(secondItem);

    expect(mockSetSelected).toHaveBeenCalledWith("item2");
    expect(secondItem).toHaveClass("bg-gray-100");
  });
  it("closes dropdown when clicked outside", () => {
    renderFilterDropdown();

    const dropdownButton = screen.getByTestId("filter-button-text");
    fireEvent.click(dropdownButton);

    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });
});
