import { formatUnits } from "@ethersproject/units";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { BigNumber } from "ethers";

type Props = React.ComponentProps<typeof Card> & {
  balance: BigNumber;
};

const units = 18;

export const CarbonCreditsCard = ({ balance, ...rest }: Props) => {
  return (
    <Card {...rest}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Carbon credits
        </Typography>
        <Typography variant="h5" component="div">
          {formatUnits(balance, units)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy credits</Button>
      </CardActions>
    </Card>
  );
};
