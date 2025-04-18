import { Container, Grid, styled, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/LuizPaulo.jpeg";

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        padding: "20px",

    }));

    const StyledImg = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%",
        marginTop: "20px",
    }));

    return (
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src={Avatar} alt="Luiz Paulo" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="primary" variant="h3">
                            Luiz Paulo
                        </Typography>
                        <Typography color="primary" variant="h1">
                            Desenvolvedor FullStack
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <Button variant="contained" color="primary">
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Button variant="outlined" color="primary">
                                    Contato
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;