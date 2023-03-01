import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import './CopyRight.css';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="www.HomeFinder.com"
      >
        www.HomeFinder.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}