export default function ExperienceInfo({ handleFormChange }) {
    return (
        <section>
            <h3>Practical Experiences</h3>
            <form>
                <label htmlFor="company-name">
                    <span>Company Name</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="company-name"
                    />
                </label>
                <label htmlFor="position-title">
                    <span>Position Title</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="position-title"
                    />
                </label>
                <label htmlFor="skills">
                    <span>Skills Used</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="skills"
                    />
                </label>
                <label htmlFor="date-of-start-of-company">
                    <span>Date of Joining</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="date"
                        id="date-of-start-of-company"
                    />
                </label>
                <label htmlFor="date-of-end-of-company">
                    <span>Date of leaving</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="date"
                        id="date-of-end-of-company"
                    />
                </label>
                <label htmlFor="about-experience">
                    <span>Description</span>
                    <textarea
                        style={{ resize: "vertical" }}
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="about-experience"
                        cols="30"
                        rows="4"
                    ></textarea>
                </label>
            </form>
        </section>
    );
}
