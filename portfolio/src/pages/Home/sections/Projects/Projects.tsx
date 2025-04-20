import { Container, Typography, styled, Grid, Card, CardContent, Button } from "@mui/material";

const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.light, // Cor de fundo
    padding: "50px 20px",
    textAlign: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
    textAlign: "left",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
    borderRadius: "10px", // Bordas arredondadas
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)", // Efeito de escala no hover
    },
}));

const Projects = () => {
    const projects = [
        {
            title: "...",
            description: "...",
            technologies: ["React", "Node.js", "MongoDB"],
            codeLink: "https://github.com/seu-usuario/ecommerce-app",
            projectLink: "https://ecommerce-app-demo.com",
        },
        {
            title: "...",
            description: "...",
            technologies: ["Angular", "Firebase"],
            codeLink: "https://github.com/seu-usuario/task-manager",
            projectLink: "https://task-manager-demo.com",
        },
        {
            title: "Portfolio Website",
            description: "Meu portfólio pessoal, criado com React e Material-UI.",
            technologies: ["React", "Material-UI"],
            codeLink: "https://github.com/LuizPauloJRM/Meu-Portfolio/tree/main/portfolio",
            projectLink: "https://portfolio-demo.com",
        },
    ];

    return (
        <StyledProjects id="projects">
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={4} style={{ marginTop: "30px" }}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledCard>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {project.description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" paragraph>
                                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                fullWidth
                                            >
                                                View Code
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                href={project.projectLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                fullWidth
                                            >
                                                View Project
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;