import React from 'react';
import { red } from "@mui/material/colors";
import { Avatar, CardHeader, Button, Typography } from "@mui/material";


const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], width: 32, height: 32 }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <Button size='small'>
            <Typography variant="caption">Follow</Typography>
          </Button>
        }
        title="V.S. Gunasekara"
        subheader="@it21320378"
      />
    </div>
  )
}

export default PopularUserCard;