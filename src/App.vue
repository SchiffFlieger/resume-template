<template>
    <div id="app">
        <v-app>
            <resume-header :infos="header_infos"/>

            <div id="page">
                <div id="sidebar" class="elevation-4">
                    <resume-objective :objective="objective"/>
                    <v-spacer style="min-height: 175px;"/>
                    <resume-skills :skills="skills"/>
                    <v-spacer style="min-height: 175px;"/>
                    <resume-contact :contact_details="contact_details" :github="github"/>
                </div>

                <div id="main-content">
                    <resume-card icon="work" :items="works">Work Experience</resume-card>
                    <resume-card icon="school" :items="educations">Education</resume-card>
                    <resume-card icon="widgets" :items="others">Other</resume-card>
                </div>
            </div>

        </v-app>
    </div>
</template>

<script>
    import ResumeObjective from "@/components/resume-objective";
    import ResumeCard from "@/components/resume-card";
    import ResumeSkills from "@/components/resume-skills";
    import ResumeContact from "@/components/resume-contact";
    import ResumeHeader from "@/components/resume-header";
    import * as cfg from './config';

    export default {
        components: {ResumeHeader, ResumeContact, ResumeSkills, ResumeObjective, ResumeCard},
        data() {
            return cfg.create_data();
        }
    }
</script>

<style lang="scss">
    @import '~vuetify/dist/vuetify.min.css';

    #app {
        font-family: 'Roboto', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 1123px;
        width: 794px;
    }

    html {
        // overflow-y: hidden;
    }

    body, html, #app {
        height: 100%;
    }

    #page {
        display: flex;
        background: #e0e0e0;
    }

    #sidebar {
        flex-basis: auto;
        width: 270px;
        height: 100%;
        background: #FFF;
    }

    #main-content {
        flex: 1;
        margin: 12px;
    }

    .v-subheader {
        height: 24px;
    }
</style>
