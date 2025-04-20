import { Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/LuizPaulo.jpeg";
import StyledButtonComponent from "../../../../components/StyledButton/StyledButton"; // Import do botão estilizado

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "100px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0px",
        },
    }));

    const StyledImg = styled("img")(() => ({
        width: "90%",
        maxWidth: "200px",
        borderRadius: "15px",
        border: "1px solid #fff",
    }));

    const handleDownloadCV = () => {
        alert("Download do CV iniciado!");
    };

    const handleContact = () => {
        alert("Entrando em contato!");
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
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
                                <StyledButtonComponent onClick={handleDownloadCV}>
                                    Download CV
                                </StyledButtonComponent>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <StyledButtonComponent onClick={handleContact}>
                                    Contato
                                </StyledButtonComponent>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;