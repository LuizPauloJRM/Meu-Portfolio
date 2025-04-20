import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-scroll"; // Importa o Link do react-scroll

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
    margin: "0 10px",
    cursor: "pointer",
    fontSize: "18px", // Tamanho da fonte
    fontWeight: "bold", // Peso da fonte
    transition: "all 0.3s ease", // Transição suave
    "&:hover": {
        color: theme.palette.secondary.main, // Cor ao passar o mouse
        transform: "scale(1.1)", // Aumenta o tamanho
    },
}));

const NavBar = () => {
    return (
        <AppBar position="static">
            <StyledToolbar>
                <StyledLink to="about" smooth={true} duration={500}>
                    About
                </StyledLink>
                <StyledLink to="skills" smooth={true} duration={500}>
                    Skills
                </StyledLink>
                <StyledLink to="projects" smooth={true} duration={500}>
                    Projects
                </StyledLink>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;