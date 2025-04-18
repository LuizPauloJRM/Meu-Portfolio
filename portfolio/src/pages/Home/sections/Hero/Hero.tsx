import { Container, Grid, styled, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/LuizPaulo.jpeg";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: "20px",
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        maxWidth: "200px",
        borderRadius: "15px",
    }));

    return (
        <StyledHero>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <StyledImg src={Avatar} alt="Luiz Paulo" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography
                            style={{ color: "#fff" }}
                            variant="h3"
                            gutterBottom
                        >
                            Luiz Paulo
                        </Typography>
                        <Typography
                            style={{ color: "#fff" }}
                            variant="h2"
                            gutterBottom
                        >
                            Desenvolvedor FullStack
                        </Typography>
                        <Grid container spacing={2} justifyContent="flex-start">
                            <Grid item xs={12} md={6}>
                                <Button variant="contained" color="secondary" fullWidth>
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button variant="outlined" color="secondary" fullWidth>
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