export default function EducationInfo({ handleFormChange }) {
    return (
        <section>
            <h3>Education Experience</h3>
            <form>
                <label htmlFor="school-name">
                    <span>School Name</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="school-name"
                    />
                </label>
                <label htmlFor="title-of-study">
                    <span>Title Of Study</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="title-of-study"
                    />
                </label>
                <label htmlFor="date-of-study-end">
                    <span>Date Of finishing degree/course</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="month"
                        id="date-of-study-end"
                    />
                </label>
                <label htmlFor="about-school">
                    <span>Description</span>
                    <textarea
                        style={{ resize: "vertical" }}
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="about-school"
                        cols="30"
                        rows="4"
                    ></textarea>
                </label>
            </form>
        </section>
    );
}
