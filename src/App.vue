<template>
    <div id="app">
        <header>
            <h1>
                <b-avatar variant="info" src="https://avatars0.githubusercontent.com/u/12834181?s=460&u=c3aecf429bcaeacd34a340af6542f0e06dd1120d&v=4" size="4rem"></b-avatar>

                <span class="header-title" itemprop="name">Alex Ovsyannikov</span>
            </h1>
        </header>

        <b-container>
            <b-row>
                <b-col xl="9" lg="9" md="12" sm="12" xs="12">
                    <article>
                        <p class="lead-paragraph" itemprop="description">
                            Tulsa-based software developer. I love creating fluid frontend & backend applications. I also dabble in game development. View my <a target="_blank" href="https://linkedin.com/in/alex-ovsyannikov">LinkedIn</a> profile, or check out some of my experiments on <a target="_blank" href="https://github.com/alphaxaon">GitHub</a>.
                        </p>
                    </article>

                    <hr class="my-4">

                    <div class="projects">
                        <h2>Latest Projects</h2>

                        <b-card-group deck>
                            <b-card
                                title="Involved Talent"
                                img-src="assets/images/involved-talent.jpg"
                                img-alt="Involved Talent Banner"
                                img-top
                                tag="project"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                    Scientifically grounded, analytically based, AI-driven toolset that directly connects involvement and talent data to business outcomes.
                                </b-card-text>

                                <b-button target="_blank" href="https://involvedtalent.com" variant="primary">View Project</b-button>
                            </b-card>

                            <b-card
                                title="AOE Science"
                                img-src="assets/images/aoe-science.jpg"
                                img-alt="AOE Science Banner"
                                img-top
                                tag="project"
                                style="max-width: 20rem;"
                                class="mb-2"
                            >
                                <b-card-text>
                                    Better employees through science & analytics – since 2004. We offer a unique suite of assessments that help companies hire, develop, and retain great talent.
                                </b-card-text>

                                <b-button target="_blank" href="https://aoescience.com" variant="primary">View Project</b-button>
                            </b-card>
                        </b-card-group>
                    </div>

                    <aside>
                        <h4>Other Places I Hang Around (Sometimes)</h4>
                        <nav>
                            <span><a target="_blank" href="https://linkedin.com/in/alex-ovsyannikov">LinkedIn</a></span> 
                            <span><a target="_blank" href="https://github.com/alphaxaon">GitHub</a></span> 
                            <span><a target="_blank" href="https://twitter.com/alphaxaon">Twitter</a></span>
                        </nav>
                    </aside>
                </b-col>
            </b-row>
        </b-container>

        <footer>
            © Alex Ovsyannikov {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'App',
        components: {}
    }
</script>