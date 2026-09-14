import {
    FUNNEL_STEPS,
    RECRUITMENT_PROCESS_INTRO,
    RECRUITMENT_PROCESS_TITLE,
} from "../../constants";

const ProcessSection = () => {
    return (
        <section
            className='mt-16 sm:mt-20'
            aria-labelledby='recruitment-process-heading'
        >
            <h2
                id='recruitment-process-heading'
                className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
            >
                {RECRUITMENT_PROCESS_TITLE}
            </h2>
            <p className='mt-3 max-w-2xl font-montserrat text-base text-ls-muted'>
                {RECRUITMENT_PROCESS_INTRO}
            </p>

            <ol className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
                {FUNNEL_STEPS.map((item) => (
                    <li
                        key={item.step}
                        className='flex flex-col rounded-2xl border border-ls-rule bg-ls-surface px-5 py-6 '
                    >
                        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-ls-text font-montserrat text-sm font-bold text-ls-bg'>
                            {item.step}
                        </span>
                        <h3 className='mt-4 font-montserrat text-base font-bold text-ls-text'>
                            {item.label}
                        </h3>
                        <p className='mt-2 font-montserrat text-sm leading-relaxed text-ls-muted'>
                            {item.description}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default ProcessSection;
