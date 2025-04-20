import { Container, styled, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "10px 0", // Footer compacto
    textAlign: "center",
}));

const Footer = () => {
    return (
        <StyledFooter>
            <Container maxWidth="sm">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <IconButton
                            href="https://github.com/LuizPauloJRM"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            href="https://www.linkedin.com/in/luiz-medeiros-38480b26a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            href="https://wa.me/5561992105813"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                        >
                            <WhatsAppIcon />
                        </IconButton>
                    </Grid>
                </Grid>

            </Container>

        </StyledFooter>
    );
};

export default Footer;