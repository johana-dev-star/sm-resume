import { createResumeTemplate } from '../TemplateBase';

export const ResumeAcademicPurple = createResumeTemplate({
    fonts: {
        body: 'Times-Roman',
        title: 'Times-Bold',
        baseSize: 11,
        nameSize: 24,
    },
    sectionTitles: {
        summary: 'Summary',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
    },
    headerLayout: 'center',
});

export default ResumeAcademicPurple;
