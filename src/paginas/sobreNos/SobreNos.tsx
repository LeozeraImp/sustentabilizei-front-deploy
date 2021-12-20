import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import "./SobreNos.css";


function SobreNos() {

    return (
        <>
        <Grid item xs={12}>
                    <Box padding={5}>
                        <Typography variant="h3" align="center" className="sus-titulo">Sobre Nossa Historia</Typography>
                    </Box>
                </Grid>

     <Grid item xs={12}>
                    <Box display="flex" justifyContent="center"padding={2}>
                    <Box className="holder">
                    </Box>
                        <Box className="fontes" >
                            <Typography variant="h5" align="center" color="primary" className="sus-titulo">Danilo</Typography>
                        </Box>
                        <Box className="fontes.a">
                            <Typography variant="h6" > A SE INTERESSAR PELA SUSTENTABILIDADE
Por meio de parcerias , a SUSTENTABILIZEI Quer fazer parte dessa próxima geração e influenciar a conhecer o que há de mais moderno na área de sustentabilidade. Nossas parcerias alcançam e educam ao redor do mundo Trabalhar com Redes-Sociais para tornar a sustentabilidade parte de nosso futuro coletivo é uma iniciativa que promove a prosperidade e assegura nosso futuro.</Typography>
                        </Box>

                    </Box>
                </Grid>

    </>

    );
}

export default SobreNos;