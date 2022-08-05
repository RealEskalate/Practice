import type { NextPage } from 'next'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const Home: NextPage = () => {
  const personalPage = ['mintesnot']
  return (
    <Box
      sx={{
        mx: 'auto',
        pt: '20px',
        boxShadow: 3,
        maxWidth: '60%',
        minHeight: '92vh',
      }}
    >
      <Grid container spacing={0}>
        {personalPage.map((name) => {
          return (
            <Grid item xs={12}>
              <Link
                href={{
                  pathname: '${name}/',
                }}
                passHref
                as={`${name}/`}
              >
                <Box
                  sx={{
                    my: '5px',
                    height: '80px',
                    maxWidth: '96%',
                    boxShadow: 3,
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    px: '5px',
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Mintesnot
                  </Typography>
                </Box>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
export default Home
