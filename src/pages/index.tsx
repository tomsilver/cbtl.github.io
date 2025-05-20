import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"

import {FaArrowUp, FaFilePdf, FaVideo} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

// Add type declaration for image imports
declare module "*.png" {
    const content: string;
    export default content;
}

import overviewImage from "../images/ctbl_overview.png"
import simResultsImage from "../images/sim-results.png"

const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text-3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC = ({children, website, firstAuthor, affiliations, lastAuthor}) => {
    return (
        <span className="text-center inline-block">
                <a href={website} target={"_blank"}
                   className="font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
            </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}

const ActionLink: React.FC = ({children, url, icon}) => {
    return (
        <span className={"text-center inline-block my-3.5 sm:my-2 mx-2"}>
            <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"}
               className="text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl">
                <span className="align-middle inline-flex justify-center mr-0.25">{icon}&nbsp;</span>
                <span>{children}</span>
            </a>
        </span>
    )
}

const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC = ({children}) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}

export const Head: HeadFC = () => <title>Coloring Between the Lines: Personalization in the Null Space of Planning Constraints</title>

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    <Title>
                        <span className="font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500">
                            Coloring Between the Lines:
                        </span>
                        &nbsp;
                        <span className="text-stone-800">Personalization in the Null Space of Planning Constraints</span>
                    </Title>

                    <Venue website={"https://www.corl2023.org/"}>
                        <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-rose-500
                        hover:transition-all">Under Review</span>
                    </Venue>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={"https://tomsilver.github.io/"} affiliations={"1"}>Tom Silver</Author>
                        <Author website={"https://www.cs.cornell.edu/~rkjenamani/"} affiliations={"1"}>Rajat Kumar Jenamani</Author>
                        <Author website={"https://www.ziangliu.com/"} affiliations={"1"}>Ziang Liu</Author>
                        <Author website={"https://benzen-3.github.io/"} affiliations={"1"}>Ben Dodson</Author>
                        <Author website={"https://sites.google.com/site/tapomayukh"} affiliations={"1"} lastAuthor={true}>Tapomayukh Bhattacharjee</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={"https://www.cornell.edu/"} number={"1"}>Cornell University</Affiliation>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://drive.google.com/file/d/19KCKW1aTvFG_L4B3cQWT8rhfd7RQPnOf/view?usp=sharing"} icon={<FaFilePdf/>}>Paper</ActionLink>
                        <ActionLink url={"https://www.youtube.com/watch?v=wO6ZrYnDJkU"} icon={<FaVideo/>}>Video</ActionLink>
                        <ActionLink url={"https://github.com/tomsilver/multitask-personalization"} icon={<AiFillGithub/>}>Code</ActionLink>
                    </p>
                </Article>

                <Article>
                    {/* Overview Image */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Overview</h2>
                    <div className="!mb-4">
                        <img src={overviewImage} alt="CBTL Overview" className="w-full rounded-lg"/>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center text-xl !mt-2 !mb-4 font-medium max-w-[100%] md:max-w-[75%]">
                            We propose a method for continual, flexible, active, and safe robot personalization.
                        </p>
                    </div>

                    {/* YouTube Video */}
                    <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wO6ZrYnDJkU"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="rounded-lg"></iframe>
                    </div>

                    {/* Abstract */}
                    <div className="!mt-8">
                        <Abstract>
                            Generalist robots must personalize in-the-wild to meet the diverse needs and preferences of long-term users. How can we enable flexible personalization without sacrificing safety or competency? This paper proposes Coloring Between the Lines (CBTL), a method for personalization that exploits the null space of constraint satisfaction problems (CSPs) used in robot planning. CBTL begins with a CSP generator that ensures safe and competent behavior, then incrementally personalizes behavior by learning parameterized constraints from online interaction. By quantifying uncertainty and leveraging the compositionality of planning constraints, CBTL achieves sample-efficient adaptation without environment resets. We evaluate CBTL in (1) three diverse simulation environments; (2) a web-based user study; and (3) a real-robot assisted feeding system, finding that CBTL consistently achieves more effective personalization with fewer interactions than baselines. Our results demonstrate that CBTL provides a unified and practical approach for continual, flexible, active, and safe robot personalization.
                        </Abstract>
                    </div>

                    <h2 className="font-semibold border-b-[1px] !mt-4 !mb-1">Simulation Environments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 !mt-1 !mb-3">
                        <div className="text-center pb-3">
                            <div className="aspect-w-16 aspect-h-9">
                                <video 
                                    autoPlay 
                                    muted 
                                    playsInline 
                                    loop 
                                    className="w-full h-full object-cover rounded-lg"
                                    preload="auto"
                                >
                                    <source src="/videos/cooking.mov" type="video/quicktime"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="h-2"></div>
                            <p className="text-base font-medium text-gray-800 mt-6">Cooking</p>
                        </div>
                        <div className="text-center pb-3">
                            <div className="aspect-w-16 aspect-h-9">
                                <video 
                                    autoPlay 
                                    muted 
                                    playsInline 
                                    loop 
                                    className="w-full h-full object-cover rounded-lg"
                                    preload="auto"
                                >
                                    <source src="/videos/cleaning.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="h-2"></div>
                            <p className="text-base font-medium text-gray-800 mt-6">Cleaning</p>
                        </div>
                        <div className="text-center pb-3">
                            <div className="aspect-w-16 aspect-h-9">
                                <video 
                                    autoPlay 
                                    muted 
                                    playsInline 
                                    loop 
                                    className="w-full h-full object-cover rounded-lg"
                                    preload="auto"
                                >
                                    <source src="/videos/books.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="h-2"></div>
                            <p className="text-base font-medium text-gray-800 mt-6">Books</p>
                        </div>
                    </div>

                    <h2 className="font-semibold border-b-[1px] !mt-8 !mb-4">Simulation Results</h2>
                    <div className="!mb-6">
                        <img src={simResultsImage} alt="Simulation Results" className="w-full rounded-lg"/>
                    </div>

                    <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-gradient-to-r from-cyan-100 via-purple-100 to-rose-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800">{
                                `@article{silver2025coloring,
    title={Coloring Between the Lines: Personalization in the Null Space of Planning Constraints},
    author={Silver, Tom and Jenamani, Rajat Kumar and Liu, Ziang and Dodson, Ben and Bhattacharjee, Tapomayukh},
    journal={Under Review},
    year={2025}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible"
                                    onClick={() => {
                                        // Select all text in the code block
                                        let bib = document.getElementById("citation-bib");
                                        let range = document.createRange();
                                        let selection = window.getSelection();

                                        // Check not null
                                        if (bib == null || range == null || selection == null) {
                                            return;
                                        }
                                        range.selectNode(bib);
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }}>
                                <LuTextSelect/>
                            </button>
                        </div>
                    </div>
                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-blue-500" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                                <span
                                    className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp/>&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                    <div className="mt-2.5 text-center text-sm text-gray-500">
                        Website template based on the&nbsp;
                        <a href="https://github.com/f3rm/f3rm.github.io" target="_blank" className="text-gray-600 hover:text-gray-800">
                            F3RM Website Template
                        </a>
                    </div>
                </footer>
            </Main>
        </>
    )
}

export default IndexPage
