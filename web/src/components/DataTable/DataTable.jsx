import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@tremor/react'

export default ({ data }) => (
  <>
    <Table>
      <TableHead>
        <TableRow className="bg-gray-100">
          {Object.keys(data[0]).map((item) => {
            if (item !== 'ver') {
              return (
                <TableHeaderCell key={item} className="px-4 py-2 text-red-500">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </TableHeaderCell>
              )
            }
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="border-b border-gray-300">
            {Object.keys(item).map((key) => {
              if (key === 'ver') {
                return (
                  <TableCell key={key} className="px-4 py-2">
                    <button
                      className="flex items-center rounded-full border-red-500 bg-white px-4 py-2 text-white"
                      onClick={() => window.open(item[key], '_blank')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="mr-2 h-6 w-6 stroke-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>

                      <span className="text-red-500">Ver</span>
                    </button>
                  </TableCell>
                )
              }
              if (key === 'Documentos') {
                return (
                  <TableCell key={key} className="px-4 py-2">
                    <button
                      className="flex items-center rounded-full border-red-500 bg-white px-4 py-2 text-white"
                      onClick={() => item[key]()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="mr-2 h-6 w-6 stroke-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>

                      <span className="text-red-500">Ver Documentos</span>
                    </button>
                  </TableCell>
                )
              }
              if (key === 'active' || key === 'docenciaServicio') {
                return (
                  <TableCell key={key} className="px-4 py-2">
                    {item[key] ? 'Activo' : 'Inactivo'}
                  </TableCell>
                )
              }
              return (
                <TableCell className="px-4 py-2" key={key}>
                  {item[key]}
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)
