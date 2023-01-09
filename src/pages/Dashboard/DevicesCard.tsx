import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

type Props = React.ComponentProps<typeof Card> & {
  devices: number;
};

export const DevicesCard = ({ devices, ...rest }: Props) => {
  return (
    <Card {...rest}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Number of devices
        </Typography>
        <Typography variant="h5" component="div">
          {devices}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add device</Button>
      </CardActions>
    </Card>
  );
};
