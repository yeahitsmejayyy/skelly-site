// interface TermsProps {
//   // define props here
// }

import { Seo } from "@/seo/seo";

// props: TermsProps
export default function Terms() {
    return (
        <div>
            <Seo
                title="Terms"
                description="Terms page..."
                noIndex
            />
            <p>Terms and Conditions</p>
        </div>
    );
}