import { Container, Typography, styled, Grid, Paper } from "@mui/material";

const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "50px 20px",
    textAlign: "center",
}));

const SkillItem = styled(Paper)(({ theme }) => ({
    padding: "10px 20px",
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.text.primary,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
    borderRadius: "8px", // Bordas arredondadas
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)", // Efeito de escala no hover
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    },
}));

const Skills = () => {
    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "HTML",
        "CSS",
        "Git",
        "Material-UI",
        "Angular",
    ];

    return (
        <StyledSkills id="skills">
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Skills
                </Typography>
                <Grid container spacing={3} style={{ marginTop: "30px" }}>
                    {skills.map((skill, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <SkillItem>{skill}</SkillItem>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;