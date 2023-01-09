import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

type Transaction = {
  id: string;
  deviceId: string;
  date: Date;
  amount: number;
  fee: number;
  status: string;
};

type Props = React.ComponentProps<typeof TableContainer> & {
  transactions: Transaction[];
};

export const TransactionsTable = ({ transactions, ...rest }: Props) => {
  return (
    <TableContainer {...rest}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Transaction date</TableCell>
            <TableCell align="right">Transaction ID</TableCell>
            <TableCell align="right">Device ID</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Fee</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No data
              </TableCell>
            </TableRow>
          )}
          {transactions.map((el) => (
            <TableRow
              key={el.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {el.date.toLocaleDateString()}
              </TableCell>
              <TableCell align="right">{el.id}</TableCell>
              <TableCell align="right">{el.deviceId}</TableCell>
              <TableCell align="right">{el.amount}</TableCell>
              <TableCell align="right">{el.fee}</TableCell>
              <TableCell align="right">{el.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
