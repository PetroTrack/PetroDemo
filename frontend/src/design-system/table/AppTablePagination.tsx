import Pagination from "@mui/material/Pagination";

interface Props {
  page: number;
  count: number;
  onChange: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
}

export default function AppTablePagination({
  page,
  count,
  onChange,
}: Props) {
  return (
    <div className="mt-4 flex justify-end">

      <Pagination
        page={page}
        count={count}
        color="primary"
        onChange={onChange}
      />

    </div>
  );
}