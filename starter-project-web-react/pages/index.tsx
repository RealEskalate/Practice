import type { NextPage } from 'next'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const Home: NextPage = () => {
  const personalPage = [{ name: 'Mintesnot', link: 'mintesnot/' }]
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
        {personalPage.map((value, idx) => {
          return (
            <Grid key={idx} item xs={12}>
              <Link
                href={{
                  pathname: '${value.link}',
                }}
                passHref
                as={`${value.link}`}
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
                    {value.name}
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
