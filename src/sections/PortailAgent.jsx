import {
    ChatBubbleLeftRightIcon,
    ClipboardDocumentCheckIcon,
    CubeIcon,
    MapIcon,
    ShieldCheckIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
    portailAgentClosingParagraphs,
    portailAgentForYouItems,
    portailAgentForYouTitle,
    portailAgentIntroParagraphs,
    portailAgentNeverItems,
    portailAgentNeverTitle,
    portailAgentStats,
} from "../constants";

const iconMap = {
    users: UserGroupIcon,
    map: MapIcon,
    shield: ShieldCheckIcon,
    chat: ChatBubbleLeftRightIcon,
    cube: CubeIcon,
    clipboard: ClipboardDocumentCheckIcon,
};

const PortailAgent = () => {
    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {portailAgentIntroParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>

            <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6'>
                {portailAgentStats.map(({ value, label }) => (
                    <li
                        key={label}
                        className='rounded-2xl border border-ls-rule bg-ls-fill px-5 py-6 text-center '
                    >
                        <p className='font-montserrat text-2xl font-extrabold text-ls-accent sm:text-3xl'>
                            {value}
                        </p>
                        <p className='mt-2 font-montserrat text-sm leading-snug text-ls-muted'>
                            {label}
                        </p>
                    </li>
                ))}
            </ul>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='portail-agent-for-you-heading'
            >
                <h2
                    id='portail-agent-for-you-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {portailAgentForYouTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {portailAgentForYouItems.map(({ iconId, title, description }) => {
                        const Icon = iconMap[iconId];
                        return (
                            <li
                                key={title}
                                className='flex flex-col rounded-3xl border border-ls-rule bg-ls-surface px-6 py-7 '
                            >
                                <Icon
                                    className='h-6 w-6 text-ls-accent'
                                    aria-hidden='true'
                                />
                                <h3 className='mt-5 font-montserrat text-lg font-bold text-ls-text'>
                                    {title}
                                </h3>
                                <p className='mt-3 font-montserrat text-sm leading-relaxed text-ls-muted'>
                                    {description}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='portail-agent-never-heading'
            >
                <h2
                    id='portail-agent-never-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {portailAgentNeverTitle}
                </h2>
                <ul className='mt-8 space-y-5'>
                    {portailAgentNeverItems.map(({ title, description }) => (
                        <li
                            key={title}
                            className='rounded-2xl border border-ls-rule bg-ls-fill px-5 py-5 sm:px-6 sm:py-6'
                        >
                            <h3 className='font-montserrat text-base font-bold text-ls-text sm:text-lg'>
                                {title}
                            </h3>
                            <p className='mt-2 font-montserrat text-sm leading-relaxed text-ls-muted'>
                                {description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <div className='mt-14 space-y-4 border-t border-ls-rule pt-10'>
                {portailAgentClosingParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PortailAgent;
