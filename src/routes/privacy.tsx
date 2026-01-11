// interface PrivacyProps {
//   // define props here
// }

import { Seo } from "@/seo/seo";

// props: PrivacyProps
export default function Privacy() {
    return (
        <div>
            <Seo
                title="Privacy"
                description="Privacy page..."
                noIndex
            />
            <p>Privacy Policy</p>
        </div>
    );
}