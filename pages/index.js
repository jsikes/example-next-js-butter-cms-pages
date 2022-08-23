import Link from 'next/link';

const Welcome = () => (
    <>
        <h3>Using Butter CMS to populate static page content with a Next.js app</h3>

        <Link href="/about">
            <a>About</a>
        </Link>
    </>
);

export default Welcome;
