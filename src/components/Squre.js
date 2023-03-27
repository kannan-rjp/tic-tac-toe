import React from "react";
import Button from '@mui/material/Button';
import styled from '@emotion/styled'
function Squre({value,onSquareClick}) {
  return (
    <CustomButton variant="outlined" onClick={onSquareClick}>{value}</CustomButton>

  );
}
export default Squre;
const CustomButton = styled(Button)({
    height:'50px',
    border: '1px solid',
    borderRadius:'6px',
    boxShadow: '0 1px 2px 1px gray',
})