import { Container, Typography, styled, Grid, Card, CardContent } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // Ícone de experiência
import SchoolIcon from "@mui/icons-material/School"; // Ícone de educação

const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "50px 20px",
    textAlign: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
    textAlign: "center",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
    borderRadius: "10px", // Bordas arredondadas
    maxWidth: "300px",
}));

const About = () => {
    return (
        <StyledAbout id="about">
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    Sobre Mim
                </Typography>
                {/* Seção de Cards */}
                <Grid container spacing={4} style={{ marginTop: "30px" }}>
                    <Grid item xs={12} md={6}>
                        <StyledCard>
                            <CardContent>
                                <WorkIcon fontSize="large" color="primary" />
                                <Typography variant="h6" gutterBottom>
                                    Experience
                                </Typography>
                                <Typography variant="body2">
                                    3+ years of experience in web development, focusing on React, Node.js, and Python.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledCard>
                            <CardContent>
                                <SchoolIcon fontSize="large" color="primary" />
                                <Typography variant="h6" gutterBottom>
                                    Education
                                </Typography>
                                <Typography variant="body2">
                                    Bachelor's Degree in Systems Analysis and Development with over 380 hours of courses in JavaScript, Python, and PHP.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>


                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={8}>

                            <Typography variant="body1" paragraph>
                                Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e desenvolvedor de software full-stack. Trabalho com uma ampla gama de tecnologias, como <strong>Python</strong>, <strong>Java</strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>Angular</strong>. Busco constantemente aprimorar minhas habilidades, focando em desenvolver soluções eficazes para o back-end e front-end e explorando novas ferramentas para entregar produtos de alta qualidade.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Trabalho com desenvolvimento de softwares desde <strong>2022</strong> usando várias linguagens, bibliotecas e frameworks diferentes. Das linguagens de programação que trabalhei, me especializei em <strong>JavaScript</strong>, <strong>Python</strong> e <strong>PHP</strong>. Tenho cursos ministrados nessas linguagens somando mais de <strong>380 horas</strong> de conteúdo até o momento.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Minha missão é construir aplicações que impactem positivamente a vida das pessoas, combinando tecnologia e criatividade. Com mais de 3 anos de experiência, já trabalhei em projetos que vão desde sites institucionais até sistemas complexos de gerenciamento.
                            </Typography>
                        </Grid>
                    </Grid>


                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;