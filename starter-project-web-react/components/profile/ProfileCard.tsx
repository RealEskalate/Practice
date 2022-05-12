import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import LocationOn from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { login, getAuth } from '../../store/slices/auth';
import { useDispatch, useStore } from 'react-redux';
import { useSelector } from 'react-redux';
const style = {
  backgroundColor: "#607d8b",
  minHeight: "85vh",
  margin: "auto",
  padding: "30px 30px 20px 30px",
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  boxShadow: 3,
  width: "100%",

}
const inputStyle = {
  backgroundColor: "#f5f5f5",
  margin: "10px 0px"

}
const h1Style = {
  color: "#fff",
  textAlign: "center",
  margin: "20px 0px"
}


const ProfileCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameHelperText, setUsernameHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const router = useRouter();

  const usernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameError(false);
    setUsernameHelperText("");
  }
  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(false);
    setPasswordHelperText("");
  }

  const dispatch: any = useDispatch();
  const store: any = useStore();
  const authentication = useSelector((state: any) => getAuth(state))

  useEffect(() => {
    if (authentication.user) {
      router.push('/')
    }
  }, [authentication])

  const handleClick = () => {

    if (username == "") {
      setUsernameError(true);
      setUsernameHelperText("Username required");
    }
    if (password == "") {
      setPasswordError(true);
      setPasswordHelperText("Password required");
    }

    if (username && password) {
      dispatch(login({ username, password }))

      setUsername("");
      setPassword("");
    }
  }

  return (
    <Card>
      <Box sx={{ p: 2, display: 'flex' }}>
        <Avatar variant="rounded" src="avatar1.jpg" />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Michael Scott</Typography>
          <Typography variant="body2" color="text.secondary">
            <LocationOn /> Scranton, PA
          </Typography>
        </Stack>
        <IconButton>
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
      >
        {/* <Chip>Active account</Chip> */}
        <Switch />
      </Stack>
      
    </Card>
    

  );
}


export default ProfileCard;