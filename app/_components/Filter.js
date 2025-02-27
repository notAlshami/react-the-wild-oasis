"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"all"}
      >
        All
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"small"}
      >
        1&mdash;3 guests
      </Button>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter={"medium"}
      >
        4&mdash;7 guests
      </Button>
      <Button
        handleFilter={handleFilter}
        filter={"large"}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`${
        activeFilter === filter ? "bg-primary-700 text-primary-50 " : ""
      }px-5 py-2 hover:bg-primary-700`}
      onClick={() => {
        handleFilter(filter);
      }}
    >
      {children}
    </button>
  );
}

export default Filter;
