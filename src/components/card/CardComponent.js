import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardComponent({title, variant, component}) {
  
    return (
        <Card sx={{ minWidth: 275 }} variant={variant}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          {component}
        </CardContent>
        <CardActions>
          <Button size="small">Login Button</Button>
        </CardActions>
      </Card>
    );
}

export default CardComponent