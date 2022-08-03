import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function ButtonAppBar() {
  const pages = ['Products', 'Pricing', 'Blog']
  const { data: session } = useSession()
  const [user, setUser] = useState({ email: '', fullname: '', image: '' })
  const router = useRouter()

  const logoutHandler = () => {
    signOut({ callbackUrl: `${window.location.origin}/auth/login` })
  }

  useEffect(() => {
    if (session) {
      setUser({
        ...user,
        fullname: session.user.name,
        email: session.user.email,
      })
    }
  }, [])

  const openProfile = () => {
    router.push('/mintesnot/profile')
  }
  const backToHome = () => {
    router.push('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={backToHome}
          >
            Blog App (React Demo)
          </Typography>
          {session ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Typography variant="h6" sx={{ margin: '5px' }}>
                {user.fullname}
              </Typography>
              <Avatar
                name="profile"
                alt="Remy Sharp"
                src={user.image}
                onClick={openProfile}
              />
              <LogoutIcon
                sx={{ mx: '10px' }}
                onClick={logoutHandler}
              ></LogoutIcon>
            </>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
