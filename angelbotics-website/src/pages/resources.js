import {Card, Grid, IconButton, Paper, Typography, useMediaQuery} from "@mui/material";
import {ReactEmbeddedGoogleCalendar} from "react-embedded-google-calendar";
import {Outbound, Email} from '@mui/icons-material';
import {motion} from "framer-motion"
import {mainTheme} from "../theme";

const resourcesJSON = require('./json/resources.json');


export default function Resources() {

    const bigScreen = useMediaQuery(mainTheme.breakpoints.up('sm'));


    return (

        <div>


            {/*----------Big Screens----------*/}

            <div style={{
                display: "flex", alignItems: "center", width: "95%", height: "auto", marginLeft: '2.5%', marginTop: 100
            }}>


                <Paper sx={{width: '100%', height: "100%", boxShadow: 5, borderRadius: 5}}>


                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "95%",
                        height: "100%",
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>

                        <Grid container
                              direction="row"
                              justifyContent="space-evenly"
                              alignItems="center"
                              spacing={2}
                              sx={{width: "95%", height: "100%", ml: "2.5%", mt: 5}}
                        >
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                                <motion.div
                                    style={{height: "100%"}}
                                    initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                    whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                    viewport={{margin: "100px", once: !bigScreen}}
                                >
                                    <Card sx={{height: 650, width: "100%", boxShadow: 2, borderRadius: 5}}>

                                        <div style={{
                                            alignItems: "center",
                                            width: "90%",
                                            height: "auto",
                                            marginLeft: '5%',
                                            marginTop: 20
                                        }}>


                                            <div style={{
                                                display: "flex",
                                                width: "100%",
                                                height: "auto",
                                                justifyContent: "space-evenly",
                                                alignItems: "flex-start"
                                            }}>
                                                <Typography variant={'h4'}>
                                                    Contact Us
                                                </Typography>
                                                <IconButton href={"mailto:" + resourcesJSON.contactUs.email}
                                                            rel="noreferrer" target="_blank">
                                                    <Email fontSize={"large"}/>
                                                </IconButton>
                                            </div>

                                            <Typography variant='h6'>
                                                {resourcesJSON.contactUs.text}
                                            </Typography>

                                            <Grid container direction="row"
                                                  justifyContent="space-evenly"
                                                  alignItems="center"
                                                  spacing={1}
                                                  sx={{width: "100%", height: "100%"}}
                                                  key={"Contact Us"}
                                            >

                                                {resourcesJSON.contactUs.socialMedia.map((app) => <Grid item xs={4}
                                                                                                        key={app.name}>
                                                    <a rel="noreferrer noopener" target="_blank"
                                                       href={app.link}>
                                                        <img src={app.imagePath} alt={"Angelbotics " + app.name}
                                                             width="100%"
                                                             height="auto" style={{
                                                            marginLeft: "25%", borderRadius: 0, marginTop: 10
                                                        }}/>
                                                    </a>
                                                </Grid>)}

                                            </Grid>

                                        </div>
                                    </Card>
                                </motion.div>
                            </Grid>

                            {resourcesJSON.resourceCards.map((card) =>

                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card.name}>
                                    <motion.div
                                        style={{height: "100%"}}
                                        initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                                        whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                                        viewport={{margin: "100px", once: !bigScreen}}
                                    >
                                        <Card sx={{height: 650, width: "100%", boxShadow: 2, borderRadius: 5}}>

                                            <div style={{
                                                alignItems: "center",
                                                width: "90%",
                                                height: "auto",
                                                marginLeft: '5%',
                                                marginTop: 20
                                            }}>


                                                <div style={{
                                                    display: "flex",
                                                    width: "100%",
                                                    height: "auto",
                                                    justifyContent: "space-evenly",
                                                    alignItems: "flex-start"
                                                }}>
                                                    <Typography variant={'h4'}>
                                                        {card.name}
                                                    </Typography>
                                                    <IconButton href={card.url} rel="noreferrer" target="_blank">
                                                        <Outbound fontSize={"large"}/>
                                                    </IconButton>
                                                </div>

                                                <Typography variant='h6'>
                                                    {card.description}
                                                </Typography>

                                                <a rel="noreferrer noopener" target="_blank"
                                                   href={card.url}>
                                                    <img src={card.imagePath} alt={card.name + " Logo"} width="50%"
                                                         height="auto"
                                                         style={{marginLeft: "25%", borderRadius: 15, marginTop: 10}}/>
                                                </a>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </Grid>)}

                        </Grid>

                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: "90%",
                        height: 600,
                        marginLeft: '2.5%',
                        marginTop: 0
                    }}>
                        <motion.div
                            style={{height: "100%", width: "100%"}}
                            initial={{opacity: 0, translateY: "0%", scale: "20%"}}
                            whileInView={{opacity: 1, translateY: "0%", scale: "100%"}}
                            viewport={{margin: "100px", once: !bigScreen}}
                        >
                            <Card sx={{height: 550, width: "100%", m: 3, boxShadow: 2, borderRadius: 5}}>

                                <div style={{
                                    alignItems: "center", width: "90%", height: "auto", marginLeft: '5%', marginTop: 20
                                }}>

                                    <ReactEmbeddedGoogleCalendar publicUrl={resourcesJSON.googleCalendarPublicLink}
                                                                 height='500px' width="100%"/>

                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </Paper>


            </div>

        </div>

    );
}
