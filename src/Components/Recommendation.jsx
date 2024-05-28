import Card from "../Pages/Shared/Card";
import SectionTitle from "./SectionTItles/SectionTitle";

const Recommendation = () => {
    return (
        <section className="mb-12">
            <SectionTitle
                heading="chef recommends"
                subHeading="---Should Try---"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
                {/* <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>

        </section>
    );
};

export default Recommendation;