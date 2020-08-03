import React, { useState } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { Button, TableRow } from "@material-ui/core";

function App() {


  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        actions={[
          {
            icon: () => <Button variant='contained'>TOGGLE LOGGED IN </Button>,
            tooltip: 'Filter',
            onClick: () => setRed(!red),
            isFreeAction: true
          },
          {
            icon: () => <Button variant='contained' >TOGGLE NEVER LOGGED IN </Button>,
            tooltip: 'Filter',
            onClick: () => setGreen(!green),
            isFreeAction: true
          },
        ]}
        options={{
          search: false,
          paging: false,
          rowStyle: (rowData, index) => {
            let color = "#FFFFFF";
            if (red && rowData.login_count === 0) {
              color = "#FF0000"
            }
            if (green && rowData.login_count !== 0) {
              color = "	#228B22"
            }
            return {
              backgroundColor: color,
            }
          },

        }}
        columns={[
          { title: "id", field: "id" },
          { title: "username", field: "username" },
          { title: "last_login", field: "last_login" },
          { title: "login_count", field: "login_count" },
          { title: "project_count", field: "project_count" },
        ]}
        data={[
          { "id": 0, "username": "ana", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 0, "project_count": 12 },
          { "id": 1, "username": "tim", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 23, "project_count": 234 },
          { "id": 23, "username": "kyle", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 4, "project_count": 2354 },
          { "id": 34, "username": "alex", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 0, "project_count": 6563 },
          { "id": 234, "username": "glenn", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 1, "project_count": 3452 },
          { "id": 633, "username": "cort", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 1000, "project_count": 2345 },
          { "id": 693, "username": "sean", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 3, "project_count": 8654 },
          { "id": 623, "username": "violet", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 0, "project_count": 4028 },
          { "id": 665, "username": "nik", "last_login": "2019-08-20T22:15:09.926Z", "login_count": 0, "project_count": 4428 }
        ]}
        title="Users"
      />
    </div>
  );
}

export default App;
