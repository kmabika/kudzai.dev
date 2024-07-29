import { GetStaticProps } from 'next';
import PageLayout from 'layout/PageLayout'
import {MetaInfoProps, HeroBannerType, ProjectsType} from "types/interfaces";
import {META_INFO, HERO_BANNER_TEXTS} from "assets/content";
import getAllProjects from 'graphql/getProjects';
import Hero from "components/Hero";
import ProjectsBanner from "components/Projects";


interface Props{
    metaInfo: MetaInfoProps;
    heroTexts: HeroBannerType;
    projects: ProjectsType;
}


const HomePage = ({metaInfo, heroTexts, projects} : Props) => {
  return (
    <PageLayout
    image={metaInfo?.previewImage}
    title={metaInfo?.mainTitle}
    description={metaInfo?.description}>
    <Hero headline={heroTexts?.headline} paragraph={heroTexts?.paragraph} />
{/*     <ProjectsBanner projects={projects}/> */}
    </PageLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const {projects} = await getAllProjects();
  return {
    props: {
      metaInfo: META_INFO,
      heroTexts: HERO_BANNER_TEXTS,
      projects,
    },
  };
};

export default HomePage;
