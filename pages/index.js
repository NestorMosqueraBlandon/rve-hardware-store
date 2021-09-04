import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import card from '../styles/Card.module.css'
import data from '../utils/data.js'

export default function Home() {
  
  

  return (
    <Layout>
      <div className="container">
        <div className='center'>
          {/* <h2>PC GAMER SLASH</h2> */}
          <p>Super. Mega. Rapido</p>
          {/* <a href="">Mas informacion</a> */}
          <div className="centerImg">
            <img src="./images/pchero2.png" alt="" width='100%'/>
          </div>
        </div>
        <h2>Potenciar la mejor tanto en el trabajo como en el juego.</h2>
        <div className={styles.buttons}>
          <button>Notebooks</button>
          <button className={styles.active}>PC Gamer</button>
          <button>WorkStations</button>
        </div>

        <div className={styles.grid}>
          {data.computers.map((computer) => (
            <div className={card.card} key={computer.name}>
              <div >
                <img src={computer.image} alt="" />
              </div>
              <div>
                <div className={card.header}>
                  <h2>{computer.name}</h2>
                  <p>{computer.price}</p>
                </div>
                <ul>
                  <li><img className={styles.icon} src="./images/icons/cpu.png" alt="" /> {computer.cpu}</li>
                  <li><img className={styles.icon} src="./images/icons/motherboard.png" alt="" /> {computer.motherboard}</li>
                  <li><img className={styles.icon} src="./images/icons/ram.png" alt="" /> {computer.ram}</li>
                  <li><img className={styles.icon} src="./images/icons/ssd-drive.png" alt="" /> {computer.ssd}</li>
                  <li><img className={styles.icon} src="./images/icons/hdd.png" alt="" /> {computer.hdd}</li>
                  <li><img className={styles.icon} src="./images/icons/gpu.png" alt="" /> {computer.gpu}</li>
                </ul>
                <button className={card.button}>Anadir al carrito</button>    
              </div>
            </div>
          ))}
        </div>
        <div className={styles.warranty}>
            <div>

            </div>
            <div>

            </div>
        </div>
        {/* <Grid container spacing={3}>
          {data.computers.map((computer) => (
            <Grid item md={4} key={computer.name}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={computer.image} title={computer.name}>
                  </CardMedia>
                  <CardContent>
                    <Typography>
                      {computer.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>
                    ${computer.price}
                  </Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </div>
    </Layout>
  )
}
