import * as React from 'react';
import TablePagination from "@material-ui/core/TablePagination";
function Paginate({airports,handlePagination}) {
    const [page, setPage] = React.useState(0);
    const [recordPerPage, setRecordPerPage] = React.useState<number>(5);
    const handleChange = async (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
      ) => {
        setPage(newPage);
      };
      const handleChangeRowsPerPage = (event) => {
        setRecordPerPage(event.target.value);
        setPage(0);
      };
      React.useEffect(() => {
        handlePagination({"page":page,"recordPerPage":recordPerPage})
      })
      
    return (
      <div>
           <TablePagination
      component="div"
      rowsPerPageOptions={[5, 10, 25, 50 ,100]}
      count={airports.length}
      page={page}
      onPageChange={handleChange}
      rowsPerPage={recordPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
      </div>
    );
  }

  export default Paginate;
