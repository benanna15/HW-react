import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import React, {useState} from "react"

function DataTableSearch() {

    const [filterText, setFilterText] = useState("");
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const [dataStock, setDataStock] = useState([ {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    }]);

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const filteredItems = dataStock?.filter((item) => {
        return (
          ( item.title?.toLowerCase().includes(filterText.toLowerCase())) ||
          ( item.year?.toLowerCase().includes(filterText.toLowerCase()))
        );
      });

      const handleSearch = (event) => {
        console.log(event.target.value);
        setFilterText(event.target.value);
      };

      function convertArrayOfObjectsToCSV(array) {
        let result;
    
        const columnDelimiter = ";";
        const lineDelimiter = "\n";
        const keys = Object.keys(dataStock[0]);
    
        result = "";
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
    
        array.forEach((item) => {
          let ctr = 0;
          keys.forEach((key) => {
            if (ctr > 0) result += columnDelimiter;
    
            result += item[key];
            // eslint-disable-next-line no-plusplus
            ctr++;
          });
          result += lineDelimiter;
        });
    
        return result;
      }

      function downloadCSV() {
        const link = document.createElement("a");
        let csv = convertArrayOfObjectsToCSV(dataStock);
        if (csv == null) return;
        let date = new Date().toLocaleDateString();
        const filename = `transactions${date}.csv`;
        if (!csv.match(/^data:text\/csv/i)) {
          csv = `data:text/csv;charset=utf-8,${csv}`;
        }
        link.setAttribute("href", encodeURI(csv));
        link.setAttribute("download", filename);
        link.click();
      }

      const contextActions = React.useMemo(() => {
		const handleDelete = () => {
			
			if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
				setToggleCleared(!toggleCleared);
			}
		};

		return (
			<Button key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }} icon>
				Delete
			</Button>
		);
	}, [dataStock, selectedRows, toggleCleared]);

    const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

    

    return (
        <>
        <h1>React data table</h1>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <DataTable
            columns={columns}
            data={filteredItems}
            selectableRows
            expandableRowsComponent={ExpandedComponent}
            onSelectedRowsChange={handleRowSelected}
            expandableRows
            striped
            pagination
            highlightOnHover
            contextActions={contextActions}
            actions={
                <Button onClick={() => downloadCSV()}>Export to excel</Button>
              }
              fixedHeader
        />
        </>
    );
};

export default DataTableSearch